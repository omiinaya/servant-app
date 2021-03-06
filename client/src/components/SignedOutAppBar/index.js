import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import LoginModal from '../LoginModal';
import RegisterModal from '../RegisterModal';
import SignedOutDrawer from '../SignedOutDrawer';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  MenuItem,
  Menu
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
      display: 'block'
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(0.5),
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down('lg')]: {
      marginLeft: theme.spacing(3),
      width: '40%',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(3),
      width: '45%',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(3),
      width: '50%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginLeft: theme.spacing(2),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    window.open("/", "_self")
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleLogOut}>Logout</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Link to='/'>
            <Typography className={classes.title} variant="h6" noWrap>
              Servant
            </Typography>
          </Link>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search???"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <LoginModal />
            <RegisterModal />
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              edge="end"
              className={classes.menuButton}
              aria-label="open drawer"
              aria-haspopup="true"
              color="inherit"
            >
              <SignedOutDrawer />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}

export default SignedOutAppBar