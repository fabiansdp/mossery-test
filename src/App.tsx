import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Welcome from './pages/Welcome';
import Personal from './pages/Personal';
import DoB from './pages/DoB';
import Agreement from './pages/Agreement';

const App : React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
              <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome" exact component={Welcome} />
          <Route path="/personal" exact component={Personal} />
          <Route path="/dob" exact component={DoB} />
          <Route path="/agreement" exact component={Agreement} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
