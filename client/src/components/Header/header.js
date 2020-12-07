import React from 'react'
import {nav_items,other_items} from './navElements.js'
import {v4} from 'uuid'
import Drop from './Drop.js'
import {FaAngleDown} from 'react-icons/fa'

class Header extends React.Component{  
  render(){
    return (
      <>
        <header id='header' className={this.props.class}>
          <div className='container'>
            <nav>
              <ul className='nav-elements'>
                <li><a href={other_items[0].url}>{other_items[0].title}</a></li>
                {nav_items.map((element) => {
                  return (
                    <li className='hover-trigger' key={v4()}>
                      <a href={element.url}> {element.title} {element.dropDown.length ? <FaAngleDown className ='angle-down' /> : ''}</a>
                      {element.dropDown.length ? <Drop element={element.dropDown} handleClick={this.props.handleClick}/> : ''}
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </header>
      </>
    )
  }
}

export default Header;
