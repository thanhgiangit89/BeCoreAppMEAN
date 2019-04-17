import React, { Component } from 'react';

export class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 1 };
        this.increase = this.increase.bind(this);
        this.descrease = this.descrease.bind(this);
        this.reset = this.reset.bind(this);
    }
    increase() {
        const { count } = this.state;
        this.setState({ count: count + 1 });
    }

    descrease() {
        const { count } = this.state;
        this.setState({ count: count - 1 });
    }

    reset() {
        this.setState({ count: 0 });
    }

    render() {
        return (
            <div>
                <h3>Count: {this.state.count}</h3>
                <button className="btn btn-success" onClick={this.increase}>Increase</button>
                <button className="btn btn-warning" onClick={this.descrease}>Descrease</button>
                <button className="btn btn-danger" onClick={this.reset}>Reset</button>
            </div>
        )
    }
}