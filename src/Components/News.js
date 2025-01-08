import react, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            error: null
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=921d4f9aabd54b3296d169898f503e84";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log("API Response:", parsedData); // Debug log
        this.setState({ articles: parsedData.articles });
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>Top Headlines</h2>
                <div className='row'>
                    {this.state.articles.map((element) => {
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
            </div>
        )
    }
}

export default News