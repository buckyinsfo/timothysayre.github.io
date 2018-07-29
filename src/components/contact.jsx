import React from 'react'

const Contact = ({ upArrowClick }) => {

    const scrollToTop = () => {
        upArrowClick(1)
    }

    return (
        <div className="contact-container">
            <div className="contact-box">
                <div className="profile-description">
                    <h2>CONTACT ME</h2>
                    <h3>buckyinsfo@gmail.com</h3>
                    <p>
                        I am interested in trading, iot, fintech, healthtech, entrepreneurship and reshoring.
                        <br />Do you need project management or software engineering for your organization or startup project?
                        <br />Don't hesitate to reach out!
                        <br /><br />Site written by <strong>Timothy Sayre</strong> using <strong>React.js</strong>.
                    </p>
                </div>
                <div className="up-arrow">
                    <a onClick={scrollToTop} ><i className="fa fa-arrow-circle-up fa-4x"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Contact