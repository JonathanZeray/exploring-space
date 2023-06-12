import { LandingPageText } from "./canvas/3dText";
import { Canvas } from "@react-three/fiber";
import { Loader, PresentationControls, Float } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import launchAudio from "/assets/Audio/launchAudio.mp3";
import { Background } from "./canvas/Background";

export function LandingPage() {
  const navigate = useNavigate();

  function startAudio() {
    new Audio(launchAudio).play();
  }

  function handleClick() {
    setTimeout(() => {
      navigate("/Explore");
    }, 2000);
  }

  return (
    <div className="relative w-screen h-screen grid ">
      <Background count={2000} />
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="#e7eaea" position={[0, 0, 5]} />
        <PresentationControls
        snap={true} >
        <Float speed={0.8}>
          <LandingPageText />
        </Float>
        </PresentationControls>
      </Canvas>
      <Loader />
      <button
        onClick={() => {
          handleClick();
          startAudio();
        }}
        className="absolute justify-self-center bottom-1/4 z-1 w-60 p-5 rounded-md bg-indigo-800 hover:bg-indigo-600 text-white text-lg drop-shadow-xl"
      >
        ENTER SPACE
      </button>
    </div>
  );
}
