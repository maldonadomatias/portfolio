import styled from "styled-components";
import "./Welcome.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
`;

const Welcome = () => {
  return (
    <Container>
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
          <span>n</span>
          <span>a</span>
          <span>d</span>
          <span>o</span>
        </div>
      </Title>
    </Container>
  );
};

export default Welcome;
