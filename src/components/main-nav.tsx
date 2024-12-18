import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTumblr,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Nav = styled.nav`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 70px;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 10;
`;

const Logo = styled.div`
  font-size: 175%;
  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: darkgray;
      transition: color 0.25s linear;
    }
  }
`;

const NavButtons = styled.div`
  a {
    color: inherit;
    margin: 0 1rem;
    text-decoration: none;

    &:hover {
      color: darkgray;
      transition: color 0.25s linear;
    }

    svg {
      font-size: 2rem;
    }
  }
`;

const MainNav: React.FC = () => {
  return (
    <Nav>
      <Logo>
        <a href="/">TIMOTHY SAYRE</a>
      </Logo>
      <NavButtons>
        <a
          href="https://www.linkedin.com/in/timothysayre"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/buckyinsfo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://x.com/buckyinsfo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X Profile"
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
      </NavButtons>
    </Nav>
  );
};

export default MainNav;
