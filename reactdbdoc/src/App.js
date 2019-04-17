import React, { Component } from 'react';
// import logo from './logo.svg';
// import { Parent } from './Parent';
import { WordForm } from './wordForm';
import './App.css';

const WORDS = [
  { _id: 'abc1', en: 'One', vn: 'Mot', isMemorized: true },
  { _id: 'abc2', en: 'Two', vn: 'Hai', isMemorized: false },
  { _id: 'abc3', en: 'Three', vn: 'Ba', isMemorized: false },
  { _id: 'abc4', en: 'Four', vn: 'Bon', isMemorized: true },
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { words: WORDS, shouldShowForm: false }
    this.onAddWord = this.onAddWord.bind(this);
    this.onToggleShouldShowForm = this.onToggleShouldShowForm.bind(this);
  }

  removeWord(_id) {
    const newWords = this.state.words.filter(w => w._id !== _id);
    this.setState({ words: newWords })
  }

  onAddWord(txtEn, txtVn) {
    const { words } = this.state;
    const newWord = { _id: Math.random(), en: txtEn, vn: txtVn, isMemorized: false };
    const newArray = [newWord].concat(words);
    this.setState({ words: newArray, shouldShowForm: false })
  }

  toggleMemorized(id) {
    const newWords = this.state.words.map(word => {
      if (word._id !== id) return word;

      const { en, vn, _id, isMemorized } = word;
      return { en, vn, _id, isMemorized: !isMemorized };
    });

    this.setState({ words: newWords })
  }
  onToggleShouldShowForm() {
    const { shouldShowForm } = this.state;
    this.setState({ shouldShowForm: !shouldShowForm });
  }

  genList(word) {
    return (
      <div className="word" key={word._id}>
        <div className="word-container">
          <h3 className="text-success">{word.en}</h3>
          <h3 className="text-danger">
            {word.isMemorized ? '----' : word.vn}
          </h3>
        </div>
        <div className="btn-container">
          <button className="btn btn-success" onClick={() => this.toggleMemorized(word._id)} >
            {word.isMemorized ? 'Forgot' : 'Memorized'}
          </button>
          <button className="btn btn-warning" onClick={() => this.removeWord(word._id)}>
            Remove
          </button>
        </div>
      </div>
    );
  }


  render() {
    return (
      <div className="App container">
        <WordForm
          shouldShowForm={this.state.shouldShowForm}
          onToggleShouldShowForm={this.onToggleShouldShowForm}
          onAddWord={this.onAddWord}
        />
        {this.state.words.map(word => this.genList(word))}
      </div>
    );

    // return <Parent />;
  }
}

export default App;
