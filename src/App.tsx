import { useEffect } from "react";
import { useTheme } from "./context/theme-context";
import Home from "./pages/Home";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    // Add or remove the 'dark-mode' class based on the selected theme
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);
  return (
    <>
      <Home />
    </>
  );
}

export default App;
