import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as Fonts from "./components/fonts";

class App extends Component {
  state = {
    title: "",
    currentQuestion: 0
  };
  updateHeading = this.updateHeading.bind(this);

  updateHeading() {
    this.setState({ title: "Let the quiz begin" });
  }

  goToNextQuestion() {
    this.setState({ currentQuestion: this.state.currentQuestion++ });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            {this.state.title === ""
              ? "Welcome to the Lutron System Suggestor Tool!"
              : this.state.title}
          </h1>
        </header>
        <Fonts.Heading1>This is a Heading1</Fonts.Heading1>
        <Fonts.Heading2>This is a Heading2</Fonts.Heading2>
        <Fonts.Heading3>This is a Heading3</Fonts.Heading3>
        <Fonts.Paragraph>This is a Paragraph</Fonts.Paragraph>
        <Fonts.RedParagraph>This is a RedParagraph</Fonts.RedParagraph>
      </div>
    );
  }
}

export default App;
