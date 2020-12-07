import React from 'react';
import axios from 'axios';



class AppForm extends React.Component {

  state = {
    FirstName: '',
    LastName: '',
    'E-mail': '',
    body: ''
  };



  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };


  submit = (event) => {
    console.log(event.target)
    event.preventDefault();

    const payload = {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      'E-mail': this.state['E-mail'],
      body: this.state.body
    };


    axios({
      url: 'http://localhost:5000/api/items/save',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
        this.resetUserInputs();
      })
      .catch(() => {
        console.log('Internal server error');
      });;
  };

  resetUserInputs = () => {
    this.setState({
      FirstName: '',
      LastName: '',
      'E-mail': '',
      body: ''
    });
  };



  render() {

    console.log('State: ', this.state);

    //JSX
    return(
      <div className="app">
        <form onSubmit={this.submit}>
          <div className="form-input">
            <ul className='name-input form-row'>
              <li><input 
                type="text"
                name="FirstName"
                placeholder="First Name"
                value={this.state.FirstName}
                onChange={this.handleChange}
              /></li>
              <li><input 
                type="text"
                name="LastName"
                placeholder="Last Name"
                value={this.state.LastName}
                onChange={this.handleChange}
              /></li>
            </ul>
            <div className='form-row'>
              <input 
                type="email"
                name="E-mail"
                placeholder="E-mail"
                value={this.state['E-mail']}
                onChange={this.handleChange}             
              />
            </div>
            <div className='form-row'>
              <textarea
                placeholder="Comments"
                name="body"
                cols="30"
                rows="10"
                value={this.state.body}
                onChange={this.handleChange}
              >
              </textarea>
            </div>
          </div>
          <div className='button'>
            <button>Submit</button>
          </div>
        </form>

      </div>
    );
  }
}


export default AppForm;