/* eslint-disable @next/next/no-img-element */
import { Workflow,Sparkles,WandSparkles,Expand,MoveRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative px-3 md:px-8 py-8 font-geist w-full overflow-hidden">
            <img 
                src="/flower1_alt.png" 
                alt="Flower" 
                className="absolute -left-45 md:-left-78 lg:-left-85 top-[55%] md:top-[55%] lg:top-[57%] transform -translate-y-1/2 w-auto h-auto max-w-[300px] md:max-w-[600px] lg:max-w-[650px]" 
            />
            <img 
                src="/flower2_alt.png" 
                alt="Flower" 
                className="absolute -right-44 md:-right-85 top-[43%] md:top-[25%] transform -translate-y-1/2 w-auto h-auto max-w-[250px] md:max-w-[500px] lg:max-w-[550px]" 
            />
            <div className="flex flex-col items-center justify-center bg-[#f9f8f6] rounded-4xl w-full overflow-hidden px-3 md:px-10 pb-5" style={{ maxWidth: '100vw' }}>
                <h1 className="text-[1.7rem] md:text-6xl lg:text-7xl font-semibold text-gray-900 leading-tight tracking-tight text-center text-balance mt-[4rem]" style={{ lineHeight: '1.1' }}>
                    Automate <span className='font-logo italic'>workflows</span> with <br /> connected apps—and <br /> the freedom to scale them!
                </h1>
                <p className="mt-3 text-xs md:text-sm font-medium text-gray-900 max-w-2xl leading-relaxed text-center">
                    Connect Drive, Slack, Trello, and Sheets, <br />
                    plus Forms, Discord and more — all in one place. <br />
                    No code required.
                </p>
                <button className="mt-8 bg-black hover:opacity-90 transition-all duration-300 text-white text-sm font-medium px-6 py-3 rounded-md flex items-center justify-center gap-2 shadow-md">
                    Start building for free
                    <MoveRight className="text-white w-4 h-4 mt-1" />
                </button>

                <div className="grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 mt-10 w-full hidden md:grid">
                    <div className="flex flex-col items-start justify-center rounded-lg bg-[#f4f2ef] h-auto px-3 py-2">
                        <div className='flex flex-col md:flex-row md:gap-3 items-start justify-center'>
                            <div className='w-9 h-9 bg-yellow-400 rounded-md flex justify-center items-center mt-0.5'>
                                <Workflow className='text-black w-4 h-4'/>
                            </div>
                            <div>
                                <span className="font-medium text-sm">Integrate</span>
                                <p className="text-xs text-gray-600 text-center">all your tools</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center rounded-lg bg-[#f4f2ef] h-auto px-3 py-2">
                        <div className='flex flex-col md:flex-row md:gap-3 items-start justify-center'>
                            <div className='w-9 h-9 bg-pink-400 rounded-md flex justify-center items-center mt-0.5'>
                                <Sparkles className='text-black w-4 h-4'/>
                            </div>
                            <div>
                                <span className="font-medium text-sm">Automate</span>
                                <p className="text-xs text-gray-600 text-center">every workflow</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center rounded-lg bg-[#f4f2ef] h-auto px-3 py-2">
                        <div className='flex flex-col md:flex-row md:gap-3 items-start justify-center'>
                            <div className='w-9 h-9 bg-emerald-400 rounded-md flex justify-center items-center mt-0.5'>
                                <WandSparkles className='text-black w-4 h-4'/>
                            </div>
                            <div>
                                <span className="font-medium text-sm">Simplify</span>
                                <p className="text-xs text-gray-600 text-center">no-code building</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center rounded-lg bg-[#f4f2ef] h-auto px-3 py-2">
                        <div className='flex flex-col md:flex-row md:gap-3 items-start justify-center'>
                            <div className='w-9 h-9 bg-blue-400 rounded-md flex justify-center items-center mt-0.5'>
                                <Expand className='text-black w-4 h-4'/>
                            </div>
                            <div>
                                <span className="font-medium text-sm">Scale</span>
                                <p className="text-xs text-gray-600 text-center">with your business</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="mt-5 mb-5 text-xs md:text-sm text-gray-500 max-w-2xl text-center">
                    Growing with a community of makers and developers who believe workflows should be simple.
                </p>
            </div>
        </section>
    )
}