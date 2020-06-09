import React from 'react'
import { Link } from 'react-router-dom'

const Login = props => {
    
    return (
        <div className='wrapper'>
            <div className='login'>
                <div className='username'>
                    <label>Username</label>
                    <input type='text'></input>
                </div>
                <div className='password'>
                    <label>Password</label>
                    <input type='text'></input>
                </div>
            </div>
            <button onClick={() => { props.setHasUser(true)}}>Login</button>
        </div>
    )
}

export default Login 