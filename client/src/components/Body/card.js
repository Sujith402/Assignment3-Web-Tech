import React, { Component } from 'react'
import Logo from '../../imgs/dummy-logo.png'
import Golden_Retriever from '../../imgs/Golden-Retriever.jpg'
import lab from '../../imgs/lab.jpg'
import Pomerian from '../../imgs/pomerian.jpg'

export default class Card extends Component {
  render() {
    return (
      <div className='card'>
        <img src={Golden_Retriever}></img>
        <div className='content'>
          <ul>
            <li><b>Category:</b> {this.props.element.category}</li>
            <li><b>Age:</b> {this.props.element.age}</li>
          </ul>
          <p>{this.props.element.description}</p>
        </div>
        <div className='redirect'>
          <a href={this.props.element.url}>View more</a>
        </div>
      </div>
    )
  }
}
