import React, { Component } from "react";
import { Route, Switch } from "react-router";
import MainFrame from "./containers/MainFrame/MainFrame";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import Navigation from "./components/navigation/Navigation";
import Tree from "./components/Tree/Tree";
export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Switch>
          <Route path="/" render={() => <MainFrame />} exact/>
          <Route path="/tree" render={() => <Tree />}  exact/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
