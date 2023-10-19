import styled from "styled-components";
import { useState } from "react";

import { Link } from "react-scroll";
import { navbarData } from "../../../constants/navbar";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
import Magnetic from "../Magnetic/Magnetic";
import Spacing from "../../../constants/Spacing";

const SidebarContainer = styled.div`
  position: fixed;
  z-index: 100;
  transform: translate(0, -50%);
  top: 50%;
  right: 1%;
  width: fit-content;
  height: fit-content;
  padding: 40px 0px;
  box-sizing: border-box;
  color: var(--foreground-color);

  @media (max-width: 690px) {
    /* Mobile styles */
    height: 70px;
    padding: 0;
    position: fixed;
    bottom: 0;
    top: unset;
    right: 0;
    transform: none;
    width: 100%;
    background-color: var(--background-color);
    border-top: 1px solid var(--shadow-color);
  }
`;

const NavListContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media (max-width: 690px) {
    /* Mobile styles */
    flex-direction: row;
    gap: 2rem;
    width: 100%;
    justify-content: space-around;
  }

  a {
    width: 100%;
    max-width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const NavItem = styled.li`
  width: 100px;
  transform: rotate(90deg);
  font-size: 1rem;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--foreground-color);
  transition: all 0.2s ease-in-out;

  &:hover {
    font-weight: 600;
  }

  svg {
    display: none;
  }

  @media (max-width: 690px) {
    /* Mobile styles */
    transform: none;

    svg {
      display: block;
      font-size: 2rem;
      transition: all 0.2s ease-in-out;
      color: var(--foreground-color);

      &:active {
        transform: scale(0.9);
      }
    }

    p {
      display: none;
    }
  }
`;

const Line = styled.div<{ position: number }>`
  border-radius: ${Spacing}px;
  width: 30px;
  height: 7px;
  background-color: var(--foreground-color);
  transform: rotate(90deg);
  order: -1;
  position: absolute;
  right: 12px;
  top: ${({ position }) => (position === -1 ? `0%` : `${position * 31}%`)};
  transition: top 0.3s ease-in-out;

  @media (max-width: 690px) {
    display: none;
  }
`;

const NavItemLine = styled(motion.div)`
  display: none;

  @media (max-width: 690px) {
    position: absolute;
    top: 0;
    display: block;
    background-color: var(--foreground-color);
    /* Mobile styles */
    border-radius: ${Spacing}px;
    height: 5px;
    width: 60px;
  }
`;

const HomeSideBar = () => {
  // State variable to track the active section index
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  return (
    <SidebarContainer>
      <NavListContainer>
        <NavList>
          {navbarData.map((item, index) => (
            <Magnetic key={index}>
              <Link
                onSetActive={() => setActiveSectionIndex(index)}
                to={item.link}
                smooth
                spy
                duration={500}
              >
                <NavItem>
                  {activeSectionIndex === index && (
                    <NavItemLine
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.25,
                        ease: [0, 0.71, 0.2, 2.01],
                      }}
                    />
                  )}
                  <p>{item.name}</p>
                  <IconButton>{item.icon}</IconButton>
                </NavItem>
              </Link>
            </Magnetic>
          ))}
        </NavList>
        <Line position={activeSectionIndex} />
      </NavListContainer>
    </SidebarContainer>
  );
};

export default HomeSideBar;
