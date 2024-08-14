import React, { Component } from 'react'

export class ClassClick extends Component {
 myClickHandler() {
    console.log('button clickme was clicked')
}

  render() {
    return (
      <div>
        <button onClick={this.myClickHandler}>click me</button>
      </div>
    )
  }
}

export default ClassClick