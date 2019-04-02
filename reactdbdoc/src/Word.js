import React from 'react';
//stateless component
//functional component
export const Word = (props) => (
    <div>
        <h3>{props.wordInfo.en}</h3>
        <p>{props.wordInfo.vn}</p>
    </div>
)

// export default Word;