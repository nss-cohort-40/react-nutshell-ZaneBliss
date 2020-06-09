import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div>
            <Link to='/login'>
                <button type='submit'>Enter</button>
            </Link>
        </div>
    )
}

export default Welcome