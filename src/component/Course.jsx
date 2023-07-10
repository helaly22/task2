import React, { Component } from 'react'
import Center from './Center'
import Details from './Details'

export default class Course extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'React course',
            level:"Advanced",
            price:'$1095/month',
        }
    }
  render() {
    return (
      <>
      <h1>Course</h1>
      <br />
      <p>{this.state.name}</p>
      <p>{this.state.price}</p>
      <p>{this.state.level}</p>
      <hr />
      <Center/>
      <Details/>
      </>
    )
  }
}
