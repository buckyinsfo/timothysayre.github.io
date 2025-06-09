import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import sampleText from './sampleText';
import Projects from './projects';
import { trackPortfolioEvent } from '../utils/analytics';

Modal.setAppElement('#root');

type ActiveTab = 'summary' | 'resume' | 'projects' | 'technologies';

const modalStyle: Modal.Styles = {
  overlay: {
    position: 'fixed',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    zIndex: 55,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    position: 'relative',
    left: 'auto',
    right: 'auto',
    padding: '20px',
    maxWidth: '95%',
    maxHeight: '95vh',
    margin: 'auto',
    overflow: 'auto'
  }
};

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  padding: 5px;
  transition: color 0.2s;

  &:hover {
    color: #000;
  }

  &:focus {
    outline: none;
  }
`;

const PDFContainer = styled.div`
  width: 100%;
  height: 85vh;
`;

const StyledPDF = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const ContentWrapper = styled.div`
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: inherit;
  line-height: 1.6;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

interface ExperienceProps {
  // Add any props if needed
}

interface SampleTextType {
  summary: string;
  project0: string;
  project1: string;
  project2: string;
  project3: string;
  [key: string]: string;
}

const typedSampleText = sampleText as SampleTextType;

const Experience: React.FC<ExperienceProps> = () => {
  const [active, setActive] = useState<ActiveTab>('summary');

  const handleCloseModal = () => {
    setActive('summary');
    trackPortfolioEvent.viewSection('about'); // Track return to summary
  };

  const handleTabChange = (tab: ActiveTab) => {
    setActive(tab);
    
    // Track section views
    switch (tab) {
      case 'summary':
        trackPortfolioEvent.viewSection('about');
        break;
      case 'resume':
        trackPortfolioEvent.viewResume();
        break;
      case 'projects':
        trackPortfolioEvent.viewSection('projects');
        break;
      case 'technologies':
        trackPortfolioEvent.viewSection('skills');
        break;
    }
  };

  const renderContent = () => {
    if (active === 'technologies') {
      return (
        <ContentWrapper className="experience-content">
          <div className="icons text-center">
            <img src="assets/icons/git.png" alt="git" />
            <img src="assets/icons/github.png" alt="github" />
            <img src="assets/icons/rails.png" alt="rails" />
            <img src="assets/icons/javascript.png" alt="javascript" />
            <img src="assets/icons/html5.png" alt="html5" />
            <img src="assets/icons/css3.png" alt="css3" />
            <img src="assets/icons/react.png" alt="react" /><br />
            <strong>Version Control Systems | </strong> Git / Github / SVN <br /><br />
            <strong>JavaScript | </strong> JavaScript, React.js, Flux, Redux, Node.js<br /><br />
            <strong>Languages | </strong> C++, Java, C#, R, Python <br /><br />
            <strong>Testing Frameworks | </strong> Catch, Google Test, Jasmine, Mocha<br /><br />
            <strong>Web Design | </strong> CSS3, HTML5<br /><br />
            <strong>Misc | </strong> OnShape, CAD, CAM, Matlab<br /><br />
          </div>
        </ContentWrapper>
      );
    } else if (active === 'projects') {
      return <Projects />;
    } else {
      // Default to summary for any other case (including 'summary' and 'resume')
      return (
        <ContentWrapper className="experience-content">
          {typedSampleText.summary}
        </ContentWrapper>
      );
    }
  };

  return (
    <div className="experience">
      <div className="experience-circles">
        <div 
          className={`circle ${active === 'summary' ? 'active' : ''}`}
          onClick={() => handleTabChange('summary')}
        >
          <div className="text-uppercase">
            about me
          </div>
        </div>
        <div 
          className={`circle ${active === 'resume' ? 'active' : ''}`}
          onClick={() => handleTabChange('resume')}
        >
          <div className="text-uppercase">
            resume
          </div>
        </div>
        <div 
          className={`circle ${active === 'projects' ? 'active' : ''}`}
          onClick={() => handleTabChange('projects')}
        >
          <div className="text-uppercase">
            projects
          </div>
        </div>
        <div 
          className={`circle ${active === 'technologies' ? 'active' : ''}`}
          onClick={() => handleTabChange('technologies')}
        >
          <div className="text-uppercase">
            skills
          </div>
        </div>
      </div>
      
      {/* Always render main content */}
      {renderContent()}
      
      {/* Resume Modal - controlled by isOpen prop */}
      <Modal
        isOpen={active === 'resume'}
        style={modalStyle}
        onRequestClose={handleCloseModal}
        contentLabel="Resume"
      >
        <CloseButton
          onClick={handleCloseModal}
          aria-label="Close resume"
        >
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </CloseButton>
        <PDFContainer>
          <StyledPDF
            src="/content/TimothySayre.pdf"
            title="Timothy Sayre's Resume"
          />
        </PDFContainer>
      </Modal>
    </div>
  );
};

export default Experience;