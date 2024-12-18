import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import ReactGA from "react-ga";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import MainNav from "./main-nav";
import PointNav from "./point-nav";
import Experience from "./experience";
import Contact from "./contact";
import Guides from "./guides";

const MainContainer = styled.div`
  position: relative;
`;

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const MainBanner = styled(Section)`
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url("/assets/images/mountains.jpg");
  background-size: cover; /* Ensures the image covers the entire area */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents tiling */
  position: relative;
  height: 100vh; /* Full viewport height */
`;

const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1;
`;

const MainDescription = styled.div`
  position: relative;
  z-index: 2;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: normal;
  }
`;

const DownArrow = styled.div`
  position: absolute;
  bottom: 7rem;
  cursor: pointer;
  z-index: 2;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(5px);
  }
`;

const Layout: React.FC = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [targetScrollHeight, setTargetScrollHeight] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [animationFrameId, setAnimationFrameId] = useState<number | null>(null);

  useEffect(() => {
    ReactGA.initialize("UA-88860508-1");
    logPageView();
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
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

  const setScrollTarget = (ev: React.MouseEvent<Element, MouseEvent>) => {
    const siblings = ev.currentTarget.parentElement?.children;
    if (siblings) {
      const index = Array.from(siblings).indexOf(ev.currentTarget);
      startScrollToIndex(index);
    }
  };

  const startScrollToIndex = (index: number) => {
    const headerHeight = 200; // MainNav height
    let newScrollHeight = index * window.innerHeight;

    // Adjust for header height on all sections except the first one
    if (index > 0) {
      newScrollHeight += headerHeight;
    }

    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }

    setTargetScrollHeight(newScrollHeight);
    setIsScrolling(true);

    const startPosition = window.scrollY;
    const startTime = performance.now();
    const duration = 1000;

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const currentProgress = easeInOutCubic(progress);
      const currentPosition =
        startPosition + (newScrollHeight - startPosition) * currentProgress;

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
    <MainContainer>
      <MainNav />
      <PointNav setScrollTarget={setScrollTarget} scrollIndex={scrollIndex} />
      <ContentSection>
        <MainBanner id="main-banner">
          <BannerOverlay />
          <MainDescription>
            <h1>TIMOTHY SAYRE</h1>
            <h3>Trader, Entrepreneur, Software Engineer, Project Manager.</h3>
          </MainDescription>
          <DownArrow onClick={() => startScrollToIndex(1)}>
            <FontAwesomeIcon icon={faArrowCircleDown} size="4x" />
          </DownArrow>
        </MainBanner>
        <Section id="experience">
          <Experience />
        </Section>
        <Section id="guides">
          <Guides />
        </Section>
        <Section id="contact">
          <Contact upArrowClick={startScrollToIndex} />
        </Section>
      </ContentSection>
    </MainContainer>
  );
};

export default Layout;
