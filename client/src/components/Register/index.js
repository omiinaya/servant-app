import React from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/styles';
import { TextField, Button } from '@material-ui/core';
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
      width: '48%',
    },
  },
  root: {
    '& > *': {
      margin: '2%',
      width: '100%',
    },
  },
  test: {
    width: '100%',
    display: 'block'
  }
})

class TEST_DynamicRendering extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0,
      //
      firstname: '',
      lastname: '',
      email: '',
      birthdate: '',
      username: '',
      password: '',
      password2: ''
    };
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.myRef = React.createRef()
  }

  componentDidMount() {
    //console.log(this.myRef.current)
  }

  componentWillUnmount() {
    //console.log(this.state.page)
  }

  nextPage(a, e) {
    var next = a + 1
    this.setState({ page: next })
    this.myRef.current.value = null
    console.log(this.state)
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
    if (this.state.page === 0) {
      return (
        <form className={classes.root} noValidate autoComplete="off" /*onSubmit={this.onSubmit}*/>
          <TextField
            size='small'
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            variant="outlined"
            onChange={this.onChange}
            inputRef={this.myRef}
            hiddenLabel
          />
          <Button type='submit' size='large' color="primary" variant="contained" onClick={() => this.nextPage(this.state.page)} fullWidth>Continue</Button>
        </form>
      )
    }
    if (this.state.page === 1) {
      return (
        <form className={classes.root} noValidate autoComplete="off" /*onSubmit={this.onSubmit}*/>
          <TextField
            size='small'
            id="username"
            name="username"
            type="username"
            placeholder="Username"
            variant="outlined"
            onChange={this.onChange}
            inputRef={this.myRef}
          />
          <TextField
            size='small'
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            variant="outlined"
            onChange={this.onChange}
            inputRef={this.myRef}
          />
          <TextField
            size='small'
            id="password2"
            name="password2"
            type="password"
            placeholder="Re-enter Password"
            variant="outlined"
            onChange={this.onChange}
            inputRef={this.myRef}
          />
          <div>
            <Button type='submit' size='large' color="primary" variant="contained" onClick={() => this.nextPage(this.state.page)} fullWidth>Continue</Button>
          </div>
        </form>
      )
    }
    if (this.state.page === 2) {
      return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={this.onSubmit}>
          <div className={classes.container}>
            <div className={classes.half}>
              <TextField size='small' id="firstname" name="firstname" type="firstname" label="First Name" variant="outlined" onChange={this.onChange} />
              <TextField size='small' id="lastname" name="lastname" type="lastname" label="Last Name" variant="outlined" onChange={this.onChange} />
            </div>
              <TextField size='small' id="birthdate" name="birthdate" type="date" variant="outlined" onChange={this.onChange} />
              <Button type='submit' size='large' color="primary" variant="contained" fullWidth>Continue</Button>
          </div>
        </form>
      )
    }
  }
}

export default withRouter(withStyles(styles)(TEST_DynamicRendering))