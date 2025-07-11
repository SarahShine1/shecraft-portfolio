import { Link as ScrollLink } from 'react-scroll';
import { FaLinkedin, FaGithub, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-twilight-surface text-white py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl ml-2 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
        
        {/* Column 1: Brand + Contact */}
        <div className="">
          <h2 className="text-2xl font-bold  mb-4 bg-gradient-to-r from-twilight-violet via-twilight-pink to-twilight-haloRight
    bg-clip-text text-transparent">SheCraft</h2>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                 At <strong className="text-white font-semibold">SheCraft</strong>, we blend code with creativity to craft elegant and purposeful digital experiences. From <strong>web development</strong> and <strong>UI/UX design</strong> to <strong>landing pages</strong>, <strong>portfolios</strong>, <strong>backend systems</strong>, and <strong>mentoring</strong>, each project is approached with precision, passion, and personality. Let’s create something extraordinary together.
          </p>
          
          <p className="text-sm text-gray-400 mb-1">📍 Algiers, Algeria</p>
          <p className="text-sm text-gray-400 mb-1">📧 bouchamasara05@gmail.com</p>
          <div className="flex gap-4 mt-3 text-xl">
            <a href="https://www.linkedin.com/in/bouchama-sarra-480174260/" target="_blank" rel="noopener noreferrer" className="hover:text-twilight-techBlue">
              <FaLinkedin />
            </a>
            <a href="https://github.com/SarahShine1" target="_blank" rel="noopener noreferrer" className="hover:text-twilight-electricPink">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="ml-6">
          <h3 className="text-lg font-semibold mb-3 text-twilight-retroPeach">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><ScrollLink to="home" smooth duration={500} className="cursor-pointer hover:text-white">Home</ScrollLink></li>
            <li><ScrollLink to="services" smooth duration={500} className="cursor-pointer hover:text-white">Services</ScrollLink></li>
            <li><ScrollLink to="Technologies" smooth duration={500} className="cursor-pointer hover:text-white">Technologies</ScrollLink></li>
            <li><ScrollLink to="Team" smooth duration={500} className="cursor-pointer hover:text-white">Team</ScrollLink></li>
            <li><ScrollLink to="contact" smooth duration={500} className="cursor-pointer hover:text-white">Contact</ScrollLink></li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-twilight-electricCoral">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="" className="hover:text-white">Terms of Use</a></li>
            <li><a href="" className="hover:text-white">Cookie Policy</a></li>

          </ul>
        </div>

        {/* Column 4: Credit */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-twilight-pink">Built With 💖</h3>
          <p className="text-sm text-gray-300">
            Crafted by SheCraft team using <br /> React, Tailwind CSS, Vite, and love.
          </p>
          {/* Creative quote */}
            <div className="items-center mt-8 p-6 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl border border-pink-400/20">
              <p className="text-center italic text-gray-300 font-serif">
                "Code is poetry, design is art, and together they create magic."
              </p>
              <p className="text-center text-sm text-orange-400 mt-2">— SheCraft Philosophy</p>
            </div>

        </div>
      </div>

      {/* Scroll to top */}
      <div className="mt-10 text-center">
        <ScrollLink to="home" smooth duration={500}>
          <button className="p-3 rounded-full bg-twilight-bg border border-white/10 hover:shadow-[0_0_12px_#B388FF] transition">
            <FaArrowUp className="text-xl text-twilight-violet" />
          </button>
        </ScrollLink>
      </div>

      <p className="text-center text-sm text-gray-500 mt-6">© {new Date().getFullYear()} SheCraft. All rights reserved.</p>
    </footer>
  );
}
