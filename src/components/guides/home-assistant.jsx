import React from 'react';
import ReactMarkdown from 'react-markdown';

const HomeAssistantGuide = ({ onBack }) => {
    const guideContent = `<center># Install Home Assistant on Raspberry Pi 4 (Using Docker)</center>

This guide provides step-by-step instructions for setting up Home Assistant on a Raspberry Pi 4 Model B using a 128GB USB stick and Docker.

## Prerequisites
[... rest of the content remains the same ...]`;

    return (
        <div className="guide-container">
            <div className="guide-header">
                <button onClick={onBack} className="back-button">
                    ← Back to Guides
                </button>
                <div className="guide-meta">
                    <span className="guide-date">Last Updated: December 16, 2024</span>
                </div>
            </div>
            <div className="guide-content">
                <ReactMarkdown>{guideContent}</ReactMarkdown>
            </div>
        </div>
    );
};

export default HomeAssistantGuide;