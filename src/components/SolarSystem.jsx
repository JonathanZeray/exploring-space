export function SolarSystem() {
  return (
    <div className="grid place-items-center w-screen my-4 h-screen">
      <h2 className="text-white text-4xl">EXPLORE OUR SOLAR SYSTEM IN VR</h2>
      <iframe
        className="relative z-20 w-9/12 h-96 "
        src="https://solar-system-vr.vercel.app/"
      ></iframe>
    </div>
  );
}
