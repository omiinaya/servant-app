import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { isUser, register, passwordsMatch } from './scripts'
import { login } from '../Login/scripts';

const styles = () => ({
  container: {
    '& > *': {
      display: 'flex',
      justifyContent: 'space-between'
    },
  },
  half: {
    '& > *': {
      margin: '2%',
      width: '48%',
    },
  },
  root: {
    '& > *': {
      margin: '2%',
      width: '96%',
    },
  }
})

class Register extends Component {
  constructor() {
    super()
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      birthdate: '',
      username: '',
      password: '',
      password2: ''
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
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      birthdate: this.state.birthdate,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    }

    //check if password fields match
    if (passwordsMatch(user.password, user.password2)) {
      //if they match, check if the user exists
      isUser(user.username).then(res => {
        //if it doesn't exist, create user
        if (res === null) {
          register(user).then(data => {
            //if user was created successfully, log them in
            if (data) {
              login(user).then(data => {
                //if user was logged in succesfully, reload page to update components
                if (data) {
                  //reloading home component to refresh user features
                  this.props.history.push('/');
                  //closing popup when done reloading components
                  //this.props.toggle()
                }
              })
            }
          })
        } else {
          //handle what happens when the username already exists
          console.log("user already exists.")
        }
      })
    } else {
      //handle what happens when the password fields don't match
      console.log('passwords do not match.')
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <form noValidate autoComplete="off" onSubmit={this.onSubmit}>
        <div className={classes.container}>
          <div className={classes.half}>
            <TextField size='small' id="firstname" name="firstname" type="firstname" label="First Name" variant="outlined" onChange={this.onChange} />
            <TextField size='small' id="lastname" name="lastname" type="lastname" label="Last Name" variant="outlined" onChange={this.onChange} />
          </div>
        </div>
        <div className={classes.root}>
          <TextField size='small' id="username" name="username" type="username" label="Username" variant="outlined" onChange={this.onChange} />
          <TextField size='small' id="email" name="email" type="email" label="Email" variant="outlined" onChange={this.onChange} />
          <TextField size='small' id="birthdate" name="birthdate" type="date" variant="outlined" onChange={this.onChange} />
          <TextField size='small' id="password" name="password" type="password" label="Password" variant="outlined" onChange={this.onChange} />
          <TextField size='small' id="password2" name="password2" type="password" label="Re-enter Password" variant="outlined" onChange={this.onChange} />
          <Button type='submit' size='large' color="primary" variant="contained">Continue</Button>
        </div>
      </form>
    );
  }
}

export default withRouter(withStyles(styles)(Register));