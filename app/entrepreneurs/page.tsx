import { ReactNode } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import '../globals.css';
import { 
  RocketIcon, 
  BarChartIcon, 
  Users, 
  LightbulbIcon, 
  CheckCircle, 
  ArrowRight,
  ChevronRight,
  HeartHandshake,
  Target,
  TrendingUp,
  Zap
} from 'lucide-react';

// Types
type FeatureCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

type TestimonialProps = {
  quote: string;
  author: string;
  company: string;
  funding?: string;
};

type MetricCardProps = {
  value: string;
  label: string;
  icon: ReactNode;
};

type FundingStageProps = {
  title: string;
  description: string;
  funding: string;
  icon: ReactNode;
};

// Components
const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="flex items-center mb-4">
      <div className="p-2 rounded-lg mr-4" style={{ backgroundColor: 'rgba(6, 116, 180, 0.1)' }}>
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, company, funding }) => (
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
        <p className="text-sm text-gray-500">{company}</p>
        {funding && <p className="text-xs mt-1" style={{ color: '#0674B4' }}>{funding}</p>}
      </div>
    </div>
  </div>
);

const MetricCard: React.FC<MetricCardProps> = ({ value, label, icon }) => (
  <div className="flex flex-col items-center text-center p-6">
    <div className="p-3 rounded-full mb-4" style={{ backgroundColor: 'rgba(6, 116, 180, 0.1)' }}>
      {icon}
    </div>
    <p className="text-3xl font-bold mb-1" style={{ color: '#0674B4' }}>{value}</p>
    <p className="text-sm text-gray-600">{label}</p>
  </div>
);

