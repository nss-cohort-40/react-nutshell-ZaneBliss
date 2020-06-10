import React, { useState } from 'react'
import APIManager from '../../modules/APIManager'
import { handleFieldChange } from '../../modules/helper'

const News = props => {
    const [showInput, setShowInput] = useState(false);
    const [news, setNews] = useState([])
    const [piece, setPiece] = useState({title: '', synopsis: '', link: ''})

    const createArticle = (e) => {
        e.preventDefault()
        if (piece.name === '' || piece.synopsis === '' || piece.link === '') {
            alert('Please enter all fields.')
        } else {
            APIManager.post('news', piece)
        }
    }

    return (
        <>
            <div>
                <button onClick={() => setShowInput(!showInput)}>New article</button>
                {showInput && <div className='input'>
                    <h1>Enter an article</h1>
                    <label>Article title</label>
                    <input type='text'></input>
                    <label>Synopsis</label>
                    <input type='text'></input>
                    <label>URL</label>
                    <input type='text'></input>
                    <button type='submit' onClick={createArticle}>Save articlec</button>
                </div>}
            </div>
        </>
    )
}

export default News