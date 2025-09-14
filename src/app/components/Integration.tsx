/* eslint-disable @next/next/no-img-element */
import { MoveRight } from 'lucide-react';
import Image from 'next/image';

export default function Integration() {
    return (
        <section className="px-3 md:px-8 py-8 -mt-8 font-geist mx-auto w-full overflow-hidden">
            <div className="flex flex-col items-center justify-center bg-black rounded-4xl w-full overflow-hidden px-4 md:px-10 pb-5 relative md:pb-5" style={{ maxWidth: '100vw' }}>
                <h1 className="text-[2rem] md:text-5xl font-semibold text-white leading-tight tracking-tight text-center text-balance mt-[4rem]" style={{ lineHeight: '1.1' }}>
                    Your Tools. One <span className='font-logo italic'>Seamless</span> Flow!
                </h1>
                <p className="mt-3 text-[0.7rem] md:text-sm font-normal text-white/50 max-w-2xl leading-relaxed text-center">
                    Loop.in connects seamlessly with Drive, Slack, Trello, Sheets, Forms, Discord and more — so all your favorite apps work together in one place.
                </p>

                <div className="mt-8 grid grid-cols-4 gap-0 md:gap-4 justify-items-center">
                    <div className="group flex flex-col justify-center items-center md:bg-zinc-900/70 md:shadow-sm md:rounded-xl p-0 md:p-4 w-16 h-16 md:w-28 md:h-28 transition-all duration-300 md:hover:bg-gradient-to-br md:hover:from-zinc-800/90 md:hover:to-zinc-900/90 focus:outline-none relative overflow-hidden" role="button" tabIndex={0}>
                        <div className="absolute inset-0 md:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <Image src="/drive.png" alt="drive" width={50} height={50} className="w-8 h-8 md:w-[50px] md:h-[50px] transform transition-transform duration-500 md:group-hover:scale-110" />
                        <span className="sr-only">Drive integration</span>
                    </div>

                    <div className="group flex flex-col justify-center items-center md:bg-zinc-900/70 md:shadow-sm md:rounded-xl p-0 md:p-4 w-16 h-16 md:w-28 md:h-28 transition-all duration-300 md:hover:bg-gradient-to-br md:hover:from-zinc-800/90 md:hover:to-zinc-900/90 focus:outline-none relative overflow-hidden" role="button" tabIndex={0}>
                        <div className="absolute inset-0 md:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <Image src="/slack.png" alt="Slack" width={50} height={50} className="w-8 h-8 md:w-[50px] md:h-[50px] transform transition-transform duration-500 md:group-hover:scale-110" />
                        <span className="sr-only">Slack integration</span>
                    </div>

                    <div className="group flex flex-col justify-center items-center md:bg-zinc-900/70 md:shadow-sm md:rounded-xl p-0 md:p-4 w-16 h-16 md:w-28 md:h-28 transition-all duration-300 md:hover:bg-gradient-to-br md:hover:from-zinc-800/90 md:hover:to-zinc-900/90 focus:outline-none relative overflow-hidden" role="button" tabIndex={0}>
                        <div className="absolute inset-0 md:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <Image src="/trello.png" alt="Trello" width={50} height={50} className="w-8 h-8 md:w-[50px] md:h-[50px] transform transition-transform duration-500 md:group-hover:scale-110" />
                        <span className="sr-only">Trello integration</span>
                    </div>

                    <div className="group flex flex-col justify-center items-center md:bg-zinc-900/70 md:shadow-sm md:rounded-xl p-0 md:p-4 w-16 h-16 md:w-28 md:h-28 transition-all duration-300 md:hover:bg-gradient-to-br md:hover:from-zinc-800/90 md:hover:to-zinc-900/90 focus:outline-none relative overflow-hidden" role="button" tabIndex={0}>
                        <div className="absolute inset-0 md:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <Image src="/sheets.png" alt="Sheets" width={50} height={50} className="w-8 h-8 md:w-[50px] md:h-[50px] transform transition-transform duration-500 md:group-hover:scale-110" />
                        <span className="sr-only">Sheets integration</span>
                    </div>
                </div>

                <div className="mt-0 md:mt-4 grid grid-cols-3 gap-0 md:gap-4 justify-items-center">
                    <div className="group flex flex-col justify-center items-center md:bg-zinc-900/70 md:shadow-sm md:rounded-xl p-0 md:p-4 w-16 h-16 md:w-28 md:h-28 transition-all duration-300 md:hover:bg-gradient-to-br md:hover:from-zinc-800/90 md:hover:to-zinc-900/90 focus:outline-none relative overflow-hidden" role="button" tabIndex={0}>
                        <div className="absolute inset-0 md:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <Image src="/discord.png" alt="Discord" width={50} height={50} className="w-8 h-8 md:w-[50px] md:h-[50px] transform transition-transform duration-500 md:group-hover:scale-110" />
                        <span className="sr-only">Discord integration</span>
                    </div>

                    <div className="group flex flex-col justify-center items-center md:bg-zinc-900/70 md:shadow-sm md:rounded-xl p-0 md:p-4 w-16 h-16 md:w-28 md:h-28 transition-all duration-300 md:hover:bg-gradient-to-br md:hover:from-zinc-800/90 md:hover:to-zinc-900/90 focus:outline-none relative overflow-hidden" role="button" tabIndex={0}>
                        <div className="absolute inset-0 md:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <Image src="/forms.png" alt="forms" width={50} height={50} className="w-8 h-8 md:w-[50px] md:h-[50px] transform transition-transform duration-500 md:group-hover:scale-110" />
                        <span className="sr-only">Forms integration</span>
                    </div>

                    <div className="group flex flex-col justify-center items-center md:bg-zinc-900/70 md:shadow-sm md:rounded-xl p-0 md:p-4 w-16 h-16 md:w-28 md:h-28 transition-all duration-300 md:hover:bg-gradient-to-br md:hover:from-zinc-800/90 md:hover:to-zinc-900/90 focus:outline-none relative overflow-hidden" role="button" tabIndex={0}>
                        <div className="absolute inset-0 md:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <Image src="/chrome.png" alt="Chrome" width={50} height={50} className="w-8 h-8 md:w-[50px] md:h-[50px] transform transition-transform duration-500 md:group-hover:scale-110" />
                        <span className="sr-only">Chrome integration</span>
                    </div>
                </div>
                <div className='flex items-center md:hidden justify-center w-full'>
                    <button className="mt-10 bg-white hover:opacity-90 transition-all duration-300 text-black text-sm font-medium px-6 py-3 rounded-md flex items-center justify-center gap-2 shadow-md mb-3 md:w-full">
                        More Details About Integartions
                        <MoveRight className="text-black w-4 h-4 mt-1" />
                    </button>
                </div>
                <div className='hidden md:flex'>
                    <p className="mt-12 mb-5 text-xs md:text-sm text-white/50 max-w-2xl text-center">
                        Built alongside a community of makers and developers who believe integrations should be effortless.
                    </p>
                </div>
            </div>
        </section>
    )
}