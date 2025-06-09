import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import GuideDisplay from "./guide-display";

interface Guide {
  id: string;
  title: string;
  description: string;
  date: string;
  content?: string;
}

const GuidesSection = styled.div`
  padding: 5rem 2rem 0 2rem;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const GuidesHeader = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`;

const GuidesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const GuideCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  h3 {
    margin: 0 0 1rem 0;
    color: #2c3e50;
    text-align: center;
  }

  p {
    color: #666;
    margin-bottom: 1rem;
  }

  .guide-date {
    color: #888;
    font-size: 0.9rem;
  }
`;

const guides: Guide[] = [
  {
    id: "mediapipe-rpi-setup",
    title: "MediaPipe Setup on Raspberry Pi",
    description:
      "Complete guide for setting up MediaPipe object detection on a Raspberry Pi 4/5.",
    date: "July 16, 2024",
  },
  {
    id: "codeproject-ai-rpi-setup",
    title: "CodeProject.AI on a Raspberry Pi",
    description:
      "Step-by-step guide for setting up CodeProject.AI using Docker on a Raspberry Pi 4.",
    date: "September 26, 2024",
  },
  {
    id: "home-assistant-rpi4-setup",
    title: "Home Assistant on Raspberry Pi 4",
    description:
      "Step-by-step guide for setting up Home Assistant using Docker on a Raspberry Pi 4.",
    date: "December 16, 2024",
  },
];

const Guides: React.FC = () => {
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);
  const [guideContent, setGuideContent] = useState<string>("");

  useEffect(() => {
    const loadGuideContent = async (id: string) => {
      try {
        const response = await fetch(`/content/guides/${id}.md`);
        const content = await response.text();
        setGuideContent(content);
      } catch (error) {
        console.error("Error loading guide content:", error);
        setGuideContent("Error loading guide content. Please try again later.");
      }
    };

    if (selectedGuide) {
      loadGuideContent(selectedGuide.id);
    }
  }, [selectedGuide]);

  if (selectedGuide && guideContent) {
    return (
      <GuideDisplay
        content={guideContent}
        onBack={() => setSelectedGuide(null)}
      />
    );
  }

  return (
    <GuidesSection>
      <GuidesHeader>Technical Guides</GuidesHeader>
      <GuidesGrid>
        {guides.map((guide) => (
          <GuideCard key={guide.id} onClick={() => setSelectedGuide(guide)}>
            <h3>{guide.title}</h3>
            <p>{guide.description}</p>
            <span className="guide-date">Last Updated: {guide.date}</span>
          </GuideCard>
        ))}
      </GuidesGrid>
    </GuidesSection>
  );
};

export default Guides;
