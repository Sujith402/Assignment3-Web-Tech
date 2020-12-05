import { Component } from 'react';
import './Styles/demo_style.css';
import Header from './components/Header/header.js';
import Body from './components/Body/body.js';
import Footer from './components/Footer/footer.js'

class App extends Component {
  render() {
    return (
      <div id='main-app'>
        <Header />
        <div className='background-break'></div>
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
