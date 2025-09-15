import Image from 'next/image';
import { MoveRight } from 'lucide-react';
export default function Attention2() {
    return (
        <section className="px-3 md:px-8 py-8 -mt-8 font-geist w-full overflow-hidden relative">
            <div className="w-full bg-white rounded-4xl overflow-hidden py-6 md:px-10 flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/2">
                    <h2 className="text-2xl md:text-4xl text-balance font-semibold text-black leading-tight">
                        Automate your workflows with ease
                        <span className="text-gray-400">—and focus on what really matters</span>
                    </h2>
                    <div className="mt-6">
                        <button className="mt-8 bg-black hover:opacity-90 transition-all duration-300 text-white text-sm font-medium px-6 py-3 rounded-md flex items-center justify-center gap-2 shadow-md">
                            Start building for free
                            <MoveRight className="text-white w-4 h-4 mt-1" />
                        </button>
                    </div>
                </div>
                {/* Desktop image */}
                <div className="hidden md:flex md:w-1/2 items-center justify-end -mr-6">
                    <div className="w-[420px] pt-6 h-[260px] md:w-[520px] md:h-[320px] rounded-2xl overflow-hidden">
                        <Image src="/pottedFlowers.png" alt="Decorative" width={400} height={300} className="object-cover select-none" />
                    </div>
                </div>
                {/* Mobile-only absolute positioned image */}
                <div className="md:hidden absolute -right-13 top-[45%] w-[200px] h-[140px] rounded-2xl overflow-hidden">
                    <Image
                        src="/pottedFlowers.png"
                        alt="Decorative"
                        width={150}
                        height={140}
                        className="object-cover select-none rotate-25"
                    />
                </div>
            </div>
        </section>
    );
}
