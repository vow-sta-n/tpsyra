import { useEffect, useState } from "react";

export default function usePreloadAssets() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const imagePaths = import.meta.glob("../assets/**/*.{png,jpg,jpeg,gif}", {
      eager: true,
    });

    const videoPaths = import.meta.glob("../assets/**/*.{mp4,webm}", {
      eager: true,
    });

    const loaders: Promise<void>[] = [];

    // Load Images
    Object.values(imagePaths).forEach((mod: any) => {
      loaders.push(
        new Promise((resolve) => {
          const img = new Image();
          img.src = mod.default;
          img.onload = () => resolve();
          img.onerror = () => resolve();
        })
      );
    });

    // Load Videos
    Object.values(videoPaths).forEach((mod: any) => {
      loaders.push(
        new Promise((resolve) => {
          const video = document.createElement("video");
          video.src = mod.default;
          video.preload = "auto";
          video.oncanplaythrough = () => resolve();
          video.onerror = () => resolve();
        })
      );
    });

    Promise.all(loaders).then(() => setLoaded(true));
  }, []);

  return loaded;
}
