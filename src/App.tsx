import { useEffect, useState } from "react";
import { useTheme } from "./context/theme-context";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import LottieLoader from "./components/ui/Lotties/LottieLoader";

function App() {
  const { theme } = useTheme();

  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");

  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 3000);
  }

  useEffect(() => {
    // Add or remove the 'dark-mode' class based on the selected theme
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  if (loading) {
    return <LottieLoader />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
