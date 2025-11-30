"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { Menu, X, CircleDot, LayoutDashboard } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const Header = () => {
    const pathname = usePathname();
    const [activePage, setActivePage] = useState('how-we-work');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Helper to determine if a link is active
    // This is a simple approximation since we are using hash links
    const isActive = (value: string) => activePage === value;

    return (
        <div className="w-full bg-white/50 z-50 sticky top-0 backdrop-blur-sm">
            <header className="w-full mx-auto py-3 px-4 md:px-8 flex items-center justify-between">
                <div className="p-3">
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden p-3 rounded-2xl text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover:bg-accent/20"
                    onClick={toggleMobileMenu}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop navigation */}
                <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
                    <div className="rounded-full px-1 py-1 bg-white border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <ToggleGroup
                            type="single"
                            value={activePage}
                            onValueChange={(value: string) => value && setActivePage(value)}
                        >
                            <ToggleGroupItem
                                value="how-we-work"
                                className={cn(
                                    "px-4 py-2 rounded-full transition-all duration-300 relative hover:scale-105",
                                    isActive('how-we-work')
                                        ? 'bg-slate-900 text-white shadow-md'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                )}
                                asChild
                            >
                                <Link href="/#how-we-work" onClick={() => setActivePage('how-we-work')}>
                                    <CircleDot size={16} className="inline-block mr-1.5 transition-transform duration-300 group-hover:rotate-180" />
                                    How We Work
                                </Link>
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                value="about"
                                className={cn(
                                    "px-4 py-2 rounded-full transition-all duration-300 relative hover:scale-105",
                                    isActive('about')
                                        ? 'bg-slate-900 text-white shadow-md'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                )}
                                asChild
                            >
                                <Link href="/about" onClick={() => setActivePage('about')}>
                                    <LayoutDashboard size={16} className="inline-block mr-1.5 transition-transform duration-300 group-hover:scale-110" />
                                    About
                                </Link>
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                value="contact"
                                className={cn(
                                    "px-4 py-2 rounded-full transition-all duration-300 relative hover:scale-105",
                                    isActive('contact')
                                        ? 'bg-slate-900 text-white shadow-md'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                )}
                                asChild
                            >
                                <Link href="/contact" onClick={() => setActivePage('contact')}>
                                    Contact
                                </Link>
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                </nav>

                {/* Mobile navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-16 left-4 right-4 bg-white py-4 px-6 border border-border rounded-2xl shadow-lg z-50">
                        <div className="flex flex-col gap-4">
                            <Link
                                href="/#how-we-work"
                                className={`px-3 py-2 text-sm rounded-md transition-all duration-300 hover:scale-105 hover:translate-x-2 ${isActive('how-we-work')
                                    ? 'bg-accent text-accent-foreground'
                                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                    }`}
                                onClick={() => { setActivePage('how-we-work'); setMobileMenuOpen(false); }}
                            >
                                <CircleDot size={16} className="inline-block mr-1.5 transition-transform duration-300 hover:rotate-180" />
                                How We Work
                            </Link>
                            <Link
                                href="/about"
                                className={`px-3 py-2 text-sm rounded-md transition-all duration-300 hover:scale-105 hover:translate-x-2 ${isActive('about')
                                    ? 'bg-accent text-accent-foreground'
                                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                    }`}
                                onClick={() => { setActivePage('about'); setMobileMenuOpen(false); }}
                            >
                                <LayoutDashboard size={16} className="inline-block mr-1.5 transition-transform duration-300 hover:scale-110" />
                                About
                            </Link>
                            <Link
                                href="/contact"
                                className={`px-3 py-2 text-sm rounded-md transition-all duration-300 hover:scale-105 hover:translate-x-2 ${isActive('contact')
                                    ? 'bg-accent text-accent-foreground'
                                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                    }`}
                                onClick={() => { setActivePage('contact'); setMobileMenuOpen(false); }}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}

                <div className="hidden md:flex items-center gap-4">
                    <div className="rounded-2xl">
                        {/* Add any additional content here */}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
