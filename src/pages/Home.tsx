import HomeSideBar from "../components/ui/HomeSideBar/HomeSideBar";
import AboutMe from "../components/views/AboutMe/AboutMe";
import Welcome from "../components/views/Welcome/Welcome";

const Home = () => {
  return (
    <>
      <HomeSideBar />
      <Welcome />
      <AboutMe />
    </>
  );
};

export default Home;
