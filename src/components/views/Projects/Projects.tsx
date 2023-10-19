import { Canvas } from "@react-three/fiber";
import SectionContainer from "../../ui/SectionContainer";
import TitleUI from "../../ui/TitleUI";
import Experience from "./Experience";
import styled from "styled-components";
import ScrollGallery from "./ScrollGallery";

const Projects = () => {
  return (
    <SectionContainer id="projects">
      <TitleUI title="projects" />

      <ScrollGallery />
    </SectionContainer>
  );
};

export default Projects;
