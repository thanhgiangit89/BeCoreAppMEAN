import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Word } from './Word';
// import { ListWord } from './ListWord';
// function show() {
//   alert(123);
// }

const words = [
  { _id: 'abc1', en: 'One', vn: 'Mot', isMemorized: true },
  { _id: 'abc2', en: 'Two', vn: 'Hai', isMemorized: false },
  { _id: 'abc3', en: 'Three', vn: 'Ba', isMemorized: false },
  { _id: 'abc4', en: 'Four', vn: 'Bon', isMemorized: true },
];
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { num: 10 };
  // }
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
      // <div className="container">
      //   <h3>Value: {this.state.num}</h3>
      //   <button className="btn btn-success"
      //     onClick={() => this.setState({ num: this.state.num + 1 })}>
      //     Increase
      //   </button>
      //   <button className="btn btn-warning"
      //     onClick={() => this.setState({ num: this.state.num - 1 })}>
      //     Descrease
      //   </button>
      // </div>
      <div className="App container">
        <div>
          <div className="word">
            <div className="word-container">
              <h3 className="text-success">One</h3>
              <h3 className="text-danger">mot</h3>
            </div>
            <div className="btn-container">
              <button className="btn btn-success">Forgot</button>
              <button className="btn btn-warning">Remove</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
