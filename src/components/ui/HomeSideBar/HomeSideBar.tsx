import styled from "styled-components";
import { useState } from "react";

import { Link } from "react-scroll";
import { navbarData } from "../../../constants/navbar";

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
    padding: 30px 10px;
    position: fixed;
    bottom: 0;
    top: unset;
    right: 0;
    transform: none;
    width: 100%;
    background-color: var(--background-color);
    border-top: 1px solid var(--foreground-color);
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
  cursor: pointer;
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
  border-radius: 3px;
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
    /* Mobile styles */
    display: none;
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
            <Link
              key={index}
              onSetActive={() => setActiveSectionIndex(index)}
              to={item.link}
              smooth
              spy
              duration={500}
            >
              <NavItem>
                <p>{item.name}</p>
                {item.icon}
              </NavItem>
            </Link>
          ))}
        </NavList>
        <Line position={activeSectionIndex} />
      </NavListContainer>
    </SidebarContainer>
  );
};

export default HomeSideBar;
