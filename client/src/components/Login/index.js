import React, { Component } from 'react';
import { withRouter } from 'react-router-dom' 
import { 
  Button, 
  Form, 
  FormGroup, 
  Input 
} from 'reactstrap';
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
    console.log(e.target)
  }

  onSubmit(e) {
    e.preventDefault()

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    login(user).then(data => {
      if (data) {
        //this.props.history.push('/');
        this.props.toggle()
      }
    })
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Input type="username" name="username" id="username" placeholder="Email / Username" onChange={this.onChange} />
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password" id="password" placeholder="Password" onChange={this.onChange} />
        </FormGroup>
        <Button type='submit' size="lg" block>Continue</Button>
        <button type="submit" id="button">test</button>
      </Form>
    );
  }
}

export default withRouter(Login);