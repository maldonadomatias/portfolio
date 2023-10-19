import React from "react";
import { styled } from "styled-components";

const Card = styled.div`
  background-color: var(--shadow-color);
  color: var(--foreground-color);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 115px;
  padding: 1rem;
  width: 24%;
  min-width: 300px;

  &:hover::before {
    opacity: 1;
  }

  &::before,
  &::after {
    border-radius: inherit;
    content: "";
    height: 100%;
    left: 0px;
    opacity: 0;
    position: absolute;
    top: 0px;
    transition: opacity 500ms;
    width: 100%;
  }

  &::before {
    background: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      var(--shine-effect-before),
      transparent 40%
    );
    z-index: 3;
  }

  &::after {
    background: radial-gradient(
      600px circle at var(--mouse-x) var(--mouse-y),
      var(--shine-effect-after),
      transparent 40%
    );
    z-index: 1;
  }

  @media (max-width: 690px) {
    width: 100%;
  }

  svg {
    font-size: 2.5rem;
  }
`;

const Content = styled.div`
  background-color: var(--background-color);
  border-radius: inherit;
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-grow: 1;
  inset: 1px;
  padding: 0.5rem 1rem;
  position: absolute;
  z-index: 2;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 1rem;

  &:hover > ${Card}::after {
    opacity: 1;
  }
`;

interface Props {
  data: Array<any>;
}

const CardsHover = ({ data }: Props) => {
  const handleHoverEffect = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = document.getElementsByClassName(
      "card"
    ) as HTMLCollectionOf<HTMLDivElement>;

    for (const card of cards) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };
  return (
    <CardContainer id="cards" onMouseMove={handleHoverEffect}>
      {data.map((item, index) => (
        <Card className="card" key={index}>
          <Content className="card-content">
            <div>{item.icon}</div>
            <div>
              <h6>{item.title}</h6>
              <p className="p4">{item.description}</p>
            </div>
          </Content>
        </Card>
      ))}
    </CardContainer>
  );
};

export default CardsHover;
