// pages/investors.tsx
import { ReactNode } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import '../app/globals.css';
import { 
  ChartBar, 
  LineChart, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight
} from 'lucide-react';

// Types
type StatCardProps = {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
};

type TestimonialProps = {
  quote: string;
  author: string;
  position: string;
};

// Components
const StatCard: React.FC<StatCardProps> = ({ title, value, description, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
    <div className="flex items-center mb-4">
      <div className="p-2 rounded-lg mr-4" style={{ backgroundColor: 'rgba(6, 116, 180, 0.1)' }}>
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>
    </div>
    <div className="mt-2">
      <p className="text-3xl font-bold" style={{ color: '#0674B4' }}>{value}</p>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
    </div>
  </div>
);

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, position }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="mb-4">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 11L7 16H5L8 11V7H10V11ZM16 11L13 16H11L14 11V7H16V11Z" fill="rgba(6, 116, 180, 0.6)" />
      </svg>
    </div>
    <p className="text-gray-700 mb-6">{quote}</p>
    <div className="flex items-center">
      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
        <span className="text-xs text-gray-500">{author.split(' ').map(n => n[0]).join('')}</span>
      </div>
      <div className="ml-3">
        <p className="font-medium text-gray-800">{author}</p>
        <p className="text-sm text-gray-500">{position}</p>
      </div>
    </div>
  </div>
);

// Main Page
const InvestorsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Flow | For Investors</title>
        <meta name="description" content="Strategic investment opportunities for high-growth potential startups." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="py-16 md:py-24 overflow-hidden" style={{ backgroundColor: '#f0f7fc' }}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Invest in Tomorrow's <span style={{ color: '#0674B4' }}>Success</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
                Access carefully vetted, high-growth potential startups and build a diversified portfolio with Flow's strategic investment platform.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/register" className="px-6 py-3 text-white rounded-lg hover:bg-opacity-90 transition-colors text-center font-medium" style={{ backgroundColor: '#0674B4' }}>
                  Join as Investor
                </Link>
                <Link href="/schedule-demo" className="px-6 py-3 border rounded-lg hover:bg-white transition-colors text-center font-medium" style={{ borderColor: '#0674B4', color: '#0674B4' }}>
                  Schedule Demo
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative mx-auto max-w-md">
                {/* Background elements */}
                <div className="hidden sm:block absolute -z-10 -top-4 -left-4 w-64 h-64 rounded-full opacity-20" style={{ backgroundColor: '#0674B4' }}></div>
                <div className="hidden sm:block absolute -z-10 -bottom-8 -right-8 w-48 h-48 rounded-full opacity-20" style={{ backgroundColor: '#0674B4' }}></div>

                {/* Investment dashboard mockup */}
                <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-16 flex items-center px-6" style={{ backgroundColor: '#0674B4' }}>
                    <div className="text-white font-medium">Investment Dashboard</div>
                  </div>
                  <div className="p-6 flex flex-col space-y-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-gray-500">Portfolio Value</div>
                        <div className="text-2xl font-bold text-gray-800">$2.4M</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Growth YTD</div>
                        <div className="text-2xl font-bold text-green-500">+24.8%</div>
                      </div>
                    </div>
                    
                    <div className="h-32 bg-gray-50 rounded-md w-full flex items-center justify-center">
                      <LineChart size={28} className="text-gray-300" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-gray-50 rounded-md">
                        <div className="text-sm text-gray-500">Active Investments</div>
                        <div className="text-xl font-bold text-gray-800">12</div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-md">
                        <div className="text-sm text-gray-500">Pending Deals</div>
                        <div className="text-xl font-bold text-gray-800">3</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Invest with Flow</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Our platform bridges the gap between innovation and capital, providing access to curated investment opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              title="Vetted Startups" 
              value="500+" 
              description="Carefully evaluated companies" 
              icon={<CheckCircle size={20} color="#0674B4" />} 
            />
            <StatCard 
              title="Average ROI" 
              value="27%" 
              description="Annual return for investors" 
              icon={<ChartBar size={20} color="#0674B4" />} 
            />
            <StatCard 
              title="Investor Network" 
              value="2,500+" 
              description="Active investors on platform" 
              icon={<Users size={20} color="#0674B4" />} 
            />
            <StatCard 
              title="Success Rate" 
              value="84%" 
              description="Portfolio companies thriving" 
              icon={<TrendingUp size={20} color="#0674B4" />} 
            />
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-16" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">The Flow Investment Process</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Our streamlined process provides transparency and efficiency at every step.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start max-w-4xl mx-auto">
            <div className="flex-1 flex flex-col items-center text-center mb-8 md:mb-0">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(6, 116, 180, 0.1)' }}>
                <span className="text-2xl font-bold" style={{ color: '#0674B4' }}>1</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Account Setup</h3>
              <p className="text-gray-600 max-w-xs">
                Complete your investor profile and set investment preferences.
              </p>
            </div>
            
            <div className="hidden md:block">
              <ArrowRight size={24} className="text-gray-300" />
            </div>
            
            <div className="flex-1 flex flex-col items-center text-center mb-8 md:mb-0">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(6, 116, 180, 0.1)' }}>
                <span className="text-2xl font-bold" style={{ color: '#0674B4' }}>2</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Startup Matching</h3>
              <p className="text-gray-600 max-w-xs">
                Browse curated startups that match your investment criteria.
              </p>
            </div>
            
            <div className="hidden md:block">
              <ArrowRight size={24} className="text-gray-300" />
            </div>
            
            <div className="flex-1 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(6, 116, 180, 0.1)' }}>
                <span className="text-2xl font-bold" style={{ color: '#0674B4' }}>3</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Smart Investing</h3>
              <p className="text-gray-600 max-w-xs">
                Invest with confidence through our secure platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Investing?</h2>
                  <p className="text-gray-600">
                    Join our community of strategic investors and gain access to exclusive startup opportunities with high growth potential.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle size={20} color="#0674B4" />
                    </div>
                    <p className="ml-3 text-gray-600">
                      <span className="font-medium text-gray-800">Curated Opportunities</span> — Access to thoroughly vetted startups with significant growth potential
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle size={20} color="#0674B4" />
                    </div>
                    <p className="ml-3 text-gray-600">
                      <span className="font-medium text-gray-800">Investor Resources</span> — Data-driven insights and analytics to inform your investment decisions
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle size={20} color="#0674B4" />
                    </div>
                    <p className="ml-3 text-gray-600">
                      <span className="font-medium text-gray-800">Investor Community</span> — Connect with like-minded investors to share strategies and opportunities
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link href="/register" className="px-6 py-3 text-white rounded-lg hover:bg-opacity-90 transition-colors text-center font-medium" style={{ backgroundColor: '#0674B4' }}>
                    Join as Investor
                  </Link>
                  <Link href="/contact" className="px-6 py-3 border rounded-lg hover:bg-white transition-colors text-center font-medium" style={{ borderColor: '#0674B4', color: '#0674B4' }}>
                    Contact Us
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-5">
                <Testimonial 
                  quote="Flow has transformed how I approach startup investing. Their vetting process and portfolio tracking tools are exceptional." 
                  author="Sarah Chen" 
                  position="Angel Investor" 
                />
                <Testimonial 
                  quote="The quality of startups on Flow is outstanding. I've made three investments that have already shown significant returns." 
                  author="Michael Reynolds" 
                  position="Venture Partner" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InvestorsPage;