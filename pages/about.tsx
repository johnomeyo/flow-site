// pages/about.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import '../app/globals.css'; // Import global styles
import {
  FaRocket,
  FaBullseye,
  FaEye,
  FaUserPlus,
  FaHandshake,
  FaChartLine,
  FaBalanceScale,
  FaUsers,
  FaCogs,
  FaStar,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaMedium,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBars
} from 'react-icons/fa';

// Types
type TeamMember = {
  name: string;
  role: string;
  bio: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    medium?: string;
  };
};

type Testimonial = {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
};

// Data
const teamMembers: TeamMember[] = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former VC with 10+ years experience in tech startup investments.",
    socialLinks: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Marcus Reynolds",
    role: "CTO & Co-Founder",
    bio: "Serial entrepreneur with exits in fintech and AI sectors.",
    socialLinks: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Elena Patel",
    role: "Head of Partnerships",
    bio: "15 years building strategic relationships in startup ecosystems globally.",
    socialLinks: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Rafael Gomez",
    role: "Chief Product Officer",
    bio: "Product visionary with background at leading tech platforms.",
    socialLinks: {
      linkedin: "#",
      medium: "#"
    }
  }
];

const testimonials: Testimonial[] = [
  {
    name: "Jessica Kim",
    role: "Founder",
    company: "EcoTech Solutions",
    content: "Flow transformed our fundraising journey. Within weeks, we connected with investors who not only provided capital but brought strategic expertise that accelerated our growth.",
    rating: 5
  },
  {
    name: "Michael Torres",
    role: "Managing Partner",
    company: "Horizon Ventures",
    content: "As an investor, Flow has significantly improved our deal flow quality. The matching algorithm consistently connects us with startups that align with our investment thesis and values.",
    rating: 5
  }
];

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Flow | Connecting Startups with Investors</title>
        <meta name="description" content="Learn about Flow's mission to connect visionary entrepreneurs with strategic investors." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="py-4 px-6 md:px-16 shadow-sm bg-white sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-[#0674B4]"></div>
            <span className="text-2xl font-bold text-[#0674B4]">Flow</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="font-medium text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="font-medium text-[#0674B4]">
              About
            </Link>
            <Link href="/solutions" className="font-medium text-gray-600 hover:text-gray-900">
              Solutions
            </Link>
            <Link href="/investors" className="font-medium text-gray-600 hover:text-gray-900">
              Investors
            </Link>
            <Link href="/startups" className="font-medium text-gray-600 hover:text-gray-900">
              Startups
            </Link>
          </div>
          <div className="hidden md:block">
            <Link href="/contact" className="px-5 py-2 rounded-lg text-white bg-[#0674B4] hover:bg-opacity-90 transition-colors">
              Contact Us
            </Link>
          </div>
          <button className="md:hidden text-[#0674B4]">
            <FaBars className="text-xl" />
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-[#f0f7fc]">
          <div className="container mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 animate-fade-in">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  About <span className="text-[#0674B4]">Flow</span>
                </h1>
                <p className="text-lg text-gray-700 mb-6 max-w-lg">
                  Building bridges between visionary ideas and the resources needed to bring them to life.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 animate-slide-up">
                <div className="relative w-full max-w-md">
                  <div className="absolute -z-10 -top-4 -left-4 w-48 h-48 rounded-full opacity-20 bg-[#0674B4]"></div>
                  <div className="absolute -z-10 bottom-4 right-4 w-32 h-32 rounded-full opacity-20 bg-[#0674B4]"></div>
                  <div className="w-full h-64 bg-gray-300 rounded-lg shadow-lg relative z-10">
                    <Image
                      src="https://images.unsplash.com/photo-1562577308-c8b2614b9b9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHRlYW18ZW58MHx8MHx8fDA%3D"
                      alt="Team Collaboration"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24 bg-[#f0f7fc]">
          <div className="container mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-12">
                <div className="relative">
                  <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-lg opacity-20 bg-[#0674B4]"></div>
                  <div className="w-full h-64 bg-gray-300 rounded-lg shadow-md relative z-10">
                    <Image
                      src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHRlYW18ZW58MHx8MHx8fDA%3D"
                      alt="Flow Founding Team"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <span className="text-sm font-semibold uppercase tracking-wider text-[#0674B4]">Our Story</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-6">From Idea to Innovation</h2>
                <p className="text-gray-700 mb-6">
                  Flow was founded in 2023 by a team of entrepreneurs and investors who recognized a fundamental gap in the startup ecosystem: connecting promising ideas with the right resources at the right time.
                </p>
                <p className="text-gray-700 mb-6">
                  What began as a solution to our own challenges quickly evolved into a comprehensive platform designed to transform how startups and investors collaborate. Today, Flow stands as a bridge between visionary entrepreneurs and strategic investors, facilitating partnerships that drive innovation forward.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <FaRocket className="text-[#0674B4] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Over 500 startups funded</h4>
                    <p className="text-sm text-gray-600">Since our launch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-[#f0f7fc]">
          <div className="container mx-auto px-6 md:px-16">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#0674B4]">Our Purpose</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">Mission & Vision</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-[rgba(6,116,180,0.1)] flex items-center justify-center mb-6">
                  <FaBullseye className="text-[#0674B4] text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To democratize access to capital and resources for innovative startups, regardless of their founders' backgrounds or networks, while providing investors with vetted opportunities that align with their strategic goals.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-[rgba(6,116,180,0.1)] flex items-center justify-center mb-6">
                  <FaEye className="text-[#0674B4] text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  A world where great ideas never fail due to lack of resources, and where innovation flows freely through a global ecosystem of collaboration between entrepreneurs and investors who share mutual goals and values.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-[#f0f7fc]">
          <div className="container mx-auto px-6 md:px-16">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#0674B4]">The Process</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">How Flow Works</h2>
              <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
                Our platform streamlines the connection between startups and investors through a transparent, efficient process.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-[rgba(6,116,180,0.1)] flex items-center justify-center mx-auto mb-6">
                  <FaUserPlus className="text-[#0674B4] text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Profile Creation</h3>
                <p className="text-gray-700">
                  Startups and investors create detailed profiles outlining their objectives, expertise, and requirements.
                </p>
              </div>
              <div className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-[rgba(6,116,180,0.1)] flex items-center justify-center mx-auto mb-6">
                  <FaHandshake className="text-[#0674B4] text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Smart Matching</h3>
                <p className="text-gray-700">
                  Our AI-powered algorithm identifies optimal matches based on industry, stage, funding needs, and strategic alignment.
                </p>
              </div>
              <div className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-[rgba(6,116,180,0.1)] flex items-center justify-center mx-auto mb-6">
                  <FaChartLine className="text-[#0674B4] text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Guided Collaboration</h3>
                <p className="text-gray-700">
                  Connected parties receive structured support throughout the evaluation, negotiation, and partnership phases.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-[#b9d9ec]">
          <div className="container mx-auto px-6 md:px-16">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#0674B4]">Our People</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">Meet the Team</h2>
              <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
                A diverse group of entrepreneurs, investors, and technologists united by a passion for innovation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{member.role}</p>
                  <p className="text-sm text-gray-700 mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    {member.socialLinks.linkedin && (
                      <a href={member.socialLinks.linkedin} className="text-gray-500 hover:text-gray-700">
                        <FaLinkedin />
                      </a>
                    )}
                    {member.socialLinks.twitter && (
                      <a href={member.socialLinks.twitter} className="text-gray-500 hover:text-gray-700">
                        <FaTwitter />
                      </a>
                    )}
                    {member.socialLinks.github && (
                      <a href={member.socialLinks.github} className="text-gray-500 hover:text-gray-700">
                        <FaGithub />
                      </a>
                    )}
                    {member.socialLinks.medium && (
                      <a href={member.socialLinks.medium} className="text-gray-500 hover:text-gray-700">
                        <FaMedium />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 md:py-24 bg-[#b9d9ec]">
          <div className="container mx-auto px-6 md:px-16">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="p-6">
                <h3 className="text-4xl font-bold text-[#0674B4] mb-2">500+</h3>
                <p className="text-gray-700">Startups Funded</p>
              </div>
              <div className="p-6">
                <h3 className="text-4xl font-bold text-[#0674B4] mb-2">$2B+</h3>
                <p className="text-gray-700">Capital Raised</p>
              </div>
              <div className="p-6">
                <h3 className="text-4xl font-bold text-[#0674B4] mb-2">350+</h3>
                <p className="text-gray-700">Investor Partners</p>
              </div>
              <div className="p-6">
                <h3 className="text-4xl font-bold text-[#0674B4] mb-2">92%</h3>
                <p className="text-gray-700">Success Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-[#b9d9ec]">
          <div className="container mx-auto px-6 md:px-16">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#0674B4]">What People Say</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">Testimonials</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-[#f0f7fc] p-8 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    "{testimonial.content}"
                  </p>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-[#b9d9ec]">
          <div className="container mx-auto px-6 md:px-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Ready to Join the Flow?</h2>
              <p className="text-lg text-gray-700 mb-8">
                Whether you're a startup seeking investment or an investor looking for opportunities, Flow connects you with the right partners.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/startups" className="px-6 py-3 text-white rounded-lg hover:bg-opacity-90 transition-colors text-center font-medium bg-[#0674B4]">
                  For Startups
                </Link>
                <Link href="/investors" className="px-6 py-3 border rounded-lg hover:bg-white transition-colors text-center font-medium border-[#0674B4] text-[#0674B4]">
                  For Investors
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="h-8 w-8 rounded-md bg-white"></div>
                <span className="text-2xl font-bold text-[#0674B4]">Flow</span>
              </div>
              <p className="text-gray-400 mb-6">
                Connecting visionary entrepreneurs with strategic investors.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaTwitter />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Company</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
                <li><Link href="/press" className="text-gray-400 hover:text-white">Press</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Resources</h4>
              <ul className="space-y-3">
                <li><Link href="/for-startups" className="text-gray-400 hover:text-white">For Startups</Link></li>
                <li><Link href="/for-investors" className="text-gray-400 hover:text-white">For Investors</Link></li>
                <li><Link href="/success-stories" className="text-gray-400 hover:text-white">Success Stories</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FaEnvelope className="mr-2 text-gray-400" />
                  <a href="mailto:info@flowplatform.com" className="text-gray-400 hover:text-white">info@flowplatform.com</a>
                </li>
                <li className="flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-gray-400" />
                  <span className="text-gray-400">San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                © 2025 Flow Platform, Inc. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-gray-500 text-sm hover:text-gray-400">Privacy Policy</Link>
                <Link href="/terms" className="text-gray-500 text-sm hover:text-gray-400">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AboutPage;

// Required CSS for animations - create a globals.css file and include these
