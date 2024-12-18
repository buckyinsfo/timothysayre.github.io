import React from 'react';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';

interface GuideDisplayProps {
  content: string;
  onBack: () => void;
}

const GuideContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const GuideHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #2c3e50;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }

  &:focus {
    outline: none;
  }
`;

const GuideContent = styled.div`
  line-height: 1.6;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  h2 {
    margin: 2rem 0 1rem;
  }

  pre {
    background: #f6f8fa;
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;
  }

  code {
    background: #f6f8fa;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
  }

  img {
    max-width: 100%;
  }
`;

const GuideDisplay: React.FC<GuideDisplayProps> = ({ content, onBack }) => {
  return (
    <GuideContainer>
      <GuideHeader>
        <BackButton onClick={onBack}>← Back to Guides</BackButton>
      </GuideHeader>
      <GuideContent>
        <ReactMarkdown>{content}</ReactMarkdown>
      </GuideContent>
    </GuideContainer>
  );
};

export default GuideDisplay;