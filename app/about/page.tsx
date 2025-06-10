// // pages/about.tsx
// import React from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
// import Image from 'next/image';
// // Make sure this path is correct relative to this file
// // If using src directory, it might be ../styles/globals.css or similar
// // If in app directory, ensure globals.css is properly imported in layout.tsx or relevant file
// import '../globals.css'; // Adjust the path as necessary

// import {
//   FaRocket,
//   FaBullseye,
//   FaEye,
//   FaUserPlus,
//   FaHandshake,
//   FaChartLine,
//   FaStar,
//   FaTwitter,
//   FaLinkedin,
//   FaGithub,
//   FaMedium,
// } from 'react-icons/fa';

// // Types
// type TeamMember = {
//   name: string;
//   role: string;
//   bio: string;
//   socialLinks: {
//     linkedin?: string;
//     twitter?: string;
//     github?: string;
//     medium?: string;
//   };
// };

// type Testimonial = {
//   name: string;
//   role: string;
//   company: string;
//   content: string;
//   rating: number;
// };

// // Data
// const teamMembers: TeamMember[] = [
//   {
//     name: "Sarah Chen",
//     role: "CEO & Co-Founder",
//     bio: "Former VC with 10+ years experience in tech startup investments.",
//     socialLinks: {
//       linkedin: "#",
//       twitter: "#"
//     }
//   },
//   {
//     name: "Marcus Reynolds",
//     role: "CTO & Co-Founder",
//     bio: "Serial entrepreneur with exits in fintech and AI sectors.",
//     socialLinks: {
//       linkedin: "#",
//       github: "#"
//     }
//   },
//   {
//     name: "Elena Patel",
//     role: "Head of Partnerships",
//     bio: "15 years building strategic relationships in startup ecosystems globally.",
//     socialLinks: {
//       linkedin: "#",
//       twitter: "#"
//     }
//   },
//   {
//     name: "Rafael Gomez",
//     role: "Chief Product Officer",
//     bio: "Product visionary with background at leading tech platforms.",
//     socialLinks: {
//       linkedin: "#",
//       medium: "#"
//     }
//   }
// ];

// const testimonials: Testimonial[] = [
//   {
//     name: "Jessica Kim",
//     role: "Founder",
//     company: "EcoTech Solutions",
//     content: "Flow transformed our fundraising journey. Within weeks, we connected with investors who not only provided capital but brought strategic expertise that accelerated our growth.",
//     rating: 5
//   },
//   {
//     name: "Michael Torres",
//     role: "Managing Partner",
//     company: "Horizon Ventures",
//     content: "As an investor, Flow has significantly improved our deal flow quality. The matching algorithm consistently connects us with startups that align with our investment thesis and values.",
//     rating: 5
//   }
// ];

// const AboutPage: React.FC = () => {
//   return (
//     <>
//       <Head>
//         <title>About Flow | Connecting Startups with Investors</title>
//         <meta name="description" content="Learn about Flow's mission to connect visionary entrepreneurs with strategic investors." />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main>
//         {/* Hero Section */}
//         {/* Hero Section */}
//         <section className="py-16 md:py-24 bg-[#f0f7fc]">
//           <div className="container mx-auto px-6 md:px-16">
//             <div className="flex flex-col md:flex-row items-center">
//               {/* Text Content */}
//               <div className="md:w-1/2 animate-fade-in text-center md:text-left"> {/* Added text-center for mobile if desired */}
//                 <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//                   About <span className="text-[#0674B4]">Flow</span>
//                 </h1>
//                 <p className="text-lg text-gray-700 mb-6 max-w-lg mx-auto md:mx-0"> {/* Added mx-auto for mobile centering if text is centered */}
//                   Building bridges between visionary ideas and the resources needed to bring them to life.
//                 </p>
//               </div>

//               {/* Image Content */}
//               <div className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0 animate-slide-up">
//                 <div className="relative w-full max-w-md">
//                   {/* Decorative elements */}
//                   <div className="absolute -z-10 -top-4 -left-4 w-48 h-48 rounded-full bg-blue-200 opacity-50"></div>
//                   <div className="absolute -z-10 bottom-4 -right-4 w-32 h-32 rounded-full bg-green-200 opacity-50"></div>

//                   {/* Image Container - Modified to properly display the full image */}
//                   <div className="w-full rounded-lg relative z-10 overflow-hidden">
//                     <img
//                       src="https://www.pngplay.com/wp-content/uploads/8/Team-Icon-PNG-HD-Quality.png"

