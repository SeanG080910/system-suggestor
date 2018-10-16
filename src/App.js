import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from './button';

class App extends Component {
  state = {
    title: '',
    currentQuestion: 0,
  }
  updateHeading = this.updateHeading.bind(this);
  

  updateHeading() {
    this.setState({title: 'Let the quiz begin'});
  }

  goToNextQuestion() {
    this.setState({currentQuestion: this.state.currentQuestion++})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            {this.state.title === '' ? 'Welcome to the Lutron System Suggestor Tool!' : this.state.title}
          </h1>
        </header>
        <Button bob={this.goToNextQuestion}>Click to begin!</Button>
      </div>
    );
  }
}

export default App;
