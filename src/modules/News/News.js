import React, { useState, useEffect } from 'react'
import APIManager from '../APIManager'
import { handleFieldChange } from '../helper'
import NewsList from '../News/NewsList'

const News = props => {
    const [showInput, setShowInput] = useState(false);
    const [news, setNews] = useState([])
    const [piece, setPiece] = useState({ title: '', synopsis: '', link: '', userId: null })

    const createArticle = (e) => {
        e.preventDefault()
        if (piece.name === '' || piece.synopsis === '' || piece.link === '') {
            alert('Please enter all fields.')
        } else {
            piece.userId = JSON.parse(sessionStorage.user).userId
            piece.timestamp = new Date().toUTCString()
            APIManager.post('news', piece).then(getArticles())
            setPiece({ title: '', synopsis: '', link: '', userId: null })
        }
    }

    const getArticles = () => {
        return APIManager.getNews('news').then(news => setNews(news))
    }

    useEffect(() => {
        getArticles()
    }, [])

    return (
        <>
            <div>
                <button onClick={() => setShowInput(!showInput)}>New article</button>
                {showInput && <div className='input'>
                    <h1>Enter an article</h1>
                    <label>News title</label>
                    <input type='text' id='title' value={piece.title} onChange={e => handleFieldChange(e, piece, setPiece)}></input>
                    <label>Synopsis</label>
                    <input type='text' id='synopsis' value={piece.synopsis} onChange={e => handleFieldChange(e, piece, setPiece)}></input>
                    <label>URL</label>
                    <input type='text' id='link' value={piece.link} onChange={e => handleFieldChange(e, piece, setPiece)}></input>
                    <button type='submit' onClick={e => {
                        setShowInput(!showInput)
                        createArticle(e)
                    }}>Save article</button>
                </div>}
            </div>
            <div>
                <NewsList news={news} getArticles={getArticles} />
            </div>
        </>
    )
}

export default News