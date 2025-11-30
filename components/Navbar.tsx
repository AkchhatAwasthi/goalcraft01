'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('how-we-work');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Detect which section is in view
            const sections = ['how-we-work', 'about', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300">
            <div className={`backdrop-blur-md bg-white/70 rounded-full border border-gray-200/50 shadow-lg transition-all duration-300 ${isScrolled ? 'bg-white/90' : ''}`}>
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo and Brand */}
                        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <Image
                                src="/logo.png"
                                alt="GoalCraft Consultancy Logo"
                                width={32}
                                height={32}
                                className="w-8 h-8"
                            />
                            <span className="text-[#1a1a1a] font-semibold text-lg whitespace-nowrap">
                                GoalCraft Consultancy
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-3 lg:gap-6">
                            <button
                                onClick={() => scrollToSection('how-we-work')}
                                className={`flex items-center gap-2 px-4 lg:px-5 py-2 rounded-full transition-colors text-sm font-medium cursor-pointer whitespace-nowrap ${
                                    activeSection === 'how-we-work'
                                        ? 'bg-[#3a3a3a] text-white'
                                        : 'bg-transparent text-[#4a4a4a] hover:text-[#1a1a1a]'
                                }`}
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                    <path strokeWidth="2" d="M12 6v6l4 2" />
                                </svg>
                                How We Work
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className={`px-4 lg:px-5 py-2 rounded-full transition-colors text-sm font-medium cursor-pointer ${
                                    activeSection === 'about'
                                        ? 'bg-[#3a3a3a] text-white'
                                        : 'text-[#4a4a4a] hover:text-[#1a1a1a]'
                                }`}
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className={`px-4 lg:px-5 py-2 rounded-full transition-colors text-sm font-medium cursor-pointer ${
                                    activeSection === 'contact'
                                        ? 'bg-[#3a3a3a] text-white'
                                        : 'text-[#4a4a4a] hover:text-[#1a1a1a]'
                                }`}
                            >
                                Contact
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-200/50 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6 text-[#1a1a1a]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden py-4 border-t border-gray-200/50">
                            <div className="flex flex-col gap-3">
                                <button
                                    onClick={() => scrollToSection('how-we-work')}
                                    className={`flex items-center gap-2 px-5 py-2 rounded-full transition-colors text-sm font-medium ${
                                        activeSection === 'how-we-work'
                                            ? 'bg-[#3a3a3a] text-white'
                                            : 'bg-transparent text-[#4a4a4a] hover:text-[#1a1a1a]'
                                    }`}
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                        <path strokeWidth="2" d="M12 6v6l4 2" />
                                    </svg>
                                    How We Work
                                </button>
                                <button
                                    onClick={() => scrollToSection('about')}
                                    className={`px-5 py-2 rounded-full transition-colors text-sm font-medium ${
                                        activeSection === 'about'
                                            ? 'bg-[#3a3a3a] text-white'
                                            : 'text-[#4a4a4a] hover:text-[#1a1a1a]'
                                    }`}
                                >
                                    About
                                </button>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className={`px-5 py-2 rounded-full transition-colors text-sm font-medium ${
                                        activeSection === 'contact'
                                            ? 'bg-[#3a3a3a] text-white'
                                            : 'text-[#4a4a4a] hover:text-[#1a1a1a]'
                                    }`}
                                >
                                    Contact
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
