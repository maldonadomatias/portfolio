import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Spacing from "../../../constants/Spacing";
import { Project } from "../../../constants/aboutMe";

const CardContainer = styled.div`
  background-color: var(--background-color);
  border: 2px solid var(--shadow-color);
  color: var(--foreground-color);
  border-radius: ${Spacing}px;
  padding: ${Spacing * 2}px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: 300px;
  max-width: 600px;
  position: relative;
  gap: ${Spacing * 2}px;

  @media (max-width: 690px) {
    /* Mobile styles */
    min-width: 0;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    max-width: 300px;
  }
`;

const Title = styled.div``;

const FlashcardsContainer = styled.div`
  max-width: 100%;
  white-space: nowrap;
  overflow-x: scroll;
  perspective: 150px;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled(motion.div)<{ img: string }>`
  position: relative;
  display: inline-block;
  height: 300px;
  width: 300px;
  background: url(${(props) => props.img});
  background-size: cover;
  margin: 2rem 1rem;
  border-radius: ${Spacing}px;
  cursor: pointer;

  @media (max-width: 690px) {
    /* Mobile styles */
    height: 200px;
    width: 200px;
  }
`;

interface Props {
  project: Project;
}

const Flashcards: React.FC<Props> = ({ project }) => {
  return (
    <CardContainer>
      <Title>
        <h3>
          {project.title1}.{project.title2}
        </h3>
        <p>{project.description}</p>
      </Title>
      <FlashcardsContainer>
        {project.images.map((card) => (
          <Card className="card" key={card} img={card} />
        ))}
      </FlashcardsContainer>
    </CardContainer>
  );
};

export default Flashcards;
