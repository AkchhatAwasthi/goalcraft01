"use client";

import React from 'react';
import { Search, Settings, TrendingUp } from 'lucide-react';

const HowWeWork = () => {
    const steps = [{
        icon: Search,
        title: "Analysis",
        description: "Audit your current listings and menu design",
        details: (
            <>
                We analyze your <span className="text-red-500">Zomato</span> & <span className="text-orange-500">Swiggy</span> presence, menu structure, pricing strategy, and competition to identify improvement opportunities.
            </>
        )
    }, {
        icon: Settings,
        title: "Optimization",
        description: "Redesign for conversion and visibility",
        details: "We restructure your menu, optimize photos, adjust pricing, and enhance descriptions to maximize customer appeal and platform algorithms."
    }, {
        icon: TrendingUp,
        title: "Growth",
        description: "Monitor performance and increase reach",
        details: "We track key metrics, A/B test improvements, and continuously optimize your presence for sustained growth and higher revenue."
    }];

    return (
        <section id="how-we-work" className="w-full py-20 px-6 md:px-12 bg-background relative overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 cosmic-grid opacity-20"></div>

            <div className="max-w-7xl mx-auto space-y-16 relative z-10">
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground">
                        How We Work
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Our proven 3-step process to transform your restaurant's online presence
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="group p-8 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-105">
                            <div className="mb-6">
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                    <step.icon className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                                        Step {index + 1}
                                    </span>
                                </div>
                                <h3 className="text-xl font-medium text-foreground mb-2">{step.title}</h3>
                                <p className="text-muted-foreground font-medium mb-3">{step.description}</p>
                            </div>

                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {step.details}
                            </p>

                            <div className="mt-6 pt-4 border-t border-border/50 my-0">

                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center pt-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
                        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                        Results typically seen within 30 days
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;
