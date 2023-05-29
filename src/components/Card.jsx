import { Canvas } from "@react-three/fiber";
import { Planet } from "./canvas/Planet";

export function Card() {
  return (
    <div className=" text-center flex content-center py-10 h-screen flex-wrap">
      <div className=" basis-1/2">
        <Canvas className="">
          <Planet></Planet>
        </Canvas>
      </div>
      <div className=" w-2/3 bg-cover bg-gradient-to-r from-gray-600 to-gray-900 shadow-lg shadow-[#040c16] group container rounded-md basis-1/3 h-64 ">
        <h2 className="text-3xl my-4 font-bold inline border-b-4 text-gray-300 border-gray-800 ">
          Mars
        </h2>
        <p className="text-left p-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolor
          necessitatibus voluptatum sapiente quisquam dolorum ullam itaque sunt
          officiis ducimus fuga cumque ratione autem recusandae pariatur
          blanditiis ut aspernatur facere.
        </p>
      </div>
    </div>
  );
}
