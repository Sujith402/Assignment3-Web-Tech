import React, { Component } from 'react'
import Golden_Retriever from '../../imgs/Golden-Retriever_new.jpg'
import lab from '../../imgs/lab_new.jpg'
import Pomerian from '../../imgs/pomerian_new.jpg'
import Others from '../../imgs/others.jpg'

export default class Card extends Component {
  constructor(props){
    super(props);
    switch(this.props.element.category){
      case 'GoldenRetriever':
        this.src = Golden_Retriever;
        break;
      case 'Labrador':
        this.src = lab;
        break;
      case 'Pomerian':
        this.src = Pomerian;
        break;
      default:
        this.src = Others;
        break;
      }
  }
  
  render() {
    return (
      <div className='card'>
        <img src={this.src} alt='Card'></img>
        <div className='content'>
          <ul>
            <li><b>Category: </b>{this.props.element.category}</li>
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
