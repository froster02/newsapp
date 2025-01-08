import React, { Component } from 'react'
import Navbar from './Components/NavBar.js'
import './App.css';
import News from './Components/News.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="NewsMonkey" aboutText="About NewsMonkey" />
        <News />
      </div>
    )
  }
}
