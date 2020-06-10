import React, { useState } from 'react'
import { handleFieldChange } from '../../modules/helper'

const Login = props => {
    const [credentials, setCredentials] = useState({ username: '', password: '' })

    const handleLogin = e => {
        if (credentials.username === '' || credentials.password === '') {
            alert('Please enter all fields.')
        } else {
            e.preventDefault()
            sessionStorage.setItem('credentials',
                JSON.stringify(credentials)
            );
            props.setHasUser(true)
            props.history.push('/')
        }
    }

    return (
        <div className='wrapper'>
            <div className='login'>
                <form>
                    <h1>Login to Nutshell</h1>
                    <div className='username'>
                        <label>Username</label>
                        <input type='text' id='username' onChange={e => { handleFieldChange(e, credentials, setCredentials) }}></input>
                    </div>
                    <div className='password'>
                        <label>Password</label>
                        <input type='password' id='password' onChange={e => { handleFieldChange(e, credentials, setCredentials) }}></input>
                    </div>
                    <button onClick={handleLogin}>Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default Login 