import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { TextField, Button, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
//import { login } from './scripts';

const styles = () => ({
  root: {
    '& > *': {
      margin: '2%',
      marginBottom: '1%',
      width: '96%',
    },
  },
})

class RequestForm extends Component {
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
    /*
    const request = {
      
      username: this.state.username,
      password: this.state.password
      
    }
  
    login(user).then(data => {
      if (data) {
        this.props.history.push('/');
      }
    })
    */
  }

  render() {
    const { classes } = this.props;
    return (
      <Box
        component="form"
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={this.onSubmit}
      >
        <TextField
          size='small'
          id="title"
          name="title"
          type="title"
          placeholder="Title"
          variant="outlined"
          onChange={this.onChange} />
        <TextField
          id="outlined-multiline-static"
          multiline
          variant="outlined"
          rows={8}
          placeholder="Description"
          onChange={this.onChange}
        />
       
        <Button
          type='submit'
          size='large'
          color="primary"
          variant="contained"
        >
          Continue
        </Button>
        
      </Box>
    );
  }
}

export default withRouter(withStyles(styles)(RequestForm));