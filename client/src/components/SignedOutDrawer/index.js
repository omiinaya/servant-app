import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MailIcon from '@material-ui/icons/Mail';
import LoginModal from "../LoginModal"
import RegisterModal from "../RegisterModal"
import {
  NavbarToggler,
  Navbar
} from 'reactstrap';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function TemporaryDrawer() {
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
        <ListItem>
          <ListItemIcon><MailIcon /></ListItemIcon>
          <LoginModal type='link' label='Sign In' title='Sign In' test='test1' />
        </ListItem>
        <ListItem>
          <ListItemIcon><MailIcon /></ListItemIcon>
          <RegisterModal type='link' label='Register' title='Sign Up' test='test2' />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key='right'>
          <Navbar color="light" light expand="md">
            <NavbarToggler onClick={toggleDrawer('right', true)} />
          </Navbar>
          <Drawer anchor='right' open={state['right']} onClose={toggleDrawer('right', false)}>
            {list('right')}
          </Drawer>
        </React.Fragment>
    </div>
  );
}

export default TemporaryDrawer;