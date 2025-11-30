"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ExternalLink, TrendingUp, Users, Clock } from 'lucide-react';
import { BlogPost } from '@/app/data/blogs';

interface BlogCardProps {
    post: BlogPost;
    isVisible?: boolean;
    index?: number;
}

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

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

const BlogCard: React.FC<BlogCardProps> = ({ post, isVisible = true, index = 0 }) => {
    const IconComponent = getIconComponent(post.icon);

    return (
        <article
            className={`group bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:scale-105 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <Link href={`/blog/${post.slug}`} className="block">
                {/* Post Image */}
                <div className="aspect-video overflow-hidden relative">
                    <Image
                        src={post.bannerImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                </div>

                {/* Post Content */}
                <div className="p-6">
                    <div className="mb-4">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <IconComponent className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                                <span className="px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                                    {post.category}
                                </span>
                                <span className="text-muted-foreground">{post.readTime}</span>
                            </div>
                        </div>

                        <h3 className="text-lg font-medium text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                            {post.title}
                        </h3>

                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                            {post.description}
                        </p>
                    </div>

                    {/* Post Meta */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <User className="h-3 w-3" />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                <span>{formatDate(post.publishedDate)}</span>
                            </div>
                        </div>

                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <ExternalLink className="h-4 w-4 text-primary" />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    );
};

export default BlogCard;
