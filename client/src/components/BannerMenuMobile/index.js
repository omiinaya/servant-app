import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import BannerMenuTab from '../BannerMenuTab';
import { 
  AppBar, 
  Tabs, 
  Tab, 
  Typography, 
  Box } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
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
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
  );
}