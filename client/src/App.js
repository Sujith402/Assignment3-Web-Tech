import { Component } from 'react';
import './Styles/demo_style.css';
import Header from './components/Header/header.js';
import Body from './components/Body/body.js';
import About from './components/Body/about.js'
import Category from './components/Body/category.js'
import Footer from './components/Footer/footer.js'
import NotFound from './components/NotFound.js'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {url : '/',set: 'no', status:'active'}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    this.setState(() => {
      const url = new URL(event.target.href)
      const status = url.pathname === '/' ? 'active' : 'inactive';
      return ({url : url.pathname,status})
    })
  }

  render() {
    console.log(this.state)
    return (
      <Router>
        <div id='main-app'>
          <Header handleClick={this.handleClick} class={this.state.status}/>
          <div className={`background-break`} ></div>
          <Switch>
            <Route path='/' exact component={Body} />
            <Route path='/about' exact component={About} />
            <Route path='/category=*' exact render={(props) => (<Category {...props} url={this.state.url} />)} />
            <Route path='/*' component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
