import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LandingPage, LandingPagePath } from 'components/containers/LandingPage/LandingPage';


import './App.css';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={LandingPagePath} component={LandingPage}/>
        {/* <Route exact path={ErrorPagePath} component={ErrorPage}/> */}
        {/* <Route path="/*">
          <Redirect to={ErrorPagePath}/>
        </Route> */}
      </Switch>
    </Router>
  );
}
