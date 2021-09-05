import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { isUser, register, passwordsMatch } from './scripts'
import { login } from '../Login/scripts';

class RegisterPage extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.value)
  }

  onSubmit(e) {
    e.preventDefault()

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    isUser(user.username).then(res => {
      if (res === null) {
        register(user).then(res => {
          if (res) {
            this.props.history.push('/')
          }
        })
      } else {
        console.log("user already exists.")
      }
    })
  }

  render() {
    return (
      <div>
        <div id="registerform">
          <form noValidate onSubmit={this.onSubmit}>
            <h1 id="headerTitle">Register</h1>
            <div className="form-group">
              <input type="username"
                className="form-control"
                name="username"
                placeholder="Enter username"
                value={this.state.username}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <input type="password"
                className="form-control"
                name="password"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </div>
            <button type="submit"
              id="button">
              Join
            </button>
            <a href="#0" onClick={() => { this.props.history.push('/login') }}><div className="form-register">- or use existing account -</div></a>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(RegisterPage);