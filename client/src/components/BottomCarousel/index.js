import React from 'react';
import BottomCarouselDesktop from '../BottomCarouselDesktop';
import BottomCarouselMobile from '../BottomCarouselMobile';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  sectionMobile: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
}));

function BannerCarousel() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.sectionDesktop}>
        <BottomCarouselDesktop />
      </div>
      <div className={classes.sectionMobile}>
        <BottomCarouselMobile />
      </div>
    </div>
  );
}

export default BannerCarousel