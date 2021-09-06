import React from 'react';
import Register from '../Register'
import  { 
  makeStyles, 
  Modal, 
  Button 
} from '@material-ui/core';

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

function RegisterModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const toggle = () => setOpen(!open);

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Sign Up</h2>
      <br />
      <div id="simple-modal-content">
        <Register toggle={toggle}/>
      </div>
    </div>
  );

  return (
    <div>
      <Button color="inherit" variant="outlined" onClick={toggle} >Join</Button>
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

export default RegisterModal;
