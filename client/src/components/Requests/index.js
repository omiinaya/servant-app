import React from 'react';
import RequestList from '../RequestList'
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
      <RequestList />
    </div>
  );
}

export default Requests;
