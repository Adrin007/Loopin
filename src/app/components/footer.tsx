import { Shell, Mail } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full font-geist bg-white text-black flex flex-col mt-8 overflow-hidden">
      <img 
        src="/flower1_alt.png" 
        alt="Flower" 
        className="absolute -left-45 md:-left-78 lg:-left-85 top-[55%] md:top-[55%] lg:top-[75%] transform -translate-y-1/2 w-auto h-auto max-w-[300px] md:max-w-[600px] lg:max-w-[650px] pointer-events-none -rotate-15" 
      />
      <img 
        src="/flower2_alt.png" 
        alt="Flower" 
        className="absolute -right-44 md:-right-80 top-[50%] md:top-[85%] transform -translate-y-1/2 w-auto h-auto max-w-[250px] md:max-w-[500px] lg:max-w-[550px] pointer-events-none rotate-25" 
      />
      <div className="relative flex flex-col items-center justify-center px-6 md:px-8 py-12 z-10">
        <div className="max-w-3xl text-center space-y-5">
          <div className="flex items-center justify-center gap-2">
            <Shell className="w-8 h-8 text-black"/>
            <span className="font-logo font-bold text-3xl">loop</span>
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Ready to <span className='font-logo italic'>automate?</span></h1>
            <p className="text-sm text-gray-600">Join hundreds of creators and teams using Loop.in to build powerful automations.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 pt-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full md:w-64 px-4 py-3 border border-gray-300 rounded-lg text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="w-full md:w-auto px-6 py-3 bg-black text-white rounded-lg font-medium hover:opacity-90 transition">
              Get started
            </button>
          </div>
        </div>
      </div>    
      <div className="border-t border-gray-100 px-6 md:px-8 py-5 flex items-center justify-center gap-6 bg-gray-50">
        <p className="text-xs text-gray-500 tracking-wide">© 2025 Loop.in</p>
        <div className="flex items-center gap-5">
          <a href="#" aria-label="Email" className="text-gray-500 hover:text-black transition-colors duration-200">
            <Mail className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-black transition-colors duration-200">
            <FaXTwitter className="w-5 h-5" />
          </a>
          <a href="#" aria-label="GitHub" className="text-gray-500 hover:text-black transition-colors duration-200">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-black transition-colors duration-200">
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
