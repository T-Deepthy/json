import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCryptoCurrencies } from '../../actions'
import { Table, Tag, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import moment from 'moment';


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
      { title: 'Name', dataIndex: 'name', key: 'name', ...this.getColumnSearchProps('name') },
      { title: 'Symbol', dataIndex: 'symbol', key: 'symbol' },
      { title: 'Slug', dataIndex: 'slug', key: 'slug' },
      { title: 'No. of Market Pairs', dataIndex: 'num_market_pairs', key: 'num_market_pairs' },
      { title: 'Last Updated', dataIndex: 'last_updated', key: 'last_updated' },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <span>
            {tags.map(tag => {
              return (
                <Tag color='geekblue' key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
      }
    ]
    
      return (
        <div>
          <Table
            columns={columns}
            expandedRowRender={record =>
              <React.Fragment>
                <p style={{ margin: 0 }}><strong>USD Price: </strong>{record.quote.USD.price}</p>
                <p style={{ margin: 0 }}><strong>USD Volume: </strong>{record.quote.USD.volume_24h}</p>
                <p style={{ margin: 0 }}><strong>Percentage Change in 1Hour: </strong>{record.quote.USD.percent_change_1h}</p>
                <p style={{ margin: 0 }}><strong>Percentage Change in 1Day: </strong>{record.quote.USD.percent_change_24h}</p>
                <p style={{ margin: 0 }}><strong>Mrket Capital: </strong>{record.quote.USD.market_cap}</p>
                <p style={{ margin: 0 }}><strong>Last Updated: </strong>{moment(record.quote.USD.last_updated).format("MMM Do YY")}</p>
  
              </React.Fragment>
            }
            dataSource={this.props.foodItemState.data}
            loading={this.props.foodItemState.loading}
          />
        </div>
      )
    
  }
  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text => (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    ),
  });

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

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

