import React, { Component } from 'react';
import { Child } from './Child';

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
                <br />
                <Child />
            </div>
        )
    }
}