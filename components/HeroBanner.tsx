import React from 'react';
import Image from 'next/image';

interface HeroBannerProps {
    imageSrc: string;
    title: string;
    subtitle: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ imageSrc, title, subtitle }) => {
    return (
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                    {title}
                </h1>
                <p className="text-lg md:text-2xl text-white/90 max-w-2xl drop-shadow-md">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

export default HeroBanner;
