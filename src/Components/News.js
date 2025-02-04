import React, { useState, useEffect } from 'react';
import NewsItems from './NewsItems';
import PropTypes from 'prop-types';

/**
 * News component that fetches and displays news articles.
 * @extends Component
 * @class
 * 
 * @property {Object} state - Component state
 * @property {Array} state.articles - Array of news articles
 * @property {boolean} state.loading - Loading state indicator
 * @property {number} state.page - Current page number
 * @property {number} state.pageSize - Number of articles per page
 * @property {number} state.totalResults - Total number of available articles
 * @property {string|null} state.error - Error message if fetch fails
 * 
 * @property {Object} defaultProps - Default properties
 * @property {string} defaultProps.country - Default country code for news ('us')
 * @property {string} defaultProps.category - Default news category ('sports')
 * @property {Function} defaultProps.setProgress - Progress indicator function
 * @property {string} defaultProps.apiKey - API key for news service
 * 
 * @property {Object} propTypes - Component prop types
 * @property {string} propTypes.country - Country code for news articles
 * @property {string} propTypes.category - Category of news articles
 * @property {Function} propTypes.setProgress - Function to update progress bar
 * @property {string} propTypes.apiKey - API key for authentication
 * 
 * @method updateNews - Fetches news articles from the API
 * @method componentDidMount - Lifecycle method that calls updateNews on mount
 * @method handlePrev - Handles pagination to previous page
 * @method handleNext - Handles pagination to next page
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
        // eslint-disable-next-line
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
            <h1 className='text-center'>Top Headlines</h1>
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