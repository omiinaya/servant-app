import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { getCurrencies } from '../ipc'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
//import { login } from './scripts';

const styles = () => ({
  root: {
    '& > *': {
      margin: '2%',
      marginBottom: '1%',
      width: '96%',
    },
  },
  container: {
    '& > *': {
      display: 'flex',
      justifyContent: 'space-between'
    },
  },
  overhalf: {
    '& > *': {
      width: '75%',
    },
  },
  half: {
    '& > *': {
      width: '50%',
    },
  },
  fourth: {
    '& > *': {
      width: '24%',
      marginRight: '2%'
    },
  },
})

class RequestForm extends Component {
  constructor() {
    super()
    this.state = {
      page: 0,
      title: '',
      description: '',
      currencies: [],
      currency: '$'
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onSelect = this.onSelect.bind(this)
    this.myRef = React.createRef()
  }

  componentWillMount() {
    //this allows the data to be received before rendering.
    getCurrencies().then(data => {
      this.setState({ currencies: data })
      console.log(this.state.currencies)
    })
  }

  nextPage(a) {
    var next = a + 1
    this.setState({ page: next })
    this.myRef.current.value = null
    console.log(this.state)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.value)
  }

  onSelect(e) {
    this.setState({ currency: e.target.value })
    console.log(e.target.value)
  };

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
        <form className={classes.root} noValidate autoComplete="off" /*onSubmit={this.onSubmit}*/>
          <TextField
            size='small'
            id="title"
            name="title"
            type="title"
            label="Title"
            variant="outlined"
            inputRef={this.myRef}
            onChange={this.onChange}
          />

          <TextField
            id="outlined-multiline-static"
            variant="outlined"
            name="description"
            rows={8}
            label="Description"
            multiline
            onChange={this.onChange}
          />

          <Button
            //type='submit'
            size='large'
            color="primary"
            variant="contained"
            onClick={() => { this.nextPage(this.state.page) }}
          >
            Continue
          </Button>
        </form>
      );
    } else {
      return (
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '96%', margin: '2%' }}
        >
          <IconButton sx={{ p: '10px' }} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Google Maps"
            inputProps={{ 'aria-label': 'search google maps' }}
            onChange={this.onChange}
          />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
            <DirectionsIcon />
          </IconButton>
        </Paper>
      )
    }
  }
}

export default withRouter(withStyles(styles)(RequestForm));