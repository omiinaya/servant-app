import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { login } from './scripts';

const styles = theme => ({
  root: {
    '& > *': {
      margin: '2%',
      width: '96%',
    },
  }
})

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
        this.props.history.push('/');
      }
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.root} noValidate autoComplete="off" onSubmit={this.onSubmit}>
        <TextField size='small' id="username" name="username" type="username" label="Username" variant="outlined" onChange={this.onChange} />
        <TextField size='small' id="password" name="password" type="password" label="Password" variant="outlined" onChange={this.onChange} />
        <Button type='submit' size='large' color="primary" variant="contained">Continue</Button>
      </form>
    );
  }
}

export default withRouter(withStyles(styles)(Login));