//rce
import React, { Component } from 'react'
import LifeCycleB from '../LifeCycleB'

export class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    console.log('constructor a')

    }

    componentWillMount(){
        console.log('componentWillmount  A')

    }

    componentDidMount(){
        console.log('componentDidMount  a')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount a')
    }


  render() {
    console.log('render a')
    return (
      <div>
      LifeCycleA
      <LifeCycleB/>
      </div>
    )
  }
}

export default LifeCycleA
