"use client";

import React from 'react';
import { blogPosts } from '@/app/data/blogs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';

export default function BlogPostPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Header />

            <main className="flex-1">
                {/* Hero Section with Banner */}
                <div className="relative h-[60vh] min-h-[400px] w-full">
                    <Image
                        src={post.bannerImage}
                        alt={post.title}
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-12">
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Blog
                        </Link>

                        <div className="space-y-4 max-w-4xl">
                            <span className="inline-block px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                                {post.category}
                            </span>
                            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm md:text-base">
                                <div className="flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    <span>{post.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>{formatDate(post.publishedDate)}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    <span>{post.readTime}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <article className="lg:col-span-2">
                            <link rel="stylesheet" href="/content.css" />
                            <div
                                className="main-content"
                                dangerouslySetInnerHTML={{ __html: post.content || post.description }}
                            />
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1 space-y-8">
                            <div className="sticky top-24 space-y-8">
                                {/* Quick Links Widget */}
                                <div className="bg-card border border-border rounded-xl p-6">
                                    <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                                    <ul className="space-y-2">
                                        <li>
                                            <Link href="/#services" className="text-muted-foreground hover:text-primary transition-colors">
                                                Our Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors">
                                                About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
                                                Contact Support
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* Related Blogs Widget */}
                                <div className="bg-card border border-border rounded-xl p-6">
                                    <h3 className="text-lg font-bold mb-4">Related Articles</h3>
                                    <div className="space-y-4">
                                        {relatedPosts.map((relatedPost) => (
                                            <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="block group">
                                                <div className="flex gap-3">
                                                    <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                                                        <Image
                                                            src={relatedPost.bannerImage}
                                                            alt={relatedPost.title}
                                                            fill
                                                            className="object-cover group-hover:scale-110 transition-transform"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                                                            {relatedPost.title}
                                                        </h4>
                                                        <span className="text-xs text-muted-foreground mt-1 block">
                                                            {formatDate(relatedPost.publishedDate)}
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>

            <Footer />
        </div >
    );
}
