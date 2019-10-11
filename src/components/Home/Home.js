import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCryptoCurrencies } from '../../actions'
import { Table } from 'antd';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchCurrency();
  }
  showCryptoCurrenyTable() {
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
            dataSource={this.props.foodItemState.data}
            loading={this.props.foodItemState.loading}
          />
        </div>
      )
    
  }

  render() {

    return (
      <React.Fragment>
        {this.showCryptoCurrenyTable()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    foodItemState: state.cryptoCurrencyReducer
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchCurrency: (props) => {
      dispatch(fetchCryptoCurrencies())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

