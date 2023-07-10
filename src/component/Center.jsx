import React, { Component } from 'react'

export default class Center extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:"Center description",
            place:"Senior Steps"
        }
    }
  render() {
    return (
      <>
            <h1>{this.state.name}</h1>
            <br />
            <p>{this.state.place}</p>
            <hr/>
      </>
    )
  }
}
