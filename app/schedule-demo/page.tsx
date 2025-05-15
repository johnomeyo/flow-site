// import React from "react";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Schedule a Demo | Flow",
//   description: "Book a personalized Flow demo and discover how to invest in the most promising startups.",
// };

// export default function ScheduleDemoPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 px-4 py-12 md:py-16">
//       <div className="max-w-3xl mx-auto">
//         {/* Header */}
//         <div className="mb-10 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-[#0674B4]">
//             Schedule a Demo
//           </h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             See how Flow connects investors with high-potential entrepreneurs through our personalized demo.
//           </p>
//         </div>

//         {/* Form Card */}
//         <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Left Column */}
//             <div className="space-y-5">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
//                 <input
//                   type="text"
//                   placeholder="Your name"
//                   className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
//                   required
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
//                 <input
//                   type="email"
//                   placeholder="you@example.com"
//                   className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
//                   required
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number (Optional)</label>
//                 <input
//                   type="tel"
//                   placeholder="+1 (555) 000-0000"
//                   className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
//                 />
//               </div>
//             </div>
            
//             {/* Right Column */}
//             <div className="space-y-5">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
//                 <input
//                   type="date"
//                   className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
//                   required
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
//                 <input
//                   type="time"
//                   className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
//                   required
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Your Interest</label>
//                 <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50">
//                   <option>Investing in startups</option>
//                   <option>Finding investors</option>
//                   <option>Partnership opportunities</option>
//                   <option>Other</option>
//                 </select>
//               </div>
//             </div>
//           </div>
          
//           {/* Full Width Fields */}
//           <div className="mt-6">
//             <label className="block text-sm font-medium text-gray-700 mb-1">What would you like to discuss?</label>
//             <textarea
//               placeholder="Tell us about your goals and questions..."
//               className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
//               rows={3}
//             />
//           </div>
          
//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full mt-6 bg-gradient-to-r from-blue-500 to-[#0674B4] text-white py-4 rounded-xl font-medium hover:from-blue-700 hover:to-[#0674B4]transition transform hover:scale-[1.02] flex items-center justify-center space-x-2"
//           >
//             <span>Book Your Demo</span>
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//               <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//             </svg>
//           </button>
//         </div>
        
//         {/* Benefits Section */}
//         <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-sm">
//             <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                 <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
//               </svg>
//             </div>
//             <div>
//               <h3 className="font-medium">Network Access</h3>
//               <p className="text-sm text-gray-500">Connect with vetted entrepreneurs</p>
//             </div>
//           </div>
          
//           <div className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-sm">
//             <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
//               </svg>
//             </div>
//             <div>
//               <h3 className="font-medium">Deal Flow</h3>
//               <p className="text-sm text-gray-500">Curated investment opportunities</p>
//             </div>
//           </div>
          
//           <div className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-sm">
//             <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
//               </svg>
//             </div>
//             <div>
//               <h3 className="font-medium">Analytics</h3>
//               <p className="text-sm text-gray-500">Market insights and due diligence</p>
//             </div>
//           </div>
//         </div>
        
//         {/* Footer */}
//         <div className="mt-12 text-center">
//           <p className="text-sm text-gray-600">
//             Have questions? Contact us at{" "}
//             <a href="mailto:teamflowfunding@gmail.com" className="text-blue-600 hover:text-blue-800 font-medium">
//             teamflowfunding@gmail.com
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client"; // Required for using hooks like useState and for client-side interactions

import React, { useState } from "react";
import { Metadata } from "next";

// It's generally better to define metadata in a separate layout.js or page.js
// if it's static, but for this single page component, this is fine.
// For client components, metadata should ideally be exported from a server component parent.
// However, if this is the main page component, Next.js might handle it.
// For a purely client component intended for reuse, metadata export here won't work as expected.
// Assuming this is a primary page component:
// export const metadata: Metadata = { // This might cause issues in a "use client" component if not handled correctly by Next.js version/setup
// title: "Schedule a Demo | Flow",
// description: "Book a personalized Flow demo and discover how to invest in the most promising startups.",
// };

