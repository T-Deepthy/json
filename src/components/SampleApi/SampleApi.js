import React, { Component } from "react";
import sampleApiAction from "../../actions/SampleApiAction";
import { connect } from "react-redux";
import { Spin } from "antd";


class SampleApi extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.sampleApi();
  }
  showValues() {
    if (!this.props.sampleApiState.loading) {
      const listItems = this.props.sampleApiState.data.map((item , index) => (
        <table className="table" key={index}>
        <tbody>
          <tr>
            <th scope="row" >{item.id}</th>
            <td>{item.first_name}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
          </tr>
        </tbody>
      </table>
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
    return <div>
        <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">First Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
    </table>
    {this.showValues()}
    </div>;
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sampleApi: props => {
      dispatch(sampleApiAction(props));
    }
  };
};
const mapStateToProps = (state, ownProps) => {
  console.log(state.sampleApiReducer);
  return {
    sampleApiState: state.sampleApiReducer
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleApi);