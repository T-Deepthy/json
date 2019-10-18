import React, { Component } from "react";
import apiAction from "../../actions/ApiAction";
import { connect } from "react-redux";
import { Spin } from "antd";
import "./Api.css";

class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.api();
  }
  showValues() {
    if (!this.props.apiState.loading) {
      const listItems = this.props.apiState.data.map((item , index) => (
        <li key={index}>{item.email}</li>
      ));
      return <ul>{listItems}</ul>;
    } else {
      return (
        <div className="example">
          <Spin />
        </div>
      );
    }
  }
  render() {
    return <div>{this.showValues()}</div>;
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    api: props => {
      dispatch(apiAction(props));
    }
  };
};
const mapStateToProps = (state, ownProps) => {
  console.log(state.apiReducer);
  return {
    apiState: state.apiReducer
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Api);