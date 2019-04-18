import React, { Component } from 'react';

export class WordForm extends Component {
    constructor(props) {
        super(props);
        this.state = { txtEn: '', txtVn: '' };
        this.addWord = this.addWord.bind(this);
    }

    addWord() {
        const { txtEn, txtVn } = this.state;
        this.props.onAddWord(txtEn, txtVn);
        this.setState({ txtEn: '', txtVn: '' });
    }

    render() {
        const { shouldShowForm, onToggleShouldShowForm } = this.props;
        if (!shouldShowForm) return (
            <button className="btn btn-success" onClick={onToggleShouldShowForm}>
                Add Word
            </button >
        );

        return (
            <div className="form-group" style={{ width: '200px' }}>
                <input
                    placeholder="English"
                    className="form-control"
                    onChange={evt => this.setState({ txtEn: evt.target.value })}
                    value={this.state.txtEn}
                />
                <br />
                <input
                    placeholder="Vietnamese"
                    className="form-control"
                    onChange={evt => this.setState({ txtVn: evt.target.value })}
                    value={this.state.txtVn}
                />
                <br />
                <div className="btn-container">
                    <button className="btn btn-success" onClick={this.addWord}>
                        Add word
                      </button>
                    <button className="btn btn-danger" onClick={onToggleShouldShowForm}>
                        Cancel
                      </button>
                </div>
            </div>
        );
    }
}