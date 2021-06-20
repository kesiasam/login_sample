import './App.css';
import Login from './login';
import Welcome from './welcome';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/welcome" component={Welcome}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