//                       alt="Team Collaboration"
//                       className="rounded-lg w-full h-auto object-contain"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Our Story */}
//         <section className="py-16 md:py-24 bg-[#f0f7fc]">
//           <div className="container mx-auto px-6 md:px-16">
//             <div className="flex flex-col md:flex-row items-center"> {/* Stacks on mobile, row on md+ */}
//               {/* Text Content Column - Now first in the DOM order for mobile view */}
//               <div className="md:w-1/2 w-full order-1 md:order-2"> {/* order-1 on mobile, order-2 on md+ */}
//                 <span className="text-sm font-semibold uppercase tracking-wider text-[#0674B4]">Our Story</span>
//                 <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-6">From Idea to Innovation</h2>
//                 <p className="text-gray-700 mb-6">
//                   Flow was founded in 2025 by a team of entrepreneurs and investors who recognized a fundamental gap in the startup ecosystem: connecting promising ideas with the right resources at the right time.
//                 </p>
//                 <p className="text-gray-700 mb-6">
//                   What began as a solution to our own challenges quickly evolved into a comprehensive platform designed to transform how startups and investors collaborate. Today, Flow stands as a bridge between visionary entrepreneurs and strategic investors, facilitating partnerships that drive innovation forward.
//                 </p>
//                 <div className="flex items-center space-x-4">
//                   <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
//                     {/* Make sure you have FaRocket imported if you are using it: import { FaRocket } from 'react-icons/fa'; */}
//                     {/* <FaRocket className="text-[#0674B4] text-xl" /> */}
//                     <span className="text-[#0674B4] text-xl">🚀</span> {/* Placeholder if FaRocket isn't set up */}
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-900">Over 500 startups joined</h4>
//                     <p className="text-sm text-gray-600">Since our launch</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Image Column - Now second in the DOM order for mobile view */}
//               <div className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0 animate-slide-up order-2 md:order-1"> {/* order-2 on mobile, order-1 on md+ */}
//                 <div className="relative w-full max-w-md">
//                   {/* Decorative elements */}
//                   <div className="absolute -z-10 -top-4 -left-4 w-48 h-48 rounded-full bg-blue-200 opacity-50"></div>
//                   <div className="absolute -z-10 bottom-4 -right-4 w-32 h-32 rounded-full bg-green-200 opacity-50"></div>
//                   {/* Image Container - Modified to properly display the full image */}
//                   <div className="w-full rounded-lg relative z-10 overflow-hidden">
//                     <img
//                       src="https://png.pngtree.com/png-vector/20221019/ourmid/pngtree-team-leader-and-teamwork-concept-png-image_6327989.png" alt="Team Collaboration"
//                       className="rounded-lg w-full h-auto object-contain"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Mission & Vision */}
//         <section className="py-16 md:py-24 bg-[#f0f7fc]">
//           <div className="container mx-auto px-6 md:px-16">
//             <div className="text-center mb-16">
//               <span className="text-sm font-semibold uppercase tracking-wider text-[#0674B4]">Our Purpose</span>
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">Mission & Vision</h2>
//             </div>
//             <div className="grid md:grid-cols-2 gap-8">
//               <div className="bg-white p-8 rounded-lg shadow-sm">
//                 <div className="h-12 w-12 rounded-full bg-[rgba(6,116,180,0.1)] flex items-center justify-center mb-6">
//                   <FaBullseye className="text-[#0674B4] text-xl" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
//                 <p className="text-gray-700">
//                   To democratize access to capital and resources for innovative startups, regardless of their founders' backgrounds or networks, while providing investors with vetted opportunities that align with their strategic goals.
//                 </p>
//               </div>
//               <div className="bg-white p-8 rounded-lg shadow-sm">
//                 <div className="h-12 w-12 rounded-full bg-[rgba(6,116,180,0.1)] flex items-center justify-center mb-6">
//                   <FaEye className="text-[#0674B4] text-xl" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
//                 <p className="text-gray-700">
//                   A world where great ideas never fail due to lack of resources, and where innovation flows freely through a global ecosystem of collaboration between entrepreneurs and investors who share mutual goals and values.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* How It Works */}
//         <section className="py-16 md:py-24 bg-[#f0f7fc]">
//           <div className="container mx-auto px-6 md:px-16">
//             <div className="text-center mb-16">
//               <span className="text-sm font-semibold uppercase tracking-wider text-[#0674B4]">The Process</span>
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">How Flow Works</h2>
//               <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
//                 Our platform streamlines the connection between startups and investors through a transparent, efficient process.
//               </p>
//             </div>
//             <div className="grid md:grid-cols-3 gap-8">
//               <div className="p-6 text-center">
//                 <div className="h-16 w-16 rounded-full bg-[rgba(6,116,180,0.1)] flex items-center justify-center mx-auto mb-6">
//                   <FaUserPlus className="text-[#0674B4] text-2xl" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">1. Profile Creation</h3>
//                 <p className="text-gray-700">
//                   Startups and investors create detailed profiles outlining their objectives, expertise, and requirements.
//                 </p>
//               </div>
//               <div className="p-6 text-center">
//                 <div className="h-16 w-16 rounded-full bg-[rgba(6,116,180,0.1)] flex items-center justify-center mx-auto mb-6">
//                   <FaHandshake className="text-[#0674B4] text-2xl" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">2. Smart Matching</h3>
//                 <p className="text-gray-700">
//                   Our AI-powered algorithm identifies optimal matches based on industry, stage, funding needs, and strategic alignment.
//                 </p>
//               </div>
//               <div className="p-6 text-center">
//                 <div className="h-16 w-16 rounded-full bg-[rgba(6,116,180,0.1)] flex items-center justify-center mx-auto mb-6">
//                   <FaChartLine className="text-[#0674B4] text-2xl" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">3. Guided Collaboration</h3>
//                 <p className="text-gray-700">
//                   Connected parties receive structured support throughout the evaluation, negotiation, and partnership phases.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>


