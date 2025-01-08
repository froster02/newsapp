import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let { title, description, newsUrl } = this.props;
        return (
            <div className="card h-100">
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title" style={{ height: "48px", overflow: "hidden" }}>{title}</h5>
                    <p className="card-text" style={{ height: "120px", overflow: "hidden" }}>{description}</p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark mt-auto">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItems
