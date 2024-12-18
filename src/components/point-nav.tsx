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
  icon: any; // FontAwesome icon
  text: string;
  index: number;
}

interface PointNavProps {
  setScrollTarget: (event: React.MouseEvent) => void;
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

// Styled Components
const NavContainer = styled.div<StyledNavProps>`
  position: fixed;
  ${(props) => props.position}: ${(props) => props.spacing}px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 50;
  animation: ${fadeIn} 0.5s ease-out;
  padding: 0.5rem;
`;

const NavButtons = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const NavItem = styled.a<NavItemProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0.5rem;
  transition: color 0.3s ease;
  text-decoration: none;

  svg {
    transition: transform 0.3s ease;
    font-size: 2rem;
  }

  &:hover {
    color: ${(props) => props.activeColor};

    svg {
      transform: scale(1.1);
    }

    p {
      opacity: 1;
      transform: translateX(0);
    }
  }

  p {
    margin: 0;
    font-size: 0.8rem;
    opacity: ${(props) => (props.isActive ? 1 : 0)};
    transition: all 0.3s ease;
    position: absolute;
    top: 50%;
    color: ${(props) =>
      props.isActive ? props.activeColor : props.inactiveColor};
    transform: translateY(-50%)
      translateX(${(props) => (props.isActive ? "0" : "20px")});
    ${(props) =>
      props.position === "left"
        ? "left: calc(100% + 10px);"
        : "right: calc(100% + 10px);"}
    white-space: nowrap;
    font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  }

  :focus {
    outline: none;
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
        {navItems.map((item) => (
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
            <FontAwesomeIcon icon={item.icon} />
            <p>{item.text}</p>
          </NavItem>
        ))}
      </NavButtons>
    </NavContainer>
  );
};

export default PointNav;
