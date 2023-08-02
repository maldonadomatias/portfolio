import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  padding: 0 2rem;
  top: 1rem;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;

const DarkMode = styled.div`
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Logo>mm.</Logo>
      <DarkMode>dark mode.</DarkMode>
    </Container>
  );
};

export default Navbar;
