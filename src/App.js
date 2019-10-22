import React, { Component } from "react";
import { Route, Switch } from "react-router";
import MainFrame from "./containers/MainFrame/MainFrame";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import Navigation from "./components/Navigation/Navigation";
import TreeJson from "./components/Tree/TreeJson";
import Api from "./components/Api/Api";
import SampleApi from "./components/SampleApi/SampleApi";
import Sample from "./components/Sample/Sample";
import Task from "./components/Task/Task";
import DragAndDrop from "./components/DragAndDrop/DragAndDrop";
import SideBar from "./components/SideBar/SideBar";
import './components/SideBar/SideBar.css';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import './components/BurgerMenu/BurgerMenu.css';
import Tasks from './components/Tasks/Tasks';
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
          <Route path="/form" render={() => <Sample />} exact />
          <Route path="/task" render={() => <Task />} exact />
          <Route path="/dnd" render={() => <DragAndDrop />} exact />
          <Route path="/side" render={() => <SideBar />} exact />
          <Route path="/burg" render={() => <BurgerMenu />} exact />
          <Route path="/tasks" render={() => <Tasks />} exact />

        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
