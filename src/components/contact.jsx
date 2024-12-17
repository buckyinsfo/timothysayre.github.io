import React from 'react';

const Contact = ({ upArrowClick }) => {
    const scrollToTop = () => {
        upArrowClick(1);
    };

    return (
        <div className="contact-container">
            <div className="contact-box">
                <div className="profile-description">
                    <h2>CONTACT ME</h2>
                    <h3>
                        <a 
                            href="mailto:buckyinsfo@gmail.com"
                            aria-label="Send email to buckyinsfo@gmail.com"
                        >
                            buckyinsfo@gmail.com
                        </a>
                    </h3>
                    <p>
                        I am interested in trading, IoT, fintech, healthtech, entrepreneurship and reshoring.
                        <br />
                        Do you need project management or software engineering for your organization or startup project?
                        <br />
                        Don't hesitate to reach out!
                    </p>
                    <p className="site-credits">
                        Site written by <strong>Timothy Sayre</strong> using <strong>React.js</strong>.
                    </p>
                </div>
                <div className="up-arrow">
                    <button 
                        onClick={scrollToTop}
                        className="scroll-top-button"
                        aria-label="Scroll to top"
                    >
                        <i className="fa fa-arrow-circle-up fa-4x"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;