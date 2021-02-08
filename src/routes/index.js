import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import HookClickOutside from "../pages/HookClickOutside";
import Home from "../pages/Home";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/hook-click-outside" exact component={HookClickOutside} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
