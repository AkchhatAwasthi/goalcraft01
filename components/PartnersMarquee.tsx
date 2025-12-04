import React from 'react';

const PARTNERS = [
    "Swiggy", "Zomato", "MagicPin", "Dineout", "EazyDiner", "DotPe", "Thrive", "Petpooja", "Posist"
];

const PartnersMarquee = () => {
    return (
        <div className="w-full bg-slate-50 py-12 overflow-hidden border-y border-slate-200">
            <div className="container mx-auto px-4 mb-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Trusted By Leading Partners</h2>
            </div>
            <div className="relative w-full overflow-hidden flex group">
                <div className="flex whitespace-nowrap animate-loop-scroll group-hover:paused">
                    {PARTNERS.map((partner, index) => (
                        <span key={`p1-${index}`} className="mx-8 text-3xl md:text-5xl font-bold text-slate-300 hover:text-slate-400 transition-colors cursor-default">
                            {partner}
                        </span>
                    ))}
                </div>
                <div className="flex whitespace-nowrap animate-loop-scroll group-hover:paused" aria-hidden="true">
                    {PARTNERS.map((partner, index) => (
                        <span key={`p2-${index}`} className="mx-8 text-3xl md:text-5xl font-bold text-slate-300 hover:text-slate-400 transition-colors cursor-default">
                            {partner}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PartnersMarquee;
