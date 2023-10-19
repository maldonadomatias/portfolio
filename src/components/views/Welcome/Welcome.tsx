import styled from "styled-components";
import { motion } from "framer-motion";
import { isIOS } from "react-device-detect";

import Navbar from "../Navbar/Navbar";

import "./Welcome.css";
import Spacing from "../../../constants/Spacing";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: ${isIOS ? "100dvh" : "100vh"};
  width: 100%;
  color: var(--foreground-color);
  padding: 0 2%;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
`;

const SpanLetter = styled.span`
  line-height: 0.7;
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
          <SpanLetter>m</SpanLetter>
          <SpanLetter>a</SpanLetter>
          <SpanLetter>l</SpanLetter>
          <SpanLetter>d</SpanLetter>
          <SpanLetter
            className="letter"
            style={{ borderRadius: `${Spacing * 2}px` }}
          >
            <span className="inside-letter">front-end.web(developer)</span>
          </SpanLetter>
          <SpanLetter className="mobile-letter">o</SpanLetter>
          <SpanLetter>n</SpanLetter>
          <SpanLetter>a</SpanLetter>
          <SpanLetter>d</SpanLetter>
          <SpanLetter>o</SpanLetter>
          <SpanLetter>.</SpanLetter>
        </div>
      </Title>
    </Container>
  );
};

export default Welcome;
