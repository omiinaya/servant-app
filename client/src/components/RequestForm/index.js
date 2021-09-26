import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { TextField, Button, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { getCurrencies } from '../ipc'
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
      //location
      return (
        <form className={classes.root} noValidate autoComplete="off" /*onSubmit={this.onSubmit}*/>
          <TextField
            size='small'
            id="address-1"
            name="address-1"
            type="address"
            label="Address Line 1"
            variant="outlined"
            inputRef={this.myRef}
            onChange={this.onChange}
          />

          <TextField
            size='small'
            id="address-2"
            name="address-2"
            type="address"
            label="Address Line 2"
            variant="outlined"
            inputRef={this.myRef}
            onChange={this.onChange}
          />
          <div className={classes.overhalf}>
            <TextField
              size="small"
              id="outlined-select-currency"
              select
              label="Country"
              value={this.state.currency}
              onChange={this.onSelect}
              variant="outlined"
            >
              {this.state.currencies.map((option) => (
                <MenuItem key={option.label} value={option.symbol}>
                  {option.symbol}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className={classes.fourth}>
            <TextField
              size="small"
              id="outlined-select-currency"
              select
              label="State"
              value={this.state.currency}
              onChange={this.onSelect}
              variant="outlined"
            >
              {this.state.currencies.map((option) => (
                <MenuItem key={option.label} value={option.symbol}>
                  {option.symbol}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              size="small"
              id="outlined-select-currency"
              select
              label="City"
              value={this.state.currency}
              onChange={this.onSelect}
              variant="outlined"
            >
              {this.state.currencies.map((option) => (
                <MenuItem key={option.label} value={option.symbol}>
                  {option.symbol}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className={classes.half}>
          <TextField
            size='small'
            id="zip"
            name="zip"
            label="Zip"
            variant="outlined"
            inputRef={this.myRef}
            onChange={this.onChange}
          />
          </div>
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
      )
    }
  }
}

export default withRouter(withStyles(styles)(RequestForm));