import SectionContainer from "../../ui/SectionContainer";
import TitleUI from "../../ui/TitleUI";
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
