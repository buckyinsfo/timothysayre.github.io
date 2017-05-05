import React from 'react';

class Contact extends React.Component {
  render () {
    return (
      <div className="contact-container">
        <div className="contact-box">
          <div className="profile-description">
            <h2>CONTACT ME</h2>
            <h3>buckyinsfo@gmail.com</h3>
            <p>
              I am interested in trading, entrepreneurship, reshoring and fintech.
              <br />Do you need project management or software engineering for your organization or startup project?
              <br />
              Don't hesitate to reach out! 
              <br /><br />
              Photographs by <strong>tdzign</strong>.
              <br /><br />
              Site written by <strong>Timothy Sayre</strong> using <strong>React.js</strong>.
            </p>
          </div>
          <div className="up-arrow" onClick={this.props.upArrowClick}>
            <a><i className="fa fa-arrow-circle-up fa-4x"></i></a>
          </div>
        </div>
      </div>
    );
  }
};

export default Contact;