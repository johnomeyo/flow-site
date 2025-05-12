"use client";

import Link from 'next/link';
import ScreenshotShowcase from './components/ScreenshotShowcase';

export default function Home() {

  return (
    <div className="min-h-screen bg-white text-gray-900">

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
                {/* <Link href="/download" className="px-6 py-3 text-white rounded-lg hover:bg-opacity-90 transition-colors text-center font-medium" style={{ backgroundColor: '#0674B4' }}>
                  Get Started
                </Link> */}
                <Link href="/about" className="px-6 py-3 border rounded-lg hover:bg-white transition-colors text-center font-medium" style={{ borderColor: '#0674B4', color: '#0674B4' }}>
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
      <section className="py-16 md:py-24 " style={{ backgroundColor: '##C0DCED' }}>
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
                <Link
                  href="/entrepreneurs"
                  className="px-6 py-3 text-white rounded-lg hover:bg-opacity-90 transition-colors font-medium"
                  style={{ backgroundColor: '#0674B4' }}
                >
                  For Entrepreneurs
                </Link>
                <Link
                  href="/investors"
                  className="px-6 py-3 border rounded-lg hover:bg-white transition-colors font-medium"
                  style={{ borderColor: '#0674B4', color: '#0674B4' }}
                >
                  For Investors
                </Link>
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

    </div>
  );
}