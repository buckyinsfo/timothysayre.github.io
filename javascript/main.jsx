import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import Modal from 'react-modal';
import MainNav from './main_nav';
import PointNav from './point_nav';
import Experience from './experience';
import Projects from'./projects';
import Contact from './contact';

//import * as PageActions from './actions/PageActions';
//import PageStore from './stores/PageStore';



ReactGA.initialize('UA-88860508-1'); //Unique Google Analytics tracking number

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { scrollIndex: 0 };
        console.log( 'constructor called and the scrollIndex is: ' + this.state.scrollIndex );

        // bind references that get passed around.
        this.setScrollTarget = this.setScrollTarget.bind(this);
        this.scrollTo = this.scrollTo.bind(this);
    }

    setScrollTarget (e) {
        let siblings = e.currentTarget.parentElement.children;
        let current = Array.from(siblings).indexOf(e.currentTarget);
        this.scrollTo(current);
    }

    componentDidMount () {
        document.addEventListener('scroll', () => {

            console.log( "window.scrollY: " + window.scrollY + " window.innerHeight: " + window.innerHeight );
            let newScrollIndex = Math.round(window.scrollY / window.innerHeight);
            console.log( "newScrollIndex: " + newScrollIndex );
            this.setState({scrollIndex: newScrollIndex});
            console.log( "componentDidMount: " + newScrollIndex );
        });
    }

    scrollTo (current) {
        let scrollHeight = current * window.innerHeight;
        if (current === 2) { 
            scrollHeight -= 20; 
        }

        clearInterval(this.scrollIndex);

        this.scrollIndex = setInterval(() => {
            if ((window.scrollY > scrollHeight + 5) ||
                (window.scrollY < scrollHeight - 5)) {
                const factor = Math.abs(window.scrollY - scrollHeight);
                let diff = window.scrollY < scrollHeight ? 2 : -2;
                if (factor > 50) diff *= 5;

                let newY = window.scrollY + diff;
                window.scrollTo(0, newY);
            } else {
                clearInterval(this.scrollIndex);
            }
        }, 1);
    }

    render () {
        return(
            <main>
              <MainNav mainLogoClick={ () => this.scrollTo() }/>
              <PointNav setScrollTarget={this.setScrollTarget}
                        scrollIndex={this.state.scrollIndex} />
              <div>
              <section id="main-banner">
                <div className="main-banner-overlay"></div>
                <div className="main-description" onClick={ () => this.scrollTo(0)}>
                  <h1 >TIMOTHY SAYRE</h1>
                  <h3>Trader, Entrepreneur and Software Engineer/Project Manager.</h3>
                </div>
                <div className="down-arrow"
                      onClick={() => this.scrollTo(1)}>
                  <a><i className="fa fa-arrow-circle-down fa-4x"></i></a>
                </div>
              </section>
              <section id="experience">
                <Experience />
              </section>
              <section id="contact">
                <Contact upArrowClick={() => this.scrollTo(0)}/>
              </section>

              </div>
            </main>
        );
    }
};

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render( <App />, document.getElementById('root') );
    Modal.setAppElement( document.getElementById('root') );
});
