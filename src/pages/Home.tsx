import { isMobile } from "react-device-detect";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";

import HomeSideBar from "../components/ui/HomeSideBar/HomeSideBar";
import AboutMe from "../components/views/AboutMe/AboutMe";
import Contact from "../components/views/Contact/Contact";
import Projects from "../components/views/Projects/Projects";
import Welcome from "../components/views/Welcome/Welcome";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Home = () => {
  useDocumentTitle("matias maldonado | home");
  return (
    <>
      {!isMobile && <Cursor isGelly={true} animationDuration={0.1} />}
      <div data-cursor-size="20px" data-cursor-color="var(--foreground-color)">
        <HomeSideBar />
        <Welcome />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default Home;
