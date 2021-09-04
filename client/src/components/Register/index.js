import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {
  Button,
  Form,
  FormGroup,
  Input,
  Col,
  Row
} from 'reactstrap';
import { isUser, register, passwordsMatch } from './scripts'
import { login } from '../Login/scripts';

class Register extends Component {
  constructor() {
    super()
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
      password2: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const user = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    }

    if (passwordsMatch(user.password, user.password2)) {
      isUser(user.username).then(res => {
        if (res === null) {
          register(user).then(data => {
            if (data) {
              login(user).then(data => {
                if (data) {
                  this.props.history.push('/');
                }
              })
            }
          })
        } else {
          console.log("user already exists.")
        }
      })
    } else {
      console.log('passwords do not match.')
    }
  }

  render() {
    return (
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Input type="firstname" name="firstname" id="firstname" placeholder="First Name" onChange={this.onChange} />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Input type="lastname" name="lastname" id="lastname" placeholder="Last Name" onChange={this.onChange} />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Input type="username" name="username" id="username" placeholder="Username" onChange={this.onChange} />
        </FormGroup>
        <FormGroup>
          <Input type="email" name="email" id="email" placeholder="Email" onChange={this.onChange} />
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password" id="password" placeholder="Password" onChange={this.onChange} />
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password2" id="password2" placeholder="Re-enter Password" onChange={this.onChange} />
        </FormGroup>
        <Button size="lg" onClick={this.onSubmit} block>Continue</Button>
      </Form>
    );
  }
}

export default withRouter(Register);