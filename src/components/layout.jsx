import React from 'react'
import ReactGA from 'react-ga'
import MainNav from './main_nav'
import PointNav from './point_nav'
import Experience from './experience'
import Contact from './contact'

ReactGA.initialize('UA-88860508-1') //Unique Google Analytics tracking number

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            scrollIndex: 0, 
            height: 0 
        }
    }

    componentDidMount () {
        document.addEventListener('scroll', this.onScroll.bind(this))
        window.addEventListener("resize", this.updateHeight.bind(this))
    }

    componentWillUnMount () {
        document.removeEventListener('scroll', this.onScroll.bind(this))
        window.removeEventListener("resize", this.updateHeight.bind(this))
    }

    logPageView() {
        ReactGA.set({ page: window.location.pathname + window.location.search })
        ReactGA.pageview(window.location.pathname + window.location.search)
    }

    onScroll() {
        let newScrollIndex = Math.round(window.scrollY / window.innerHeight)
        this.setState({scrollIndex: newScrollIndex})
    }

    updateHeight() {
        this.setState({ height: window.innerHeight })
    }

    setScrollTarget (e) {
        let siblings = e.currentTarget.parentElement.children
        let current = Array.from(siblings).indexOf(e.currentTarget)
    }

    scrollTo (current) {
        let scrollHeight = current * window.innerHeight
        if (current === 2) {
            scrollHeight -= 20
        }

        clearInterval(this.scrollIndex)

        this.scrollIndex = setInterval( function() {
            if (( window.scrollY > scrollHeight + 10 ) || ( window.scrollY < scrollHeight - 10  )) {
                const factor = Math.abs(window.scrollY - scrollHeight)
                   let diff = window.scrollY < scrollHeight ? 2 : -2
                if (factor > 50) diff *= 5

                const newY = window.scrollY + diff
                window.scrollTo(0, newY)
            } else {
                clearInterval(this.scrollIndex)
            }
        }, 2)

    }

    render () {

        const setScrollTarget = () => this.setScrollTarget()

        return(
            <div>
              <MainNav height={this.state.height} />
              <PointNav setScrollTarget={setScrollTarget}
                        scrollIndex={this.state.scrollIndex} />
              <div>
              < section id="main-banner">
                <div className="main-banner-overlay"></div>
                <div className="main-description">
                  <h1 >TIMOTHY SAYRE</h1>
                  <h3>Trader, Entrepreneur, Software Engineer and Project Manager.</h3>
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
            </div>
        )
    }
}

export default Layout


/*

 */