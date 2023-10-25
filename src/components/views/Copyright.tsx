import styled from "styled-components";

const Container = styled.div`
  color: var(--foreground-color);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const Copyright = () => {
  return (
    <Container>
      <p>© 2021 by Matias Maldonado - All rights reserved.</p>
    </Container>
  );
};

export default Copyright;
