import React, { Component } from 'react'
import propTypes from 'prop-types'
import NewsItems from './NewsItems'

/**
 * @class News
 * @extends Component
 * @description A React component that displays news articles with pagination functionality
 * 
 * @property {Object} state - Component's state object
 * @property {Array} state.articles - Array of news articles
 * @property {boolean} state.loading - Loading state flag
 * @property {number} state.page - Current page number
 * @property {number} state.pageSize - Number of articles per page
 * @property {number} state.totalResults - Total number of available articles
 * @property {string|null} state.error - Error message if any
 * 
 * @method componentDidMount - Fetches initial news articles when component mounts
 * @method handlePrev - Handles pagination for previous page
 * @method handleNext - Handles pagination for next page
 * @method render - Renders the news articles in a grid layout with pagination controls
 * 
 * @requires NewsItems - Child component to display individual news items
 * @requires React.Component
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
    }

    static propTypes = {
        country: propTypes.string,
        category: propTypes.string,
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=921d4f9aabd54b3296d169898f503e84&pageSize=${this.state.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles || [],
            totalResults: parsedData.totalResults
        });
    }

    handlePrev = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=921d4f9aabd54b3296d169898f503e84&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles || []
        });
    }

    handleNext = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=921d4f9aabd54b3296d169898f503e84&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles || []
            });
        }
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