import React from 'react'
import NewsCard from '../../components/news/NewsCard'

const NewsList = props => { 
    return (
        <div className='news'>
            {props.news.map(article => (
                <NewsCard
                    key={article.id}
                    article={article}
                    getArticles={props.getArticles}
                    {...props}
                />
            ))}
        </div>
    )
}

export default NewsList