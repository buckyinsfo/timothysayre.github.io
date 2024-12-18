import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
`;

const ContactBox = styled.div`
  max-width: 800px;
  width: 100%;
  text-align: center;
  position: relative;
`;

const ProfileDescription = styled.div`
  margin-bottom: 2rem;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }

  h3 {
    margin-bottom: 2rem;

    a {
      color: inherit;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: #666;
      }
    }
  }

  p {
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`;

const UpArrow = styled.div`
  margin-top: 2rem;
`;

const ScrollTopButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
  padding: 0.5rem;
  transition: color 0.2s, transform 0.2s;

  &:hover {
    color: #666;
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
  }
`;

const Copyright = styled.p`
  font-size: 0.8rem;
  color: #666;
  margin-top: 3rem;
`;

interface ContactProps {
  upArrowClick: (index: number) => void;
}

const Contact: React.FC<ContactProps> = ({ upArrowClick }) => {
  const scrollToTop = () => {
    upArrowClick(1);
  };

  return (
    <ContactContainer>
      <ContactBox>
        <ProfileDescription>
          <h2>CONTACT ME</h2>
          <h3>
            <a
              href="mailto:buckyinsfo@gmail.com"
              aria-label="Send email to buckyinsfo@gmail.com"
            >
              buckyinsfo@gmail.com
            </a>
          </h3>
          <p>
            I am interested in trading, IoT, fintech, healthtech,
            entrepreneurship and microenterprises.
            <br />
            Do you need project management or software engineering for your
            organization or startup project?
            <br />
            Don't hesitate to reach out!
          </p>
          <p className="site-credits">
            Site written using <strong>React.js</strong>.
          </p>
        </ProfileDescription>
        <UpArrow>
          <ScrollTopButton onClick={scrollToTop} aria-label="Scroll to top">
            <FontAwesomeIcon icon={faArrowCircleUp} size="4x" />
          </ScrollTopButton>
        </UpArrow>
        <Copyright>
          © {new Date().getFullYear()} Timothy Sayre. All rights reserved.
        </Copyright>
      </ContactBox>
    </ContactContainer>
  );
};

export default Contact;
