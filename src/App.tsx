import { useEffect, useState } from "react";
import { useTheme } from "./context/theme-context";
import { Route, Routes } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LottieLoader from "./components/ui/Lotties/LottieLoader";
import Home from "./pages/Home";

function App() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // Add or remove the 'dark-mode' class based on the selected theme
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <>
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        {loading ? (
          <motion.div
            key="preloader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LottieLoader />
          </motion.div>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
