import styled from "styled-components";
import "./Welcome.css";
import Navbar from "../Navbar/Navbar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: var(--foreground-color);
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
`;

const Welcome = () => {
  return (
    <Container>
      <Navbar />
      <Title>
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
