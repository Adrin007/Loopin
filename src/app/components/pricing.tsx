import { MoveRight, Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      label: 'FREE PLAN',
      desc: 'Loop.in provides the tools you need to quickly build a high-quality automation.',
      price: '₹0',
      caption: '/ month',
      features: ['Access to simple features', '1 workflow', '1 integration', 'Basic chat support'],
    },
    {
      label: 'PRO PLAN',
      desc: 'Loop.in provides the tools you need to quickly build a high-quality automation.',
      price: '₹199',
      caption: '/ month',
      badge: 'Best Seller',
      features: ['All Free features', '100+ integrations', 'Up to 5 workflows', '20GB data per user', 'Priority chat and email support'],
    },
    {
      label: 'ENTERPRISE PLAN',
      desc: 'Loop.in provides the tools you need to quickly build a high-quality automation.',
      price: '₹1,999',
      caption: '/ month',
      features: ['Advanced automation features', 'Unlimited workflows', 'Unlimited integrations', 'Dedicated support'],
    },
  ];

  return (
    <section className="relative px-3 md:px-8 font-geist w-full overflow-hidden">
      <div className="flex flex-col items-center justify-center bg-[#f9f8f6] rounded-4xl w-full overflow-hidden px-6 md:px-12 py-17" style={{ maxWidth: '100vw' }}>
        <h2 className="text-[2rem] md:text-5xl font-semibold text-black leading-tight tracking-tight text-center text-balance" style={{ lineHeight: '1.1' }}>Unlock the <span className='font-logo italic'>Plan</span> That Moves You Forward</h2>
        <p className="mt-3 text-xs md:text-sm font-normal text-gray-700 max-w-2xl leading-relaxed text-center">
          Explore our prices and see why over 100 creators choose Loop.in to build their automations quickly.
        </p>

        <div className="mt-16 w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-2">
          {plans.map((p, i) => {
            const featured = i === 1;
            return (
              <article key={p.label} className={`rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between min-h-[420px] transition-all duration-300 ${featured ? 'bg-black text-white' : 'bg-white border-4 border-b-[1rem] border-black'}`}>
                <div>
                  <div className="flex flex-col items-start justify-center w-full">
                    <div className='flex flex-row items-center justify-between w-full'>
                      <div>
                        <h3 className={`text-sm font-semibold uppercase tracking-wider ${featured ? 'text-white' : 'text-black'}`}>{p.label}</h3>
                      </div>
                      {p.badge && (
                      <div className="text-xs text-gray-900 bg-white px-2 py-1 rounded-full font-semibold ml-2">{p.badge}</div>
                      )}
                    </div>
                    <p className={`mt-3 text-xs md:text-sm font-normal leading-relaxed ${featured ? 'text-white/90' : 'text-gray-600'}`}>{p.desc}</p>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-baseline gap-2">
                      <div className={`text-4xl md:text-5xl font-bold ${featured ? 'text-white' : 'text-black'}`}>{p.price}</div>
                      <div className={`text-sm ${featured ? 'text-white/80' : 'text-gray-600'}`}>{p.caption}</div>
                    </div>
                  </div>

                  <ul className={`mt-6 space-y-2 ${featured ? 'text-white/90' : 'text-gray-700'}`}>
                    {p.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <Check className={`${featured ? 'text-white' : 'text-black/60'} w-4 h-4 mt-0.5 flex-shrink-0`} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  {featured ? (
                    <button className="w-full bg-white text-black font-medium rounded-full py-4 text-md flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300">
                      Get it now
                      <MoveRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button className="w-full bg-black text-white font-medium rounded-full py-4 text-md flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300">
                      Get it now
                      <MoveRight className="w-4 h-4 text-white" />
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
