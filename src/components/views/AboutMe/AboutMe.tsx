import { styled } from "styled-components";
import SectionContainer from "../../ui/SectionContainer";
import TitleUI from "../../ui/TitleUI";
import { aboutSmallData } from "../../../constants/aboutMe";
import { IMAGE_PATHS } from "../../../constants/imagePaths";
import CardsHover from "./CardsHover";

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 2rem;
  color: var(--foreground-color);

  img {
    width: 300px;
    height: 300px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--shadow-color);
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h3 {
      font-weight: 400;
    }

    p {
      font-weight: 200;
    }
  }

  @media (max-width: 690px) {
    /* Mobile styles */
    flex-direction: column;

    img {
      width: 200px;
      height: 200px;
      order: 2;
    }
  }
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 1rem;

  li {
    font-weight: 300;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: var(--hover-color);
    }
  }

  @media (max-width: 690px) {
    /* Mobile styles */
    align-self: flex-end;
  }
`;

const AboutMe = () => {
  return (
    <SectionContainer id="about-me">
      <TitleUI title="about me" />
      <InfoContainer>
        <img src={IMAGE_PATHS.matias_draw} alt="profile" />
        <div>
          <h3>Matias Maldonado</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quos voluptates voluptatibus
            consequuntur quod voluptate quas doloribus quidem. Quisquam
            voluptatum, quibusdam, quia, quos voluptates voluptatibus
            consequuntur quod voluptate quas doloribus quidem.
          </p>
          <InfoList>
            <li>Github</li>
            <li>Email</li>
            <li>Linkedin</li>
          </InfoList>
        </div>
      </InfoContainer>
      <CardsHover data={aboutSmallData} />
    </SectionContainer>
  );
};

export default AboutMe;
