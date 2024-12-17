import React from 'react';
import ReactMarkdown from 'react-markdown';

const MediaPipeGuide = ({ onBack }) => {
    const guideContent = `<center># Setting Up MediaPipe Object Detection on Raspberry Pi</center>

This guide provides step-by-step instructions for setting up MediaPipe's object detection example on a Raspberry Pi 4 or 5.

## Prerequisites
[... rest of the content remains the same ...]`;

    return (
        <div className="guide-container">
            <div className="guide-header">
                <button onClick={onBack} className="back-button">
                    ← Back to Guides
                </button>
                <div className="guide-meta">
                    <span className="guide-date">Last Updated: September 26, 2024</span>
                </div>
            </div>
            <div className="guide-content">
                <ReactMarkdown>{guideContent}</ReactMarkdown>
            </div>
        </div>
    );
};

export default MediaPipeGuide;