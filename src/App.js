import { Component } from 'react';
import './Styles/demo_style.css';
import Header from './components/Header/header.js';

class App extends Component {
  render() {
    return (
      <div id='main-app'>
        <Header />
        Random content
      </div>
    );
  }
}

export default App;
