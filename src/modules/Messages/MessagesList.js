import React from 'react'
import MessageCard from '../../components/messages/MessageCard'
import '../../components/messages/MessageList.css'

const MessageList = props => {
    return (
        <div className='messages'>
            {props.messages.map(message => (
                <MessageCard
                    key={message.id}
                    message={message}
                    getMessages={props.getMessages}
                    isUser={props.isUser}
                    {...props}
                />
            ))}
        </div>
    )
}

export default MessageList