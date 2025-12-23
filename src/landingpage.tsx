import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import * as THREE from "three";
import "./App.css";
import ProcrastinationSpread from "./pages/procastination";
import NavigationPanel from "./components/navigation";
import CoverPage from "./pages/cover";
import BackOfCover from "./pages/backOfCover";
import EditorialPage from "./pages/editorial";

THREE.TextureLoader.prototype.crossOrigin = "anonymous";

/**
 * ===========================
 *  SOURCE OF TRUTH
 * ===========================
 */
const sections = [
  {
    title: "Introductory",
    articles: [
      "Cover",
      "About Our College",
      "Editorial Board",
      "Note From Principal & President",
      "Contents",
    ],
  },
  {
    title: "Exploration Of The Wise Mind",
    articles: [
      "Section Intro",
      "Evolution of mental health from misconceptions to modern care",
      "Lessons from 60s and the Future of Therapy: Psychedelic",
      "Inkblots to Algorithms",
      "History & Future of Happiness",
      "AI & Brain Revolution",
      "Mindful Planet",
    ],
  },
  {
    title: "Popcorn Perspective",
    articles: [
      "Section Intro",
      "Why we love horror",
      "Untold story of Arun",
      "Frames of influence",
      "Schindler's list",
      "Stanford Prison",
      "Psychology of influence",
    ],
  },
  {
    title: "Mental Health Advocacy",
    articles: [
      "Section Intro",
      "I hate pink",
      "Man Tears Matter",
      "Love & Loss",
      "Procrastination",
    ],
  },
  {
    title: "Psychology, We Live Without Noticing",
    articles: [
      "Section Intro",
      "Power of smiling",
      "Illusion of time",
      "Debates to dialogue",
      "Double life of gossip",
      "Social engineering",
    ],
  },
  {
    title: "When Dream Catches The Flight",
    articles: [
      "Section Intro",
      "Everything is not same & When mental health speaks",
      "In the crack & மௌனத்தின் மொழி",
      "தேவை",
      "Level up",
      "Cross Word",
      "Art therapy",
    ],
  },
];

// Flatten articles
const ALL_ARTICLES = sections.flatMap((s) => s.articles);

const ARTICLE_PAGES: Record<number, React.ReactNode> = {
  0: <CoverPage />,
  1: <BackOfCover />,
  2: <EditorialPage />,
  23: <ProcrastinationSpread />,
  //  7: <LoveLossSpread />,
  //  12: <StanfordPrisonSpread />,
};

// // Create matching images
// const IMAGES = ALL_ARTICLES.map(
//   (_, i) => `https://picsum.photos/320/450?random=${i + 1}`
// );
const IMAGES = Array.from({ length: ALL_ARTICLES.length }).map((_, i) => {
  const file = i.toString().padStart(3, "0"); // 000 → 039
  return new URL(`/src/assets/mag/${file}.png`, import.meta.url).href;
});
/* ---------------- SLIDE ---------------- */
function Slide({
  url,
  index,
  selectedIndex,
  hoveredIndex,
  setSelectedIndex,
  setHoveredIndex,
}: any) {
  const ref = useRef<any>(null);

  const tex = useTexture(url);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.generateMipmaps = false;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;

  const BASE_Z = index * -0.52;
  const CLICK_GAP = 0.55;
  const HOVER_GAP = 0.35;

  useFrame(() => {
    if (!ref.current) return;

    let targetZ = BASE_Z;
    let targetScale = 1;

    // CLICK FULL VIEW
    if (selectedIndex === index) {
      targetZ = 3.2;
      targetScale = 4.2;
    }

    // CLICK SPACING
    else if (selectedIndex !== null) {
      if (index < selectedIndex) targetZ = BASE_Z + CLICK_GAP;
      if (index > selectedIndex) targetZ = BASE_Z - CLICK_GAP;
    }

    // HOVER MODE (Works for BOTH: slide hover + article hover)
    else if (hoveredIndex !== null) {
      if (index < hoveredIndex) targetZ = BASE_Z + HOVER_GAP;
      if (index > hoveredIndex) targetZ = BASE_Z - HOVER_GAP;
      if (index === hoveredIndex) targetScale = 1.8;
    }

    ref.current.position.z = THREE.MathUtils.lerp(
      ref.current.position.z,
      targetZ,
      0.08
    );

    ref.current.scale.set(
      THREE.MathUtils.lerp(ref.current.scale.x, targetScale, 0.12),
      THREE.MathUtils.lerp(ref.current.scale.y, targetScale, 0.12),
      1
    );

    ref.current.renderOrder = selectedIndex === index ? 999 : index;
  });

  return (
    <group position={[0, 0, BASE_Z]}>
      <mesh
        ref={ref}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedIndex(index);
        }}
        onPointerOver={() => setHoveredIndex(index)}
        onPointerOut={() => setHoveredIndex(null)}
      >
        <planeGeometry args={[2.5, 1.6]} />
        <meshBasicMaterial map={tex} transparent />
      </mesh>
    </group>
  );
}

/* ---------------- STACK ---------------- */
function SlidesStack({
  selectedIndex,
  hoveredIndex,
  setSelectedIndex,
  setHoveredIndex,
}: any) {
  return (
    <group>
      {IMAGES.map((url, i) => (
        <Slide
          key={i}
          url={url}
          index={i}
          selectedIndex={selectedIndex}
          hoveredIndex={hoveredIndex}
          setSelectedIndex={setSelectedIndex}
          setHoveredIndex={setHoveredIndex}
        />
      ))}
    </group>
  );
}

