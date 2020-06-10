import React, { useState, useEffect } from 'react'
import APIManager from '../../modules/APIManager'

const NewsCard = props => {
    const [article, setArticle] = useState({ title: '', synopsis: '', link: '', userId: null })

    const editArticle = e => {
        if (e.charCode === 13) {
            e.preventDefault()
            let editedArticle = {
                id: props.article.id,
                title: props.article.title,
                synopsis: props.article.synopsis,
                link: props.article.link,
                userId: props.article.userId
            }
            APIManager.update('news', editedArticle).then(props.getArticles)
        }
    }

    const deleteNews = e => {
        APIManager.delete('news', props.article.id).then(props.getArticles)
    }

    useEffect(() => {

    }, [article])

    return (
        <div className='news'>
            <div className='news-content'>
                <p>{props.article.title}</p>
                <p>{props.article.synopsis}</p>
                <a href={props.article.link}>{props.article.link}</a>
                <br></br>
                 <button onClick={deleteNews}>Delete article</button>
            </div>
        </div>
    )
}

export default NewsCard