import React from 'react'
import ReactGA from 'react-ga'
import MainNav from './main_nav'
import PointNav from './point_nav'
import Experience from './experience'
import Contact from './contact'

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            scrollIndex: 0,
            scrollHeight: 0,
            timerId: null,
        }
    }

    componentDidMount () {
        document.addEventListener('scroll', this.onScroll)

        ReactGA.initialize('UA-88860508-1') //Unique Google Analytics tracking number
        this.logPageView()
    }

    componentWillUnMount () {
        document.removeEventListener('scroll', this.onScroll)
    }

    logPageView = () => {
        ReactGA.set({ page: window.location.pathname + window.location.search })
        ReactGA.pageview(window.location.pathname + window.location.search)
    }

    onScroll = () => {
        // Update the index on the point_nav component.
        const newScrollIndex = Math.round(window.scrollY / window.innerHeight)
        this.setState({scrollIndex: newScrollIndex})
    }

    setScrollTarget = (ev) => {
        console.log( ev )
        const siblings = ev.currentTarget.parentElement.children
        const index = Array.from(siblings).indexOf(ev.currentTarget)

        this.startScrollToIndex(index)
    }

    startScrollToIndex = ( index ) => {
        let scrollHeight = index * window.innerHeight
        if (index === 2) {
            scrollHeight -= 20
        }

        clearInterval( this.state.timerId )

        this.setState({ scrollHeight: scrollHeight })

        const id = setInterval( this.autoScrollToHt, 2)
        this.setState({ timerId: id })
    }

    autoScrollToHt = ( ) => {
        const v_offset = 10

        if (( window.scrollY > this.state.scrollHeight + v_offset ) || ( window.scrollY < this.state.scrollHeight - v_offset  )) {
            const factor = Math.abs(window.scrollY - this.state.scrollHeight)

            let diff = window.scrollY < this.state.scrollHeight ? 2 : -2
            if ( factor > 50 ) {
                diff *= 5
            }

            const newY = window.scrollY + diff
            console.log( 'NewY = ' + newY )
            window.scrollTo(0, newY)
        } else {
            console.log( 'Stopping timer' )
            clearInterval( this.state.timerId )
        }
    }

    render () {

        return(
            <div>
              <MainNav />
              <PointNav setScrollTarget={ this.setScrollTarget }
                        scrollIndex={this.state.scrollIndex} />
              <div>
              < section id="main-banner">
                <div className="main-banner-overlay"></div>
                <div className="main-description">
                  <h1 >TIMOTHY SAYRE</h1>
                  <h3>Trader, Entrepreneur, Software Engineer and Project Manager.</h3>
                </div>
                <div className="down-arrow"
                      onClick={() => this.startScrollToIndex(1)}>
                  <a><i className="fa fa-arrow-circle-down fa-4x"></i></a>
                </div>
              </section>
              <section id="experience">
                <Experience />
              </section>
              <section id="contact">
                  <Contact upArrowClick={ this.startScrollToIndex } />
              </section>

              </div>
            </div>
        )
    }
}

export default Layout