//         {/* Stats */}
//         <section className="py-16 md:py-24 bg-[#b9d9ec]">
//           <div className="container mx-auto px-6 md:px-16">
//             <div className="grid md:grid-cols-4 gap-6 text-center">
//               <div className="p-6">
//                 <h3 className="text-4xl font-bold text-[#0674B4] mb-2">500+</h3>
//                 <p className="text-gray-700">Startups Funded</p>
//               </div>
//               <div className="p-6">
//                 <h3 className="text-4xl font-bold text-[#0674B4] mb-2">$2B+</h3>
//                 <p className="text-gray-700">Capital Raised</p>
//               </div>
//               <div className="p-6">
//                 <h3 className="text-4xl font-bold text-[#0674B4] mb-2">350+</h3>
//                 <p className="text-gray-700">Investor Partners</p>
//               </div>
//               <div className="p-6">
//                 <h3 className="text-4xl font-bold text-[#0674B4] mb-2">92%</h3>
//                 <p className="text-gray-700">Success Rate</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Testimonials */}
//         <section className="py-16 md:py-24 bg-[#b9d9ec]">
//           <div className="container mx-auto px-6 md:px-16">
//             <div className="text-center mb-16">
//               <span className="text-sm font-semibold uppercase tracking-wider text-[#0674B4]">What People Say</span>
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">Testimonials</h2>
//             </div>
//             <div className="grid md:grid-cols-2 gap-8">
//               {testimonials.map((testimonial, index) => (
//                 <div key={index} className="bg-[#f0f7fc] p-8 rounded-lg shadow-sm border border-gray-100">
//                   <div className="flex items-center mb-6">
//                     {/* Placeholder for testimonial avatar */}
//                     <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 flex items-center justify-center text-gray-600">
//                       {/* Consider adding a placeholder icon or initials if no image */}
//                       <FaUserPlus size={24} /> {/* Using a generic icon as placeholder */}
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
//                       <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
//                     </div>
//                   </div>
//                   <p className="text-gray-700 mb-4">
//                     "{testimonial.content}"
//                   </p>
//                   <div className="flex text-yellow-400">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <FaStar key={i} />
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="py-16 md:py-24 bg-[#b9d9ec]">
//           <div className="container mx-auto px-6 md:px-16">
//             <div className="max-w-3xl mx-auto text-center">
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Ready to Join the Flow?</h2>
//               <p className="text-lg text-gray-700 mb-8">
//                 Whether you're a startup seeking investment or an investor looking for opportunities, Flow connects you with the right partners.
//               </p>
//               <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//                 <Link href="https://play.google.com/store/apps/details?id=com.flowfundingorg.fundora&pcampaignid=web_share" className="px-6 py-3 text-white rounded-lg hover:bg-opacity-90 transition-colors text-center font-medium bg-[#0674B4]">
//                   For Startups
//                 </Link>
//                 <Link href="https://play.google.com/store/apps/details?id=com.flowfundingorg.fundify&pcampaignid=web_share" className="px-6 py-3 border rounded-lg hover:bg-white transition-colors text-center font-medium border-[#0674B4] text-[#0674B4]" target="_blank" rel="noopener noreferrer">
//                   For Investors
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default AboutPage;


