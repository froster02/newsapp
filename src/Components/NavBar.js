import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class navbar extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <Link className="navbar-brand" href="/" style={{ marginLeft: '20px' }}>NEWS App</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" href="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link disabled" href="/business">business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link disabled" href="/entertainment">entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link disabled" href="/health">health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link disabled" href="/sports">sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link disabled" href="/science">science</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div >
            </div >
        )
    }
}

export default navbar
