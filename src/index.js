
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import User from "layouts/User.jsx";
import StaffAdmin from "layouts/StaffAdmin.jsx";
import LoggedUser from "layouts/LoggedUser.jsx";
//import RTL from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.8.0";
// import 'bootstrap/dist/css/bootstrap.min.css';
const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/user" component={User} />
      <Route path="/staffadmin" component={StaffAdmin} />
      <Route path="/loggeduser" component={LoggedUser} />
      <Redirect from="/" to="/user/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
