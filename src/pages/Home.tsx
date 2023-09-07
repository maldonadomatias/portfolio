import HomeSideBar from "../components/ui/HomeSideBar/HomeSideBar";
import AboutMe from "../components/views/AboutMe/AboutMe";
import Contact from "../components/views/Contact/Contact";
import Projects from "../components/views/Projects/Projects";
import Welcome from "../components/views/Welcome/Welcome";

const Home = () => {
  return (
    <>
      <HomeSideBar />
      <Welcome />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
