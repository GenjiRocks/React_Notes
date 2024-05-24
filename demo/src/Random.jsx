import React, { Component } from 'react'

export default class Random extends Component {

  constructor(props){
      super(props)
      console.log(props);
      this.state = {cname:'Alto'}
    
  }

  change(data){
    this.setState({cname:data})
  }

  render() {
    return (
      <div>Random
        <h1>Username is {this.props.uname}</h1>
        <p>car is : {this.state.cname}</p>
        <button className='btn btn-success' onClick={()=>{this.change('Swift')}}>Click</button>
      </div>
    )
  }
}
