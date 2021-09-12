import React from 'react';
import Home from "./components/Home/";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RegisterMobile from './components/RegisterMobile'
import LoginMobile from './components/LoginMobile'
import RequestCreate from './components/RequestCreate'
import Requests from './components/Requests'
import './App.css';

function getOrientation() {
  if (window.matchMedia("(orientation: portrait)").matches) {
    return true
  } else {
    return false
  }
}

class App extends React.Component {
  state = {
    screenOrientation: 'portrait'
  }

  setScreenOrientation = () => {
    if (getOrientation()) {
      this.setState({
        screenOrientation: 'landscape'
      });
    } else {
      this.setState({
        screenOrientation: 'portrait'
      });
    }
  }

  componentDidMount() {
    window.addEventListener('orientationchange', this.setScreenOrientation);
  }

  render() {
    console.log(this.state.screenOrientation)
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={RegisterMobile} />
          <Route exact path="/login" component={LoginMobile} />
          <Route exact path="/request" component={RequestCreate} />
          <Route exact path="/requests" component={Requests} />
        </Switch>
      </Router>
    );
  }
}

export default App;
