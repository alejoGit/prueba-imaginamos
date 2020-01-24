import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

//import Layout from './Layout';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

import { Context } from "./Context";

const PrivateRoute = ({ isAuth, ...props }) =>
  isAuth ? <Route {...props} /> : <Redirect to="/login" />;

export const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <PrivateRoute exact isAuth={isAuth} path="/profile">
          <Profile />
        </PrivateRoute>
        <PrivateRoute exact isAuth={isAuth} path="/">
          <Profile />
        </PrivateRoute>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
