import React, { Component } from 'react'

export default class Random extends Component {

  constructor(props){
      super(props)
      console.log(props);
  }
  
  render() {
    return (
      <div>Random
        <h1>Username is {this.props.uname}</h1>
      </div>
    )
  }
}
