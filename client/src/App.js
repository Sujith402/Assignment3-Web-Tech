import { Component } from 'react';
import './Styles/demo_style.css';
import Header from './components/Header/header.js';
import Body from './components/Body/body.js';
import Footer from './components/Footer/footer.js'
import bg_img from './imgs/training-a-timid-rescue-dog-old.jpeg';

class App extends Component {
  render() {
    return (
      <div id='main-app'>
        <img src={bg_img} className='background-image'></img>
        <Header />
        <div className='background-break'></div>
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
