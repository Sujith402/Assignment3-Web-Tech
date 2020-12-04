import React from 'react'
import { v4 } from 'uuid'

export default function Drop(props) {
  return (
    <ul className='drop-down'>
      {props.element.map((elem) => {
        return (
          <li key={v4()}>
            <a className='drop-content' href={elem.url}> {elem.title} </a>
          </li>
        )
      })}
    </ul>
  )
}
