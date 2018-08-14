import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/database'

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      desc: ''
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    const newKey = firebase
      .database()
      .ref('todos')
      .push().key
    firebase
      .database()
      .ref(`todos/${newKey}`)
      .set({
        id: newKey,
        title: this.state.text,
        description: this.state.desc,
        checked: false
      })
    this.setState({ text: '', desc: '' })
  }
  render() {
    return (
      <div className="container">
        <div className="field">
          <label className="label">Title</label>
          <input
            className="input"
            value={this.state.text}
            onChange={e => this.setState({ text: e.target.value })}
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
          <button className="button is-link" onClick={this.onClick}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}
