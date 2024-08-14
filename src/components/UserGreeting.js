import React, { Component } from 'react'

export class UserGreeting  extends Component {

    constructor(props) {
      super(props)

      this.state = {
         isLoggedIn: true
      }
    }


  render() {

        // if (this.state.isLoggedIn) {
        //     return <div>welcome jasmitha</div>
        // }
        // else {
        //     return <div>welcome guest</div>
        // }

        // (this.state.isLoggedIn)?
        //   <div>welcome abdul</div>:
        //    <div>welcome guest</div>

        return  (this.state.isLoggedIn) &&  //shortcircuit operator
        <div>welcome jasmitha</div>

  }
}

export default UserGreeting 