import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useState } from "react";

const PAGE_WIDTH = 1.5;
const PAGE_HEIGHT = 2.2;

const TOTAL_PAGES = 18; // 18 planes
const TOTAL_IMAGES = 36; // 36 textures (front + back)

// Helper to format 000 → 036
const padNum = (n: number) => n.toString().padStart(3, "0");

type PageProps = {
  index: number;
  frontTexture: THREE.Texture;
  backTexture: THREE.Texture;
  currentPage: number;
};

const Page: React.FC<PageProps> = ({
  index,
  frontTexture,
  backTexture,
  currentPage,
}) => {
  const group = useRef<THREE.Group>(null!);

  useFrame(() => {
    const isLeftStack = index <= currentPage;
    const targetRotation = isLeftStack ? -Math.PI : 0;

    if (group.current) {
      group.current.rotation.y +=
        (targetRotation - group.current.rotation.y) * 0.15;
    }
  });

  return (
    <group ref={group} position={[index * 0.002, 0, 0]}>
      {/* FRONT */}
      <mesh position={[-PAGE_WIDTH / 2, 0, 0]}>
        <planeGeometry args={[PAGE_WIDTH, PAGE_HEIGHT]} />
        <meshStandardMaterial map={frontTexture} side={THREE.FrontSide} />
      </mesh>

      {/* BACK */}
      <mesh rotation={[0, Math.PI, 0]} position={[PAGE_WIDTH / 2, 0, 0]}>
        <planeGeometry args={[PAGE_WIDTH, PAGE_HEIGHT]} />
        <meshStandardMaterial map={backTexture} side={THREE.FrontSide} />
      </mesh>
    </group>
  );
};

const BookScene: React.FC<{ currentPage: number }> = ({ currentPage }) => {
  const textures = useTexture(
    Array.from(
      { length: TOTAL_IMAGES },
      (_, i) => `/src/assets/mag/${padNum(i)}.png`
    )
  ) as THREE.Texture[];

  const pages = Array.from({ length: TOTAL_PAGES }).map((_, i) => ({
    front: textures[i * 2],
    back: textures[i * 2 + 1],
  }));

  return (
    <>
      <ambientLight intensity={1.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.7} />

      <group>
        {pages.map((p, i) => (
          <Page
            key={i}
            index={i}
            frontTexture={p.front}
            backTexture={p.back}
            currentPage={currentPage}
          />
        ))}
      </group>

      <OrbitControls enableZoom />
    </>
  );
};

const Book: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  let startX = 0;

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const endX = e.changedTouches[0].clientX;
    if (endX - startX > 50) prevPage();
    if (startX - endX > 50) nextPage();
  };

  const nextPage = () =>
    setCurrentPage((p) => Math.min(p + 1, TOTAL_PAGES - 1));

  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 0));

  return (
    <div
      className="w-screen h-screen bg-black flex flex-col items-center justify-center"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <BookScene currentPage={currentPage} />
      </Canvas>

      <div className="absolute bottom-10 flex gap-6">
        <button
          onClick={prevPage}
          className="px-6 py-2 bg-white text-black font-semibold rounded"
        >
          Previous
        </button>

        <button
          onClick={nextPage}
          className="px-6 py-2 bg-white text-black font-semibold rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Book;
