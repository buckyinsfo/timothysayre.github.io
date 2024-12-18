import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFileText,
  faBook,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

// Types
interface NavItem {
  icon: any;
  text: string;
  index: number;
}

interface PointNavProps {
  setScrollTarget: (event: React.MouseEvent<Element, MouseEvent>) => void;
  scrollIndex: number;
  position?: "left" | "right";
  spacing?: number;
  activeColor?: string;
  inactiveColor?: string;
  navItems?: NavItem[];
}

interface StyledNavProps {
  position: "left" | "right";
  spacing: number;
}

interface NavItemProps {
  isActive: boolean;
  activeColor: string;
  inactiveColor: string;
  position: "left" | "right";
}

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const NavContainer = styled.div<StyledNavProps>`
  position: fixed;
  ${(props) => props.position}: ${(props) => props.spacing}px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 50;
  animation: ${fadeIn} 0.5s ease-out;
`;

const NavButtons = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  position: relative;
`;

const CircleWrapper = styled.div<{ isActive: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isActive ? "#000" : "transparent")};
  color: ${(props) => (props.isActive ? "#fff" : "inherit")};
  margin: 0.5rem;

  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: none;
  }
`;

const Line = styled.div`
  position: absolute;
  width: 2px;
  height: 24px;
  background-color: #000;
  left: 50%;
  transform: translateX(-50%);
  bottom: -24px;
`;

const NavItem = styled.a<NavItemProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${(props) => props.inactiveColor};
  text-decoration: none;
  transition: color 0.3s ease;

  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: none;
  }

  p {
    margin: 0;
    font-size: 0.8rem;
    opacity: ${(props) => (props.isActive ? 1 : 0)};
    position: absolute;
    top: 50%;
    transform: translateY(-50%)
      translateX(${(props) => (props.isActive ? "0" : "20px")});
    ${(props) =>
      props.position === "left"
        ? "left: calc(100% + 10px);"
        : "right: calc(100% + 10px);"}
    white-space: nowrap;
    font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
    transition: all 0.3s ease;
  }
`;

const defaultNavItems: NavItem[] = [
  { icon: faHome, text: "Home", index: 0 },
  { icon: faFileText, text: "Experience", index: 1 },
  { icon: faBook, text: "Guides", index: 2 },
  { icon: faCircleInfo, text: "Contact", index: 3 },
];

const PointNav: React.FC<PointNavProps> = ({
  setScrollTarget,
  scrollIndex,
  position = "left",
  spacing = 40,
  activeColor = "#000",
  inactiveColor = "#333",
  navItems = defaultNavItems,
}) => {
  return (
    <NavContainer position={position} spacing={spacing}>
      <NavButtons>
        {navItems.map((item, index) => (
          <NavItem
            key={item.text}
            onClick={setScrollTarget}
            isActive={scrollIndex === item.index}
            activeColor={activeColor}
            inactiveColor={inactiveColor}
            position={position}
            role="button"
            aria-label={`Navigate to ${item.text}`}
            tabIndex={0}
          >
            <CircleWrapper isActive={scrollIndex === item.index}>
              <FontAwesomeIcon icon={item.icon} size="2x" />
            </CircleWrapper>
            {index < navItems.length - 1 && <Line />}
            <p>{item.text}</p>
          </NavItem>
        ))}
      </NavButtons>
    </NavContainer>
  );
};

export default PointNav;