import styled from "styled-components";
import { useTheme } from "../../../context/theme-context";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  padding: 0 2rem;
  top: 1rem;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;

const ThemeMode = styled.div`
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
`;

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <Container
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Logo>mm.</Logo>
      <ThemeMode onClick={handleClick}>
        {theme === "light" ? "dark" : "light"} mode.
      </ThemeMode>
    </Container>
  );
};

export default Navbar;
