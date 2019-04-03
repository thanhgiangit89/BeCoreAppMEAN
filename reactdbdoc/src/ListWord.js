import React, { Component } from 'react';
//statefull component
export class ListWord extends Component {
    getFormHtml() {
        if (!this.props.isShowForm) return '';
        return (
            <div style={{ display: this.props.isShowForm ? 'initial' : 'none' }}>
                <div className="form-group">
                    <label>En: </label>
                    <input className="form-control"></input>
                </div>
                <div className="form-group">
                    <label>Vn: </label>
                    <input className="form-control"></input>
                </div>
                <br />
                <button class="btn btn-success">Add word</button>
            </div>);
    }

    render() {
        return (
            <div className="container">
                <h3>{this.props.title}</h3>
                List Word
                {this.getFormHtml()}
            </div>
        );
    }
}