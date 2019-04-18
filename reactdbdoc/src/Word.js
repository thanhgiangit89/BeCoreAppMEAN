import React from 'react';
//stateless component
//functional component
export const Word = ({wordInfo}) => (
    <div className="word" key={wordInfo._id}>
        <div className="word-container">
            <h3 className="text-success">{wordInfo.en}</h3>
            <h3 className="text-danger">
                {wordInfo.isMemorized ? '----' : wordInfo.vn}
            </h3>
        </div>
        <div className="btn-container">
            <button className="btn btn-success" >
                {wordInfo.isMemorized ? 'Forgot' : 'Memorized'}
            </button>
            <button className="btn btn-warning" >
                Remove
          </button>
        </div>
    </div>
)

// export default Word;