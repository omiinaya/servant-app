import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Login from '../Login'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    borderRadius: '2%'
  },
}));

function LoginModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const toggle = () => setOpen(!open);

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Sign In</h2>
      <br />
      <div id="simple-modal-content">
        <Login toggle={toggle}/>
      </div>
    </div>
  );

  return (
    <div>
      <Button color="inherit" onClick={toggle} >Sign In</Button>
      <Modal
        open={open}
        onClose={toggle}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default LoginModal;
