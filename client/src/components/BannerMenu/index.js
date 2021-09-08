import React from 'react';
import BannerMenuDesktop from '../BannerMenuDesktop';
import BannerMenuMobile from '../BannerMenuMobile';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  sectionMobile: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'flex'
    },
  },
}));

function BannerMenu() {
  const classes = useStyles();
  return (
    //make function that tells if mobile
    <div>
      <div className={classes.sectionDesktop}>
        <BannerMenuDesktop />
      </div>
      <div className={classes.sectionMobile}>
        <BannerMenuMobile />
      </div>
    </div>
  );
}

export default BannerMenu