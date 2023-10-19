import { Canvas } from "@react-three/fiber";
import SectionContainer from "../../ui/SectionContainer";
import TitleUI from "../../ui/TitleUI";
import Experience from "./Experience";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--background-color);
  color: var(--foreground-color);
`;

const Projects = () => {
  return (
    <SectionContainer id="projects">
      <TitleUI title="projects" />
      <Container>
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [-2, 1.5, 4],
          }}
        >
          <Experience />
        </Canvas>
      </Container>
    </SectionContainer>
  );
};

export default Projects;
