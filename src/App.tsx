import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Welcome from './pages/Welcome';
import Personal from './pages/Personal';
import DoB from './pages/DoB';
import Agreement from './pages/Agreement';

const App : React.FC = () => {
  const [hasPersonal, setHasPersonal] = useState<boolean>(sessionStorage.getItem("hasPersonal") === "true");
  const [hasDate, setHasDate] = useState<boolean>(sessionStorage.getItem("hasDate") === "true");

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome" exact component={Welcome} />
          <Route path="/personal" exact>
            <Personal setComplete={setHasPersonal} />
          </Route>
          <Route path="/dob" exact>
            {!hasPersonal ? <Redirect to="/welcome" /> : <DoB setComplete={setHasDate} />}
          </Route>
          <Route path="/agreement" exact>
            {!hasDate ? <Redirect to="/dob" /> : <Agreement />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
