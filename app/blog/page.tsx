"use client";
import { useState } from 'react';
import { Search, Calendar, User, ArrowRight, Clock } from 'lucide-react';

// TypeScript interfaces
interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    author: {
        name: string;
        avatar: string;
    };
    publishedAt: string;
    readTime: string;
    imageUrl: string;
    featured?: boolean;
}

// Sample blog data
const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'How Venture Capital is Evolving in 2025',
        excerpt: 'An in-depth look at the changing landscape of venture capital and what it means for startups.',
        category: 'Venture Capital',
        author: {
            name: 'Alex Johnson',
            avatar: 'https://www.hkwinc.com/wp-content/uploads/2021/10/Alex-Johnson-v2-PNG.png',
        },
        publishedAt: 'May 10, 2025',
        readTime: '8 min',
        imageUrl: 'https://media.licdn.com/dms/image/v2/D4E12AQGQ9f7Q9mRJfg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1700029433234?e=2147483647&v=beta&t=G9RDinJcfq-PXjOSa2dTtqMp5RDaZIm3LeAoLmUkFOM',
        featured: true
    },
    {
        id: '2',
        title: 'Five Fundraising Strategies That Actually Work',
        excerpt: 'Proven strategies for early-stage startups looking to secure their first round of funding.',
        category: 'Fundraising',
        author: {
            name: 'Sarah Miller',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRImqUATogsFH2O750QKT71snCT6OkZywyzCQ&s',
        },
        publishedAt: 'May 7, 2025',
        readTime: '6 min',
        imageUrl: 'https://media.licdn.com/dms/image/v2/D4E12AQGNN73pZXQnww/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1695241576788?e=2147483647&v=beta&t=ux4pkyf_ajwxwnapUrBzuJOCPN-MORfp10I308eUOL4'
    },
    {
        id: '3',
        title: 'The Rise of Sustainable Tech Investments',
        excerpt: 'How climate-conscious investors are reshaping the startup ecosystem.',
        category: 'Sustainability',
        author: {
            name: 'David Chen',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_YqdcD6JAeUujeuxdx1uA8jO1FVPCz-Ryw&s',
        },
        publishedAt: 'May 5, 2025',
        readTime: '5 min',
        imageUrl: 'https://news.crunchbase.com/wp-content/uploads/2021/02/Black_Owned_Business_-lightbulb.jpg'
    },
    {
        id: '4',
        title: 'Building a Strong Founding Team',
        excerpt: 'What investors look for in startup leadership and how to assemble the right team.',
        category: 'Leadership',
        author: {
            name: 'Emma Rodriguez',
            avatar: 'https://latinosinsports.com/wp-content/uploads/2025/01/Emma-Rodriguez-thumbnail-1080x1065.jpg',
        },
        publishedAt: 'May 2, 2025',
        readTime: '7 min',
        imageUrl: 'https://startupsmagazine.co.uk/sites/default/files/2020-09/AdobeStock_360997072ed.jpg'
    },
    {
        id: '5',
        title: 'Market Analysis: Emerging Tech Trends',
        excerpt: 'A comprehensive look at which technologies are attracting investor attention this quarter.',
        category: 'Market Trends',
        author: {
            name: 'James Wilson',
            avatar: 'https://upload.wikimedia.org/wikipedia/en/8/80/Jameswilsonpromoseason6.jpg',
        },
        publishedAt: 'Apr 29, 2025',
        readTime: '9 min',
        imageUrl: 'https://media.licdn.com/dms/image/v2/D5612AQFba6Wr2zEM8Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1686012747013?e=2147483647&v=beta&t=QY5La1wwCknvwpqnBDsrPnz7z1lJDobBJkGe1eRc7SE'
    },
    {
        id: '6',
        title: 'Due Diligence: What Founders Should Expect',
        excerpt: 'A step-by-step guide to preparing for investor scrutiny during fundraising.',
        category: 'Fundraising',
        author: {
            name: 'Priya Sharma',
            avatar: 'https://static.wixstatic.com/media/eae14f_08d3c5d0b4aa4a1fbc4e70e297f650c2~mv2.jpg/v1/fill/w_353,h_506,al_c,q_80,enc_avif,quality_auto/eae14f_08d3c5d0b4aa4a1fbc4e70e297f650c2~mv2.jpg',
        },
        publishedAt: 'Apr 25, 2025',
        readTime: '6 min',
        imageUrl: 'https://framerusercontent.com/images/r1m17OQStlpNpHmBdiZu7bppqgU.jpg'
    }
];

