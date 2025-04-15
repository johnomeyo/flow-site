"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full" style={{ backgroundColor: '#0674B4' }}></div>
            <span className="font-bold text-2xl" style={{ color: '#0674B4' }}>Flow</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/entrepreneurs" className="text-gray-700 hover:text-blue-600 transition-colors">
              For Entrepreneurs
            </Link>
            <Link href="/investors" className="text-gray-700 hover:text-blue-600 transition-colors">
              For Investors
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About Us
            </Link>
            <Link href="/download" className="px-4 py-2 text-white rounded-lg hover:bg-opacity-90 transition-colors" style={{ backgroundColor: '#0674B4' }}>
              Download App
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200 p-4">
            <div className="flex flex-col space-y-4">
              <Link href="/entrepreneurs" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
                For Entrepreneurs
              </Link>
              <Link href="/investors" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
                For Investors
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
                About Us
              </Link>
              <Link href="/download" className="py-2 px-4 text-white rounded-lg hover:bg-opacity-90 transition-colors text-center" style={{ backgroundColor: '#0674B4' }}>
                Download App
              </Link>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 overflow-hidden" style={{ backgroundColor: '#f0f7fc' }}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Where Ideas <span style={{ color: '#0674B4' }}>Flow</span> Into Reality
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
                Connecting visionary entrepreneurs with strategic investors to transform groundbreaking ideas into successful ventures.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/download" className="px-6 py-3 text-white rounded-lg hover:bg-opacity-90 transition-colors text-center font-medium" style={{ backgroundColor: '#0674B4' }}>
                  Get Started
                </Link>
                <Link href="/learn-more" className="px-6 py-3 border rounded-lg hover:bg-white transition-colors text-center font-medium" style={{ borderColor: '#0674B4', color: '#0674B4' }}>
                  Learn More
                </Link>
              </div>
            </div>

            {/* Modified hero image - better on mobile */}
            <div className="w-full lg:w-1/2">
              <div className="relative mx-auto max-w-md">
                {/* Mobile-friendly hero illustration */}
                <div className="hidden sm:block absolute -z-10 -top-4 -left-4 w-64 h-64 rounded-full opacity-20" style={{ backgroundColor: '#0674B4' }}></div>
                <div className="hidden sm:block absolute -z-10 -bottom-8 -right-8 w-48 h-48 rounded-full opacity-20" style={{ backgroundColor: '#0674B4' }}></div>

                {/* App mockup - simplified for mobile */}
                <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-16 flex items-center px-6" style={{ backgroundColor: '#0674B4' }}>
                    <div className="flex space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-400"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                      <div className="h-3 w-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                      <div>
                        <div className="h-4 w-32 bg-gray-200 rounded"></div>
                        <div className="h-3 w-24 bg-gray-100 rounded mt-2"></div>
                      </div>
                    </div>
                    <div className="h-24 bg-gray-100 rounded-md w-full"></div>
                    <div className="flex space-x-2">
                      <div className="h-8 w-8 rounded-full" style={{ backgroundColor: 'rgba(6, 116, 180, 0.1)' }}></div>
                      <div className="h-8 w-8 rounded-full" style={{ backgroundColor: 'rgba(6, 116, 180, 0.1)' }}></div>
                      <div className="h-8 w-8 rounded-full" style={{ backgroundColor: 'rgba(6, 116, 180, 0.1)' }}></div>
                    </div>
                    <div className="h-10 rounded-md" style={{ backgroundColor: 'rgba(6, 116, 180, 0.1)' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Expanded */}
      <section className="py-20 w-full bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Flow Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform streamlines the connection between entrepreneurs and investors through a simple, effective process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "For Entrepreneurs",
                description: "Showcase your ideas to a network of qualified investors ready to fund the next big innovation. Get feedback and refine your pitch.",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ color: '#0674B4' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              {
                title: "For Investors",
                description: "Discover promising startups and entrepreneurs with validated business models worth your investment. Filter by industry, stage, and potential.",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ color: '#0674B4' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Smart Matching",
                description: "Our algorithm connects you with the perfect partners based on industry, goals, and investment criteria for optimal collaboration.",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ color: '#0674B4' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full" style={{ backgroundColor: 'rgba(6, 116, 180, 0.1)' }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Additional feature content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Features with Icons */}
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#0674B4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Streamlined Connections</h3>
                  <p className="text-gray-600">Efficient platform for idea presentation and evaluation</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                    title: "Secure Comms",
                    desc: "Encrypted messaging"
                  },
                  {
                    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
                    title: "Video Meetings",
                    desc: "Integrated directly"
                  },
                  {
                    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                    title: "Documents",
                    desc: "Version control"
                  },
                  {
                    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                    title: "Milestones",
                    desc: "Progress tracking"
                  }
                ].map((feature, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-blue-50 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#0674B4">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Investment Types with Visual Indicators */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-3">Investment Focus Areas</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "Seed Fundings", value: 35, color: "bg-blue-200" },
                    { name: "Series A", value: 25, color: "bg-blue-300" },
                    { name: "Venture Capital", value: 20, color: "bg-blue-400" },
                    { name: "Angel Network", value: 20, color: "bg-blue-500" }
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-3 rounded-lg shadow-xs">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-medium text-gray-600">{item.name}</span>
                        <span className="text-xs font-bold" style={{ color: '#0674B4' }}>{item.value}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-1.5">
                        <div
                          className={`h-1.5 rounded-full ${item.color}`}
                          style={{ width: `${item.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", title: "Growth" },
                  { icon: "M9 3v2h6V3m0 18v-2H9v2m6-16h2a2 2 0 012 2v12a2 2 0 01-2 2h-2m-6 0H7a2 2 0 01-2-2V7a2 2 0 012-2h2", title: "Scale" },
                  { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "Funding" },
                  { icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", title: "Partners" }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
                    <div className="w-8 h-8 rounded-md bg-blue-50 flex items-center justify-center mb-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#0674B4">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <h5 className="font-medium text-gray-700">{item.title}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 w-full text-white bg-gradient-to-br from-[#0674B4] to-blue-900">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to transform your ideas into reality?</h2>
                <div className="h-1 w-16 bg-blue-300 mt-4"></div>
              </div>

              <p className="text-blue-50 text-lg max-w-lg">
                Join thousands of entrepreneurs and investors already using our platform to connect, collaborate, and create successful ventures.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="border border-blue-300 p-4 rounded-md backdrop-blur-sm bg-[#0674B4]">
                  <p className="font-semibold text-2xl">5,000+</p>
                  <p className="text-blue-100 text-sm">Active Entrepreneurs</p>
                </div>
                <div className="border border-blue-300 p-4 rounded-md backdrop-blur-sm bg-[#0674B4]">
                  <p className="font-semibold text-2xl">$100M+</p>
                  <p className="text-blue-100 text-sm">Investment Facilitated</p>
                </div>
                <div className="border border-blue-300 p-4 rounded-md backdrop-blur-sm bg-[#0674B4]">
                  <p className="font-semibold text-2xl">1,200+</p>
                  <p className="text-blue-100 text-sm">Investor Network</p>
                </div>
                <div className="border border-blue-300 p-4 rounded-md backdrop-blur-sm bg-[#0674B4]">
                  <p className="font-semibold text-2xl">92%</p>
                  <p className="text-blue-100 text-sm">Success Rate</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/download" className="px-6 py-3 bg-white text-[#0674B4] text-center font-medium rounded-md hover:bg-blue-50 transition-colors duration-300 shadow-sm">
                  Download Now
                </a>
                <a href="/contact" className="px-6 py-3 border border-white text-white text-center font-medium rounded-md hover:bg-white hover:bg-opacity-10 transition-colors duration-300">
                  Schedule a Demo
                </a>
              </div>
            </div>

            <div className="space-y-6 mt-8 md:mt-0">
              <div className="backdrop-blur-sm bg-[#0674B4] border border-blue-300 p-6 rounded-md">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 text-yellow-300 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="italic text-blue-50 mb-6">
                  "Flow has been instrumental in helping us secure our Series A funding. The platform made it easy to connect with the right investors who understood our vision."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-300 to-blue-200 flex items-center justify-center text-[#0674B4] font-bold">SJ</div>
                  <div className="ml-3">
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-blue-200 text-sm">CEO, TechNova</p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-sm bg-[#0674B4] border border-blue-300 p-6 rounded-md">
                <h3 className="text-xl font-semibold mb-4">Four Simple Steps</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-300 text-[#0674B4] flex items-center justify-center font-semibold text-sm">1</div>
                    <p className="ml-3 text-blue-50">Download the Flow app</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-300 text-[#0674B4] flex items-center justify-center font-semibold text-sm">2</div>
                    <p className="ml-3 text-blue-50">Create your profile</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-300 text-[#0674B4] flex items-center justify-center font-semibold text-sm">3</div>
                    <p className="ml-3 text-blue-50">Connect with potential partners</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-300 text-[#0674B4] flex items-center justify-center font-semibold text-sm">4</div>
                    <p className="ml-3 text-blue-50">Start collaborating and growing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-6 w-6 rounded-full" style={{ backgroundColor: '#0674B4' }}></div>
                <span className="font-bold text-xl text-white">Flow</span>
              </div>
              <p className="text-sm">
                Connecting entrepreneurs with investors to create successful business partnerships.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><Link href="/entrepreneurs" className="hover:text-blue-400 transition-colors">For Entrepreneurs</Link></li>
                <li><Link href="/investors" className="hover:text-blue-400 transition-colors">For Investors</Link></li>
                <li><Link href="/success-stories" className="hover:text-blue-400 transition-colors">Success Stories</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
                <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Flow. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}