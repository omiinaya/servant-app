import Home from "./components/Home/";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RegisterMobile from './components/RegisterMobile'
import LoginMobile from './components/LoginMobile'
import RequestCreate from './components/RequestCreate'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={RegisterMobile} />
        <Route exact path="/login" component={LoginMobile} />
        <Route exact path="/request" component={RequestCreate} />
      </Switch>
    </Router>
  );
}

export default App;
