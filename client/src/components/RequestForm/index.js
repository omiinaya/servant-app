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
      page: 0,
      title: '',
      description: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  nextPage(a) {
    var next = a + 1
    this.setState({ page: next })
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.value)
  }

  onSubmit(e) {
    e.preventDefault()

    const request = {
      title: this.state.title,
      description: this.state.description
    }
    console.log(request)
    /*
    login(user).then(data => {
      if (data) {
        this.props.history.push('/');
      }
    })
    */
  }

  render() {
    const { classes } = this.props;
    if (this.state.page === 0) {
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
            onChange={this.onChange}
          />

          <TextField
            id="outlined-multiline-static"
            variant="outlined"
            name="description"
            rows={8}
            placeholder="Description"
            multiline
            onChange={this.onChange}
          />

          <Button
            //type='submit'
            size='large'
            color="primary"
            variant="contained"
            onClick={() => {this.nextPage(this.state.page)}}
          >
            Continue
          </Button>
        </Box>
      );
    } else {
      return (
      <div>test</div>
      )
    }
  }
}

export default withRouter(withStyles(styles)(RequestForm));