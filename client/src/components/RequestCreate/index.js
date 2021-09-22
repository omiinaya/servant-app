import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/styles';
import RequestForm from '../RequestForm';
import AppBar from '../AppBar';
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
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Root}>
        <AppBar />
        <div className={classes.Form}>
          <RequestForm />
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(RequestCreate));