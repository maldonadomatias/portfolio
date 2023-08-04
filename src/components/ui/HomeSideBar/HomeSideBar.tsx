import styled from "styled-components";
import { BiHomeAlt2 } from "react-icons/bi";
import { SiAboutdotme } from "react-icons/si";
import { MdWorkOutline } from "react-icons/md";
import { RiContactsBookLine } from "react-icons/ri";

const SidebarContainer = styled.div`
  position: fixed;
  transform: translate(0, -50%);
  top: 50%;
  right: 2%;
  width: 100px;
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
    box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.2);
    border-left: 10px solid #000000;
    border-right: 10px solid #000000;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media (max-width: 690px) {
    /* Mobile styles */
    flex-direction: row;
    gap: 2rem;
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

const HomeSideBar = () => {
  return (
    <SidebarContainer>
      <NavList>
        <NavItem>
          <p>home</p>
          <BiHomeAlt2 />
        </NavItem>
        <NavItem>
          <p>about</p>
          <SiAboutdotme />
        </NavItem>
        <NavItem>
          <p>projects</p>
          <MdWorkOutline />
        </NavItem>
        <NavItem>
          <p>contact</p>
          <RiContactsBookLine />
        </NavItem>
      </NavList>
    </SidebarContainer>
  );
};

export default HomeSideBar;
