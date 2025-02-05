/**
 * @component NewsItems
 * @description Displays individual news article card
 * 
 * @prop {string} title - Title of the news article
 * @prop {string} description - Brief description of the article
 * @prop {string} imageUrl - URL of the article's image
 * @prop {string} newsUrl - URL to the full article
 * 
 * @returns {JSX.Element} News article card with image, title, and description
 */
import React from 'react'


const NewsItems = (props) => {
    let { title, description } = props;
    return (
        <div className="card h-100">
            <div className="card-body d-flex flex-column">
                <h5 className="card-title" style={{ height: "48px", overflow: "hidden" }}>{title}</h5>
                <p className="card-text" style={{ height: "120px", overflow: "hidden" }}>{description}</p>
            </div>
        </div>
    )
}

export default NewsItems
