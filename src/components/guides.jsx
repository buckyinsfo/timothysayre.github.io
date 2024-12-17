import React, { useState } from 'react';
import HomeAssistantGuide from './guides/home-assistant';
import MediaPipeGuide from './guides/mediapipe-setup';

const Guides = () => {
    const [selectedGuide, setSelectedGuide] = useState(null);

    const guides = [
        {
            id: 'mediapipe',
            title: 'MediaPipe Setup on Raspberry Pi',
            description: 'Complete guide for setting up MediaPipe object detection on a Raspberry Pi 4/5.',
            component: MediaPipeGuide,
            date: 'September 26, 2024'
        },
        {
            id: 'home-assistant',
            title: 'Home Assistant on Raspberry Pi 4',
            description: 'Step-by-step guide for setting up Home Assistant using Docker on a Raspberry Pi 4.',
            component: HomeAssistantGuide,
            date: 'December 16, 2024'
        }
    ];

    if (selectedGuide) {
        const GuideComponent = selectedGuide.component;
        return <GuideComponent onBack={() => setSelectedGuide(null)} />;
    }

    return (
        <div className="guides-section">
            <h2>Technical Guides</h2>
            <div className="guides-grid">
                {guides.map(guide => (
                    <div 
                        key={guide.id} 
                        className="guide-card"
                        onClick={() => setSelectedGuide(guide)}
                    >
                        <h3>{guide.title}</h3>
                        <p>{guide.description}</p>
                        <span className="guide-date">Last Updated: {guide.date}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Guides;