
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import '../globals.css';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    Linkedin,
    Twitter,
    Instagram,
    Facebook,
    CheckCircle
} from 'lucide-react';

interface FormState {
    name: string;
    email: string;
    company: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user types
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitSuccess(null);
        setSubmitError(null);

        try {
            const response = await fetch('https://formspree.io/f/xjkwjnvk', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitSuccess(true);
                // Reset form after successful submission
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    message: ''
                });
            } else {
                setSubmitSuccess(false);
                setSubmitError(data.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setSubmitSuccess(false);
            setSubmitError('Network error. Please check your connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-gray-50">
            <Head>
                <title>Contact Us | Flow - Where Ideas Flow Into Reality</title>
                <meta name="description" content="Get in touch with Flow. We connect visionary entrepreneurs with strategic investors to transform groundbreaking ideas into successful ventures." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Contact Us | Flow" />
                <meta property="og:description" content="Connect with Flow - the platform that bridges startups with investors." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://flowventures.com/contact" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Page Title */}
            <section className="py-12" style={{ backgroundColor: '#f0f7fc' }}>
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Get in <span style={{ color: '#0674B4' }}>Touch</span>
                        </h1>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                            Have questions about Flow or ready to start your investment journey? Our team is here to help your vision become reality.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Information */}
                        <div className="bg-white rounded-xl shadow-md p-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 rounded-full p-2 mr-4" style={{ backgroundColor: 'rgba(6, 116, 180, 0.1)' }}>
                                        <Phone className="h-6 w-6" style={{ color: '#0674B4' }} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900">Phone</h3>
                                        <p className="text-gray-600 mt-1">+254-729-822-061</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 rounded-full p-2 mr-4" style={{ backgroundColor: 'rgba(6, 116, 180, 0.1)' }}>
                                        <Mail className="h-6 w-6" style={{ color: '#0674B4' }} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900">Email</h3>
                                        <p className="text-gray-600 mt-1">teamflowfunding@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 rounded-full p-2 mr-4" style={{ backgroundColor: 'rgba(6, 116, 180, 0.1)' }}>
                                        <Clock className="h-6 w-6" style={{ color: '#0674B4' }} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900">Business Hours</h3>
                                        <p className="text-gray-600 mt-1">Monday - Friday: 9am - 6pm</p>
                                        <p className="text-gray-600">Saturday - Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <h3 className="font-medium text-gray-900 mb-4">Connect With Us</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="rounded-full p-2" style={{ backgroundColor: 'rgba(6, 116, 180, 0.1)' }}>
                                        <Linkedin className="h-5 w-5" style={{ color: '#0674B4' }} />
                                    </a>
                                    <a href="#" className="rounded-full p-2" style={{ backgroundColor: 'rgba(6, 116, 180, 0.1)' }}>
                                        <Twitter className="h-5 w-5" style={{ color: '#0674B4' }} />
                                    </a>
                                    <a href="#" className="rounded-full p-2" style={{ backgroundColor: 'rgba(6, 116, 180, 0.1)' }}>
                                        <Instagram className="h-5 w-5" style={{ color: '#0674B4' }} />
                                    </a>
                                    <a href="#" className="rounded-full p-2" style={{ backgroundColor: 'rgba(6, 116, 180, 0.1)' }}>
                                        <Facebook className="h-5 w-5" style={{ color: '#0674B4' }} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-xl shadow-md p-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>

                            {submitSuccess === true && (
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                    <div>
                                        <p className="text-green-700 font-medium">Message sent successfully!</p>
                                        <p className="text-green-600 text-sm mt-1">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                                    </div>
                                </div>
                            )}

                            {submitSuccess === false && (
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                                    <p className="text-red-700 font-medium">Unable to send message</p>
                                    <p className="text-red-600 text-sm mt-1">{submitError || "Please try again later."}</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-blue-500`}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-blue-500`}
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                                        Company / Organization
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-blue-500"
                                        placeholder="Your Company"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className={`w-full px-4 py-2 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-blue-500`}
                                        placeholder="How can we help you?"
                                    ></textarea>
                                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="flex items-center justify-center px-6 py-3 text-white rounded-lg hover:bg-opacity-90 transition-colors text-center font-medium w-full"
                                    style={{ backgroundColor: '#0674B4' }}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    ) : (
                                        <Send className="h-5 w-5 mr-2" />
                                    )}
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                            <p className="text-gray-600 mt-4">Find answers to common questions about Flow</p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-lg font-medium text-gray-900">How does Flow connect startups with investors?</h3>
                                <p className="text-gray-600 mt-2">Flow uses a proprietary matching algorithm based on industry, investment stage, funding requirements, and growth potential to connect the right startups with interested investors.</p>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-lg font-medium text-gray-900">What types of startups can join Flow?</h3>
                                <p className="text-gray-600 mt-2">Flow welcomes startups from all industries at various stages, from seed to Series B. Our platform is particularly strong for tech, healthcare, sustainability, and consumer product startups.</p>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-lg font-medium text-gray-900">How do investors get verified on Flow?</h3>
                                <p className="text-gray-600 mt-2">We have a thorough verification process for all investors that includes proof of funds, investment history review, and reference checks to ensure only qualified investors join our platform.</p>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-lg font-medium text-gray-900">What fees does Flow charge?</h3>
                                <p className="text-gray-600 mt-2">Flow operates on a success-based model with transparent fees. Startups pay a small subscription fee to maintain their profile, while a success fee is only charged when funding is secured.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16" style={{ backgroundColor: '#f0f7fc' }}>
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Ideas Into Reality?</h2>
                        <p className="text-lg text-gray-700 mb-8">Join thousands of successful startups and investors who are building the future with Flow.</p>
                        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link href="/investors/register" className="px-6 py-3 text-white rounded-lg hover:bg-opacity-90 transition-colors text-center font-medium" style={{ backgroundColor: '#0674B4' }}>
                                Register as Investor
                            </Link>
                            <Link href="/startups/register" className="px-6 py-3 border rounded-lg hover:bg-white transition-colors text-center font-medium" style={{ borderColor: '#0674B4', color: '#0674B4' }}>
                                Register as Startup
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;