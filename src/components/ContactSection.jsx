import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeField, setActiveField] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project_type: '',
    budget: '',
    currency: 'DZD',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
    console.log("useEffect ran with window.location.search:", window.location.search);

    if (typeof window !== "undefined" && window.location.search.includes("success=1")) {
      toast.success("✨ Message sent successfully! I'll get back to you soon! 💕");
      
      const url = new URL(window.location);
      url.searchParams.delete("success");
      window.history.replaceState({}, "", url);
    }
  }, []);

  const services = [
    "✨ UI/UX Design",
    "💻 Web Development", 
    "🎨 Landing Page / Portfolio",
    "🔧 Backend & Database",
    "💡 Consulting / Mentoring",
    "🌟 Digital Branding",
  ];

  const typewriterText = "Let's craft something remarkable together";
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < typewriterText.length) {
        setDisplayedText(typewriterText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create FormData for form submission
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://formsubmit.co/bouchamasara05@gmail.com';
    
    // Add hidden fields
    const hiddenFields = [
      { name: '_next', value: 'http://localhost:5173/#contact?success=1' },
      { name: '_subject', value: 'New SheCraft Contact Submission!' },
      { name: '_captcha', value: 'false' },
      { name: '_template', value: 'box' }
    ];
    
    hiddenFields.forEach(field => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = field.name;
      input.value = field.value;
      form.appendChild(input);
    });
    
    // Add form data
    Object.keys(formData).forEach(key => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = formData[key];
      form.appendChild(input);
    });
    
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-24  px-6 bg-twilight-bg text-white">      {/* Floating decorative elements */}
      

      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Header with vintage typewriter effect */}
        <div className="text-center mb-6">
          
          
          <h2 className="text-xl md:text-2xl font-bold  font-serif">
            <span className="bg-gradient-to-r from-twilight-violet via-twilight-pink to-twilight-electricCoral bg-clip-text text-transparent">
              {displayedText}
            </span>
            <span className="animate-pulse">|</span>
          </h2>
          
          
        </div>

        <div className="max-w-7xl mx-auto mt-2 grid lg:grid-cols-2 gap-16">
          
          {/* LEFT: Enhanced Social Connections */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-serif font-semibold text-twilight-electricCoral mb-2 flex items-center justify-center lg:justify-start gap-2">
                <span className="text-twilight-electricCoral ">{'>'}</span>
                let's_connect
              </h3>
            </div>

            <div className="grid gap-4">
              {[
                { name: "Email", handle: "bouchamasara05@gmail.com", icon: <MdEmail />, href: "mailto:bouchamasara05@gmail.com", color: "twilight-electricCoral" },
                { name: "Phone", handle: "+213 669 48 70 35", icon: <MdPhone />, href: "tel:+213669487035", color: "twilight-techMint" },
                { name: "Location", handle: "Algiers, Algeria", icon: <MdLocationOn />, href: "#", color: "twilight-retroPeach" },
                { name: "LinkedIn", handle: "/in/bouchama-sarra", icon: <FaLinkedin />, href: "https://www.linkedin.com/in/bouchama-sarra-480174260/", color: "twilight-electricPink" },
                { name: "GitHub", handle: "@SarahShine1", icon: <FaGithub/>, href: "https://github.com/SarahShine1", color: "twilight-violet" },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-between p-5 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10 hover:border-pink-400 hover:shadow-[0_0_20px_rgba(255,20,147,0.3)] transition-all duration-300 hover:scale-[1.02]`}
                >
                  <span className="flex gap-3 items-center text-lg group-hover:text-white transition-colors">
                    <span className={`text-2xl text-pink-400 group-hover:scale-110 transition-transform`}>
                      {link.icon}
                    </span>
                    <span className="font-medium">{link.name}</span>
                  </span>
                  <span className="text-sm text-gray-400 group-hover:text-gray-300 font-mono">
                    {link.handle}
                  </span>
                </a>
              ))}
            </div>

            
          </div>

          {/* RIGHT: Enhanced Contact Form */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-serif font-semibold text-twilight-retroPeach  mb-2 flex items-center justify-center lg:justify-start gap-2">
                <span className="font-mono text-twilight-retroPeach ">{'>'}</span>
                send_message
              </h3>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setActiveField('name')}
                    onBlur={() => setActiveField('')}
                    className={`w-full px-4 py-4 bg-white/5 border-2 rounded-xl text-white placeholder-gray-400 backdrop-blur-md transition-all duration-300 focus:outline-none focus:bg-white/10 ${activeField === 'name' ? 'border-pink-400 shadow-[0_0_15px_rgba(255,20,147,0.3)]' : 'border-white/20'}`}
                  />
                  {activeField === 'name' && (
                    <div className="absolute -top-2 left-4 px-2 bg-twilight-bg text-pink-400 text-xs font-mono">
                      name_field
                    </div>
                  )}
                </div>
                
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setActiveField('email')}
                    onBlur={() => setActiveField('')}
                    className={`w-full px-4 py-4 bg-white/5 border-2 rounded-xl text-white placeholder-gray-400 backdrop-blur-md transition-all duration-300 focus:outline-none focus:bg-white/10 ${activeField === 'email' ? 'border-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.3)]' : 'border-white/20'}`}
                  />
                  {activeField === 'email' && (
                    <div className="absolute -top-2 left-4 px-2 bg-twilight-bg text-cyan-400 text-xs font-mono">
                      email_field
                    </div>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <select
                    name="project_type"
                    required
                    value={formData.project_type}
                    onChange={handleInputChange}
                    onFocus={() => setActiveField('project')}
                    onBlur={() => setActiveField('')}
                    className={`w-full px-4 py-4 bg-white/5 border-2 rounded-xl text-white backdrop-blur-md transition-all duration-300 focus:outline-none focus:bg-white/10 ${activeField === 'project' ? 'border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.3)]' : 'border-white/20'}`}
                  >
                    <option value="" className="bg-gray-900 text-gray-400">Choose Your Project</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="bg-gray-900 text-white">
                        {service}
                      </option>
                    ))}
                  </select>
                  {activeField === 'project' && (
                    <div className="absolute -top-2 left-4 px-2 bg-twilight-bg text-orange-400 text-xs font-mono">
                      project_type
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="number"
                      name="budget"
                      placeholder="Budget"
                      required
                      value={formData.budget}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField('budget')}
                      onBlur={() => setActiveField('')}
                      className={`w-full px-4 py-4 bg-white/5 border-2 rounded-xl text-white placeholder-gray-400 backdrop-blur-md transition-all duration-300 focus:outline-none focus:bg-white/10 ${activeField === 'budget' ? 'border-pink-400 shadow-[0_0_15px_rgba(255,20,147,0.3)]' : 'border-white/20'}`}
                    />
                    {activeField === 'budget' && (
                      <div className="absolute -top-2 left-4 px-2 bg-twilight-bg text-pink-400 text-xs font-mono">
                        budget_amount
                      </div>
                    )}
                  </div>
                  <select 
                    name="currency" 
                    value={formData.currency}
                    onChange={handleInputChange}
                    className="px-3 py-4 bg-white/5 border-2 border-white/20 rounded-xl text-white backdrop-blur-md focus:border-purple-400 focus:outline-none transition-all duration-300"
                  >
                    <option value="DZD" className="bg-gray-900">DZD</option>
                    <option value="EUR" className="bg-gray-900">EUR</option>
                    <option value="USD" className="bg-gray-900">USD</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project... "
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setActiveField('message')}
                  onBlur={() => setActiveField('')}
                  className={`w-full px-4 py-4 bg-white/5 border-2 rounded-xl text-white placeholder-gray-400 backdrop-blur-md transition-all duration-300 focus:outline-none focus:bg-white/10 resize-none ${activeField === 'message' ? 'border-purple-400 shadow-[0_0_15px_rgba(147,51,234,0.3)]' : 'border-white/20'}`}
                />
                {activeField === 'message' && (
                  <div className="absolute -top-2 left-4 px-2 bg-twilight-bg text-purple-400 text-xs font-mono">
                    project_description
                  </div>
                )}
              </div>

              <button
                onClick={handleSubmit}
                className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,20,147,0.4)] flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
              </button>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
}