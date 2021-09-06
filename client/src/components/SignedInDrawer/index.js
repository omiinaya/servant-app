import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AccountCircle from '@material-ui/icons/AccountCircle';
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
        <Link to='/' color="inherit">
        <ListItem>
            <ListItemIcon><AccountCircle /></ListItemIcon>
            <ListItemText primary='My Account' />
          </ListItem>
          <ListItem>
            <ListItemIcon><VpnKeyIcon /></ListItemIcon>
            <ListItemText primary='Logout' onClick={handleLogOut}/>
          </ListItem>
        </Link>
      </List>
    </div>
  );

  const handleLogOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    window.open("/", "_self")
  }

  return (
    <div>
      <React.Fragment key='right'>
        <MenuIcon onClick={toggleDrawer('right', true)} />
        <Drawer anchor='right' open={state['right']} onClose={toggleDrawer('right', false)}>
          {list('right')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default SignedOutDrawer;