const FundingStage: React.FC<FundingStageProps> = ({ title, description, funding, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="flex items-center mb-4">
      <div className="p-2 rounded-lg mr-4" style={{ backgroundColor: 'rgba(6, 116, 180, 0.1)' }}>
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="inline-block px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: 'rgba(6, 116, 180, 0.1)', color: '#0674B4' }}>
      {funding}
    </div>
  </div>
);

// Main Page
const EntrepreneursPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Flow | For Entrepreneurs</title>
        <meta name="description" content="Turn your startup vision into reality with funding from strategic investors." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="py-16 md:py-24 overflow-hidden" style={{ backgroundColor: '#f0f7fc' }}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: 'rgba(6, 116, 180, 0.1)', color: '#0674B4' }}>
                For Entrepreneurs
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                From Vision to <span style={{ color: '#0674B4' }}>Venture</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
                Connect with the right investors, secure funding, and scale your startup with strategic support on the Flow platform.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/apply" className="px-6 py-3 text-white rounded-lg hover:bg-opacity-90 transition-colors text-center font-medium" style={{ backgroundColor: '#0674B4' }}>
                  Join Now
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

                {/* Startup dashboard mockup */}
                <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-16 flex items-center px-6" style={{ backgroundColor: '#0674B4' }}>
                    <div className="text-white font-medium">Startup Dashboard</div>
                  </div>
                  <div className="p-6 flex flex-col space-y-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-gray-500">Funding Goal</div>
                        <div className="text-2xl font-bold text-gray-800">$1.5M</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Raised</div>
                        <div className="text-2xl font-bold text-green-500">$875K</div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">58% Complete</span>
                        <span className="text-sm text-gray-500">$625K to go</span>
                      </div>
                      <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: '58%', backgroundColor: '#0674B4' }}></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-gray-50 rounded-md">
                        <div className="text-sm text-gray-500">Investor Meetings</div>
                        <div className="text-xl font-bold text-gray-800">12</div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-md">
                        <div className="text-sm text-gray-500">New Connections</div>
                        <div className="text-xl font-bold text-gray-800">28</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Platform Benefits</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Flow offers entrepreneurs everything needed to transform innovative ideas into thriving businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              title="Investor Matching" 
              description="Our smart matching algorithm connects you with investors who align with your vision, industry, and growth stage." 
              icon={<HeartHandshake size={20} color="#0674B4" />} 
            />
            <FeatureCard 
              title="Funding Optimization" 
              description="Strategic guidance to structure your fundraising for maximum valuation and ideal investor partnerships." 
              icon={<BarChartIcon size={20} color="#0674B4" />} 
            />
            <FeatureCard 
              title="Growth Resources" 
              description="Access mentorship, networking opportunities, and resources to accelerate your startup's growth." 
              icon={<RocketIcon size={20} color="#0674B4" />} 
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Our streamlined process makes fundraising straightforward and efficient.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col space-y-8">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(6, 116, 180, 0.1)' }}>
                    <span className="text-xl font-bold" style={{ color: '#0674B4' }}>1</span>
                  </div>
                </div>
                <div className="flex-grow bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Apply and Set Up Your Profile</h3>
                  <p className="text-gray-600">
                    Submit your application with key metrics and create a compelling company profile to showcase your vision, team, and traction.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(6, 116, 180, 0.1)' }}>
                    <span className="text-xl font-bold" style={{ color: '#0674B4' }}>2</span>
                  </div>
                </div>
                <div className="flex-grow bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Connect with Investors</h3>
                  <p className="text-gray-600">
                    Get matched with compatible investors, schedule meetings, and build relationships with potential backers.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(6, 116, 180, 0.1)' }}>
                    <span className="text-xl font-bold" style={{ color: '#0674B4' }}>3</span>
                  </div>
                </div>
                <div className="flex-grow bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Secure Funding</h3>
                  <p className="text-gray-600">
                    Finalize deals through our secure platform with transparent terms and streamlined documentation.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(6, 116, 180, 0.1)' }}>
                    <span className="text-xl font-bold" style={{ color: '#0674B4' }}>4</span>
                  </div>
                </div>
                <div className="flex-grow bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Scale with Support</h3>
                  <p className="text-gray-600">
                    Access ongoing resources, mentorship, and connection opportunities to fuel your growth post-funding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Startup Success on Flow</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Our platform has helped entrepreneurs from seed to scale.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center">
            <div className="w-1/2 md:w-1/4 border-r border-gray-100 last:border-r-0">
              <MetricCard 
                value="$420M+" 
                label="Total Funding Raised" 
                icon={<BarChartIcon size={24} color="#0674B4" />} 
              />
            </div>
            <div className="w-1/2 md:w-1/4 border-r border-gray-100 last:border-r-0">
              <MetricCard 
                value="94%" 
                label="Funding Success Rate" 
                icon={<Target size={24} color="#0674B4" />} 
              />
            </div>
            <div className="w-1/2 md:w-1/4 border-r border-gray-100 last:border-r-0">
              <MetricCard 
                value="650+" 
                label="Startups Funded" 
                icon={<LightbulbIcon size={24} color="#0674B4" />} 
              />
            </div>
            <div className="w-1/2 md:w-1/4">
              <MetricCard 
                value="38%" 
                label="Average Growth Rate" 
                icon={<TrendingUp size={24} color="#0674B4" />} 
              />
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Testimonial 
              quote="Flow connected us with investors who truly understood our vision. We closed our seed round in half the time we expected." 
              author="Elena Nguyen" 
              company="GreenTech Solutions" 
              funding="Raised $3.2M" 
            />
            <Testimonial 
              quote="The platform's investor matching algorithm found us partners who brought not just capital, but invaluable industry connections." 
              author="Marcus Johnson" 
              company="MediSync" 
              funding="Raised $5.7M" 
            />
          </div>
        </div>
      </section>

      {/* Funding Stages */}
      <section className="py-16" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Funding for Every Stage</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              From initial concept to rapid growth, we connect startups at all stages with appropriate capital.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FundingStage 
              title="Pre-Seed" 
              description="For startups validating their concept and building their initial product." 
              funding="$50K - $500K" 
              icon={<LightbulbIcon size={20} color="#0674B4" />} 
            />
            <FundingStage 
              title="Seed" 
              description="For startups with an MVP demonstrating early traction and user adoption." 
              funding="$500K - $3M" 
              icon={<Zap size={20} color="#0674B4" />} 
            />
            <FundingStage 
              title="Series A" 
              description="For startups scaling their business with proven revenue models." 
              funding="$3M - $15M" 
              icon={<RocketIcon size={20} color="#0674B4" />} 
            />
          </div>
          
          <div className="mt-10 text-center">
            <Link href="/premium" className="inline-flex items-center px-6 py-3 rounded-lg transition-colors text-center font-medium" style={{ color: '#0674B4' }}>
              Go Premium
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>


    </>
  );
};

export default EntrepreneursPage;