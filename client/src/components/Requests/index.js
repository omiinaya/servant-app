import React from 'react';
import  { 
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
}));

function Requests() {
  const classes = useStyles();
  return (
    <div>
      Requests page
    </div>
  );
}

export default Requests;
