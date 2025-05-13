// pages/about.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
// Make sure this path is correct relative to this file
// If using src directory, it might be ../styles/globals.css or similar
// If in app directory, ensure globals.css is properly imported in layout.tsx or relevant file
import '../globals.css'; // Adjust the path as necessary

import {
  FaRocket,
  FaBullseye,
  FaEye,
  FaUserPlus,
  FaHandshake,
  FaChartLine,
  FaStar,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaMedium,
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
      <main>
        {/* Hero Section */}
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-[#f0f7fc]">
          <div className="container mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row items-center">
              {/* Text Content */}
              <div className="md:w-1/2 animate-fade-in text-center md:text-left"> {/* Added text-center for mobile if desired */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  About <span className="text-[#0674B4]">Flow</span>
                </h1>
                <p className="text-lg text-gray-700 mb-6 max-w-lg mx-auto md:mx-0"> {/* Added mx-auto for mobile centering if text is centered */}
                  Building bridges between visionary ideas and the resources needed to bring them to life.
                </p>
              </div>

              {/* Image Content */}
              <div className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0 animate-slide-up"> {/* Ensured w-full for mobile explicitly */}
                <div className="relative w-full max-w-md"> {/* This max-w-md will constrain the image area */}
                  {/* Decorative elements - ensure they are not somehow interfering */}
                  <div className="absolute -z-10 -top-4 -left-4 w-48 h-48 rounded-full bg-blue-200 opacity-50"></div> {/* Added example bg for visibility */}
                  <div className="absolute -z-10 bottom-4 -right-4 w-32 h-32 rounded-full bg-green-200 opacity-50"></div> {/* Added example bg for visibility */}

                  {/* Image Container - THIS IS THE CRITICAL PART FOR DIMENSIONS */}
                  <div className="w-full h-64 rounded-lg relative z-10 overflow-hidden"> {/* Added overflow-hidden as good practice with layout fill & rounded corners */}
                    <Image
                      src="https://blogimage.vantagecircle.com/content/images/2023/01/10-Smart-Ways-to-Better-Team-Collaboration-1.png"
                      alt="Team Collaboration"
                      layout="fill"
                      objectFit="cover" 
                      className="rounded-lg"
                      priority // Added priority for faster loading
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
            <div className="flex flex-col md:flex-row items-center"> {/* Stacks on mobile, row on md+ */}
              {/* Image Column */}
              <div className="md:w-1/2 w-full mb-8 md:mb-0 pr-0 md:pr-12"> {/* Ensures full width on mobile, padding for desktop */}
                <div className="relative w-full"> {/* This container is relative for the absolute decorative div */}
                  {/* Decorative background element - ensure it has a background color if you want to see it */}
                  <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-lg bg-gray-200 opacity-75"></div> {/* Example: Added bg-gray-200 and opacity */}

                  {/* Image's Direct Parent: CRITICAL for dimensions */}
                  <div className="w-full h-64 relative z-10 rounded-lg overflow-hidden"> {/* Explicit height, relative for Image, overflow for rounded corners */}
                    <Image
                      src="https://cdn.prod.website-files.com/657ab76a5c0bbca529ce9a1e/6644ff2e0c176497b76f4077_Cross-Team-Collaboration.png"
                      alt="Flow Founding Team"
                      layout="fill"
                      objectFit="contain" 
                      className="rounded-lg"
                      priority // Consider adding if this image is critical for LCP (Largest Contentful Paint)
                    />
                  </div>
                </div>
              </div>

              {/* Text Content Column */}
              <div className="md:w-1/2 w-full"> {/* Ensures full width on mobile if not already implied */}
                <span className="text-sm font-semibold uppercase tracking-wider text-[#0674B4]">Our Story</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-6">From Idea to Innovation</h2>
                <p className="text-gray-700 mb-6">
                  Flow was founded in 2025 by a team of entrepreneurs and investors who recognized a fundamental gap in the startup ecosystem: connecting promising ideas with the right resources at the right time.
                </p>
                <p className="text-gray-700 mb-6">
                  What began as a solution to our own challenges quickly evolved into a comprehensive platform designed to transform how startups and investors collaborate. Today, Flow stands as a bridge between visionary entrepreneurs and strategic investors, facilitating partnerships that drive innovation forward.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                    {/* Make sure you have FaRocket imported if you are using it: import { FaRocket } from 'react-icons/fa'; */}
                    {/* <FaRocket className="text-[#0674B4] text-xl" /> */}
                    <span className="text-[#0674B4] text-xl">🚀</span> {/* Placeholder if FaRocket isn't set up */}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Over 500 startups joined</h4>
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
                    {/* Placeholder for testimonial avatar */}
                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 flex items-center justify-center text-gray-600">
                      {/* Consider adding a placeholder icon or initials if no image */}
                      <FaUserPlus size={24} /> {/* Using a generic icon as placeholder */}
                    </div>
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
                <Link href="/entrepreneurs" className="px-6 py-3 text-white rounded-lg hover:bg-opacity-90 transition-colors text-center font-medium bg-[#0674B4]">
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
    </>
  );
};

export default AboutPage;