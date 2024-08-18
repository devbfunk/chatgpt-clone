

import './chatPage.css';
import { useState } from "react";
import { IKImage } from 'imagekitio-react';
import NewPrompt from '../../components/newPrompt/NewPrompt';
const ChatPage = () => {

    const [img, setImg] = useState({
        isLoading: false,
        error: "",
        dbData: {},
        aiData: {},
    })

    return (
        <div className='chatPage'>
            <div className="wrapper">
                <div className="chat">
                    <div className="message">Test message AI</div>
                    <div className="message user">message from user</div>
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

                    <NewPrompt />

                </div>
            </div>
        </div>
    )
}

export default ChatPage