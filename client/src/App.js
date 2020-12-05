import { Component } from 'react';
import './Styles/demo_style.css';
import Header from './components/Header/header.js';
import Body from './components/Body/body.js';
import About from './components/Body/about.js'
import Footer from './components/Footer/footer.js'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div id='main-app'>
          <Header />
          <div className='background-break'></div>
          <Switch>
            <Route path='/' exact component={Body} />
            <Route path='/about' exact component={About} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
