import React, { Component } from 'react'
import Logo from '../../imgs/dummy-logo.png'
import {FaFacebook, FaInstagram} from 'react-icons/fa'

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer id='footer'>
          <ul className='footer-content'>
            <div className='container'>
                <li>
                  <div className='img-container'>
                    <img src={Logo} alt='logo'></img>
                  </div>
                  <p>
                    <b>E-mail</b>: <a href='#'>kuttadopt@kuttadoptindia.org</a>
                  </p>
                  <h2> Follow us: </h2>
                  <hr />
                  <ul className='contact-icons'>
                    <li><FaFacebook /></li>
                    <li><FaInstagram /></li>
                  </ul>
                  <h3><a href='#'>Privacy Policy</a></h3>
                  <hr />
                  <h3><a href='#'>Terms and Conditions</a></h3>
                  <hr />
                  <h3><a href='#'>FAQs</a></h3>
                </li>
                <li>
                  <h2>Contact Us:</h2>
                  <p> Add in submit e-mail card here</p>
                </li>
            </div>
          </ul>
        </footer>
      </>
    )
  }
}
