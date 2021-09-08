import React from 'react';
import BannerCarouselDesktop from '../BannerCarouselDesktop';
import BannerCarouselMobile from '../BannerCarouselMobile';
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
      display: 'block'
    },
  },
}));

function BannerCarousel() {
  const classes = useStyles();
  return (
    //make function that tells if mobile
    <div>
      <div className={classes.sectionDesktop}>
        <BannerCarouselDesktop />
      </div>
      <div className={classes.sectionMobile}>
        <BannerCarouselMobile />
      </div>
    </div>
  );
}

export default BannerCarousel