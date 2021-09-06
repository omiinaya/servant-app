import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import { 
  makeStyles, 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon,
  ListItemText 
} from '@material-ui/core';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function SignedOutDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to='/login' color="inherit">
          <ListItem>
            <ListItemIcon><VpnKeyIcon /></ListItemIcon>
            <ListItemText primary='Sign In' />
          </ListItem>
        </Link>
        <Link to='/register' color="inherit">
          <ListItem>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary='Sign Up' />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key='right'>
      <MenuIcon onClick={toggleDrawer('right', true)}  />
        <Drawer anchor='right' open={state['right']} onClose={toggleDrawer('right', false)}>
          {list('right')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default SignedOutDrawer;