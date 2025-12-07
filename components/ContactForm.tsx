"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id === 'first-name' ? 'firstName' : id === 'last-name' ? 'lastName' : id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus('idle');
        setErrorMessage('');

        try {
            // Prepare data for Netlify
            const netlifyBody = new URLSearchParams({
                'form-name': 'contact',
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
            }).toString();

            // Submit to Netlify
            const netlifyPromise = fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: netlifyBody,
            });

            // Submit to internal API (Email)
            const apiPromise = fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Wait for both (or at least Netlify if that's the priority, but let's try both)
            const [netlifyResponse, apiResponse] = await Promise.all([netlifyPromise, apiPromise]);

            if (apiResponse.ok || netlifyResponse.ok) { // Consider success if at least one works, or check both
                setStatus('success');

                // WhatsApp Redirection
                const whatsappMessage = `*New Contact Request*\n\n*Name:* ${formData.firstName} ${formData.lastName}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Message:* ${formData.message}`;
                const whatsappUrl = `https://wa.me/919653814628?text=${encodeURIComponent(whatsappMessage)}`;

                // Open WhatsApp in new tab
                window.open(whatsappUrl, '_blank');

                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                const data = await apiResponse.json();
                setStatus('error');
                setErrorMessage(data.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Failed to send message. Please check your connection.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="md:col-span-3 p-8 md:p-12 bg-white">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h2>

            {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-in fade-in zoom-in duration-500">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">Message Sent!</h3>
                    <p className="text-slate-600 max-w-md">
                        Thank you for contacting us. We have received your message and will get back to you shortly.
                    </p>
                    <Button
                        onClick={() => setStatus('idle')}
                        className="mt-4 bg-slate-900 text-white hover:bg-slate-800"
                    >
                        Send Another Message
                    </Button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6" name="contact">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="first-name" className="text-sm font-medium text-slate-700">First name</label>
                            <Input
                                id="first-name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="John"
                                required
                                className="bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="last-name" className="text-sm font-medium text-slate-700">Last name</label>
                            <Input
                                id="last-name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Doe"
                                required
                                className="bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                            className="bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone (Optional)</label>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className="bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                        <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your restaurant and how we can help..."
                            required
                            className="min-h-[150px] bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary resize-none"
                        />
                    </div>

                    {status === 'error' && (
                        <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                            <AlertCircle size={18} />
                            <span className="text-sm font-medium">{errorMessage}</span>
                        </div>
                    )}

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full md:w-auto bg-[#0B1E3F] hover:bg-[#0B1E3F]/90 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <>Sending... <Loader2 className="ml-2 h-4 w-4 animate-spin" /></>
                        ) : (
                            <>Send Message <Send size={18} className="ml-2" /></>
                        )}
                    </Button>
                </form>
            )}
        </div>
    );
}
