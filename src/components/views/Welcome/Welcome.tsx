import styled from "styled-components";
import { motion } from "framer-motion";

import Navbar from "../Navbar/Navbar";

import "./Welcome.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  color: var(--foreground-color);
  padding: 0 2%;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
`;

const Welcome = () => {
  return (
    <Container id="home">
      <Navbar />
      <Title
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        matias{" "}
        <div className="main">
          <span>m</span>
          <span>a</span>
          <span>l</span>
          <span>d</span>
          <span className="letter">
            <span className="inside-letter">front-end.web(developer)</span>
          </span>
          <span className="mobile-letter">o</span>
          <span>n</span>
          <span>a</span>
          <span>d</span>
          <span>o</span>
          <span>.</span>
        </div>
      </Title>
    </Container>
  );
};

export default Welcome;
