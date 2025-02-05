/**
 * @component NavBar
 * @description Navigation bar with category links
 * 
 * @prop {string} title - Title displayed in the navbar
 * @prop {string} aboutText - Text for about section
 * 
 * @returns {JSX.Element} Navigation bar with category links
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// converting class based component to functional component
const navbar = () => {

    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/" style={{ marginLeft: '20px' }}>NEWS App</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business">business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/entertainment">entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/health">health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports">sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/science">science</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div >
        </div >
    )
}

export default navbar
