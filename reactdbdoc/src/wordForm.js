import React, { Component } from 'react';

export class WordForm extends Component {
    constructor(props) {
        super(props);
        this.state = { txtEn: '', txtVn: '' };
    }

    render() {
        if (!this.props.shouldShowForm) return (
            <button className="btn btn-success" >
                Add Word
            </button >
        );

        return (
            <div className="form-group" style={{ width: '200px' }}>
                <input
                    placeholder="English"
                    className="form-control"
                    onChange={evt => this.setState({ txtEn: evt.target.value })}
                />
                <br />
                <input
                    placeholder="Vietnamese"
                    className="form-control"
                    onChange={evt => this.setState({ txtVn: evt.target.value })}
                />
                <br />
                <div className="btn-container">
                    <button className="btn btn-success">
                        Add word
                      </button>
                    <button className="btn btn-danger">
                        Cancel
                      </button>
                </div>
            </div>
        );
    }
}