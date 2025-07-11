import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { FaCode } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaAngular,
  FaPhp,
  FaGitAlt,
  FaDocker
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiPostman,
  SiNextdotjs,
  SiPython,
  SiDjango,
  SiMysql,
  SiSupabase,
  SiTrello,
  SiVercel
} from 'react-icons/si';

export default function Technologies() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const technologies = [
    {
      title: 'Frontend',
      color: 'electricPink',
      glowColor: 'haloLeft',
      technologies: [
        { icon: <FaHtml5 />, name: 'HTML5', description: 'Structure & semantics. Foundation of web pages' },
        { icon: <FaCss3Alt />, name: 'CSS3', description: 'Styling & animations. Makes websites beautiful' },
        { icon: <FaReact />, name: 'React', description: 'Component-based UI. Interactive interfaces' },
        { icon: <SiNextdotjs />, name: 'Next.js', description: 'Full-stack framework. Production-ready apps' },
        { icon: <SiTailwindcss />, name: 'Tailwind', description: 'Utility-first CSS. Rapid styling system' },
        { icon: <FaAngular />, name: 'Angular', description: 'Enterprise framework. Large-scale applications.' }
      ]
    },
    {
      title: 'Backend',
      color: 'techMint',
      glowColor: 'matrixGreen',
      technologies: [
        { icon: <FaNodeJs />, name: 'Node.js', description: 'Server-side JavaScript. Scalable backend solutions' },
        { icon: <SiPython />, name: 'Python', description: 'Versatile programming. Data science & web dev.' },
        { icon: <SiDjango />, name: 'Django', description: 'Python web framework. Rapid development.' },
        { icon: <FaPhp />, name: 'PHP', description: 'Web development. Dynamic server-side scripting.' },
        { icon: <div className="text-2xl font-bold">API</div>, name: 'REST API', description: 'Web services. Seamless data exchange.' }
      ]
    },
    {
      title: 'Database',
      color: 'cyberViolet',
      glowColor: 'haloRight',
      technologies: [
        { icon: <SiMysql />, name: 'MySQL', description: 'Relational database. Structured data storage.' },
        { icon: <SiMongodb />, name: 'MongoDB', description: 'NoSQL database. Flexible document storage.' },
        { icon: <SiSupabase />, name: 'Supabase', description: 'Backend as a service. Instant APIs.' }
      ]
    },
    {
      title: 'Tools and Deploiment',
      color: 'vintageRose',
      glowColor: 'retroPeach',
      technologies: [
        { icon: <FaFigma />, name: 'Figma', description: 'Design & prototyping' },
        { icon: <SiPostman />, name: 'Postman', description: 'API testing' },
        { icon: <FaGitAlt />, name: 'Git', description: 'Version control' },
        { icon: <FaGithub />, name: 'GitHub', description: 'Code repository' },
        { icon: <VscVscode />, name: 'VS Code', description: 'Code editor' },
        { icon: <SiTrello />, name: 'Trello', description: 'Project management' },
        { icon: <SiVercel />, name: 'Vercel', description: 'Deployment' },
        { icon: <FaDocker />, name: 'Docker', description: 'Containerization' }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % technologies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + technologies.length) % technologies.length);
  };

  const getColorClasses = (color) => {
    const colorMap = {
      electricPink: 'text-[#FF6EC7] border-[#FF6EC7]',
      techMint: 'text-[#00FFC6] border-[#00FFC6]',
      cyberViolet: 'text-[#A972FF] border-[#A972FF]',
      vintageRose: 'text-[#E6A3B4] border-[#E6A3B4]'
    };
    return colorMap[color] || 'text-[#FF6EC7] border-[#FF6EC7]';
  };

  const getGlowClasses = (glowColor) => {
    const glowMap = {
      haloLeft: 'shadow-[0_0_30px_rgba(255,128,171,0.3)]',
      matrixGreen: 'shadow-[0_0_30px_rgba(0,255,153,0.3)]',
      haloRight: 'shadow-[0_0_30px_rgba(179,136,255,0.3)]',
      retroPeach: 'shadow-[0_0_30px_rgba(253,197,167,0.3)]'
    };
    return glowMap[glowColor] || 'shadow-[0_0_30px_rgba(255,128,171,0.3)]';
  };

  return (
    <section className="px-6 py-20 bg-[#0D1117] text-[#E6EDF3] overflow-hidden">
      {/* Small intro badge */}
      <div className="flex justify-center mb-20">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#161B22] border border-[#FF6EC7] rounded-full text-[#FF6EC7] font-medium hover:bg-[#FF6EC7] hover:text-[#0D1117] transition-all duration-300 cursor-pointer">
          <Sparkles className="w-4 h-4" /> Here's what powers our magic 
        </div>
      </div>

      {/* Main title */}
      <h2 className="text-5xl pb-4 md:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-[#FF6EC7] via-[#A972FF] to-[#00FFC6] bg-clip-text text-transparent">
        Technologies
      </h2>

      {/* Description */}
      <p className="text-xl text-center mb-20 max-w-3xl mx-auto text-[#E6EDF3] opacity-90 leading-relaxed">
        We craft digital experiences with cutting-edge tools and frameworks, 
        blending vintage aesthetics with modern technology to create something truly unique.
      </p>

      {/* Carousel title */}
      <h3 className="text-2xl font-semibold text-center mb-16 text-[#DA70D6]">
        Our Tech Stack
      </h3>

      {/* Carousel container */}
      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-8 perspective-1000">
          {/* Previous card (left) */}
          <div 
            className="hidden md:block w-80 h-96 cursor-pointer transform scale-75 opacity-40 hover:opacity-60 transition-all duration-300"
            onClick={prevSlide}
          >
            <div className="relative h-full">
              {/* Title frame */}
              <div className={`absolute -top-4 left-4 px-4 py-2 bg-[#161B22] border ${getColorClasses(technologies[(currentIndex - 1 + technologies.length) % technologies.length].color)} rounded-lg font-bold text-sm z-10`}>
                {technologies[(currentIndex - 1 + technologies.length) % technologies.length].title}
              </div>
              
              {/* Card */}
              <div className="w-full h-full bg-[#161B22] rounded-2xl p-6 pt-8 border border-[#30363D]">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {technologies[(currentIndex - 1 + technologies.length) % technologies.length].technologies.slice(0, 4).map((tech, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <div className="text-3xl mb-2 text-[#8B949E]">{tech.icon}</div>
                      <span className="text-sm font-medium text-[#8B949E]">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Current card (center) */}
          <div className="w-full md:w-[500px] h-[500px] relative">
            {/* Title frame */}
            <div className={`absolute -top-6 left-6 px-6 py-3 bg-[#161B22] border-2 ${getColorClasses(technologies[currentIndex].color)} rounded-xl font-bold text-lg z-10 ${getGlowClasses(technologies[currentIndex].glowColor)}`}>
              {technologies[currentIndex].title}
            </div>
            
            {/* Card */}
            <div className={`w-full h-full bg-[#161B22] rounded-3xl p-8 pt-12 border-2 ${getColorClasses(technologies[currentIndex].color)} ${getGlowClasses(technologies[currentIndex].glowColor)} transform hover:scale-105 transition-all duration-300`}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 h-full">
                {technologies[currentIndex].technologies.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center text-center group hover:transform hover:scale-110 transition-all duration-300">
                    <div className={`text-4xl mb-3 ${getColorClasses(technologies[currentIndex].color)} group-hover:animate-pulse`}>
                      {tech.icon}
                    </div>
                    <span className="text-sm font-bold text-[#E6EDF3] mb-1">{tech.name}</span>
                    <span className="text-xs text-[#8B949E] leading-tight">{tech.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Next card (right) */}
          <div 
            className="hidden md:block w-80 h-96 cursor-pointer transform scale-75 opacity-40 hover:opacity-60 transition-all duration-300"
            onClick={nextSlide}
          >
            <div className="relative h-full">
              {/* Title frame */}
              <div className={`absolute -top-4 left-4 px-4 py-2 bg-[#161B22] border ${getColorClasses(technologies[(currentIndex + 1) % technologies.length].color)} rounded-lg font-bold text-sm z-10`}>
                {technologies[(currentIndex + 1) % technologies.length].title}
              </div>
              
              {/* Card */}
              <div className="w-full h-full bg-[#161B22] rounded-2xl p-6 pt-8 border border-[#30363D]">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {technologies[(currentIndex + 1) % technologies.length].technologies.slice(0, 4).map((tech, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <div className="text-3xl mb-2 text-[#8B949E]">{tech.icon}</div>
                      <span className="text-sm font-medium text-[#8B949E]">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#161B22] border border-[#FF6EC7] rounded-full flex items-center justify-center text-[#FF6EC7] hover:bg-[#FF6EC7] hover:text-[#0D1117] transition-all duration-300 shadow-lg"
        >
          ←
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#161B22] border border-[#FF6EC7] rounded-full flex items-center justify-center text-[#FF6EC7] hover:bg-[#FF6EC7] hover:text-[#0D1117] transition-all duration-300 shadow-lg"
        >
          →
        </button>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 gap-3">
          {technologies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[#FF6EC7] shadow-[0_0_10px_rgba(255,110,199,0.5)]' 
                  : 'bg-[#30363D] hover:bg-[#8B949E]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="flex justify-center mt-8 gap-4 md:hidden">
        <button 
          onClick={prevSlide}
          className="px-6 py-3 bg-[#161B22] border border-[#FF6EC7] rounded-full text-[#FF6EC7] hover:bg-[#FF6EC7] hover:text-[#0D1117] transition-all duration-300"
        >
          Previous
        </button>
        <button 
          onClick={nextSlide}
          className="px-6 py-3 bg-[#161B22] border border-[#FF6EC7] rounded-full text-[#FF6EC7] hover:bg-[#FF6EC7] hover:text-[#0D1117] transition-all duration-300"
        >
          Next
        </button>
      </div>
    </section>
  );
}