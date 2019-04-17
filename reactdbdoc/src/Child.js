import React from 'react';

export const Child = (props) => (
    <div>
        <button className="btn btn-success" onClick={props.onIncrease}>Increase</button>
        <button className="btn btn-warning" onClick={props.onDescrease}>Descrease</button>
        <button className="btn btn-danger" onClick={props.onReset}>Reset</button>
    </div>
);