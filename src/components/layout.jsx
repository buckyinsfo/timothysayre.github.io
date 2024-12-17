import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import MainNav from './main-nav';
import PointNav from './point_nav';
import Experience from './experience';
import Contact from './contact';
import Guides from './guides';
import './guides.css';

const Layout = () => {
    const [scrollIndex, setScrollIndex] = useState(0);
    const [targetScrollHeight, setTargetScrollHeight] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [animationFrameId, setAnimationFrameId] = useState(null);

    useEffect(() => {
        // Initialize Google Analytics
        ReactGA.initialize('UA-88860508-1');
        logPageView();

        // Add scroll listener
        window.addEventListener('scroll', onScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', onScroll);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    const logPageView = () => {
        ReactGA.set({ page: window.location.pathname + window.location.search });
        ReactGA.pageview(window.location.pathname + window.location.search);
    };

    const onScroll = () => {
        if (!isScrolling) {
            const newScrollIndex = Math.round(window.scrollY / window.innerHeight);
            setScrollIndex(newScrollIndex);
        }
    };

    const setScrollTarget = (ev) => {
        const siblings = ev.currentTarget.parentElement.children;
        const index = Array.from(siblings).indexOf(ev.currentTarget);
        startScrollToIndex(index);
    };

    const startScrollToIndex = (index) => {
        let newScrollHeight = index * window.innerHeight;
        if (index === 3) { // Adjusted for guides section
            newScrollHeight -= 20;
        }

        // Cancel any existing animation
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }

        setTargetScrollHeight(newScrollHeight);
        setIsScrolling(true);
        
        // Start the smooth scroll animation
        const startPosition = window.scrollY;
        const startTime = performance.now();
        const duration = 1000; // Animation duration in milliseconds

        const animateScroll = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smoother animation
            const easeInOutCubic = progress => {
                return progress < 0.5
                    ? 4 * progress * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            };

            const currentProgress = easeInOutCubic(progress);
            const currentPosition = startPosition + (newScrollHeight - startPosition) * currentProgress;
            
            window.scrollTo(0, currentPosition);

            if (progress < 1) {
                const newFrameId = requestAnimationFrame(animateScroll);
                setAnimationFrameId(newFrameId);
            } else {
                setIsScrolling(false);
                setAnimationFrameId(null);
            }
        };

        requestAnimationFrame(animateScroll);
    };

    return (
        <div>
            <MainNav />
            <PointNav 
                setScrollTarget={setScrollTarget}
                scrollIndex={scrollIndex} 
            />
            <div>
                <section id="main-banner">
                    <div className="main-banner-overlay"></div>
                    <div className="main-description">
                        <h1>TIMOTHY SAYRE</h1>
                        <h3>Trader, Entrepreneur, Software Engineer and Project Manager.</h3>
                    </div>
                    <div 
                        className="down-arrow"
                        onClick={() => startScrollToIndex(1)}
                    >
                        <i className="fa fa-arrow-circle-down fa-4x"></i>
                    </div>
                </section>
                <section id="experience">
                    <Experience />
                </section>
                <section id="guides">
                    <Guides />
                </section>
                <section id="contact">
                    <Contact upArrowClick={startScrollToIndex} />
                </section>
            </div>
        </div>
    );
};

export default Layout;