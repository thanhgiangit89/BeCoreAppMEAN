import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Word } from './Word';
// import { ListWord } from './ListWord';
// function show() {
//   alert(123);
// }
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 10 };
  }
  render() {
    // const word1 = { en: 'One', vn: 'Mot', isMemorized: true };
    // const word2 = { en: 'Two', vn: 'Hai', isMemorized: false };
    // const words = ['NodeJs', 'ReactJs', 'Angular'];
    // return (
    //   <div className="App">
    //     <ListWord title="English - Vietnamese" isShowForm={false} />
    //     <button className="btn btn-success" onClick={show}>
    //       Show Text
    //     </button>
    //     <Word wordInfo={word1} />
    //     <Word wordInfo={word2} />
    //     {words.map(w => <p>{w}</p>)}
    //   </div>
    // );

    return (
      <div className="container">
        <h3>Value: {this.state.num}</h3>
        <button className="btn btn-success">Increase</button>
        <button className="btn btn-warning">Descrease</button>
      </div>
    );
  }
}

export default App;
