import React from 'react';
import '../styles/common.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Layout from "./common/Layout";
import AboutPage from "./pages/AboutPage";

function Main() {
  return (
          <Router>
              <Layout>
              <Switch>
                  <Route exact path="/">
                      <Redirect from='/' to='/about-me'/>
                  </Route>
                  <Route path='/about-me' component={AboutPage} />
              </Switch>
              </Layout>
          </Router>
  );
}

export default Main;
