import React, { useState } from 'react';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';

interface GuideDisplayProps {
  content: string;
  onBack: () => void;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.95);
  display: flex;
  justify-content: center;
  align-items: start;
  overflow-y: auto;
  z-index: 1000;
`;

const GuideContainer = styled.div`
  max-width: 900px;
  margin: 2rem auto;
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
    position: relative;
    margin: 1rem 0;
  }

  code {
    background: #f6f8fa;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-family: monospace;
  }

  img {
    max-width: 100%;
  }
`;

const CodeBlock = styled.div`
  position: relative;
`;

const CopyButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8rem;
  transition: all 0.2s;
  z-index: 1;

  &:hover {
    background: #f0f0f0;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0,0,0,0.1);
  }
`;

const CustomPre: React.FC<React.ComponentProps<'pre'>> = (props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Extract text content from the code block
    const codeElement = props.children as React.ReactElement;
    const textContent = codeElement?.props?.children || '';
    
    // Handle both string and array of strings
    const plainText = Array.isArray(textContent) 
      ? textContent.join('\n') 
      : textContent;

    navigator.clipboard.writeText(plainText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <CodeBlock>
      <CopyButton onClick={handleCopy} type="button">
        <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
        {copied ? 'Copied!' : 'Copy'}
      </CopyButton>
      <pre {...props} />
    </CodeBlock>
  );
};

const GuideDisplay: React.FC<GuideDisplayProps> = ({ content, onBack }) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onBack();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <GuideContainer onClick={e => e.stopPropagation()}>
        <GuideHeader>
          <BackButton onClick={onBack}>← Back to Guides</BackButton>
        </GuideHeader>
        <GuideContent>
          <ReactMarkdown
            components={{
              pre: CustomPre
            }}
          >
            {content}
          </ReactMarkdown>
        </GuideContent>
      </GuideContainer>
    </Overlay>
  );
};

export default GuideDisplay;