import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import WorkIcon from '@material-ui/icons/Work';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import BannerMenuTab from '../BannerMenuTab';
import { getDeviceType } from '../../scripts'
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box
} from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const TabPanelDesktop = (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'} variant={'body2'} >{children}</Typography>
        </Box>
      )}
    </div>
  )

  const TabPanelMobile = (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'} variant={'body2'}>{children}</Typography>
        </Box>
      )}
    </div>
  )

  return (
    <div>{getDeviceType() === 'other' ? TabPanelDesktop : TabPanelMobile}</div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function allyPropHandler(a, b) {
  if (getDeviceType === 'mobile') {
    return a
  } else {
    return b
  }
}

///////////////////////////
function a11yProps(index) {

  const desktopAllyProps = ({
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  })
  const mobileAllyProps = ({
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  })

  const allyProp = allyPropHandler(mobileAllyProps, desktopAllyProps)

  return allyProp
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const desktopMenu = (
    <div className={classes.root}>
      <AppBar position="static" color="default" elevation={3}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Make a Request" icon={<AccessibilityNewIcon />} {...a11yProps(0)} />
          <Tab label="Offer a Service" icon={<WorkIcon />} {...a11yProps(1)} />
          <Tab label="Shop for items" icon={<LocalGroceryStoreIcon />} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <BannerMenuTab
          title="Need a hand?"
          details="Request the help of locals with problems you need solved."
          label1="Request Now"
          label2="See Requests"
          link1="/request"
          link2="/requests"
        />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <BannerMenuTab
          title="Got a hand?"
          details="Help locals by solving requests they have submitted."
          label1="Help Now"
          label2="See Servies"
          link1="/service"
          link2="/services"
        />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <BannerMenuTab
          title="Things to sale?"
          details="Sell items you don't need to locals that might want them."
          label1="Shop Now"
          label2="List Item"
          link1="/market"
          link2="/listitem"
        />
      </TabPanel>
    </div>
  )

  const mobileMenu = (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Requests" {...a11yProps(0)} />
          <Tab label="Services" {...a11yProps(1)} />
          <Tab label="Market" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <BannerMenuTab
          title="Need a hand?"
          details="Request the help of locals with problems you need solved."
          label1="Request Now"
          label2="See Requests"
          link1="/request"
          link2="/requests"
        />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <BannerMenuTab
          title="Got a hand?"
          details="Help locals by solving requests they have submitted."
          label1="Help Now"
          label2="See Servies"
          link1="/service"
          link2="/services"
        />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <BannerMenuTab
          title="Things to sale?"
          details="Sell items you don't need to locals that might want them."
          label1="Shop Now"
          label2="List Item"
          link1="/market"
          link2="/listitem"
        />
      </TabPanel>
    </div>
  )

  return (
    <Box
      boxShadow={3}
      bgcolor="background.paper"
    >
      {getDeviceType() === 'other' ? desktopMenu : mobileMenu}
    </Box>
  );
}
