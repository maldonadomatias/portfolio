import { styled } from "styled-components";
import SectionContainer from "../../ui/SectionContainer";
import TitleUI from "../../ui/TitleUI";
import { aboutSmallData } from "../../../constants/aboutMe";

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
    border-radius: 50%;
    object-fit: cover;
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

const AboutCardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 690px) {
    /* Mobile styles */
    grid-template-columns: repeat(1, 1fr);
  }
`;

const AboutSmallCard = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 1rem;
  gap: 1rem;
  display: flex;
  height: 100%;
  background-color: var(--white-color);
  color: var(--foreground-color);
  border: 2px solid var(--foreground-color);

  svg {
    font-size: 2.5rem;
  }
`;

const AboutMe = () => {
  return (
    <SectionContainer id="about-me">
      <TitleUI title="about me" />
      <InfoContainer>
        <img src="https://via.placeholder.com/300" alt="profile" />
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
      <AboutCardContainer>
        {aboutSmallData.map((item, index) => (
          <AboutSmallCard key={index}>
            <div>{item.icon}</div>
            <div>
              <h6>{item.title}</h6>
              <p className="p4">{item.description}</p>
            </div>
          </AboutSmallCard>
        ))}
      </AboutCardContainer>
    </SectionContainer>
  );
};

export default AboutMe;
