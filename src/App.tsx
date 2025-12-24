import { useEffect, useState } from "react";
import EverySecondLandingPage from "./landingpage";
import usePreloadAssets from "./hooks/usePreloadAssets";
import Loader from "./components/loader";

export default function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isLandscape, setIsLandscape] = useState<boolean>(false);

  const assetsLoaded = usePreloadAssets();

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

  // SHOW LOADER FIRST
  if (!assetsLoaded) return <Loader />;

  // Desktop
  if (!isMobile) return <EverySecondLandingPage />;

  // Mobile Landscape → allow
  if (isMobile && isLandscape) return <EverySecondLandingPage />;

  // Mobile Portrait → Not Supported
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <div>
        <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
          Mobile View Not Supported
        </h2>

        <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
          Currently <strong>TPSYRA</strong> does not support mobile portrait
          view.
          <br />
          Please rotate your device to landscape mode
          <br />
          or open it on a desktop for the best experience.
        </p>
      </div>
    </div>
  );
}
