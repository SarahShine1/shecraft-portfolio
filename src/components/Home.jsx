import React from "react";
import Lottie from "lottie-react";
import Animation from "../assets/animations/Animation1.json"; // adjust path if needed

export default function Home() {
  return (
    

    <section id="home" className="min-h-screen  flex flex-row justify-start items-start text-left px-10 pt-20 text-twilight-text bg-twilight-bg">
      
      <div className=" w-full flex flex-col ">

      {/* SheCraft Title */}
      <h1 className="text-4xl md:text-7xl font-bold text-white mb-2 fade-in">
        SheCraft
      </h1>

      {/* Slogan with gradient */}
      <div className="max-w-2xl pt-6 pb-6 pl-10 pr-0 mt-6 mb-6 rounded-xl bg-gradient-to-r from-[#1f1c2c]/80 via-[#928DAB]/70 to-[#1f1c2c]/80 backdrop-blur-md shadow-lg">

       <p className="typewriter pb-2  text-2xl md:text-3xl font-semibold bg-gradient-to-r from-twilight-haloLeft to-twilight-haloRight bg-clip-text text-transparent    ">
       Code is our craft. Elegance is our standard </p>
       </div>

      
      {/* Intro paragraph */}
      <p className="max-w-xl text-xl mb-8 text-twilight-text fade-in delay-300">
        We build elegant web experiences with refinement and precision From UX to full-stack, 
        we turn ideas into digital art. Based in Algiers, connected to the world.


      </p>

      {/* Buttons */}
      <div className="flex space-x-4 fade-in delay-500">
        <a
          href="#services"
          className="px-6 py-3 rounded-full bg-twilight-violet text-white hover:bg-twilight-pink transition"
        >
          Nos Services
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-full border border-twilight-violet text-twilight-violet hover:bg-twilight-violet hover:text-white transition"
        >
          Nous Contacter
        </a>
      </div>

      </div>

      {/* Placeholder for image or illustration */}
      <div className=" h-40 mt-6 mr-8 fade-in delay-700 hidden md:block">
         <Lottie
        animationData={Animation}
        loop={true}
        className="w-[350px] h-[350px]"
      />
        {/* Place for future image or illustration */}
      </div>

      {/* Sparkle/Bubble effect */}
  <div className="absolute top-0 right-0 h-full w-1/3 pointer-events-none overflow-hidden">
    <div className="absolute w-2 h-2 bg-white rounded-full opacity-30 blur-md animate-pulse top-10 right-4"></div>
    <div className="absolute w-3 h-3 bg-pink-300 rounded-full opacity-40 blur-sm animate-bounce top-24 right-12"></div>
    <div className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full opacity-20 blur-md animate-spin top-48 right-8"></div>
    {/* Add more for a twinkling field */}
  </div>


     {/* Sparkles floating near the illustration on the right */}
 <div className="absolute top-0 right-0 h-full w-1/3 pointer-events-none overflow-hidden z-10">
  {/* Sparkle 1 - Violet (haloRight) */}
  <div className="absolute top-[35%] right-[25%] w-4 h-4 rounded-full bg-[#B388FF] opacity-50 blur-[2px] drop-shadow-[0_0_12px_#B388FF]  animate-floatMed" />

  {/* Sparkle 2 - Pink (haloLeft) */}
  <div className="absolute top-[30%] left-[25%] w-5 h-5 rounded-full bg-[#FF80AB] opacity-40 blur-[2px] drop-shadow-[0_0_15px_#FF80AB] animate-floatMed " />

  {/* Sparkle 3 - Tech Green */}
  <div className="absolute top-[50%] left-[5%] w-3 h-3 rounded-full bg-[#00FFB3] blur-sm drop-shadow-[0_0_10px_#FF9AC1] animate-floatMed"></div>

  {/* Sparkle 4 - Purple (Violet) */}
  <div className="absolute top-[60%] right-[15%] w-6 h-6 rounded-full bg-[#8A2BE2] opacity-40 blur-[2px] drop-shadow-[0_0_18px_#8A2BE2]  animate-floatFast" />

  {/* Sparkle 5 - Indigo */}
  <div className="absolute top-[75%] left-[20%] w-4 h-4 rounded-full bg-[#4B0082] opacity-45 blur-[2px] drop-shadow-[0_0_14px_#4B0082] animate-floatMed" />

  {/* Sparkle 6 - Lavender */}
  <div className="absolute top-[79%] right-[20%] w-3 h-3 rounded-full bg-[#DA70D6] opacity-40 blur-[2px] drop-shadow-[0_0_10px_#DA70D6] animate-floatMed" />
</div>




      {/* Scroll down indicator */}
      <div className="mt-10 fade-in delay-1000 animate-bounce">
        <span className="text-2xl text-twilight-violet"></span>
      </div>
    </section>


  );
}
