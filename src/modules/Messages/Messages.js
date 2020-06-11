import React, { useState, useEffect } from 'react'
import { handleFieldChange } from '../helper'
import APIManager from '../APIManager'
import MessageList from '../Messages/MessagesList'

const Messages = props => {
    const [messages, setMessages] = useState([])
    const [isUser, setIsUser] = useState(JSON.parse(sessionStorage.user).userId)
    const [editing, setEditing] = useState(false)
    const [message, setMessage] = useState({ userId: null, message: '' })

    const createMessage = e => {
        e.preventDefault()
        if (message.message === '') {
            alert('Please enter a message')
        } else {
            message.userId = JSON.parse(sessionStorage.user).userId
            APIManager.post('messages', message).then(getMessages())
            setMessage({ userId: null, message: '' })
        }
    }

    const getMessages = () => {
        return APIManager.getMessages().then(messages => setMessages(messages))
    }

    useEffect(() => {
        getMessages()
    }, [])


    return (
        <>
            <div>
                <input type='text' id='message' value={message.message} onChange={e => handleFieldChange(e, message, setMessage)}></input>
                <button onClick={createMessage}>New message</button>
                <MessageList messages={messages} getMessages={getMessages} isUser={isUser}/>
            </div>
        </>
    )
}

export default Messages