"use client"; // Required for using hooks and event listeners

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import framer-motion
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

// Types (remain unchanged)
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

type TestimonialType = { // Renamed to avoid conflict with 'Testimonial' component
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
};

// Animation Variants (Copied from your other pages for consistency)
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut'
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

// Reusable animation wrapper for sections that fade in on scroll
const AnimateOnScroll: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
    <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
    >
        {children}
    </motion.div>
);

// Data (remain unchanged)
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

const testimonials: TestimonialType[] = [
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
        <section className="py-16 md:py-24 bg-[#f0f7fc] overflow-hidden"> {/* Added overflow-hidden for animation */}
          <div className="container mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row items-center">
              {/* Text Content */}
              <motion.div
                className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.h1 variants={fadeIn} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  About <span className="text-[#0674B4]">Flow</span>
                </motion.h1>
                <motion.p variants={fadeIn} className="text-lg text-gray-700 mb-6 max-w-lg mx-auto md:mx-0">
                  Building bridges between visionary ideas and the resources needed to bring them to life.
                </motion.p>
              </motion.div>

              {/* Image Content */}
              <AnimateOnScroll className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0">
                <div className="relative w-full max-w-md">
                  {/* Decorative elements */}
                  <div className="absolute -z-10 -top-4 -left-4 w-48 h-48 rounded-full bg-blue-200 opacity-50"></div>
                  <div className="absolute -z-10 bottom-4 -right-4 w-32 h-32 rounded-full bg-green-200 opacity-50"></div>

                  {/* Image Container - Modified to properly display the full image */}
                  <div className="w-full rounded-lg relative z-10 overflow-hidden">
                    <Image
                      src="https://www.pngplay.com/wp-content/uploads/8/Team-Icon-PNG-HD-Quality.png"
                      alt="Team Collaboration"
                      width={500} // Added fixed width
                      height={300} // Added fixed height
                      layout="responsive" // Make image responsive
                      objectFit="contain" // Keep aspect ratio
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24 bg-[#f0f7fc] overflow-hidden">
          <div className="container mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row items-center">
              {/* Text Content Column */}
              <motion.div
                className="md:w-1/2 w-full order-1 md:order-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
              >
                <motion.span variants={fadeIn} className="text-sm font-semibold uppercase tracking-wider text-[#0674B4]">Our Story</motion.span>
                <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-6">From Idea to Innovation</motion.h2>
                <motion.p variants={fadeIn} className="text-gray-700 mb-6">
                  Flow was founded in 2025 by a team of entrepreneurs and investors who recognized a fundamental gap in the startup ecosystem: connecting promising ideas with the right resources at the right time.
                </motion.p>
                <motion.p variants={fadeIn} className="text-gray-700 mb-6">
                  What began as a solution to our own challenges quickly evolved into a comprehensive platform designed to transform how startups and investors collaborate. Today, Flow stands as a bridge between visionary entrepreneurs and strategic investors, facilitating partnerships that drive innovation forward.
                </motion.p>
                <motion.div variants={fadeIn} className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <FaRocket className="text-[#0674B4] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Over 500 startups joined</h4>
                    <p className="text-sm text-gray-600">Since our launch</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Image Column */}
              <AnimateOnScroll className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0 order-2 md:order-1">
                <div className="relative w-full max-w-md">
                  {/* Decorative elements */}
                  <div className="absolute -z-10 -top-4 -left-4 w-48 h-48 rounded-full bg-blue-200 opacity-50"></div>
                  <div className="absolute -z-10 bottom-4 -right-4 w-32 h-32 rounded-full bg-green-200 opacity-50"></div>
                  {/* Image Container - Modified to properly display the full image */}
                  <div className="w-full rounded-lg relative z-10 overflow-hidden">
                    <Image
                      src="https://png.pngtree.com/png-vector/20221019/ourmid/pngtree-team-leader-and-teamwork-concept-png-image_6327989.png"
                      alt="Team Collaboration"
                      width={500} // Added fixed width
                      height={300} // Added fixed height
                      layout="responsive" // Make image responsive
                      objectFit="contain" // Keep aspect ratio
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-[#f0f7fc] overflow-hidden">
          <div className="container mx-auto px-6 md:px-16">
            <AnimateOnScroll className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#0674B4]">Our Purpose</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">Mission & Vision</h2>
            </AnimateOnScroll>
            <motion.div
              className="grid md:grid-cols-2 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-[rgba(6,116,180,0.1)] flex items-center justify-center mb-6">
                  <FaBullseye className="text-[#0674B4] text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To democratize access to capital and resources for innovative startups, regardless of their founders' backgrounds or networks, while providing investors with vetted opportunities that align with their strategic goals.
                </p>
              </motion.div>
              <motion.div variants={fadeIn} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-[rgba(6,116,180,0.1)] flex items-center justify-center mb-6">
                  <FaEye className="text-[#0674B4] text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  A world where great ideas never fail due to lack of resources, and where innovation flows freely through a global ecosystem of collaboration between entrepreneurs and investors who share mutual goals and values.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-[#f0f7fc] overflow-hidden">
          <div className="container mx-auto px-6 md:px-16">
            <AnimateOnScroll className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#0674B4]">The Process</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">How Flow Works</h2>
              <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
                Our platform streamlines the connection between startups and investors through a transparent, efficient process.
              </p>
            </AnimateOnScroll>
            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-[rgba(6,116,180,0.1)] flex items-center justify-center mx-auto mb-6">
                  <FaUserPlus className="text-[#0674B4] text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Profile Creation</h3>
                <p className="text-gray-700">
                  Startups and investors create detailed profiles outlining their objectives, expertise, and requirements.
                </p>
              </motion.div>
              <motion.div variants={fadeIn} className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-[rgba(6,116,180,0.1)] flex items-center justify-center mx-auto mb-6">
                  <FaHandshake className="text-[#0674B4] text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Smart Matching</h3>
                <p className="text-gray-700">
                  Our AI-powered algorithm identifies optimal matches based on industry, stage, funding needs, and strategic alignment.
                </p>
              </motion.div>
              <motion.div variants={fadeIn} className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-[rgba(6,116,180,0.1)] flex items-center justify-center mx-auto mb-6">
                  <FaChartLine className="text-[#0674B4] text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Guided Collaboration</h3>
                <p className="text-gray-700">
                  Connected parties receive structured support throughout the evaluation, negotiation, and partnership phases.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>


        {/* Stats */}
        <section className="py-16 md:py-24 bg-[#b9d9ec] overflow-hidden">
          <div className="container mx-auto px-6 md:px-16">
            <motion.div
              className="grid md:grid-cols-4 gap-6 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="p-6">
                <h3 className="text-4xl font-bold text-[#0674B4] mb-2">500+</h3>
                <p className="text-gray-700">Startups Funded</p>
              </motion.div>
              <motion.div variants={fadeIn} className="p-6">
                <h3 className="text-4xl font-bold text-[#0674B4] mb-2">$2B+</h3>
                <p className="text-gray-700">Capital Raised</p>
              </motion.div>
              <motion.div variants={fadeIn} className="p-6">
                <h3 className="text-4xl font-bold text-[#0674B4] mb-2">350+</h3>
                <p className="text-gray-700">Investor Partners</p>
              </motion.div>
              <motion.div variants={fadeIn} className="p-6">
                <h3 className="text-4xl font-bold text-[#0674B4] mb-2">92%</h3>
                <p className="text-gray-700">Success Rate</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-[#b9d9ec] overflow-hidden">
          <div className="container mx-auto px-6 md:px-16">
            <AnimateOnScroll className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#0674B4]">What People Say</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">Testimonials</h2>
            </AnimateOnScroll>
            <motion.div
              className="grid md:grid-cols-2 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div variants={fadeIn} key={index} className="bg-[#f0f7fc] p-8 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 flex items-center justify-center text-gray-600">
                      <FaUserPlus size={24} />
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
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-[#b9d9ec] overflow-hidden">
          <div className="container mx-auto px-6 md:px-16">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Ready to Join the Flow?</motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-gray-700 mb-8">
                Whether you're a startup seeking investment or an investor looking for opportunities, Flow connects you with the right partners.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="https://play.google.com/store/apps/details?id=com.flowfundingorg.fundora&pcampaignid=web_share" className="px-6 py-3 text-white rounded-lg hover:bg-opacity-90 transition-colors text-center font-medium bg-[#0674B4]">
                  For Startups
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.flowfundingorg.fundify&pcampaignid=web_share" className="px-6 py-3 border rounded-lg hover:bg-white transition-colors text-center font-medium border-[#0674B4] text-[#0674B4]" target="_blank" rel="noopener noreferrer">
                  For Investors
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;