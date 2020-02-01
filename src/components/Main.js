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
import Portfolio from "./pages/Portfolio";
import {ParallaxProvider} from "react-scroll-parallax";

function Main() {
  return (<ParallaxProvider>
          <Router>
                  <Layout>
                      <Switch>
                          <Route exact path="/">
                              <Redirect from='/' to='/about-me'/>
                          </Route>
                          <Route path='/about-me' component={AboutPage} />
                          <Route path='/portfolio' component={Portfolio} />
                      </Switch>
                  </Layout>
          </Router>
      </ParallaxProvider>
  );
}

export default Main;
