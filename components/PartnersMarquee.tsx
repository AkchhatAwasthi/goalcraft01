import React from 'react';
import Image from 'next/image';
import { partnerLogos } from '@/app/data/ourPartners';

const PartnersMarquee = () => {
    return (
        <div className="w-full bg-slate-50 py-12 overflow-hidden border-y border-slate-200">
            <div className="container mx-auto px-4 mb-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Trusted By Leading Partners</h2>
            </div>
            <div className="relative w-full overflow-hidden flex group">
                <div className="flex whitespace-nowrap animate-loop-scroll group-hover:paused items-center">
                    {partnerLogos.map((partner) => (
                        <div key={`p1-${partner.id}`} className="mx-8 relative h-16 w-32 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                            <Image
                                src={partner.logoUrl}
                                alt={partner.alt}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100px, 150px"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex whitespace-nowrap animate-loop-scroll group-hover:paused items-center" aria-hidden="true">
                    {partnerLogos.map((partner) => (
                        <div key={`p2-${partner.id}`} className="mx-8 relative h-16 w-32 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                            <Image
                                src={partner.logoUrl}
                                alt={partner.alt}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100px, 150px"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PartnersMarquee;
