import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navigation extends Component {
  render() {
    return ( 
        <div className="container-fluid mainframe-wrapper">
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <Link className="nav-link" to="/" >Table</Link>
                </li>
     
                <li className="nav-item">
                <Link className="nav-link" to="/tree">Tree</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link" to="/api">Api</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link" to="/sample">Sample Api</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link" to="/form">Sample</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link" to="/task">Task</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link" to="/dnd">Drag and Drop</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link" to="/side">Side Bar</Link>
                </li>
                </ul>
            </div>
        </nav>
        </div>
    );
  }
}

export default Navigation;