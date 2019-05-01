import React from 'react';
import { connect } from 'react-redux';

const WordFilterComponent = ({ filterStatus, dispatch }) => (
    <div>
        <br />
        <select
            className="form-control"
            style={{ width: '200px' }}
            value={filterStatus}
            onChange={evt => dispatch({ type: 'SET_FILTER_STATUS', filterStatus: evt.target.value })}
        >
            <option value="SHOW_ALL">SHOW ALL</option>
            <option value="SHOW_FORGOT">SHOW FORGOT</option>
            <option value="SHOW_MEMORIZED">SHOW MEMORIZED</option>
        </select>
    </div>
)
const mapStates = state => ({ filterStatus: state.filterStatus });

export const WordFilter = connect(mapStates)(WordFilterComponent);