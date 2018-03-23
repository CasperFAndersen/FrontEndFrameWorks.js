import React, { Component } from 'react';
import './Header.css';
import { link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="navbar has-shadow">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">MyCompany</a>
          </div>

          <span className="navbar-burger">
            <span />
            <span />
            <span />
          </span>

          <div className="navbar-end navbar-menu">
            <link to="/" className="navbar-item r-item">
              Home
            </link>
            <link to="/faq" className="navbar-item r-item">
              Features
            </link>
            <link to="/faq" className="navbar-item r-item">
              About
            </link>
            <link to="/faq" className="navbar-item r-item">
              FAQ
            </link>

            <div className="navbar-item">
              <p className="control">
                <a className="button is-primary is-outlined">
                  <span className="icon">
                    <i className="fa fa-download" />
                  </span>
                  <span>Join Now</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
