import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Word } from './Word';
import { ListWord } from './ListWord';

class App extends Component {
  render() {
    const word1 = { en: 'One', vn: 'Mot' };
    const word2 = { en: 'Two', vn: 'Hai' };
    return (
      <div className="App">
        <ListWord title="English - Vietnamese" />
        <Word wordInfo={word1} />
        <Word wordInfo={word2} />
      </div>
    );
  }
}

export default App;
