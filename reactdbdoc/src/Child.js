import React from 'react';

export const Child = ({ onIncrease, onDescrease, onReset }) => (
    <div>
        <button className="btn btn-success" onClick={onIncrease}>Increase</button>
        <button className="btn btn-warning" onClick={onDescrease}>Descrease</button>
        <button className="btn btn-danger" onClick={onReset}>Reset</button>
    </div>
);