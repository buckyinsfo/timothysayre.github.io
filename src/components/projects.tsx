import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import sampleText from "./sampleText";
import { trackPortfolioEvent } from '../utils/analytics';

interface ProjectsState {
  focused: number;
}

interface SampleTextType {
  project0: string;
  project1: string;
  project2: string;
  project3: string;
  [key: string]: string;
}

class Projects extends Component<{}, ProjectsState> {
  private interval?: NodeJS.Timeout;
  private typedSampleText: SampleTextType;

  constructor(props: {}) {
    super(props);
    this.state = { focused: 0 };
    this.typedSampleText = sampleText as SampleTextType;

    // Bind methods
    this.onRightArrow = this.onRightArrow.bind(this);
    this.onLeftArrow = this.onLeftArrow.bind(this);
    this.arrestInterval = this.arrestInterval.bind(this);
    this.resumeInterval = this.resumeInterval.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.resumeInterval();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    this.arrestInterval();
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    if (window.innerWidth > 800) {
      this.resumeInterval();
    } else {
      this.arrestInterval();
      this.setState({ focused: 0 });
    }
  };

  arrestInterval() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }

  resumeInterval() {
    if (!this.interval && window.innerWidth > 800) {
      this.interval = setInterval(() => this.onRightArrow(), 3000);
    }
  }

  onRightArrow() {
    this.setState({ focused: (this.state.focused + 1) % 4 });
    this.trackCurrentProject();
  }

  onLeftArrow() {
    this.setState({ focused: (this.state.focused - 1 + 4) % 4 });
    this.trackCurrentProject();
  }

  trackCurrentProject() {
    const projectNames = ['Miniframe', 'Harvst', 'Headlines AI', 'Trading Game'];
    trackPortfolioEvent.viewProject(projectNames[this.state.focused]);
  }

  handleProjectLinkClick = (projectName: string, linkType: 'github' | 'live') => {
    trackPortfolioEvent.clickProjectLink(projectName, linkType);
  };

  getSliderStyle(): React.CSSProperties {
    // When inside experience container, use percentage-based calculation
    const containerElement = document.querySelector(
      ".experience .project-container"
    );
    if (containerElement) {
      const containerWidth = containerElement.clientWidth;
      return {
        marginLeft: -(this.state.focused * containerWidth),
      };
    }
    // Fallback to original calculation
    // return {
    //   marginLeft: -(this.state.focused * window.innerWidth * 0.62)
    // };
  }

  render() {
    const { focused } = this.state;

    return (
      <div>
        <div className="project-container-container">
          <FontAwesomeIcon
            icon={faChevronLeft}
            size="4x"
            className="mobile-disappear"
            onClick={this.onLeftArrow}
            style={{ cursor: "pointer", color: "black" }}
          />
          <div className="project-container">
            <div
              className="project-slider"
              onMouseEnter={this.arrestInterval}
              onMouseLeave={this.resumeInterval}
              style={this.getSliderStyle()}
            >
              {/* Project 1 - Miniframe */}
              <div className="project project-1">
                <div className="project-overlay">
                  <h1>Miniframe</h1>
                  <p>{this.typedSampleText.project1}</p>
                  <div>
                    <a
                      href="https://github.com/buckyinsfo/thinkscript.git"
                      aria-label="Github"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => this.handleProjectLinkClick('Miniframe', 'github')}
                    >
                      <FontAwesomeIcon icon={faGithub} size="4x" />
                    </a>
                    <a
                      href="https://miniframe.herokuapp.com/"
                      aria-label="See it live!"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => this.handleProjectLinkClick('Miniframe', 'live')}
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} size="4x" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2 - Harvst */}
              <div className="project project-2">
                <div className="project-overlay">
                  <h1>Harvst</h1>
                  <p>{this.typedSampleText.project2}</p>
                  <div>
                    <a
                      href="https://github.com/buckyinsfo/bitstarter.git"
                      aria-label="Github"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} size="4x" />
                    </a>
                    <a
                      href="https://miniframe.herokuapp.com/"
                      aria-label="See it live!"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} size="4x" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 3 - Headlines App */}
              <div className="project project-3">
                <div className="project-overlay">
                  <h1>Headlines AI</h1>
                  <p>{this.typedSampleText.project2}</p>
                  <div>
                    <a
                      href="https://github.com/buckyinsfo/"
                      aria-label="Github"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} size="4x" />
                    </a>
                    <a
                      href="#"
                      aria-label="See it live!"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} size="4x" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 4 - ThreeJS Trading Game */}
              <div className="project project-4">
                <div className="project-overlay">
                  <h1>Trading Game</h1>
                  <p>{this.typedSampleText.project3}</p>
                  <div>
                    <a
                      href="https://github.com/buckyinsfo/"
                      aria-label="Github"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} size="4x" />
                    </a>
                    <a
                      href="#"
                      aria-label="See it live!"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} size="4x" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FontAwesomeIcon
            icon={faChevronRight}
            size="4x"
            className="mobile-disappear"
            onClick={this.onRightArrow}
            style={{ cursor: "pointer", color: "black" }}
          />
        </div>

        {/* Navigation dots */}
        <div className="project-nav mobile-disappear">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={
                focused === index
                  ? "project-nav-button active"
                  : "project-nav-button"
              }
              onClick={() => this.setState({ focused: index })}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
