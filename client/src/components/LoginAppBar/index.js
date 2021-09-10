import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import LoginModal from '../LoginModal';
import RegisterModal from '../RegisterModal';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    //rules that apply to burger menu
    marginTop: theme.spacing(-0.5)
  },
  title: {
    //rules that apply to servantApp title
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      //color: 'white'
    },
    //rules for mobile devices only
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      textAlign: 'center',
    },
  },
  sectionDesktop: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  sectionMobile: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
    },
  },
}));

function SignedOutAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <center>
            <Link to='/'>
              <Typography className={classes.title} variant="h6" noWrap>
                Servant
              </Typography>
            </Link>
          </center>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <LoginModal />
            <RegisterModal />
          </div>
          <div className={classes.sectionMobile}>
            <RegisterModal />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default SignedOutAppBar