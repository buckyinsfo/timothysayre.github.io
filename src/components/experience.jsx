import React from 'react';
//import ReactDOM from 'react-dom';
import Modal from'react-modal';
import sampleText from'./sampleText';

class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: 'summary' };
    }

    setActive (category) {
        this.setState({active: category});
    }

    isActive (category) {
        return this.state.active === category ? 'active' : '';
    }

    activeContent () {
        if (this.state.active === 'resume') {
            return this.getModal();
        } else if (this.state.active === 'technologies') {
            return (
                <pre className="experience-content">
                  <center className="icons">
                    <img src="assets/icons/git.png" alt="git"/>
                    <img src="assets/icons/github.png" alt="github"/>
                    <img src="assets/icons/rails.png" alt="rails"/>
                    <img src="assets/icons/javascript.png" alt="javascript"/>
                    <img src="assets/icons/html5.png" alt="html5"/>
                    <img src="assets/icons/css3.png" alt="css3"/>
                    <img src="assets/icons/react.png" alt="react"/><br />
                    <strong>Version Control Systems | </strong> Git / Github / SVN <br /><br />
                    <strong>JavaScript | </strong> JavaScript, React.js, Flux, Redux, Node.js<br /><br />
                    <strong>Languages | </strong> C++, Java, C#, R, Python <br /><br />
                    <strong>Testing Frameworks |</strong> Catch, Google Test, Jasmine, Mocha<br /><br />
                    <strong>Web Design |</strong> CSS3, HTML5<br /><br />
                    <strong>Misc |</strong> OnShape, CAD, CAM, Matlab<br /><br />
                  </center>
                </pre>
            );
        } else {
            return (
                <pre className="experience-content">
                  { sampleText[this.state.active] }
                </pre>
            );
        }
    }

    getModal () {
        let modalStyle = {
            overlay : {
              position          : 'fixed',
              backgroundColor   : 'rgba(255, 255, 255, 0.75)',
              zIndex            : 55,
              display           : 'flex',
              alignItems        : 'center',
              justifyContent    : 'center'
            },
            content : {
              left        : 'auto',
              right       : 'auto',
              padding     : 0,
              overflowY   : 'hidden',
              overflowX   : 'hidden'
          }
      };

/*        const loader = (
            <div className="center-spinner">
              <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
              </div>
            </div>
        );
*/
    return (
      <Modal
        isOpen={true}
        style={modalStyle}
        onRequestClose={ () => this.setState({active: 'summary'}) }>
        <div className="x-button"
          onClick={() => this.setState({active: 'summary'})}>
          <i className="fa fa-times-circle fa-2x" aria-hidden="true"></i>
        </div>
        <div className="modal-content">
          <img className="resume" src="assets/images/TimothySayre.png" alt="resume"/>
        </div>
      </Modal>);
  }

    render () {
        return (
            <div className="experience">
              <div className="experience-circles">
                <div className={"circle " + this.isActive('summary')}
                      onClick={() => this.setActive('summary')}>
                  <div className="text-uppercase">
                      about me
                  </div>
                </div>
                <div className={"circle " + this.isActive('resume')}
                      onClick={() => this.setActive('resume')}>
                  <div className="text-uppercase">
                      resume
                  </div>
                </div>
                <div className={"circle " + this.isActive('projects')}
                      onClick={() => this.setActive('projects')}>
                  <div className="text-uppercase">
                      projects
                  </div>
                </div>
                <div className={"circle " + this.isActive('technologies')}
                      onClick={() => this.setActive('technologies')}>
                  <div className="text-uppercase">
                      skills
                  </div>
                </div>
              </div>
              {this.activeContent()}
            </div>
        );
    }
};

export default Experience;