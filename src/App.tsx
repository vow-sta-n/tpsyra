import { useEffect, useState } from "react";
import EverySecondLandingPage from "./landingpage";
import Book from "./mobileLandingPage";

export default function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isLandscape, setIsLandscape] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setIsMobile(width <= 900);

      setIsLandscape(width > height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  // --------------------------------
  // RENDER LOGIC
  // --------------------------------

  if (!isMobile) return <EverySecondLandingPage />;

  if (isMobile && isLandscape) return <EverySecondLandingPage />;

  return <Book />;
}
