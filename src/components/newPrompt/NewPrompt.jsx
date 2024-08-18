import { IKImage } from "imagekitio-react";
import { useEffect, useRef, useState } from "react";
import Upload from "../upload/Upload";
import "./newPrompt.css";
import model from "../../lib/gemini";
import Markdown from "react-markdown";


const NewPrompt = () => {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState();
    const [img, setImg] = useState({
        isLoading: false,
        error: "",
        dbData: {},
        aiData: {},
    });

    const chat = model.startChat({
        history: [
            {
                role: "user",
                parts: [{ text: "Hello, I have 2 dogs in my house." }],
            },
            {
                role: "model",
                parts: [{ text: "Greate to meet you. What would you like to know?" }],
            },
        ],
        generationConfig: {
            // maxOutputTokens: 100,
        },
    });

    const endRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        endRef.current.scrollIntoView({ behavior: "smooth" });
    }, [question, answer, img.dbData]);

    const add = async (text) => {
        setQuestion(text);

        const result = await chat.sendMessageStream(Object.entries(img.aiData).length ? [img.aiData, text] : [text]);
        let accumulatedText = "";
        for await (const chunk of result.stream) {
            const chunkText = chunk.text();
            console.log(chunkText);
            accumulatedText += chunkText;
            setAnswer(accumulatedText);
        }
        setImg({ isLoading: false, error: "", dbData: {}, aiData: {} });
    };




    const handleSubmit = async (e) => {
        e.preventDefault();

        const text = e.target.text.value;
        if (!text) return;

        add(text);
    }

    return (
        <>
            {/* ADD NEW CHAT */}
            {img.isLoading && <div className="">Loading...</div>}
            {img.dbData?.filePath && (
                <IKImage
                    urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
                    path={img.dbData?.filePath}
                    height="300"
                    width="400"
                    transformation={[{ height: 300, width: 400 }]}
                    loading="lazy"
                    lqip={{ active: true, quality: 20 }}
                />
            )}

            {question && <div className='message user'>{question}</div>}
            {answer && <div className='message'><Markdown>{answer}</Markdown></div>}
            <div className="endChat" ref={endRef}></div>
            <form className="newForm" ref={formRef} onSubmit={handleSubmit}>
                <Upload setImg={setImg} />
                <input id="file" type="file" multiple={false} hidden />
                <input type="text" name="text" placeholder="Ask anything..." />
                <button>
                    <img src="/arrow.png" alt="" />
                </button>
            </form>
        </>
    );
};

export default NewPrompt;