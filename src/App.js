import React, { Component } from 'react'
import Navbar from './Components/NavBar.js'
import './App.css';
import News from './Components/News.js';
import LoadingBar from "react-top-loading-bar";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;

  // componentDidMount() {
  //   console.log("API Key:", this.apiKey); // this to debug
  // }

  state = {
    progress: 0,
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  }
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Navbar title="News App" aboutText="About" />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" country="us" category="business" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" country="us" category="entertainment" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" country="us" category="health" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" country="in" category="sports" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" country="us" category="science" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
