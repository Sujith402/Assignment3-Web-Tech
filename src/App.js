import { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        { this.props.count > 0 && <h1>Messages: {this.props.count}</h1>}
      </div>
    );
  }
}

export default App;
