import { Float } from "@react-three/drei"
import { LandingPageText } from "./canvas/3dText"
import { Canvas } from "@react-three/fiber"

export function LandingPage () {
	return (
		<div className="relative w-screen h-screen grid ">
			<Canvas>
				{/* <pointLight position={[0, 20, 10]} intensity={1.5}/> */}
				<ambientLight intensity={0.1} />
				<directionalLight color="#e7eaea" position={[0, 0, 5]}/>
				<Float>
				<LandingPageText />
				</Float>
			</Canvas>
			<button className="absolute justify-self-center bottom-60 z-1 w-60 p-5 rounded-md bg-indigo-800 text-white text-lg drop-shadow-xl">ENTER SPACE</button>
		</div>
	)
}