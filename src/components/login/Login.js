import React, { useState } from 'react'
import { handleFieldChange } from '../../modules/helper'
import APIManager from '../../modules/APIManager'

const Login = props => {
    const [user, setUser] = useState({ username: '', password: '', userId: null})

    const handleLogin = e => {
        if (user.username === '' || user.password === '') {
            alert('Please enter all fields.')
        } else {
            e.preventDefault()
            APIManager.getUser(user.username, user.password).then(e => {
                user.userId = e[0].id
                if (e.length === 0) {
                    alert('No user found.')
                } else if (e.length > 0) {
                    sessionStorage.setItem('user',
                        JSON.stringify(user)
                    );
                    props.setHasUser(true)
                    props.history.push('/')
                }
            })
        }
    }


    return (
        <div className='wrapper'>
            <div className='login'>
                <form>
                    <h1>Login to Nutshell</h1>
                    <div className='username'>
                        <label>Username</label>
                        <input type='text' id='username' onChange={e => { handleFieldChange(e, user, setUser) }}></input>
                    </div>
                    <div className='password'>
                        <label>Password</label>
                        <input type='password' id='password' onChange={e => { handleFieldChange(e, user, setUser) }}></input>
                    </div>
                    <button onClick={handleLogin}>Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default Login 