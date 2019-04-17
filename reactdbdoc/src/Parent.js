import React, { Component } from 'react';
import { Child } from './Child';

export class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 1 };
        this.onIncrease = this.onIncrease.bind(this);
        this.onDescrease = this.onDescrease.bind(this);
        this.onReset = this.onReset.bind(this);
    }
    onIncrease() {
        const { count } = this.state;
        this.setState({ count: count + 1 });
    }

    onDescrease() {
        const { count } = this.state;
        this.setState({ count: count - 1 });
    }

    onReset() {
        this.setState({ count: 0 });
    }

    render() {
        return (
            <div>
                <h3>Count: {this.state.count}</h3>
                <br />
                <Child
                    onIncrease={this.onIncrease}
                    onDescrease={this.onDescrease}
                    onReset={this.onReset}
                />
            </div>
        )
    }
}