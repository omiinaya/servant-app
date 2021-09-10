import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/styles';
import RequestForm from '../RequestForm';
import LoginAppBar from '../LoginAppBar';
//import { login } from './scripts';

const styles = () => ({
  Root: {
    //
  },
  Form: {
    //
  }
})

class RequestCreate extends Component {
  constructor() {
    super()
    this.state = {
      //
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Root}>
        <LoginAppBar />
        <div className={classes.Form}>
          <RequestForm />
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(RequestCreate));