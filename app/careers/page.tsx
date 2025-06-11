"use client";
import { useState } from 'react';
import Head from 'next/head';

// Types for our job listings
interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string; // Full-time, Part-time, Contract, etc.
  description: string;
  requirements: string[];
  postedDate: string;
}

// Sample job data (you would fetch this from your API)
const sampleJobs: Job[] = [
  // {
  //   id: 'job-001',
  //   title: 'Frontend Developer',
  //   department: 'Engineering',
  //   location: 'Remote',
  //   type: 'Full-time',
  //   description: 'We are looking for a skilled Frontend Developer to join our team and help build exceptional user experiences for our platform.',
  //   requirements: [
  //     'Strong proficiency in React, Next.js, and TypeScript',
  //     'Experience with Tailwind CSS',
  //     '3+ years of professional experience in frontend development',
  //     'Excellent problem-solving skills and attention to detail'
  //   ],
  //   postedDate: '2025-05-01'
  // },
  // {
  //   id: 'job-002',
  //   title: 'Product Manager',
  //   department: 'Product',
  //   location: 'Remote',
  //   type: 'Full-time',
  //   description: 'We\'re seeking a strategic Product Manager to help define and execute our product roadmap, working closely with engineering, design, and business teams.',
  //   requirements: [
  //     '4+ years of product management experience',
  //     'Experience in fintech or startup ecosystems',
  //     'Strong analytical and communication skills',
  //     'Ability to translate business goals into product requirements'
  //   ],
  //   postedDate: '2025-05-05'
  // },
  // {
  //   id: 'job-003',
  //   title: 'Growth Marketing Specialist',
  //   department: 'Marketing',
  //   location: 'Remote ',
  //   type: 'Full-time',
  //   description: 'Join our marketing team to drive acquisition strategies and help connect more investors with promising startups on our platform.',
  //   requirements: [
  //     'Experience with B2B SaaS growth marketing',
  //     'Strong understanding of funnel optimization and conversion metrics',
  //     'Familiarity with the startup/investment landscape',
  //     'Data-driven approach to marketing strategy'
  //   ],
  //   postedDate: '2025-05-10'
  // }
];

export default function Careers() {
  // State for application form and job selection
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    coverLetter: ''
  });
  
  // Toggle job details view
  const toggleJobDetails = (job: Job) => {
    setSelectedJob(selectedJob?.id === job.id ? null : job);
  };
  
  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0]
      });
    }
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the application data to your API
    console.log('Submitting application for:', selectedJob?.title);
    console.log('Form data:', formData);
    
    // Reset form and show success message
    alert('Application submitted successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      resume: null,
      coverLetter: ''
    });
    setSelectedJob(null);
  };
  
  // For demo purposes, we can toggle between having jobs and not having jobs
  // In production, you would fetch this from your API
  const [showJobs, setShowJobs] = useState(true);
  const jobs = showJobs ? sampleJobs : [];

  return (
    <>
      <Head>
        <title>Careers | Flow</title>
        <meta name="description" content="Join our team at Flow and help connect investors with promising startups." />
      </Head>
      
      <div className="min-h-screen bg-[#f0f7fc] px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Help us build the future of startup investing at Flow
            </p>
            

          </div>
          
          {/* Job Listings */}
          {jobs.length > 0 ? (
            <div className="space-y-6">
              {jobs.map(job => (
                <div key={job.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div 
                    className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => toggleJobDetails(job)}
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
                      <div className="mt-2 sm:mt-0 space-x-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {job.department}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-gray-500 flex flex-col sm:flex-row sm:space-x-4">
                      <span className="flex items-center">
                        <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="flex items-center mt-1 sm:mt-0">
                        <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        Posted {new Date(job.postedDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  
                  {/* Job Details (conditionally rendered) */}
                  {selectedJob?.id === job.id && (
                    <div className="border-t border-gray-200 p-6 bg-gray-50">
                      <div className="mb-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Job Description</h3>
                        <p className="text-gray-700">{job.description}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Requirements</h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                          {job.requirements.map((req, idx) => (
                            <li key={idx}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            document.getElementById(`application-form-${job.id}`)?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0674B4] hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Apply Now
                        </button>
                      </div>
                      
                      {/* Application Form */}
                      <div id={`application-form-${job.id}`} className="mt-8 pt-6 border-t border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Apply for {job.title}</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              required
                              value={formData.name}
                              onChange={handleInputChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                              <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                              />
                            </div>
                            <div>
                              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                              <input
                                type="tel"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Resume/CV</label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                              <div className="space-y-1 text-center">
                                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H8a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className="flex text-sm text-gray-600">
                                  <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                                    <span>Upload a file</span>
                                    <input 
                                      id="file-upload" 
                                      name="resume" 
                                      type="file" 
                                      className="sr-only" 
                                      accept=".pdf,.doc,.docx"
                                      onChange={handleFileChange}
                                      required
                                    />
                                  </label>
                                  <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                              </div>
                            </div>
                            {formData.resume && (
                              <p className="mt-2 text-sm text-green-600">
                                File selected: {formData.resume.name}
                              </p>
                            )}
                          </div>
                          
                          <div>
                            <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">Cover Letter (Optional)</label>
                            <textarea
                              name="coverLetter"
                              id="coverLetter"
                              rows={4}
                              value={formData.coverLetter}
                              onChange={handleInputChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                              placeholder="Tell us why you're a good fit for this role..."
                            />
                          </div>
                          
                          <div className="flex justify-end">
                            <button
                              type="button"
                              onClick={() => setSelectedJob(null)}
                              className="mr-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0674B4] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              Submit Application
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            // Empty state when no jobs are available
            <div className="bg-white rounded-lg shadow-sm p-12 text-center">
              <div className="mx-auto h-24 w-24 text-gray-400">
                <svg className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">No open positions right now</h3>
              <p className="mt-2 text-base text-gray-500 max-w-md mx-auto">
                We don't have any job openings at the moment, but we're always looking for talented people.
              </p>
              {/* <div className="mt-8">
                <button
                  type="button"
                  onClick={() => {
                    // In a real implementation, this would open a speculative application form
                    alert("This would open a speculative application form in your actual implementation");
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#0674B4] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit your resume anyway
                </button>
              </div> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}