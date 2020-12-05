import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import LandingPage from "../Pages/LandingPage";
import Home from "../Pages/Home";
import SignUp from "../Components/SignUp";
import SignIn from "../Components/SignIn";

const Router = () => {
  return (
    <main>
      <Switch>
        <Route
          exact
          path="/"
          component={(props) => (
            <LandingPage>
              <Home {...props} />
            </LandingPage>
          )}
        />
        <Route
          exact
          path="/login"
          component={(props) => (
            <LandingPage>
              <SignIn {...props} />
            </LandingPage>
          )}
        />
        <Route
          exact
          path="/register"
          component={(props) => (
            <LandingPage>
              <SignUp {...props} />
            </LandingPage>
          )}
        />
      </Switch>
    </main>
  );
};

export default withRouter(Router);
