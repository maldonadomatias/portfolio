import { styled } from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  min-height: 100vh;
  gap: 4rem;
  padding: 0 2%;
`;

const SectionContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default SectionContainer;
