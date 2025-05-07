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
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact Us
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
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
                Contact Us
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
      {/* How It Works Section */}
      <section className="py-16 md:py-24 " style={{ backgroundColor: '#D7E6EA' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How <span style={{ color: '#0674B4' }}>Flow</span> Works</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">Our streamlined process connects innovative startups with the right investors, making fundraising more efficient and effective.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection lines (visible on md+ screens) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10"></div>

            {/* Step 1 */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6 mx-auto" style={{ backgroundColor: '#0674B4' }}>1</div>
              <h3 className="text-xl font-bold mb-4 text-center">Create Your Profile</h3>
              <p className="text-gray-600 text-center">Startups build comprehensive profiles showcasing their vision, team, and metrics that matter to investors.</p>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rotate-45 bg-white border-r border-b border-gray-100 hidden md:block"></div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 md:mt-12">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6 mx-auto" style={{ backgroundColor: '#0674B4' }}>2</div>
              <h3 className="text-xl font-bold mb-4 text-center">Get Matched</h3>
              <p className="text-gray-600 text-center">Our AI-powered algorithm connects you with investors who align with your industry, stage, and funding needs.</p>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rotate-45 bg-white border-r border-b border-gray-100 hidden md:block"></div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6 mx-auto" style={{ backgroundColor: '#0674B4' }}>3</div>
              <h3 className="text-xl font-bold mb-4 text-center">Secure Funding</h3>
              <p className="text-gray-600 text-center">Connect directly with interested investors, schedule meetings, and close deals all within the Flow platform.</p>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rotate-45 bg-white border-r border-b border-gray-100 hidden md:block"></div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button
              className="px-8 py-4 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: '#0674B4' }}
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* Join Our Community Section with Wavy Background */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: '#f0f7fc' }}>
        {/* Decorative wave patterns */}
        <div className="absolute top-0 left-0 w-full h-24 opacity-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              style={{ fill: '#0674B4' }}></path>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 opacity-20 transform rotate-180">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              style={{ fill: '#0674B4' }}></path>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12">
            {/* Left content */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Join Our Growing <span style={{ color: '#0674B4' }}>Community</span></h2>
              <p className="text-gray-700 mb-8 text-lg">
                Connect with a network of innovative founders and strategic investors ready to collaborate and shape the future of entrepreneurship.
              </p>

              {/* Stats in small floating cards */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="font-bold text-3xl" style={{ color: '#0674B4' }}>1,000+</div>
                  <div className="text-gray-600">Startups Onboarded</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="font-bold text-3xl" style={{ color: '#0674B4' }}>$500M+</div>
                  <div className="text-gray-600">Funds Raised</div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 text-white rounded-lg hover:bg-opacity-90 transition-colors font-medium" style={{ backgroundColor: '#0674B4' }}>
                  For Startups
                </button>
                <button className="px-6 py-3 border rounded-lg hover:bg-white transition-colors font-medium" style={{ borderColor: '#0674B4', color: '#0674B4' }}>
                  For Investors
                </button>
              </div>
            </div>

            {/* Right side - abstract illustration */}
            <div className="lg:w-1/2">
              <div className="relative max-w-md mx-auto">
                {/* Decorative circles */}
                <div className="absolute -z-10 -top-6 -right-6 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: '#0674B4' }}></div>
                <div className="absolute -z-10 -bottom-6 -left-6 w-48 h-48 rounded-full opacity-10" style={{ backgroundColor: '#0674B4' }}></div>

                {/* Connection illustration */}
                <div className="bg-white rounded-2xl shadow-xl p-8 relative z-10">
                  <div className="flex justify-between mb-8">
                    {/* Connected node 1 */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-2">
                        <div className="w-10 h-10 rounded-full" style={{ backgroundColor: 'rgba(6, 116, 180, 0.2)' }}></div>
                      </div>
                      <div className="text-sm font-medium">Startups</div>
                    </div>

                    {/* Line connector */}
                    <div className="flex-1 flex items-center justify-center px-4">
                      <div className="h-1 w-full" style={{ backgroundColor: 'rgba(6, 116, 180, 0.3)' }}></div>
                    </div>

                    {/* Platform node */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-2">
                        <div className="w-10 h-10 rounded-full" style={{ backgroundColor: '#0674B4' }}></div>
                      </div>
                      <div className="text-sm font-medium">Flow</div>
                    </div>

                    {/* Line connector */}
                    <div className="flex-1 flex items-center justify-center px-4">
                      <div className="h-1 w-full" style={{ backgroundColor: 'rgba(6, 116, 180, 0.3)' }}></div>
                    </div>

                    {/* Connected node 2 */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-2">
                        <div className="w-10 h-10 rounded-full" style={{ backgroundColor: 'rgba(6, 116, 180, 0.2)' }}></div>
                      </div>
                      <div className="text-sm font-medium">Investors</div>
                    </div>
                  </div>

                  {/* Connection details */}
                  <div className="space-y-4">
                    <div className="h-12 bg-gray-50 rounded-lg flex items-center px-4">
                      <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: 'rgba(6, 116, 180, 0.3)' }}></div>
                      <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
                    </div>
                    <div className="h-12 bg-gray-50 rounded-lg flex items-center px-4">
                      <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: 'rgba(6, 116, 180, 0.3)' }}></div>
                      <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
                    </div>
                    <div className="h-12 bg-gray-50 rounded-lg flex items-center px-4">
                      <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: 'rgba(6, 116, 180, 0.3)' }}></div>
                      <div className="h-3 w-4/5 bg-gray-200 rounded"></div>
                    </div>
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