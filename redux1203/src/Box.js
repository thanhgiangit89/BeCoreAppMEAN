import React, { Component } from 'react';
import { connect } from 'react-redux'

class BoxComponent extends Component {
    render() {
        return (
            <div>
                <h3>Value: {this.props.value}</h3>
                <button onClick={() => this.props.dispatch({ type: 'INCREASE' })}>Increase</button>
                <button onClick={() => this.props.dispatch({ type: 'DESCREASE' })}>Descrease</button>
                <button onClick={() => this.props.dispatch({ type: 'RESET' })}>Reset</button>
            </div>
        )
    }
}

export const Box = connect(state => ({ value: state.value }))(BoxComponent);