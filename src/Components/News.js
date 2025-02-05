import React, { useState, useEffect } from 'react';
import NewsItems from './NewsItems';
import PropTypes from 'prop-types';

/**
 * @component News
 * @description Fetches and displays news articles with pagination
 * 
 * @state {Array} articles - Array of news articles
 * @state {boolean} loading - Loading state for fetch operations
 * @state {number} page - Current page number for pagination
 * @state {number} totalResults - Total number of available articles
 * 
 * @prop {string} country - Country code for news articles (default: 'us')
 * @prop {string} category - Category of news to fetch (default: 'sports')
 * @prop {Function} setProgress - Function to update loading progress
 * @prop {string} apiKey - API key for news service
 * @prop {number} pageSize - Number of articles per page (default: 9)
 * 
 * @function updateNews - Fetches news articles from the API
 * @function handlePrev - Handles pagination to previous page
 * @function handleNext - Handles pagination to next page
 * 
 * @returns {JSX.Element} News component with article grid and pagination
 */

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = async () => {
        try {
            props.setProgress(10);
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
            setLoading(true);
            props.setProgress(30);
            let data = await fetch(url);
            props.setProgress(50);
            let parsedData = await data.json();
            props.setProgress(70);

            setArticles(parsedData.articles);
            setTotalResults(parsedData.totalResults);
            setLoading(false);
            props.setProgress(100);
        } catch (error) {
            console.error(error);
            setLoading(false);
            props.setProgress(100);
        }
    }

    useEffect(() => {
        updateNews();
    }, []);

    const handlePrev = async () => {
        setPage(page - 1);
        updateNews();
    }

    const handleNext = async () => {
        setPage(page + 1);
        updateNews();
    }

    return (
        <div className='container my-3'>
            <div>
                <h1 className='text-center' style={{ marginTop: '90px', marginBottom: '30px' }}>Top Headlines</h1>
                <div className='row mb-4'>
                    {articles.map((element) => (
                        <div className='col-md-4' key={element.url}>
                            <NewsItems
                                title={element.title}
                                description={element.description}
                                imageUrl={element.urlToImage}
                                newsUrl={element.url}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className='container d-flex justify-content-between'>
                <button disabled={page <= 1} type='button' className='btn btn-dark' onClick={handlePrev}>&larr; Previous</button>
                <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type='button' className='btn btn-dark' onClick={handleNext}>Next &rarr;</button>
            </div>
        </div>
    )
}

News.defaultProps = {
    country: 'us',
    category: 'sports',
    setProgress: () => { },
    apiKey: ''
}

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    setProgress: PropTypes.func,
    apiKey: PropTypes.string
}

export default News;