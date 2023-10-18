import { styled } from "styled-components";
import { motion, useInView } from "framer-motion";

import SectionContainer from "../../ui/SectionContainer";
import TitleUI from "../../ui/TitleUI";
import { aboutSmallData } from "../../../constants/aboutMe";
import { IMAGE_PATHS } from "../../../constants/imagePaths";
import CardsHover from "./CardsHover";
import { slideUp } from "../../../animations/animation";
import { useRef } from "react";

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 2rem;
  color: var(--foreground-color);

  img {
    width: 300px;
    height: 300px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--shadow-color);
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h3 {
      font-weight: 400;
    }

    p {
      font-weight: 200;
    }
  }

  @media (max-width: 690px) {
    /* Mobile styles */
    flex-direction: column;

    img {
      width: 200px;
      height: 200px;
      order: 2;
    }
  }
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 1rem;

  li {
    font-weight: 300;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: var(--hover-color);
    }
  }

  @media (max-width: 690px) {
    /* Mobile styles */
    align-self: flex-end;
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
`;

const Body = styled.div`
  max-width: 1400px;
  display: flex;
  gap: 50px;
  position: relative;

  p {
    &:nth-of-type(1) {
      span {
        margin-right: 3px;
        font-weight: 400;
        font-size: 1.2rem;
      }
      .mask {
        position: relative;
        overflow: hidden;
        display: inline-flex;
      }
    }
  }
`;

const AboutMe = () => {
  const phrase =
    "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <SectionContainer id="about-me">
      <TitleUI title="about me" />
      <InfoContainer ref={description}>
        <img src={IMAGE_PATHS.matias_draw} alt="profile" />
        <Description>
          <h3>Matias Maldonado</h3>
          <Body>
            <p>
              {phrase.split(" ").map((word, index) => {
                return (
                  <span key={index} className="mask">
                    <motion.span
                      variants={slideUp}
                      custom={index}
                      animate={isInView ? "open" : "closed"}
                      key={index}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </p>
          </Body>
          <InfoList>
            <li>Github</li>
            <li>Email</li>
            <li>Linkedin</li>
          </InfoList>
        </Description>
      </InfoContainer>
      <CardsHover data={aboutSmallData} />
    </SectionContainer>
  );
};

export default AboutMe;
