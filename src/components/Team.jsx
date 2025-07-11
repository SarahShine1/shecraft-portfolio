import React from "react";
import { Sparkles } from 'lucide-react';

const Team = () => {
  return (
    <section className="relative min-h-screen px-5 py-20 bg-[#0D1117] text-[#E6EDF3] font-serif overflow-x-hidden">
      {/* Background Gaming Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        {/* Gaming Grid Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(90deg,_#DA70D6_1px,_transparent_1px),_linear-gradient(180deg,_#DA70D6_1px,_transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating Gaming Elements */}
        <div className="absolute top-40 left-20 text-[#00FFB3] text-2xl animate-bounce opacity-30">◆</div>
        <div className="absolute top-60 right-32 text-[#FF6EC7] text-3xl animate-pulse opacity-30">◇</div>
        <div className="absolute bottom-40 left-32 text-[#A972FF] text-2xl animate-spin opacity-30">◈</div>
        <div className="absolute bottom-60 right-20 text-[#DA70D6] text-3xl animate-ping opacity-30">◉</div>
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-20 relative">
          <div className="relative inline-block">
            <h1 className="text-[3.5rem] md:text-[4rem] font-light bg-gradient-to-r from-[#DA70D6] via-[#FF9AC1] to-[#A972FF] bg-clip-text text-transparent tracking-wider relative">
              <span className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 text-[#00FFB3] text-2xl animate-pulse">✦</span>
              Meet SheCraft
              <span className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 text-[#FF6EC7] text-2xl animate-pulse delay-1000">✦</span>
            </h1>
            {/* Gaming-style underline */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#DA70D6] to-[#FF9AC1] rounded-full"></div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-[#00FFB3] to-[#FF6EC7] rounded-full opacity-60"></div>
          </div>

          <p className="text-[#E6A3B4] italic text-lg mt-6 font-light">The Craftswomen Behind the Code</p>
         
          <p className="max-w-2xl mx-auto mt-6 text-base font-sans leading-8 text-[#E6EDF3]/90">
            We are a dynamic duo of passionate developers who blend feminine creativity with cutting-edge technology. Our mission is to craft beautiful, functional digital experiences that tell stories and solve problems. With expertise spanning full-stack development and UI/UX design, we bring both artistic sensibility and technical precision to every project.
          </p>
        </div>

        {/* Team Members - Gaming Style Layout */}
        <div className="grid gap-16 mt-20 sm:grid-cols-1 lg:grid-cols-2">
          {/* Member 1 - Sarra */}
          <div className="group relative bg-[#161B22] p-10 rounded-2xl border-2 border-transparent hover:border-[#DA70D6] transition-all duration-700 hover:-translate-y-3 hover:scale-105 hover:shadow-[0_0_40px_rgba(218,112,214,0.6),_0_0_80px_rgba(255,154,193,0.4),_0_0_120px_rgba(169,114,255,0.3)] transform-gpu">
            
            {/* Gaming Corner Elements */}
            <div className="absolute top-5 left-5 w-[60px] h-[60px] opacity-30 bg-[radial-gradient(circle,_#DA70D6_2px,_transparent_2px)] bg-[length:15px_15px]" />
            <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-[#DA70D6] opacity-50"></div>
            <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-[#FF9AC1] opacity-50"></div>
            <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-[#A972FF] opacity-50"></div>
            <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-[#00FFB3] opacity-50"></div>
            
            {/* Gaming Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#DA70D6]/10 to-[#FF9AC1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-6">
                <div className="relative w-32 h-32 mx-auto mb-5 rounded-full bg-gradient-to-r from-[#DA70D6] to-[#FF9AC1] flex items-center justify-center text-4xl font-bold text-[#0D1117] group-hover:animate-pulse">
                  BS
                  {/* Gaming Ring Effect */}
                  <div className="absolute -inset-2 rounded-full border-2 border-[#00FFB3] opacity-0 group-hover:opacity-50 group-hover:animate-ping"></div>
                  <div className="absolute -inset-4 rounded-full border border-[#FF6EC7] opacity-0 group-hover:opacity-30 group-hover:animate-spin"></div>
                </div>
                <h3 className="text-2xl font-semibold text-[#DA70D6] group-hover:text-[#FF9AC1] transition-colors">Bouchama Sarra</h3>
                <p className="uppercase tracking-wide text-[#00FFB3] text-sm font-medium group-hover:text-[#2EF1D6] transition-colors">Full Stack Developer & UI/UX Designer</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 mb-6 border-l-4 border-[#DA70D6] group-hover:border-[#FF9AC1] transition-colors">
                <p className="text-base font-sans leading-7 text-[#E6EDF3]/90">
                  A passionate developer with an eye for elegant design and clean code. Sarra specializes in creating seamless user experiences that bridge the gap between beautiful interfaces and robust functionality.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {["React", "Node.js", "UI/UX Design", "MongoDB", "Figma", "JavaScript"].map(skill => (
                  <span
                    key={skill}
                    className="bg-gradient-to-r from-indigo-900 to-purple-600 text-[#E6EDF3] px-4 py-2 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-[#DA70D6] hover:to-[#FF9AC1] hover:text-[#0D1117] hover:shadow-[0_0_20px_rgba(218,112,214,0.8)] hover:scale-105 transition-all transform cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="bg-[#00FFB31A] border-l-4 border-[#00FFB3] px-4 py-3 rounded-lg mb-6 italic group-hover:bg-[#00FFB325] transition-colors">
                <span className="text-[#00FFB3] font-bold">Fun Fact:</span> Finds inspiration in vintage design patterns and loves incorporating retro elements into modern digital experiences.
              </div>
              
              <div className="flex justify-center gap-4">
                {["in", "GH", "@"].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#FF6EC7] to-[#A972FF] text-[#0D1117] font-bold text-lg rounded-full transition-all transform hover:scale-110 hover:shadow-[0_0_25px_rgba(255,110,199,0.8)] hover:animate-pulse"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Member 2 - Khawla */}
          <div className="group relative bg-[#161B22] p-10 rounded-2xl border-2 border-transparent hover:border-[#00FFB3] transition-all duration-700 hover:-translate-y-3 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,179,0.6),_0_0_80px_rgba(46,241,214,0.4),_0_0_120px_rgba(62,224,255,0.3)] transform-gpu">
            
            {/* Gaming Corner Elements */}
            <div className="absolute bottom-5 right-5 w-[60px] h-[60px] opacity-30 bg-[radial-gradient(circle,_#00FFB3_2px,_transparent_2px)] bg-[length:15px_15px]" />
            <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-[#00FFB3] opacity-50"></div>
            <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-[#2EF1D6] opacity-50"></div>
            <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-[#3EE0FF] opacity-50"></div>
            <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-[#DA70D6] opacity-50"></div>
            
            {/* Gaming Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00FFB3]/10 to-[#2EF1D6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-6">
                <div className="relative w-32 h-32 mx-auto mb-5 rounded-full bg-gradient-to-r from-[#00FFB3] to-[#2EF1D6] flex items-center justify-center text-4xl font-bold text-[#0D1117] group-hover:animate-pulse">
                  BK
                  {/* Gaming Ring Effect */}
                  <div className="absolute -inset-2 rounded-full border-2 border-[#DA70D6] opacity-0 group-hover:opacity-50 group-hover:animate-ping"></div>
                  <div className="absolute -inset-4 rounded-full border border-[#FF6EC7] opacity-0 group-hover:opacity-30 group-hover:animate-spin"></div>
                </div>
                <h3 className="text-2xl font-semibold text-[#00FFB3] group-hover:text-[#2EF1D6] transition-colors">Bouguerra Khawla</h3>
                <p className="uppercase tracking-wide text-[#DA70D6] text-sm font-medium group-hover:text-[#FF9AC1] transition-colors">Full Stack Developer & UI/UX Designer</p>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-900/20 to-teal-900/20 rounded-xl p-6 mb-6 border-l-4 border-[#00FFB3] group-hover:border-[#2EF1D6] transition-colors">
                <p className="text-base font-sans leading-7 text-[#E6EDF3]/90">
                  A creative problem-solver who thrives on building innovative web applications from concept to deployment. Khawla combines technical expertise with user-centered design thinking to create delightful digital products.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {["React", "Python", "Node.js", "UI/UX", "PostgreSQL", "TypeScript"].map(skill => (
                  <span
                    key={skill}
                    className="bg-gradient-to-r from-cyan-900 to-teal-600 text-[#E6EDF3] px-4 py-2 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-[#00FFB3] hover:to-[#2EF1D6] hover:text-[#0D1117] hover:shadow-[0_0_20px_rgba(0,255,179,0.8)] hover:scale-105 transition-all transform cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="bg-[#DA70D61A] border-l-4 border-[#DA70D6] px-4 py-3 rounded-lg mb-6 italic group-hover:bg-[#DA70D625] transition-colors">
                <span className="text-[#DA70D6] font-bold">Fun Fact:</span> Believes that the best code is like poetry - beautiful, purposeful, and leaves a lasting impression.
              </div>
              
              <div className="flex justify-center gap-4">
                {["in", "GH", "@"].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#00FFB3] to-[#2EF1D6] text-[#0D1117] font-bold text-lg rounded-full transition-all transform hover:scale-110 hover:shadow-[0_0_25px_rgba(0,255,179,0.8)] hover:animate-pulse"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;