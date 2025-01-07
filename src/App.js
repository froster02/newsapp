import React, { Component } from 'react'
import Navbar from './Components/NavBar.js'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="NewsMonkey" aboutText="About NewsMonkey" />
      </div>
    )
  }
}
