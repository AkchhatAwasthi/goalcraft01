"use client";

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const PollPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        // Show popup after a short delay when component mounts
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    const handleInterested = () => {
        // Handle the "Yes, I'm interested" action
        console.log('User is interested in consultation');
        setIsOpen(false);
        // Redirect to WhatsApp
        const phoneNumber = '+918448447408';
        const message = 'Hi! I am interested in your 1-hour paid demo consultation for my business brand.';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };
    const handleClose = () => {
        setIsOpen(false);
    };
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold text-center"> Consultation Offer</DialogTitle>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    <p className="text-center text-muted-foreground">
                        Do you want a 1-hour paid demo consultation for your business brand?
                    </p>

                    <div className="flex flex-col gap-3">
                        <Button onClick={handleInterested} className="w-full" size="lg">
                            Yes, I'm interested
                        </Button>

                        <Button onClick={handleClose} variant="outline" className="w-full" size="lg">
                            Maybe later
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PollPopup;
