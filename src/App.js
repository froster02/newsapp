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
  setProgress = (progress) => {
    this.setState({ progress: progress });
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar title="News App" aboutText="About" />

          <LoadingBar
            color="#f11946"
            progress={10}
          />
          <Routes>
            <Route exact path="/" element={<News key="business" country="us" category="business" />} />
            <Route exact path="/business" element={<News key="business" country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" country="us" category="entertainment" />} />
            <Route exact path="/health" element={<News key="health" country="us" category="health" />} />
            <Route exact path="/sports" element={<News key="sports" country="in" category="sports" setProgress={(progress) => {/* handle progress */ }} />} />
            <Route exact path="/science" element={<News key="science" country="us" category="science" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
