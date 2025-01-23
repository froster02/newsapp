import React, { Component } from 'react'
import propTypes from 'prop-types'
import NewsItems from './NewsItems'

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
export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            pageSize: 9,
            totalResults: 0,
            error: null
        }
    }

    static defaultProps = {
        country: 'us',
        category: 'sports',
        setProgress: () => { },
        apiKey: ''
    }

    static propTypes = {
        country: propTypes.string,
        category: propTypes.string,
        setProgress: propTypes.func,
        apiKey: propTypes.string
    }

    async updateNews() {
        try {
            this.props.setProgress(10);
            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.state.pageSize}`;
            this.setState({ loading: true });
            this.props.setProgress(30);
            let data = await fetch(url);
            this.props.setProgress(50);
            let parsedData = await data.json();
            this.props.setProgress(70);
            this.setState({
                articles: parsedData.articles || [],
                totalResults: parsedData.totalResults,
                loading: false
            });
            this.props.setProgress(100);
        } catch (error) {
            this.setState({ error: error.message, loading: false });
            this.props.setProgress(100);
        }
    }

    async componentDidMount() {
        await this.updateNews();
    }

    handlePrev = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }

    handleNext = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center'>Top Headlines</h1>
                <div className='row mb-4'>
                    {this.state.articles && this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                            <NewsItems
                                title={element.title}
                                description={element.description}
                                imageUrl={element.urlToImage}
                                newsUrl={element.url}
                            />
                        </div>
                    })}
                </div>
                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} type='button' className='btn btn-dark' onClick={this.handlePrev}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)} type='button' className='btn btn-dark' onClick={this.handleNext}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News