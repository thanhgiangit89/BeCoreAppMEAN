import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Word } from './Word';
import { ListWord } from './ListWord';
function show(){
  alert(123);
}
class App extends Component {
  render() {
    const word1 = { en: 'One', vn: 'Mot', isMemorized: true };
    const word2 = { en: 'Two', vn: 'Hai', isMemorized: false };
    const words = ['NodeJs', 'ReactJs', 'Angular'];
    return (
      <div className="App">
        <ListWord title="English - Vietnamese" isShowForm={false} />
        <button className="btn btn-success" onClick={show}>
          Show Text
        </button>
        <Word wordInfo={word1} />
        <Word wordInfo={word2} />
        {words.map(w => <p>{w}</p>)}
      </div>
    );
  }
}

export default App;
