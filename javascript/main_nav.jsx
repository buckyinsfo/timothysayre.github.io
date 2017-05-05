import React from 'react';

class MainNav extends React.Component {
    render () {
        let handleClick = this.props.mainLogoClick(0);

        return (
            <nav className="main-nav">
              <a onClick={handleClick}>
                <div className="logo">TIMOTHY SAYRE</div>
              </a>
              <div className="nav-buttons">
                <a href="http://www.linkedin.com/in/timothysayre"
                  target="_blank">
                  <i className="fa fa-linkedin fa-2x"></i>
                </a>
                <a href="http://github.com/buckyinsfo"
                  target="_blank">
                  <i className="fa fa-github fa-2x"></i>
                </a>
                <a href="http://timothysayre.tumblr.com/"
                  target="_blank">
                  <i className="fa fa-tumblr fa-2x"></i>
                </a>
              </div>
            </nav>
        );
    }
};

export default MainNav;