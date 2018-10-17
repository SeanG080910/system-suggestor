import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as Fonts from './components/fonts';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">
        Welcome to the Lutron System Suggestor Tool!
      </h1>
    </header>
    <Fonts.Heading1>This is a Heading1</Fonts.Heading1>
    <Fonts.Heading2>This is a Heading2</Fonts.Heading2>
    <Fonts.Heading3>This is a Heading3</Fonts.Heading3>
    <Fonts.Paragraph>This is a Paragraph</Fonts.Paragraph>
    <Fonts.RedParagraph>This is a RedParagraph</Fonts.RedParagraph>
  </div>
);

export default App;
