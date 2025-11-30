import React from 'react';
import Image from 'next/image';

const Logo = () => {
    return (
        <div className="flex items-center gap-0.5">
            <Image
                src="/logo.png"
                alt="GoalCraft Consultancy"
                width={40}
                height={40}
                className="h-10 w-auto"
            />
            <span className="text-xl font-semibold text-foreground">GoalCraft Consultancy</span>
        </div>
    );
};

export default Logo;
