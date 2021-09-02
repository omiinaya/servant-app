import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { login } from './scripts';

class Login extends Component {

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

    login(user).then(data => {
      if (data) {
        console.log(data)
        window.location.reload();
      }
    })

    alert(user.username)
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Input type="username" name="username" id="username" placeholder="Email / Username" onChange={this.onChange} />
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password" id="password" placeholder="Password" onChange={this.onChange} />
        </FormGroup>
        <Button size="lg" onClick={this.onSubmit} block>Continue</Button>
      </Form>
    );
  }
}

export default Login;