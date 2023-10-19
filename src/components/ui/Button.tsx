import React from "react";
import styled from "styled-components";
import Spacing from "../../constants/Spacing";

const Container = styled.button`
  border: none;
  padding: 0.5rem 2rem;
  border-radius: ${Spacing}px;
  width: fit-content;
  font-size: 1rem;
  background-color: var(--foreground-color);
  color: var(--background-color);
  font-family: "Manrope", sans-serif;
  font-weight: 600;

  &:hover {
    background-color: var(--shadow-color);
    color: var(--foreground-color);
  }
`;

interface Props {
  onClick?: () => void;
  style?: React.CSSProperties;
  children: any;
}

const Button = ({ onClick, style, children }: Props) => {
  return (
    <Container onClick={onClick} style={style}>
      {children}
    </Container>
  );
};

export default Button;
