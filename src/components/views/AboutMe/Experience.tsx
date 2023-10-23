import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { projects } from "../../../constants/aboutMe";
import CustomModal from "../../ui/CustomModal";

import CardProject from "./CardProject";

const Gallery = styled.div``;

const ProjectContainer = styled.div`
  position: relative;
  z-index: 1;
  border-top: 2px solid var(--shadow-color);
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
    padding: 0;
    color: var(--foreground-color);
  }

  p:nth-of-type(1) {
    margin-right: 0.75vw;
  }

  p:nth-of-type(2) {
    margin-left: 0.75vw;
  }

  &:last-of-type {
    border-bottom: 2px solid var(--shadow-color);
  }
`;

const ImageContainer = styled(motion.div)`
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 0;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 10vw;
    max-width: 100px;
    filter: grayscale(100%);

    @media (max-width: 690px) {
      width: 20vw;
    }
  }
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--shadow-color);
`;

const anim = {
  initial: { width: 0 },
  open: {
    width: "auto",
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { width: 0 },
};

const Project = ({ project, open }: any) => {
  const { title1, title2, src } = project;
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <ProjectContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={open}
    >
      <p>{title1}</p>
      <ImageContainer variants={anim} animate={isActive ? "open" : "closed"}>
        {src ? <img src={src} /> : <Logo>mm.</Logo>}
      </ImageContainer>
      <p>{title2}</p>
    </ProjectContainer>
  );
};

const Experience = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Gallery>
      <CustomModal open={openModal} onClose={() => setOpenModal(false)}>
        <CardProject />
      </CustomModal>
      {projects.map((project, i) => (
        <Project key={i} project={project} open={() => setOpenModal(true)} />
      ))}
    </Gallery>
  );
};

export default Experience;
