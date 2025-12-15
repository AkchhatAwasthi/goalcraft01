"use client";

import React, { useState, useEffect } from 'react';
import { blogPosts } from '@/app/data/blogs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, ExternalLink, TrendingUp, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import BlogCard from '@/components/BlogCard';

export const metadata: Metadata = {
    title: 'Restaurant Growth Insights – Smart Tips to Boost Orders & Visibility',
    description: 'Discover practical, proven restaurant strategies from menu design to Swiggy/Zomato growth. Get the edge in this competitive food market — explore now!',
};

const BlogListing = () => {
    const [visiblePosts, setVisiblePosts] = useState(6);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    const loadMorePosts = () => {
        setVisiblePosts(prev => Math.min(prev + 6, blogPosts.length));
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getIconComponent = (iconName: string) => {
        switch (iconName) {
            case 'TrendingUp':
                return TrendingUp;
            case 'Users':
                return Users;
            case 'Clock':
                return Clock;
            default:
                return TrendingUp;
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
                    <div className="absolute inset-0 cosmic-grid opacity-20"></div>

                    <div className={`max-w-4xl mx-auto text-center space-y-6 relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                            Restaurant Growth Resources
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Expert insights, proven strategies, and real success stories to accelerate your restaurant's growth on Swiggy and Zomato
                        </p>
                    </div>
                </section>

                {/* Blog Posts Grid */}
                <section className="py-20 px-6 md:px-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogPosts.slice(0, visiblePosts).map((post, index) => (
                                <BlogCard key={post.id} post={post} isVisible={isVisible} index={index} />
                            ))}
                        </div>

                        {/* Load More Button */}
                        {visiblePosts < blogPosts.length && (
                            <div className="text-center mt-12">
                                <Button
                                    onClick={loadMorePosts}
                                    variant="outline"
                                    className="px-8 py-3 text-base hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                                >
                                    Load More Articles
                                </Button>
                            </div>
                        )}

                        {/* All Posts Loaded Message */}
                        {visiblePosts >= blogPosts.length && (
                            <div className="text-center mt-12">
                                <p className="text-muted-foreground">
                                    You've reached the end! Check back soon for more restaurant growth insights.
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 px-6 md:px-12 bg-primary/5">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Ready to Implement These Strategies?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Get personalized consultation and proven strategies tailored to your restaurant's specific needs and goals.
                        </p>
                        <Button
                            onClick={() => {
                                const footer = document.querySelector('footer');
                                footer?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="bg-primary text-primary-foreground hover:bg-primary/80 px-8 py-3 text-base"
                        >
                            Get Expert Consultation
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default BlogListing;
