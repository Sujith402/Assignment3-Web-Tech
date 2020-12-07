import { v4 } from 'uuid'
import Card from './card'
import React, { Component } from 'react'
import axios from 'axios'

export default class Category extends Component {
  constructor(props){
    super(props);
    this.state = {url : '/',items: []}
  }

  componentDidMount(){
    console.log('Mounted')
    const link = axios.create({
      baseURL:'http://localhost:5000/api/items'
    })
    link.get(`${this.props.url}`).then((res) => {
      this.setState({url : this.props.url, items : res.data});
    })
  }
  
  componentDidUpdate(prevProps){
    if (prevProps.url != this.props.url){
      console.log('Mounted')
      const link = axios.create({
        baseURL:'http://localhost:5000/api/items'
      })
      link.get(`${this.props.url}`).then((res) => {
        this.setState({url : this.props.url, items : res.data});
      })
    }
  }

  render() {
    return (
      <div id='Categories'>
        <ul className= 'category card-container'>
          {this.state.items.length ? this.state.items.map((item) => {
            return (<li key={v4()}> <Card element={item} /> </li>) 
          }) : <li className='Loading'> Loading... </li>}
        </ul>
      </div>
    )
  }
}

