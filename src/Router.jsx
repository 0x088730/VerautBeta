import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Layout from "./Layout/index";
// import Contact from "./containers/Contact"
import VeriBox from "./containers/VeriBox";
import MainFooter from "./containers/mainFooter/MainFooter";
import Home from "./containers/Home/Home";

const wrappedRoutes = () => (
  <div>
    {/* <Layout /> */}
    <MainFooter />
  </div>
);

const Router = () => (
  <React.Fragment>
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          {/* <Route path="/contact" component={Contact} /> */}
          <Route path="/veribox" component={VeriBox} />
          <Route path="/" component={wrappedRoutes} />
          <Route path="*" component={Home} />
        </Switch>
      </BrowserRouter>
    </main>
  </React.Fragment>
);

export default Router;
