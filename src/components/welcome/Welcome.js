import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div>
            <Link to='/login'>
                <button type='submit'>Login</button>
            </Link>
            <Link to='/register'>
                <button type='submit'>Register</button>
            </Link>
        </div>
    )
}

export default Welcome