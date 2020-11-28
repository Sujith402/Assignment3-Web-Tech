import { Component } from 'react';
import './Styles/demo_style.css';
import Header from './components/Header';

const count = 3;

class App extends Component {
  render() {
    return (
      <div>
        <Header count = {count}/>
      </div>
    );
  }
}

export default App;
