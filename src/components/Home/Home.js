import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchJsonData } from '../../actions'
import { Table } from 'antd';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchJson();
  }
  showJsonTable() {
    const columns = [
      { title: 'Name', dataIndex: 'first_name', key: 'first_name' },
      { title: 'Last Name', dataIndex: 'last_name', key: 'last_name' },
      { title: 'Email', dataIndex: 'email', key: 'email' },
      { title: 'Gender', dataIndex: 'gender', key: 'gender' },
      { title: 'Ip Address', dataIndex: 'ip_address', key: 'ip_address' }
    ]
    
      return (
        <div>
          <Table
            columns={columns}
            dataSource={this.props.jsonState.data}
            loading={this.props.jsonState.loading}
          />
        </div>
      )
    
  }

  render() {

    return (
      <React.Fragment>
        {this.showJsonTable()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    jsonState: state.jsonReducer
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchJson: (props) => {
      dispatch(fetchJsonData())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

