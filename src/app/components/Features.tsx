import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Features() {
  return (
    <section className="relative px-4 md:px-8 font-geist mx-auto w-full overflow-visible">
      <div className="max-w-6xl mx-auto bg-white rounded-4xl overflow-hidden">
        <div className="text-center">
          <h1 className="text-[2rem] md:text-5xl font-semibold text-black leading-tight tracking-tight text-center text-balance mt-[2rem]" style={{ lineHeight: '1.1' }}>
                    <span className='font-logo italic'>Features</span> to power your workflows!
                </h1>
          <p className="mt-2 text-sm text-gray-700 max-w-3xl mx-auto">
            Everything you need to build, connect and scale automations — without the usual friction.
          </p>
        </div>

        <div className="mt-8 md:px-5 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <article className="group bg-yellow-300/80 rounded-2xl px-4 py-5 md:p-5 transition-all duration-300">
            <div className="flex flex-row justify-between items-center gap-8 mb-4">
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#2B4C42] text-xs font-semibold uppercase tracking-wider font-logo italic">INTEGRATIONS</span>
                </div>
                <h4 className="text-xl text-balance font-semibold text-black mb-2">Need to connect all your apps—fast?</h4>
                <p className="text-sm text-black/50 leading-relaxed">Skip the legal setup. Oyster acts as your employer of record, so you can hire full-time talent globally in as little.</p>
              </div>
              <div className="hidden md:block w-35 h-35 flex-shrink-0">
                <Image 
                  src="/f1.avif" 
                  alt="Integrations" 
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <button className="w-full mt-3 bg-black hover:opacity-90 transition-all duration-300 text-white text-sm font-medium px-6 py-3 rounded-md flex items-center justify-center gap-2 shadow-md">
              See How Integrations Work
              <MoveRight className="text-white w-4 h-4 mt-1" />
            </button>
          </article>

          <article className="group bg-pink-300/80 rounded-2xl px-4 py-5 md:p-5 transition-all duration-300">
            <div className="flex flex-row justify-between items-center gap-8 mb-4">
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#4C3D2B] text-xs font-semibold uppercase tracking-wider font-logo italic">AUTOMATION</span>
                </div>
                <h4 className="text-xl text-balance font-semibold text-black mb-2">Want to save time on repetitive tasks?</h4>
                <p className="text-sm text-black/50 leading-relaxed">Manage all your global payroll operations from a single platform with automated compliance and local tax calculations.</p>
              </div>
              <div className="hidden md:block w-35 h-35 flex-shrink-0">
                <Image 
                  src="/f2.avif" 
                  alt="Automation" 
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <button className="w-full mt-3 bg-black hover:opacity-90 transition-all duration-300 text-white text-sm font-medium px-6 py-3 rounded-md flex items-center justify-center gap-2 shadow-md">
              Explore Workflow Automation
              <MoveRight className="text-white w-4 h-4 mt-1" />
            </button>
          </article>

          <article className="group bg-cyan-300/80 rounded-2xl px-4 py-5 md:p-5 transition-all duration-300">
            <div className="flex flex-row justify-between items-center gap-8 mb-4">
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#4C2B4C] text-xs font-semibold uppercase tracking-wider font-logo italic">COLLABORATION</span>
                </div>
                <h4 className="text-xl text-balance font-semibold text-black mb-2">Need your whole team in sync?</h4>
                <p className="text-sm text-black/50 leading-relaxed">Onboard and pay contractors compliantly in 150+ countries with localized contracts and automated payments.</p>
              </div>
              <div className="hidden md:block w-35 h-35 flex-shrink-0">
                <Image 
                  src="/f3.png" 
                  alt="Collaboration" 
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <button className="w-full mt-3 bg-black hover:opacity-90 transition-all duration-300 text-white text-sm font-medium px-6 py-3 rounded-md flex items-center justify-center gap-2 shadow-md">
              Discover Collaboration Tools
              <MoveRight className="text-white w-4 h-4 mt-1" />
            </button>
          </article>

          <article className="group bg-blue-300/80 rounded-2xl px-4 py-5 md:p-5 transition-all duration-300">
            <div className="flex flex-row justify-between items-center gap-8 mb-4">
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#2B3F4C] text-xs font-semibold uppercase tracking-wider font-logo italic">SCALABILITY</span>
                </div>
                <h4 className="text-xl text-balance font-semibold text-black mb-2">Want your workflows to grow with you?</h4>
                <p className="text-sm text-black/50 leading-relaxed">Provide competitive benefits packages to your global team with our network of local providers.</p>
              </div>
              <div className="hidden md:block w-35 h-35 flex-shrink-0">
                <Image 
                  src="/f4.avif" 
                  alt="Scalability" 
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <button className="w-full mt-3 bg-black hover:opacity-90 transition-all duration-300 text-white text-sm font-medium px-6 py-3 rounded-md flex items-center justify-center gap-2 shadow-md">
              Learn About Scaling
              <MoveRight className="text-white w-4 h-4 mt-1" />
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}
