import React, { Component } from 'react'
import propTypes from 'prop-types'
import NewsItems from './NewsItems'

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