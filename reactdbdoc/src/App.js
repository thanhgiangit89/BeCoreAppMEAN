import React, { Component } from 'react';
// import { Parent } from './Parent';
import { Word } from './Word';
import { WordForm } from './WordForm';
import { WordFilter } from './WordFilter';
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
    this.state = { words: WORDS, shouldShowForm: false, filterStatus: 'SHOW_MEMORIZED' }
    this.onAddWord = this.onAddWord.bind(this);
    this.onToggleShouldShowForm = this.onToggleShouldShowForm.bind(this);
    this.onToggleMemorized = this.onToggleMemorized.bind(this);
    this.onChangeFilterStatus = this.onChangeFilterStatus.bind(this);
  }

  onRemoveWord(_id) {
    const newWords = this.state.words.filter(w => w._id !== _id);
    this.setState({ words: newWords })
  }

  onAddWord(txtEn, txtVn) {
    const { words } = this.state;
    const newWord = { _id: Math.random(), en: txtEn, vn: txtVn, isMemorized: false };
    const newArray = [newWord].concat(words);
    this.setState({ words: newArray, shouldShowForm: false })
  }

  onToggleMemorized(id) {
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

  onChangeFilterStatus(filterStatus) {
    this.setState({ filterStatus });
  }

  genListWords() {
    const { filterStatus, words } = this.state;

    const filteredWords = words
      .filter(w => {
        if (filterStatus === 'SHOW_ALL') return true;
        if (filterStatus === 'SHOW_FORGOT') return !w.isMemorized;
        return w.isMemorized;
      });

    return filteredWords.map(word => (
      <Word key={word._id}
        wordInfo={word}
        onRemoveWord={this.onRemoveWord}
        onToggleMemorized={this.onToggleMemorized}
      />))
  }


  render() {
    const { shouldShowForm, filterStatus } = this.state;
    return (
      <div className="App container">
        <WordForm
          shouldShowForm={shouldShowForm}
          onToggleShouldShowForm={this.onToggleShouldShowForm}
          onAddWord={this.onAddWord}
        />
        <WordFilter
          filterStatus={filterStatus}
          onChangeFilterStatus={this.onChangeFilterStatus}
        />
        {this.genListWords()}
      </div>
    );

    // return <Parent />;
  }
}

export default App;
