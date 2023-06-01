import { Canvas } from "@react-three/fiber";
import { Planet } from "./canvas/Planet";
import React, { useState, useEffect } from "react";

// export function Card() {

//   return (
//     <div className=" text-center flex content-center py-10 h-screen flex-wrap">
//       <div className=" basis-1/2">
//         <Canvas className="">
//           <Planet />
//         </Canvas>
//       </div>
//       {DATA.map((info) => {
//       <div key={info.id} className=" w-2/3 bg-cover bg-gradient-to-r from-gray-600 to-gray-900 shadow-lg shadow-[#040c16] group container rounded-md basis-1/3 h-64">
//         <h2 className="text-3xl my-4 font-bold inline border-b-4 text-gray-300 border-gray-800 ">
//           {info.name}
//         </h2>
//         <p className="text-left p-10 flex-grow">
//           {/* {info.info} */}
//         </p>
//       </div>
//       console.log(info.name)
//       })}
//     </div>
//   );
// }

export function Card() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch("../src/data/facts.json");
        const data = await response.json();
        setPlanets(data);
      } catch (error) {
        console.error("Error fetching planets:", error);
      }
    };

    fetchPlanets();
  }, []);

  return (
    <>
      {planets.map((planet) => (
        <div key={planet.id} className=" text-center flex content-center py-10 h-screen flex-wrap">
          <div className=" basis-1/2">
            <Canvas>
              <Planet />
            </Canvas>
          </div>
          <div
            className="text-white pt-6 w-2/3 bg-cover bg-gradient-to-r from-blue-950 to-slate-900 shadow-lg shadow-[#040c16] group container rounded-md basis-1/3"
          >
            <h2 className="text-5xl my-4 font-bold inline border-b-4 border-sky-700 ">
              {planet.name}
            </h2>
            <p className="text-left p-10 flex-grow">{planet.info}</p>
          </div>
        </div>
      ))}
    </>
  );
}
