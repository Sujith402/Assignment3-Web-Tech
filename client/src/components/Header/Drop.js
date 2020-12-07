import React from 'react'
import { v4 } from 'uuid'
import {Link} from 'react-router-dom'

export default function Drop(props) {
  return (
    <ul className='drop-down'>
      {props.element.map((elem) => {
        return (
          <li key={v4()}>
            <Link className='drop-content' to={elem.url} onClick={props.handleClick}> {elem.title} </Link>
          </li>
        )
      })}
    </ul>
  )
}
