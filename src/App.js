import React, { Component } from "react";
import { Route, Switch } from "react-router";
import MainFrame from "./containers/MainFrame/MainFrame";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import Navigation from "./components/navigation/Navigation";
import TreeJson from "./components/Tree/TreeJson";
import Api from "./Api";
import SampleApi from "./SampleApi";
// import Sample from "./components/Sample/Sample";
export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Switch>
          <Route path="/" render={() => <MainFrame />} exact/>
          <Route path="/tree" render={() => <TreeJson />}  exact/>
          <Route path="/api" render={() => <Api />}  exact/>
          <Route path="/sample" render={() => <SampleApi />} exact/>
          {/* <Route path="/s" render={() => <Sample />} exact /> */}
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
