/* eslint-disable @next/next/no-img-element */
import { MoveRight } from 'lucide-react';
import Image from 'next/image';

const integration_apps = [
    { name: 'Drive', icon: '/drive.png' },
    { name: 'Slack', icon: '/slack.png' },
    { name: 'Trello', icon: '/trello.png' },
    { name: 'Sheets', icon: '/sheets.png' },
    { name: 'Discord', icon: '/discord.png' },
    { name: 'Forms', icon: '/forms.png' },
    { name: 'Chrome', icon: '/chrome.png' },
];

const duplicated_apps = [...integration_apps, ...integration_apps];

export default function Integration() {
    return (
        <section className="px-3 md:px-12 -mt-5 font-geist w-full overflow-hidden">
            <div className="flex flex-col items-center justify-center bg-[#f9f8f6] rounded-4xl w-full overflow-hidden px-4 md:px-10 pb-10 relative" style={{ maxWidth: '100vw' }}>
                <h1 className="text-[2rem] md:text-5xl font-semibold text-black leading-tight tracking-tight text-center text-balance mt-[4rem]" style={{ lineHeight: '1.1' }}>
                    Your Tools. One <span className='font-logo italic'>Seamless</span> Flow!
                </h1>
                <p className="mt-3 text-[0.7rem] md:text-sm font-normal text-black/50 max-w-2xl leading-relaxed text-center">
                    Loop.in connects seamlessly with Drive, Slack, Trello, Sheets, Forms, Discord and more — so all your favorite apps work together in one place.
                </p>

                <div className="w-full inline-flex py-10 flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] mt-12">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        {duplicated_apps.map((app, index) => (
                            <li key={index}>
                                <Image src={app.icon} alt={app.name} width={100} height={100} className="w-25 h-25 object-contain" />
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className='flex items-center justify-center w-full mt-12'>
                    <button className="bg-black hover:opacity-90 transition-all duration-300 text-white text-sm font-medium px-6 py-3 rounded-md flex items-center justify-center gap-2 shadow-md">
                        Explore All Integrations
                        <MoveRight className="text-white w-4 h-4 mt-1" />
                    </button>
                </div>

                <div className='hidden md:flex mt-12'>
                    <p className="text-xs md:text-sm text-black/50 max-w-2xl text-center">
                        Built alongside a community of makers and developers who believe integrations should be effortless.
                    </p>
                </div>
            </div>
        </section>
    )
}