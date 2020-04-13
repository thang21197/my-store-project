import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="/"><span>vietpro </span>Admin</a>
                <ul className="user-menu">
                  <li className="dropdown pull-right">
                    <a href="/" className="dropdown-toggle" data-toggle="dropdown"><svg className="glyph stroked male-user"><use xlinkHref="/stroked-male-user" /></svg> admin <span className="caret" /></a>
                    <ul className="dropdown-menu" role="menu"><li><a href="/"><svg className="glyph stroked male-user"><use xlinkHref="/stroked-male-user" /></svg>Thông tin</a></li>
                      <li><a href="login.html"><svg className="glyph stroked cancel"><use xlinkHref="/stroked-cancel" /></svg> Logout</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>{/* /.container-fluid */}
          </nav>
        );
    }
}

export default Navbar;