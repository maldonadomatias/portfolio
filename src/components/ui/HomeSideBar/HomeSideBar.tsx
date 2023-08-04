import styled from "styled-components";
import { BiHomeAlt2 } from "react-icons/bi";
import { SiAboutdotme } from "react-icons/si";
import { MdWorkOutline } from "react-icons/md";
import { RiContactsBookLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const SidebarContainer = styled.div`
  position: fixed;
  transform: translate(0, -50%);
  top: 50%;
  right: 2%;
  width: fit-content;
  height: fit-content;
  padding: 20px;
  box-sizing: border-box;
  color: var(--foreground-color);

  @media (max-width: 690px) {
    /* Mobile styles */
    position: fixed;
    bottom: 0;
    top: unset;
    right: 0;
    transform: none;
    width: 100%;
    background-color: var(--background-color);
    box-shadow: 0px -5px 15px var(--shadow-color);
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
  top: ${({ position }) => `${position * 31}%`};
  transition: top 0.3s ease-in-out;

  @media (max-width: 690px) {
    /* Mobile styles */
    display: none;
  }
`;

const HomeSideBar = () => {
  const location = useLocation();

  // Define the sections for the navigation
  const sections = ["#home", "#about-me", "#projects", "#contact"];

  // State variable to track the active section index
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  // Function to find the index of the active section
  const findActiveSectionIndex = () => {
    const index = sections.findIndex((section) => section === location.hash);
    setActiveSectionIndex(index);
  };

  // Call the findActiveSectionIndex function on component mount and whenever the location changes
  useEffect(() => {
    findActiveSectionIndex();
  }, [location]);

  return (
    <SidebarContainer>
      <NavListContainer>
        <NavList>
          <a href="#home">
            <NavItem>
              <p>home</p>
              <BiHomeAlt2 />
            </NavItem>
          </a>
          <a href="#about-me">
            <NavItem>
              <p>about</p>
              <SiAboutdotme />
            </NavItem>
          </a>
          <a href="#projects">
            <NavItem>
              <p>projects</p>
              <MdWorkOutline />
            </NavItem>
          </a>
          <a href="#contact">
            <NavItem>
              <p>contact</p>
              <RiContactsBookLine />
            </NavItem>
          </a>
        </NavList>
        <Line position={activeSectionIndex} />
      </NavListContainer>
    </SidebarContainer>
  );
};

export default HomeSideBar;
