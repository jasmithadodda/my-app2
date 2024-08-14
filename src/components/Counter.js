import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            count: 0
        }
    }

incrementCount(){
    //this.state.count=this.state.count+1
    // this.setState(
    //     {count: this.state.count+1}, //setstate works async
    //     () => {console.log("this state is "+this.state.count)}
    // )
    this.setState(prevState => ({ //(updates in webpage)
        count: prevState.count + 1
    })) 
    this.setState({ //callback (updates in console)
        count:this.state.count+1
    }, () => {console.log("this state is "+this.state.count)})
    
}
incrementFive(){
    this.incrementCount()
    this.incrementCount()
    this.incrementCount()
    this.incrementCount()
    this.incrementCount()
}

//painting the screen 
render() {
    return (
      <div>
        <div>Current count is {this.state.count}</div>
        <button onClick={()=>this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter
