import React, { useState } from 'react';
import Modal from 'react-modal';
import sampleText from './sampleText';

Modal.setAppElement('#root'); // Required for accessibility

const Experience = () => {
    const [active, setActive] = useState('summary');

    const isActive = (category) => active === category ? 'active' : '';

    const modalStyle = {
        overlay: {
            position: 'fixed',
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            zIndex: 55,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        content: {
            left: 'auto',
            right: 'auto',
            padding: 0,
            overflowY: 'hidden',
            overflowX: 'hidden'
        }
    };

    const ResumeModal = () => (
        <Modal
            isOpen={true}
            style={modalStyle}
            onRequestClose={() => setActive('summary')}
            contentLabel="Resume"
        >
            <button 
                className="x-button"
                onClick={() => setActive('summary')}
                aria-label="Close resume"
            >
                <i className="fa fa-times-circle fa-2x" aria-hidden="true"></i>
            </button>
            <div className="modal-content">
                <img 
                    className="resume" 
                    src="assets/images/TimothySayre.png" 
                    alt="Timothy Sayre's Resume" 
                />
            </div>
        </Modal>
    );

    const TechnologiesContent = () => (
        <pre className="experience-content">
            <div className="icons text-center">
                <img src="assets/icons/git.png" alt="Git" />
                <img src="assets/icons/github.png" alt="GitHub" />
                <img src="assets/icons/rails.png" alt="Ruby on Rails" />
                <img src="assets/icons/javascript.png" alt="JavaScript" />
                <img src="assets/icons/html5.png" alt="HTML5" />
                <img src="assets/icons/css3.png" alt="CSS3" />
                <img src="assets/icons/react.png" alt="React" />
                <br />
                <strong>Version Control Systems | </strong> Git / Github / SVN <br /><br />
                <strong>JavaScript | </strong> JavaScript, React.js, Flux, Redux, Node.js<br /><br />
                <strong>Languages | </strong> C++, Java, C#, R, Python <br /><br />
                <strong>Testing Frameworks | </strong> Catch, Google Test, Jasmine, Mocha<br /><br />
                <strong>Web Design | </strong> CSS3, HTML5<br /><br />
                <strong>Misc | </strong> OnShape, CAD, CAM, Matlab<br /><br />
            </div>
        </pre>
    );

    const renderContent = () => {
        switch (active) {
            case 'resume':
                return <ResumeModal />;
            case 'technologies':
                return <TechnologiesContent />;
            default:
                return (
                    <pre className="experience-content">
                        {sampleText[active]}
                    </pre>
                );
        }
    };

    return (
        <div className="experience">
            <div className="experience-circles">
                {[
                    { id: 'summary', label: 'about me' },
                    { id: 'resume', label: 'resume' },
                    { id: 'projects', label: 'projects' },
                    { id: 'technologies', label: 'skills' }
                ].map(({ id, label }) => (
                    <button
                        key={id}
                        className={`circle ${isActive(id)}`}
                        onClick={() => setActive(id)}
                    >
                        <div className="text-uppercase">
                            {label}
                        </div>
                    </button>
                ))}
            </div>
            {renderContent()}
        </div>
    );
};

export default Experience;