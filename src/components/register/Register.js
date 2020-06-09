import React from 'react'

const Register = props => {
    return (
        <div className='wrapper'>
            <div className='login'>
                <div className='username'>
                    <label>Username</label>
                    <input type='text'></input>
                </div>
                <div className='email'>
                    <label>Email</label>
                    <input type='text'></input>
                </div>
                <div className='password'>
                    <label>Password</label>
                    <input type='text'></input>
                </div>
            </div>
            <button onClick={() => { props.setHasUser(true) }}>Submit</button>
        </div>
    )
}

export default Register