import React from 'react';
//stateless component
//functional component
export const Word = ({ wordInfo, onRemoveWord, onToggleMemorized }) => (
    <div className="word" key={wordInfo._id}>
        <div className="word-container">
            <h3 className="text-success">{wordInfo.en}</h3>
            <h3 className="text-danger">
                {wordInfo.isMemorized ? '----' : wordInfo.vn}
            </h3>
        </div>
        <div className="btn-container">
            <button className="btn btn-success" onClick={() => onToggleMemorized(wordInfo._id)}>
                {wordInfo.isMemorized ? 'Forgot' : 'Memorized'}
            </button>
            <button className="btn btn-warning" onClick={() => onRemoveWord(wordInfo._id)}>
                Remove
          </button>
        </div>
    </div>
)
// export default Word;