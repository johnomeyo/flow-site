// src/pages/investors.tsx
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
// Import icons (install react-icons: npm install react-icons)
import { FaSearch, FaCheckCircle, FaCoffee, FaTag } from 'react-icons/fa';
import '../app/globals.css'; // Ensure global styles are imported
const InvestorsPage: React.FC = () => {
  const primaryBlue = '#0674B4';
  const lightBlueBg = '#f0f7fc';

  return (
    <>
      <Head>
        <title>Investors - Flow App | Invest in Promising Startups</title>
        <meta name="description" content="Discover curated investment opportunities and connect with innovative startups on the Flow App platform." />
      </Head>

      {/* Hero Section */}
      <section className="py-20 md:py-32 overflow-hidden" style={{ backgroundColor: lightBlueBg }}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Unlock Exclusive Startup <span style={{ color: primaryBlue }}>Opportunities</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-lg lg:max-w-none mx-auto lg:mx-0">
                Flow connects discerning investors with a curated pipeline of innovative startups poised for significant growth. Streamline your deal flow and invest with confidence.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                <Link href="/investor/signup" className="px-8 py-4 text-white rounded-lg hover:opacity-90 transition-opacity text-center font-semibold text-lg" style={{ backgroundColor: primaryBlue }}>
                  Explore Opportunities
                </Link>
                <Link href="/investor/how-it-works" className="px-8 py-4 border rounded-lg hover:bg-white transition-colors text-center font-semibold text-lg" style={{ borderColor: primaryBlue, color: primaryBlue }}>
                  Learn How It Works
                </Link>
              </div>
            </div>

            {/* Minimalist Hero Illustration/Mockup */}
            <div className="w-full lg:w-1/2 flex justify-center items-center relative">
                {/* Abstract background shapes */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: primaryBlue }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full opacity-10" style={{ backgroundColor: primaryBlue }}></div>

                {/* Placeholder for a clean illustration or abstract design */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white rounded-xl shadow-xl flex items-center justify-center p-8">
                    <div className="text-center">
                        {/* Placeholder icon or simple graphic */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={primaryBlue} className="w-16 h-16 mx-auto mb-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.002 6.002 0 0 0-2.725 0M12 18v-5.25m0 0a6.002 6.002 0 0 1 2.725 0M12 18L7.5 21.75m4.5-3.75L16.5 21.75m-4.5-3.75v-5.25m0 0a6.002 6.002 0 0 0-2.725 0M12 18v-5.25m0 0a6.002 6.002 0 0 1 2.725 0M12 18L7.5 21.75m4.5-3.75L16.5 21.75" />
                        </svg>
                        <p className="text-gray-700 font-semibold">Your Next Big Investment Awaits</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Why Invest with Flow?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Benefit 1: Curated Deal Flow */}
            <div className="flex flex-col items-center">
              <div className="p-4 rounded-full mb-6" style={{ backgroundColor: lightBlueBg, color: primaryBlue }}>
                 <FaSearch size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Curated Deal Flow</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Gain access to a carefully selected pipeline of promising startups vetted by our team.
              </p>
            </div>

            {/* Benefit 2: Efficient Process */}
            <div className="flex flex-col items-center">
               <div className="p-4 rounded-full mb-6" style={{ backgroundColor: lightBlueBg, color: primaryBlue }}>
                <FaCheckCircle size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Streamlined Investing</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Navigate the investment process smoothly from discovery to closing, all within one platform.
              </p>
            </div>

            {/* Benefit 3: Direct Connection */}
            <div className="flex flex-col items-center">
               <div className="p-4 rounded-full mb-6" style={{ backgroundColor: lightBlueBg, color: primaryBlue }}>
                 <FaCoffee size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Direct Connections</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Connect directly with founders, ask questions, and build relationships before you invest.
              </p>
            </div>

             {/* Benefit 4: Growth Potential */}
            <div className="flex flex-col items-center">
               <div className="p-4 rounded-full mb-6" style={{ backgroundColor: lightBlueBg, color: primaryBlue }}>
                 <FaTag size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Maximize Returns</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Identify high-potential opportunities aligned with your investment strategy and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">How Investing with Flow Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left">
                  {/* Step 1 */}
                  <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                          <div className="w-10 h-10 flex items-center justify-center rounded-full font-bold text-white mr-4" style={{ backgroundColor: primaryBlue }}>1</div>
                          <h3 className="text-xl font-semibold text-gray-900">Discover Startups</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                          Browse detailed profiles of innovative startups across various sectors and funding stages.
                      </p>
                  </div>

                  {/* Step 2 */}
                   <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                          <div className="w-10 h-10 flex items-center justify-center rounded-full font-bold text-white mr-4" style={{ backgroundColor: primaryBlue }}>2</div>
                          <h3 className="text-xl font-semibold text-gray-900">Evaluate & Connect</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                          Review pitch decks, financials, and team info. Engage directly with founders to get your questions answered.
                      </p>
                  </div>

                  {/* Step 3 */}
                   <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                          <div className="w-10 h-10 flex items-center justify-center rounded-full font-bold text-white mr-4" style={{ backgroundColor: primaryBlue }}>3</div>
                          <h3 className="text-xl font-semibold text-gray-900">Invest Securely</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                          Utilize our platform's tools to manage documentation and securely complete your investment.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 md:py-24 text-center" style={{ backgroundColor: primaryBlue }}>
          <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Find Your Next Investment?</h2>
              <p className="text-lg md:text-xl text-white text-opacity-90 mb-10 max-w-2xl mx-auto">
                  Join the Flow investor community and gain access to a world of vetted startup opportunities.
              </p>
               <Link href="/investor/signup" className="inline-block px-10 py-4 bg-white text-blue-800 rounded-lg hover:bg-gray-100 transition-colors text-center font-semibold text-lg">
                 Become a Flow Investor
              </Link>
          </div>
      </section>

    </>
  );
};

export default InvestorsPage;