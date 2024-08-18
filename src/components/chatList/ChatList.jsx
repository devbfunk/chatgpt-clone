import './chatList.css'
import { Link } from 'react-router-dom'


const ChatList = () => {
    return (
        <div className='chatList'>
            <span className="title">DASHBOARD</span>
            <Link to="/dashboard">Create a new Chat</Link>
            <Link to="/dashboard">Explore Lama AI</Link>
            <Link to="/dashboard">Contact</Link>
            <hr />
            <span className="title">
                RECENT CHATS
            </span>
            <div className="list">
                <Link to="/dashboard/chats/12">My Chat Title</Link>
                <Link to="/dashboard/chats/12">My Chat Title</Link>
                <Link to="/dashboard/chats/12">My Chat Title</Link>
                <Link to="/dashboard/chats/12">My Chat Title</Link>
                <Link to="/dashboard/chats/12">My Chat Title</Link>

            </div>
            <hr />
            <div className="upgrade">
                <img src="/logo.png" alt="" />
                <div className="texts">
                    <span>Update to Funk AI Pro</span>
                    <span>Get unlimited access to all features</span>
                </div>
            </div>
        </div>
    )
}

export default ChatList