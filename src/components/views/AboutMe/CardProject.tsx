import styled from "styled-components";
import Spacing from "../../../constants/Spacing";

const Card = styled.div`
  background-color: var(--background-color);
  color: var(--foreground-color);
  border-radius: ${Spacing}px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 115px;
  padding: 1rem;
  width: 24%;
  min-width: 300px;
`;

const CardProject = () => {
  return <Card>CardProject</Card>;
};

export default CardProject;
