import React, { Component } from 'react'
// import { firebaseDb } from 'firebase'
import firebase from 'firebase/app'
import 'firebase/database'

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      checked: false
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
        description: '',
        checked: false
      })
    console.log('value set')
  }
  render() {
    return (
      <div>
        <input
          value={this.state.text}
          onChange={e => this.setState({ text: e.target.value })}
        />
        <button onClick={this.onClick}>Submit</button>
      </div>
    )
  }
}
