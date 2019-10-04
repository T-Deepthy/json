import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import MainFrame from './containers/MainFrame/MainFrame';
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
export class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" render={() => <MainFrame />} />
      </Switch>
    );
  }
}

export default withRouter(App);
