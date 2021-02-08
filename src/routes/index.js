import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import HookClickOutside from "../pages/HookClickOutside";
import HookUseOnload from "../pages/HookUseOnload";

import Home from "../pages/Home";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/hook-click-outside" exact component={HookClickOutside} />
      <Route path="/hook-unload" exact component={HookUseOnload} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
