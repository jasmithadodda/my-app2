//rce
import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
        super(props)
      console.log('constructor B')

      }

      componentWillMount(){
          console.log('componentWillmount  B')

      }

      componentDidMount(){
          console.log('componentDidMount  B')
      }

      componentWillUnmount(){
          console.log('componentWillUnmount B')
      }


  render() {
    return (
      <div>LifeCycleB</div>
    )
  }
}

export default LifeCycleB