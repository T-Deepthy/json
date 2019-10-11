import React, { Component } from 'react';
import Home from '../../components/Home/Home';
import { Card } from 'antd';
import './Mainframe.css';
class MainFrame extends Component {
  render() {
    return ( 
        <div className="container-fluid mainframe-wrapper">
         <Card title="Table and tree structure of json data"  style={{ width: '100%' }}>
            <Home />
         </Card> 
        </div>
    );
  }
}

export default MainFrame;