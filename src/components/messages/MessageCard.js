import React from 'react'

const MessageCard = props => {
    return (
        <div>
            <div>
                <p>{props.message.user.username}: <span>{props.message.message}</span></p>
                <button hidden={props.isUser === props.message.userId}>Edit message</button>
            </div>
        </div>
    )
}

export default MessageCard