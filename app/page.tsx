import Image from "next/image";

export default function Home() {
  return (
    <div className="relative z-[-1] flex flex-col items-center justify-center w-full h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500">
  <div className="absolute h-[500px] w-full max-w-screen-xl -translate-x-1/2 rounded-full bg-gradient-radial from-black via-transparent to-transparent blur-2xl animate-pulse sm:w-[480px] lg:h-[360px]" />
  <div className="absolute z-[-20] h-[180px] w-full max-w-screen-xl translate-x-1/3 bg-gradient-conic from-gray-800 via-black to-gray-900 blur-2xl animate-spin sm:w-[740px]" />
  
  <span className="text-white text-4xl sm:text-5xl md:text-6xl font-bold animate-bounce transition-transform transform hover:scale-105">HELLO WORLD</span>
  
  <div className="text-white text-2xl sm:text-3xl md:text-4xl animate-pulse mt-4 opacity-80">CREATED BY RAMSHA JAWAID</div>
</div>
  );
}