// Blog categories for filter
const categories = ['All', 'Venture Capital', 'Fundraising', 'Leadership', 'Market Trends', 'Sustainability'];

export default function BlogPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Filter posts based on search query and category
    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Find featured post
    const featuredPost = blogPosts.find(post => post.featured);

    return (
        <div className="min-h-screen bg-[#f0f7fc]">
            {/* Header */}
            <header className="bg-gradient-to-r from-blue-500 to-[#0674B4] text-white py-16">
                <div className="container mx-auto px-4 md:px-8">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Flow Blog</h1>
                    <p className="text-lg md:text-xl max-w-2xl opacity-90">
                        Insights and perspectives on startup funding, venture capital, and entrepreneurship
                    </p>
                </div>
            </header>

            {/* Search and Filter Section */}
            <div className="container mx-auto px-4 md:px-8 py-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="relative w-full md:w-64">
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`px-3 py-1 text-sm rounded-full transition ${selectedCategory === category
                                    ? 'bg-[#0674B4] text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Featured Post */}
            {featuredPost && (
                <div className="container mx-auto px-4 md:px-8 pb-12">
                    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
                        <div className="flex flex-col lg:flex-row">
                            <div className="lg:w-1/2">
                                <img
                                    src={featuredPost.imageUrl}
                                    alt={featuredPost.title}
                                    className="w-full h-64 lg:h-full object-cover"
                                />
                            </div>
                            <div className="lg:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                                <div className="flex items-center mb-4">
                                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Featured</span>
                                    <span className="mx-2 text-gray-300">|</span>
                                    <span className="text-sm text-gray-600">{featuredPost.category}</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center">
                                        <img
                                            src={featuredPost.author.avatar}
                                            alt={featuredPost.author.name}
                                            className="w-8 h-8 rounded-full mr-2"
                                        />
                                        <span className="text-sm text-gray-700">{featuredPost.author.name}</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <Calendar size={16} className="mr-1" />
                                        <span className="mr-3">{featuredPost.publishedAt}</span>
                                        <Clock size={16} className="mr-1" />
                                        <span>{featuredPost.readTime}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Blog Posts Grid */}
            <div className="container mx-auto px-4 md:px-8 py-8">
                <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>

                {filteredPosts.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No articles found. Try adjusting your search.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map(post => (
                            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md transition hover:shadow-lg">
                                <img
                                    src={post.imageUrl}
                                    alt={post.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <div className="flex flex-wrap items-center mb-3">
                                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded mr-2">
                                            {post.category}
                                        </span>
                                        <div className="flex items-center text-xs text-gray-500">
                                            <Clock size={14} className="mr-1" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex items-center">
                                            <img
                                                src={post.author.avatar}
                                                alt={post.author.name}
                                                className="w-6 h-6 rounded-full mr-2"
                                            />
                                            <span className="text-sm text-gray-700">{post.author.name}</span>
                                        </div>
                                        <span className="text-sm text-gray-500">{post.publishedAt}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {/* <div className="flex justify-center mt-12">
                    <div className="inline-flex items-center">
                        <a href="#" className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-l-lg px-3 py-2 text-sm">
                            Previous
                        </a>
                        <a href="#" className="bg-blue-600 text-white px-3 py-2 text-sm">1</a>
                        <a href="#" className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-3 py-2 text-sm">2</a>
                        <a href="#" className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-3 py-2 text-sm">3</a>
                        <span className="bg-white border border-gray-300 text-gray-700 px-3 py-2 text-sm">...</span>
                        <a href="#" className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-r-lg px-3 py-2 text-sm">
                            Next
                        </a>
                    </div>
                </div> */}
            </div>

            {/* Newsletter Section */}
            <div className="bg-gray-50 py-16 mt-16">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
                        <p className="text-gray-600 mb-6">Get the latest insights on startup funding and venture capital delivered to your inbox.</p>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            />
                            <button className="bg-[#0674B4] hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-lg transition flex items-center justify-center">
                                Subscribe
                                <ArrowRight size={16} className="ml-2" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}






// "use client"; // Required for using hooks and event listeners

// import { useState } from 'react';
// import Link from 'next/link';
// import Head from 'next/head';
// import { motion } from 'framer-motion'; // Import framer-motion
// import '../globals.css';
// import {
//     Search, Calendar, User, ArrowRight, Clock
// } from 'lucide-react'; // Assuming Lucide-React is installed and working

// // TypeScript interfaces (unchanged)
// interface BlogPost {
//     id: string;
//     title: string;
//     excerpt: string;
//     category: string;
//     author: {
//         name: string;
//         avatar: string;
//     };
//     publishedAt: string;
//     readTime: string;
//     imageUrl: string;
//     featured?: boolean;
// }

// // Sample blog data (unchanged)
// const blogPosts: BlogPost[] = [
//     {
//         id: '1',
//         title: 'How Venture Capital is Evolving in 2025',
//         excerpt: 'An in-depth look at the changing landscape of venture capital and what it means for startups.',
//         category: 'Venture Capital',
//         author: {
//             name: 'Alex Johnson',
//             avatar: 'https://www.hkwinc.com/wp-content/uploads/2021/10/Alex-Johnson-v2-PNG.png',
//         },
//         publishedAt: 'May 10, 2025',
//         readTime: '8 min',
//         imageUrl: 'https://media.licdn.com/dms/image/v2/D4E12AQGQ9f7Q9mRJfg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1700029433234?e=2147483647&v=beta&t=G9RDinJcfq-PXjOSa2dTtqMp5RDaZIm3LeAoLmUkFOM',
//         featured: true
//     },
//     {
//         id: '2',
//         title: 'Five Fundraising Strategies That Actually Work',
//         excerpt: 'Proven strategies for early-stage startups looking to secure their first round of funding.',
//         category: 'Fundraising',
//         author: {
//             name: 'Sarah Miller',
//             avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRImqUATogsFH2O750QKT71snCT6OkZywyzCQ&s',
//         },
//         publishedAt: 'May 7, 2025',
//         readTime: '6 min',
//         imageUrl: 'https://media.licdn.com/dms/image/v2/D4E12AQGNN73pZXQnww/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1695241576788?e=2147483647&v=beta&t=ux4pkyf_ajwxwnapUrBzuJOCPN-MORfp10I308eUOL4'
//     },
//     {
//         id: '3',
//         title: 'The Rise of Sustainable Tech Investments',
//         excerpt: 'How climate-conscious investors are reshaping the startup ecosystem.',
//         category: 'Sustainability',
//         author: {
//             name: 'David Chen',
//             avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_YqdcD6JAeUujeuxdx1uA8jO1FVPCz-Ryw&s',
//         },
//         publishedAt: 'May 5, 2025',
//         readTime: '5 min',
//         imageUrl: 'https://news.crunchbase.com/wp-content/uploads/2021/02/Black_Owned_Business_-lightbulb.jpg'
//     },
//     {
//         id: '4',
//         title: 'Building a Strong Founding Team',
//         excerpt: 'What investors look for in startup leadership and how to assemble the right team.',
//         category: 'Leadership',
//         author: {
//             name: 'Emma Rodriguez',
//             avatar: 'https://latinosinsports.com/wp-content/uploads/2025/01/Emma-Rodriguez-thumbnail-1080x1065.jpg',
//         },
//         publishedAt: 'May 2, 2025',
//         readTime: '7 min',
//         imageUrl: 'https://startupsmagazine.co.uk/sites/default/files/2020-09/AdobeStock_360997072ed.jpg'
//     },
//     {
//         id: '5',
//         title: 'Market Analysis: Emerging Tech Trends',
//         excerpt: 'A comprehensive look at which technologies are attracting investor attention this quarter.',
//         category: 'Market Trends',
//         author: {
//             name: 'James Wilson',
//             avatar: 'https://upload.wikimedia.org/wikipedia/en/8/80/Jameswilsonpromoseason6.jpg',
//         },
//         publishedAt: 'Apr 29, 2025',
//         readTime: '9 min',
//         imageUrl: 'https://media.licdn.com/dms/image/v2/D5612AQFba6Wr2zEM8Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1686012747013?e=2147483647&v=beta&t=QY5La1wwCknvwpqnBDsrPnz7z1lJDobBJkGe1eRc7SE'
//     },
//     {
//         id: '6',
//         title: 'Due Diligence: What Founders Should Expect',
//         excerpt: 'A step-by-step guide to preparing for investor scrutiny during fundraising.',
//         category: 'Fundraising',
//         author: {
//             name: 'Priya Sharma',
//             avatar: 'https://static.wixstatic.com/media/eae14f_08d3c5d0b4aa4a1fbc4e70e297f650c2~mv2.jpg/v1/fill/w_353,h_506,al_c,q_80,enc_avif,quality_auto/eae14f_08d3c5d0b4aa4a1fbc4e70e297f650c2~mv2.jpg',
//         },
//         publishedAt: 'Apr 25, 2025',
//         readTime: '6 min',
//         imageUrl: 'https://framerusercontent.com/images/r1m17OQStlpNpHmBdiZu7bppqgU.jpg'
//     }
// ];

// // Blog categories for filter (unchanged)
// const categories = ['All', 'Venture Capital', 'Fundraising', 'Leadership', 'Market Trends', 'Sustainability'];

// // Animation Variants (consistent with other pages)
// const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 0.7,
//             ease: 'easeOut'
//         }
//     }
// };

// const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.15
//         }
//     }
// };

// // Reusable animation wrapper for sections that fade in on scroll
// const AnimateOnScroll: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
//     <motion.div
//         className={className}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={fadeIn}
//     >
//         {children}
//     </motion.div>
// );


// export default function BlogPage() {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [selectedCategory, setSelectedCategory] = useState('All');

//     // Filter posts based on search query and category
//     const filteredPosts = blogPosts.filter(post => {
//         const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
//         const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
//         return matchesSearch && matchesCategory;
//     });

//     // Find featured post
//     const featuredPost = blogPosts.find(post => post.featured);

//     return (
//         <div className="min-h-screen bg-[#f0f7fc]">
//             <Head>
//                 <title>Flow Blog | Insights on Startup Funding & VC</title>
//                 <meta name="description" content="Stay updated with the latest insights on startup funding, venture capital, and entrepreneurship from Flow." />
//                 <link rel="icon" href="/favicon.ico" />
//             </Head>

//             {/* Header */}
//             <header className="bg-gradient-to-r from-blue-500 to-[#0674B4] text-white py-16 overflow-hidden">
//                 <div className="container mx-auto px-4 md:px-8">
//                     <motion.div
//                         initial="hidden"
//                         animate="visible"
//                         variants={staggerContainer}
//                     >
//                         <motion.h1 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-4">Flow Blog</motion.h1>
//                         <motion.p variants={fadeIn} className="text-lg md:text-xl max-w-2xl opacity-90">
//                             Insights and perspectives on startup funding, venture capital, and entrepreneurship
//                         </motion.p>
//                     </motion.div>
//                 </div>
//             </header>

//             {/* Search and Filter Section */}
//             <section className="container mx-auto px-4 md:px-8 py-8 overflow-hidden">
//                 <AnimateOnScroll className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//                     <div className="relative w-full md:w-64">
//                         <input
//                             type="text"
//                             placeholder="Search articles..."
//                             className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//                             value={searchQuery}
//                             onChange={(e) => setSearchQuery(e.target.value)}
//                         />
//                         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//                     </div>

//                     <div className="flex flex-wrap gap-2">
//                         {categories.map(category => (
//                             <motion.button
//                                 key={category}
//                                 variants={fadeIn} // Animate individual filter buttons
//                                 className={`px-3 py-1 text-sm rounded-full transition ${selectedCategory === category
//                                     ? 'bg-[#0674B4] text-white'
//                                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                                     }`}
//                                 onClick={() => setSelectedCategory(category)}
//                             >
//                                 {category}
//                             </motion.button>
//                         ))}
//                     </div>
//                 </AnimateOnScroll>
//             </section>

//             {/* Featured Post */}
//             {featuredPost && (
//                 <section className="container mx-auto px-4 md:px-8 pb-12 overflow-hidden">
//                     <AnimateOnScroll className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
//                         <div className="flex flex-col lg:flex-row">
//                             <div className="lg:w-1/2">
//                                 {/* Using next/image for better optimization, assuming it's configured for external domains */}
//                                 <img
//                                     src={featuredPost.imageUrl}
//                                     alt={featuredPost.title}
//                                     className="w-full h-64 lg:h-full object-cover"
//                                 />
//                             </div>
//                             <div className="lg:w-1/2 p-6 md:p-8 flex flex-col justify-center">
//                                 <motion.div variants={fadeIn} className="flex items-center mb-4">
//                                     <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Featured</span>
//                                     <span className="mx-2 text-gray-300">|</span>
//                                     <span className="text-sm text-gray-600">{featuredPost.category}</span>
//                                 </motion.div>
//                                 <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</motion.h2>
//                                 <motion.p variants={fadeIn} className="text-gray-600 mb-6">{featuredPost.excerpt}</motion.p>
//                                 <motion.div variants={fadeIn} className="flex items-center justify-between mt-auto">
//                                     <div className="flex items-center">
//                                         <img
//                                             src={featuredPost.author.avatar}
//                                             alt={featuredPost.author.name}
//                                             className="w-8 h-8 rounded-full mr-2"
//                                         />
//                                         <span className="text-sm text-gray-700">{featuredPost.author.name}</span>
//                                     </div>
//                                     <div className="flex items-center text-sm text-gray-500">
//                                         <Calendar size={16} className="mr-1" />
//                                         <span className="mr-3">{featuredPost.publishedAt}</span>
//                                         <Clock size={16} className="mr-1" />
//                                         <span>{featuredPost.readTime}</span>
//                                     </div>
//                                 </motion.div>
//                             </div>
//                         </div>
//                     </AnimateOnScroll>
//                 </section>
//             )}

//             {/* Blog Posts Grid */}
//             <section className="container mx-auto px-4 md:px-8 py-8 overflow-hidden">
//                 <AnimateOnScroll className="text-2xl font-bold mb-8">Latest Articles</AnimateOnScroll>

//                 {filteredPosts.length === 0 ? (
//                     <AnimateOnScroll className="text-center py-12">
//                         <p className="text-gray-500">No articles found. Try adjusting your search.</p>
//                     </AnimateOnScroll>
//                 ) : (
//                     <motion.div
//                         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, amount: 0.2 }}
//                         variants={staggerContainer}
//                     >
//                         {filteredPosts.map(post => (
//                             <motion.div variants={fadeIn} key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md transition hover:shadow-lg">
//                                 <img
//                                     src={post.imageUrl}
//                                     alt={post.title}
//                                     className="w-full h-48 object-cover"
//                                 />
//                                 <div className="p-6">
//                                     <div className="flex flex-wrap items-center mb-3">
//                                         <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded mr-2">
//                                             {post.category}
//                                         </span>
//                                         <div className="flex items-center text-xs text-gray-500">
//                                             <Clock size={14} className="mr-1" />
//                                             <span>{post.readTime}</span>
//                                         </div>
//                                     </div>
//                                     <h3 className="text-xl font-bold mb-2">{post.title}</h3>
//                                     <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
//                                     <div className="flex items-center justify-between mt-4">
//                                         <div className="flex items-center">
//                                             <img
//                                                 src={post.author.avatar}
//                                                 alt={post.author.name}
//                                                 className="w-6 h-6 rounded-full mr-2"
//                                             />
//                                             <span className="text-sm text-gray-700">{post.author.name}</span>
//                                         </div>
//                                         <span className="text-sm text-gray-500">{post.publishedAt}</span>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </motion.div>
//                 )}
//             </section>

//             {/* Newsletter Section */}
//             <section className="bg-gray-50 py-16 mt-16 overflow-hidden">
//                 <div className="container mx-auto px-4 md:px-8">
//                     <motion.div
//                         className="max-w-2xl mx-auto text-center"
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, amount: 0.2 }}
//                         variants={staggerContainer}
//                     >
//                         <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</motion.h2>
//                         <motion.p variants={fadeIn} className="text-gray-600 mb-6">Get the latest insights on startup funding and venture capital delivered to your inbox.</motion.p>
//                         <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-2">
//                             <input
//                                 type="email"
//                                 placeholder="Your email address"
//                                 className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//                             />
//                             <button className="bg-[#0674B4] hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-lg transition flex items-center justify-center">
//                                 Subscribe
//                                 <ArrowRight size={16} className="ml-2" />
//                             </button>
//                         </motion.div>
//                     </motion.div>
//                 </div>
//             </section>

//         </div>
//     );
// }