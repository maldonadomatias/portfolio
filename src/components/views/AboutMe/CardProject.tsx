import React from "react";
import styled from "styled-components";

import { Project } from "../../../constants/aboutMe";
import Spacing from "../../../constants/Spacing";
import CustomTooltip from "../../ui/CustomTooltip";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

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

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Logo = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  padding: ${Spacing / 2}px;
  background-color: var(--background-color);
  box-shadow: 0 0 0 2px var(--shadow-color);
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${Spacing}px;

  li {
    padding-left: ${Spacing}px;
    border-left: 2px solid var(--foreground-color);
    position: relative;
  }
`;

const ScrollableContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

const FlashcardsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${Spacing * 2}px;
  overflow: scroll;
  width: 100%;
`;

const Icon = styled.div`
  width: 50px;
  min-width: 50px;
  height: 50px;
  fill: var(--foreground-color);
  color: var(--foreground-color);

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${Spacing}px;
  border: 2px solid var(--shadow-color);
  padding: ${Spacing}px;
  border-radius: ${Spacing}px;
  width: fit-content;
  min-width: 200px;
  height: 200px;
  text-align: center;
  overflow: scroll;

  svg {
    width: 50px;
    height: 50px;
    fill: var(--foreground-color);
    color: var(--foreground-color);
  }
`;

interface Props {
  project: Project;
}

const Flashcards: React.FC<Props> = ({ project }) => {
  return (
    <CardContainer>
      <Title>
        <div>
          <h3>
            {project.title1}.{project.title2}
          </h3>
          <p>{project.description}</p>
        </div>
        <Logo src={project.src} alt={project.title1} />
      </Title>
      <List>
        {project.list?.map((item) => (
          <li>{item}</li>
        ))}
      </List>
      <ScrollableContainer>
        <ArrowLeft />
        <FlashcardsContainer>
          {project.projects?.map((item) => (
            <a href={item.link} target="_blank" rel="noreferrer">
              <Projects>
                {item.icon}
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </Projects>
            </a>
          ))}
          {project.tech?.map((card) => {
            return (
              <CustomTooltip title={card.name}>
                <Icon>{card.icon}</Icon>
              </CustomTooltip>
            );
          })}
        </FlashcardsContainer>
        <ArrowRight />
      </ScrollableContainer>
    </CardContainer>
  );
};

export default Flashcards;