/* ---------------- PAGE ---------------- */
export default function EverySecondLandingPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="w-screen h-screen bg-white relative overflow-hidden">
      {/* Header Restored */}
      <div className="absolute top-4 left-4 z-20">
        <p className="text-xs uppercase tracking-widest text-gray-600">
          Powered By Novaturients (Dec 24, 2025)
        </p>
        <p className="text-sm font-medium">
          TPSYRA : Thiagarajar's Psychological Reflection On Mental Awakening
        </p>
      </div>

      {/* Navigation */}
      <NavigationPanel
        sections={sections}
        hoveredIndex={hoveredIndex}
        selectedIndex={selectedIndex}
        setHoveredIndex={setHoveredIndex}
        setSelectedIndex={setSelectedIndex}
      />

      {/* Guide Restored */}
      <div className="absolute bottom-4 right-4 text-gray-700 text-sm z-20 text-right">
        <p className="font-medium">Guide</p>
        <p>Hover & Click → Preview, Fullscreen & Details</p>
        <p>ESC or Close to Exit</p>
      </div>

      {/* Overlay */}
      {selectedIndex !== null && (
        <div className="absolute inset-0 bg-black/65 backdrop-blur-sm z-10" />
      )}

      {selectedIndex !== null && (
        <div className="absolute inset-0 z-40">
          {/* FULL VIEW CONTAINER WITH 30px MARGIN */}
          <div
            className="
    absolute top-1/2 left-1/2
    -translate-x-1/2 -translate-y-1/2
    w-[76%] h-[90%]
    rounded-md overflow-hidden p-1
    shadow-2xl bg-white
  "
          >
            {ARTICLE_PAGES[selectedIndex] ? (
              ARTICLE_PAGES[selectedIndex]
            ) : (
              <img
                src={IMAGES[selectedIndex]}
                className="w-full h-full object-contain"
              />
            )}
          </div>
          {/* TOP CLOSE BUTTON */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-[60]">
            <button
              onClick={() => setSelectedIndex(null)}
              className="px-6 py-1 rounded-full bg-gray-200 text-black shadow-xl text-sm hover:scale-105 duration-200"
            >
              Close
            </button>
          </div>

          {/* LEFT TRANSPARENT NAV ZONE */}
          <div
            className="absolute left-0 top-0 h-full w-[10%] z-[50]
             flex items-center justify-center group cursor-pointer"
            onClick={() => {
              if (selectedIndex !== 0) setSelectedIndex((prev) => prev! - 1);
            }}
          >
            {/* Disable click if first */}
            {selectedIndex === 0 ? null : (
              <div className="opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-black text-5xl select-none">‹</span>
              </div>
            )}
          </div>

          {/* RIGHT TRANSPARENT NAV ZONE */}
          <div
            className="absolute right-0 top-0 h-full w-[10%] z-[50]
             flex items-center justify-center group cursor-pointer"
            onClick={() => {
              if (selectedIndex !== ALL_ARTICLES.length - 1)
                setSelectedIndex((prev) => prev! + 1);
            }}
          >
            {selectedIndex === ALL_ARTICLES.length - 1 ? null : (
              <div className="opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-black text-5xl select-none">›</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3D */}
      <Canvas camera={{ position: [17.037, 4.348, 10.922], fov: 60 }}>
        <color attach="background" args={["#f3f3f3"]} />
        <ambientLight intensity={1.2} />

        <Suspense fallback={null}>
          <SlidesStack
            selectedIndex={selectedIndex}
            hoveredIndex={hoveredIndex}
            setSelectedIndex={setSelectedIndex}
            setHoveredIndex={setHoveredIndex}
          />
        </Suspense>

        <OrbitControls
          enabled={selectedIndex === null}
          target={[3.53, 0.017, -6.84]}
        />
      </Canvas>
    </div>
  );
}

/*

      {selectedIndex !== null && (
        <div className="absolute inset-0 z-30 flex items-center justify-center">

          <div className="relative z-40  overflow-auto  bg-white/10 backdrop-blur-x">

            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-10 left-1/2 -translate-x-1/2 
                  rounded-full bg-transparent text-white shadow-lg"
            >
              Close
            </button>


            <button
              disabled={selectedIndex === 0}
              onClick={() => setSelectedIndex((prev) => prev! - 1)}
              className={`absolute left-6 top-1/2 -translate-y-1/2 text-white text-3xl 
          px-4 py-2 rounded-full bg-black/60 hover:bg-black transition 
          ${selectedIndex === 0 ? "opacity-30 cursor-not-allowed" : ""}`}
            >
              ‹
            </button>


            <button
              disabled={selectedIndex === ALL_ARTICLES.length - 1}
              onClick={() => setSelectedIndex((prev) => prev! + 1)}
              className={`absolute right-6 top-1/2 -translate-y-1/2 text-white text-3xl
          px-4 py-2 rounded-full bg-black/60 hover:bg-black transition 
          ${
            selectedIndex === ALL_ARTICLES.length - 1
              ? "opacity-30 cursor-not-allowed"
              : ""
          }`}
            >
              ›
            </button>


            <div className="bg-transparent">
              <ProcrastinationSpread />
            </div>
          </div>
        </div>
      )}
*/
