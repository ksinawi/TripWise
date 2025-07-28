import robot from '../images/chatbot.png';

const ChatMessages = ({ chat }) => {

    return (
        <div className={`chat-row ${chat.role === 'model' ? 'bot' : 'user'}`}>
            {chat.role === 'model' && (
                <img src={robot} className='header-img' alt="AI" />
            )}
            <div className={`chat-message ${chat.role === 'model' ? 'bot' : 'user'}`}>{chat.text}</div>
        </div>
    )
}

export default ChatMessages;