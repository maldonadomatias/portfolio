import styled from "styled-components";

const TextContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  color: var(--foreground-color);

  & h4 {
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 5px;
  }
`;

const Line = styled.div`
  width: 8%;
  height: 10px;
  background-color: var(--foreground-color);
  border-radius: 3px;
`;

interface Props {
  title: string;
}

const TitleUI = ({ title }: Props) => {
  return (
    <TextContainer>
      <h4>{title}</h4>
      <Line />
    </TextContainer>
  );
};

export default TitleUI;