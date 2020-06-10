import React, { useState, useEffect } from 'react'
import { handleFieldChange } from '../../modules/helper'
import APIManager from '../../modules/APIManager'

const Register = props => {
    const [user, setUser] = useState({ username: '', password: '' })
    const createUser = () => {
        APIManager.post('users', user).then(user => {
            sessionStorage.setItem('user',
                JSON.stringify(user)
            )
        }
        )
    }

    return (
        <div className='wrapper'>
            <div className='login'>
                <h1>Register for Nutshell</h1>
                <div className='username'>
                    <label>Username</label>
                    <input type='text' id='username' onChange={e => handleFieldChange(e, user, setUser)}></input>
                </div>
                <div className='password'>
                    <label>Password</label>
                    <input type='password' id='password' onChange={e => handleFieldChange(e, user, setUser)}></input>
                </div>
            </div>
            <button onClick={() => {
                createUser()
                props.setHasUser(true)
            }}>Submit</button>
        </div>
    )
}

export default Register