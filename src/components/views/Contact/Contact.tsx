import { styled } from "styled-components";
import SectionContainer from "../../ui/SectionContainer";
import TitleUI from "../../ui/TitleUI";
import { Form } from "./Form";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { scrollToTop, slideUpSlow } from "../../../animations/animation";
import Spacing from "../../../constants/Spacing";
import Button from "../../ui/Button";
import Copyright from "../Copyright";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: var(--foreground-color);
  width: 100%;
  gap: ${Spacing * 2}px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 100%;
  gap: 2rem;
  color: var(--foreground-color);

  img {
    width: 300px;
    height: 300px;
    aspect-ratio: 1/1;
    border-radius: ${Spacing}px;
    object-fit: cover;
    border: 3px solid var(--shadow-color);
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

const Description = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-weight: 400;
  }

  p {
    font-weight: 200;
  }
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
        font-size: 1.1rem;
      }
      .mask {
        position: relative;
        overflow: hidden;
        display: inline-flex;
      }
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
`;

const ScrollToTopButton = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  background-color: var(--foreground-color);
  color: var(--background-color);
  position: relative;
  z-index: 1;
  border-radius: ${Spacing}px;
`;

const Contact = () => {
  const phrase = "Let's get started on your next project.";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <SectionContainer id="contact">
      <TitleUI title="contact" />{" "}
      <Container>
        <InfoContainer ref={description}>
          <Description>
            <h3>Interested in working together?</h3>
            <Body>
              <p>
                {phrase.split(" ").map((word, index) => {
                  return (
                    <span key={index} className="mask">
                      <motion.span
                        variants={slideUpSlow}
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
          </Description>
        </InfoContainer>
        <Form />
      </Container>
      <ButtonContainer>
        <ScrollToTopButton
          variants={scrollToTop}
          initial="hidden"
          animate="visible"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          go to the top
        </ScrollToTopButton>
        <Copyright />
      </ButtonContainer>
    </SectionContainer>
  );
};

export default Contact;