export default function ScheduleDemoPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    interest: "Investing in startups", // Default value
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus("idle");
    setFeedbackMessage("");

    try {
      const response = await fetch("https://formspree.io/f/xwpoagod", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus("success");
        setFeedbackMessage(
          "Demo request sent successfully! We'll be in touch soon."
        );
        setFormData({
          // Reset form
          fullName: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          interest: "Investing in startups",
          message: "",
        });
      } else {
        const errorData = await response.json();
        setSubmissionStatus("error");
        setFeedbackMessage(
          errorData.errors?.map((err: any) => err.message).join(", ") ||
            "An error occurred. Please try again."
        );
      }
    } catch (error) {
      setSubmissionStatus("error");
      setFeedbackMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-[#0674B4]">
            Schedule a Demo
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how Flow connects investors with high-potential entrepreneurs
            through our personalized demo.
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Preferred Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                  value={formData.interest}
                  onChange={handleChange}
                >
                  <option>Investing in startups</option>
                  <option>Finding investors</option>
                  <option>Partnership opportunities</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Full Width Fields */}
          <div className="mt-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              What would you like to discuss? (Optional)
            </label>
            <textarea
              id="message"
              name="message" // Make sure Formspree gets this field
              placeholder="Tell us about your goals and questions..."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              rows={3}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {/* Feedback Messages */}
          {submissionStatus === "success" && feedbackMessage && (
            <div className="mt-4 p-3 rounded-md bg-green-50 border border-green-300 text-green-700 text-sm">
              {feedbackMessage}
            </div>
          )}
          {submissionStatus === "error" && feedbackMessage && (
            <div className="mt-4 p-3 rounded-md bg-red-50 border border-red-300 text-red-700 text-sm">
              {feedbackMessage}
            </div>
          )}
          {isSubmitting && !feedbackMessage && (
             <div className="mt-4 text-sm text-blue-600">Submitting your request...</div>
          )}


          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-6 bg-gradient-to-r from-blue-500 to-[#0674B4] text-white py-4 rounded-xl font-medium hover:from-blue-700 hover:to-[#0674B4] transition transform hover:scale-[1.02] flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <span>
              {isSubmitting ? "Booking..." : "Book Your Demo"}
            </span>
            {!isSubmitting && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            {isSubmitting && (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
          </button>
        </form>

        {/* Benefits Section (remains unchanged) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-sm">
            <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Network Access</h3>
              <p className="text-sm text-gray-500">Connect with vetted entrepreneurs</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-sm">
            <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Deal Flow</h3>
              <p className="text-sm text-gray-500">Curated investment opportunities</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-sm">
            <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Analytics</h3>
              <p className="text-sm text-gray-500">Market insights and due diligence</p>
            </div>
          </div>
        </div>

        {/* Footer (remains unchanged) */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            Have questions? Contact us at{" "}
            <a
              href="mailto:teamflowfunding@gmail.com"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              teamflowfunding@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

// If you want to export metadata from a client component, Next.js App Router has specific ways to handle this,
// often by moving metadata to a `layout.tsx` or `page.tsx` (server component) that wraps this client component.
// For simplicity, if this is a top-level page and you're using a version of Next.js that supports it,
// the metadata object *might* be picked up. Otherwise, consider your project structure.
// For now, I'm commenting out the `export const metadata` as it can be problematic in "use client" files.
// You would typically have a `app/schedule-demo/page.tsx` (Server Component) that imports this client component,
// and that `page.tsx` would export the metadata.

/*
Example of how you might structure if this component is imported:

// app/schedule-demo/page.tsx (Server Component)
import ScheduleDemoClientPage from './ScheduleDemoClientPage'; // Assuming you rename the file above
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule a Demo | Flow",
  description: "Book a personalized Flow demo and discover how to invest in the most promising startups.",
};

export default function Page() {
  return <ScheduleDemoClientPage />;
}
*/