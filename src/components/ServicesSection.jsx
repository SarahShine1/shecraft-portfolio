import { services } from "../data/services";
import { Sparkles } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section id="services" className=" py-20 px-6 bg-twilight-bg text-white ">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mt-6 mb-8 bg-gradient-to-r from-twilight-techBlue via-twilight-electricPink to-twilight-royalIndigo bg-clip-text text-transparent">
           Our Services
        </h2>

        <p className="text-center text-lg md:text-xl text-gray-400 italic mb-8">
           From ideas to execution — discover how we bring visions to life.
        </p>

        <div className="text-center mb-20">
        <div className="text-center inline-flex items-center gap-2 px-4 py-2 border border-twilight-pink  rounded-full text-twilight-pink  bg-black hover:bg-twilight-surface transition">
        <Sparkles className="w-4 h-4" />
        <span className="text-sm font-medium">What We Do</span>
        </div>
        </div>


        <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => {
  const Icon = service.icon;
  return (
    <div
      key={index}
      className={`
        relative group p-6 rounded-xl bg-white/5 backdrop-blur-md 
        border border-white/10 shadow-md transition duration-300 ease-in-out 
        transform hover:scale-[1.025] overflow-hidden 
        ${service.hoverBorder}
      `}
    >

        {/* Glow overlay - ONLY on hover */}
    <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 blur-2xl pointer-events-none transition duration-300"
        style={{
        background: `radial-gradient(circle at top right, ${service.shadowHex}, transparent 60%)`,
      }}
    ></div>
        
      <div className="flex items-center space-x-3 mb-4">
         {/* Icon inside gradient badge */}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.05), ${service.shadowHex})`,
          }}
        >
          <Icon className="text-white text-2xl" />
        </div>
        <h3 className={`text-2xl font-semibold text-white ${service.hoverText} transition`}>
          {service.title}
        </h3>
      </div>
      <p className={`text-sm font-bold italic mb-2 ${service.taglineColor}`}>
        {service.tagline}
      </p>
      <p className="text-gray-300 text-base">{service.description}</p>
    </div>
  );
})}

        </div>
      </div>
    </section>
  );
}
