import React, { Component } from 'react';
import { firebaseDb } from './firebase';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: '',
    };
  }

  onClick = () => {
    firebaseDb.ref(`todos`).push({
      title: this.state.title,
      description: this.state.desc,
      checked: false,
    });
    this.setState({ title: '', desc: '' });
  };
  render() {
    const { title, desc } = this.state;
    return (
      <div className="container">
        <div className="field">
          <label className="label">Title</label>
          <input
            className="input"
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
          />
        </div>
        <div className="field">
          <label className="label">Description</label>
          <input
            className="input"
            value={this.state.desc}
            onChange={e => this.setState({ desc: e.target.value })}
          />
        </div>

        <div className="control">
          {title &&
            desc && (
              <button className="button is-link" onClick={this.onClick}>
                Submit
              </button>
            )}
        </div>
      </div>
    );
  }
}
