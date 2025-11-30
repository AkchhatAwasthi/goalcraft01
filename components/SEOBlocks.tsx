"use client";

import React from 'react';
import { blogPosts } from '@/app/data/blogs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import BlogCard from '@/components/BlogCard';

const SEOBlocks = () => {

    return (
        <section className="w-full py-20 px-6 md:px-12 bg-background relative overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 cosmic-grid opacity-20"></div>

            <div className="max-w-7xl mx-auto space-y-16 relative z-10">
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground">
                        Restaurant Growth Resources
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Expert insights, proven strategies, and real success stories to accelerate your restaurant's growth
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.slice(0, 6).map((article, index) => (
                        <BlogCard key={article.id} post={article} index={index} />
                    ))}
                </div>

                <div className="text-center">
                    <div className="mt-12">
                        <Link href="/blog">
                            <Button
                                variant="outline"
                                className="px-8 py-3 text-base hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                            >
                                View All Articles
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SEOBlocks;
