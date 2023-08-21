import HomeSideBar from "../components/ui/HomeSideBar/HomeSideBar";
import AboutMe from "../components/views/AboutMe/AboutMe";
import Projects from "../components/views/Projects/Projects";
import Welcome from "../components/views/Welcome/Welcome";

const Home = () => {
  return (
    <>
      <HomeSideBar />
      <Welcome />
      <AboutMe />
      <Projects />
    </>
  );
};

export default Home;
