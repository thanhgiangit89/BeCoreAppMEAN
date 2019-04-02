import React, { Component } from 'react';
//statefull component
export class ListWord extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p></p>
            </div>
        );
    }
}