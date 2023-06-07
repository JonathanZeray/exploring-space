import { Float } from "@react-three/drei";
import { LandingPageText } from "./canvas/3dText";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import launchAudio from "/assets/Audio/launchAudio.mp3";

export function LandingPage() {
	
	const navigate = useNavigate();
	
	function handleClick() {
		setTimeout(() => {
			navigate("/Explore");
		}, 3000);
	}
	function startAudio () {
		new Audio(launchAudio).play();
	}

  return (
    <div className="relative w-screen h-screen grid ">
      <Canvas>
        {/* <pointLight position={[0, 20, 10]} intensity={1.5}/> */}
        <ambientLight intensity={0.1} />
        <directionalLight color="#e7eaea" position={[0, 0, 5]} />
        <Float speed={0.8}>
          <LandingPageText />
        </Float>
      </Canvas>
      <Loader />
      <button
        onClick={() => {
			handleClick();
			startAudio();
		}}
        className="absolute justify-self-center bottom-1/4 z-1 w-60 p-5 rounded-md bg-indigo-800 text-white text-lg drop-shadow-xl"
      >
        ENTER SPACE
      </button>
    </div>
  );
}
