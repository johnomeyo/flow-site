"use client";
// pages/legal.tsx (or any name you prefer, e.g., terms-privacy.tsx)
import React, { useState } from 'react';
import Head from 'next/head';

// Define the possible tab values for type safety
type ActiveTab = 'terms' | 'privacy';

const LegalPage: React.FC = () => {
  // State to manage the active tab, default to 'terms'
  const [activeTab, setActiveTab] = useState<ActiveTab>('terms');

  // Update this date as needed
  const lastUpdatedDate = "May 13, 2025";

  return (
    <>
      <Head>
        <title>Flow - Terms & Privacy</title>
        <meta name="description" content="Terms of Service and Privacy Policy for the Flow platform." />
        {/* Add other relevant meta tags if needed */}
      </Head>

      <div className="bg-[#f0f7fc] text-gray-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-8 md:px-8 md:py-16">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-[#0674B4]">Flow</h1>
            <p className="text-lg text-gray-600">Connecting Investors with Startups</p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-8">
            <button
              onClick={() => setActiveTab('terms')}
              className={`py-2 px-4 font-medium text-sm md:text-base focus:outline-none transition ${
                activeTab === 'terms'
                  ? 'border-b-2 border-indigo-600 text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Terms of Service
            </button>
            <button
              onClick={() => setActiveTab('privacy')}
              className={`py-2 px-4 font-medium text-sm md:text-base focus:outline-none transition ${
                activeTab === 'privacy'
                  ? 'border-b-2 border-indigo-600 text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Privacy Policy
            </button>
          </div>

          {/* Content Area */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            {/* Terms of Service Content */}
            {activeTab === 'terms' && (
              <div className="prose max-w-none prose-[#0674B4] prose-headings:font-semibold prose-headings:mb-4 prose-p:text-gray-700 prose-li:text-gray-700">
                <h2 className="text-2xl">Terms of Service</h2>
                <p className="text-sm text-gray-500 !mt-2 !mb-6"><strong>Last Updated:</strong> {lastUpdatedDate}</p>

                <div className="space-y-6">
                  <section>
                    <h3 className="text-xl">1. Introduction</h3>
                    <p>Welcome to Flow ("we," "our," or "us"). By accessing or using our platform, you agree to be bound by these Terms of Service ("Terms"). Please read these Terms carefully before using Flow.</p>
                  </section>

                  <section>
                    <h3 className="text-xl">2. Services Description</h3>
                    <p>Flow provides a platform connecting investors with startups. Our services include but are not limited to facilitating introductions between parties, providing informational resources, and enabling communication between investors and startups.</p>
                  </section>

                  <section>
                    <h3 className="text-xl">3. Account Registration</h3>
                    <p>To access certain features of Flow, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.</p>
                    <p>You are responsible for safeguarding your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.</p>
                  </section>

                  <section>
                    <h3 className="text-xl">4. User Conduct</h3>
                    <p>When using Flow, you agree not to:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Violate any applicable laws or regulations</li>
                      <li>Infringe on the rights of others</li>
                      <li>Provide false or misleading information</li>
                      <li>Interfere with the proper functioning of the platform</li>
                      <li>Attempt to gain unauthorized access to Flow's systems</li>
                      <li>Use the platform for any illegal activities</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl">5. Investment Disclaimer</h3>
                    <p>Flow does not provide investment advice, and nothing on our platform should be construed as such. All investments involve risk, and past performance is not indicative of future results. Users should conduct their own due diligence before making investment decisions.</p>
                  </section>

                  <section>
                    <h3 className="text-xl">6. Intellectual Property</h3>
                    <p>All content, features, and functionality on Flow, including but not limited to text, graphics, logos, and software, are owned by Flow and protected by copyright, trademark, and other intellectual property laws.</p>
                  </section>

                  <section>
                    <h3 className="text-xl">7. Limitation of Liability</h3>
                    <p>To the fullest extent permitted by law, Flow shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the platform.</p>
                  </section>

                  <section>
                    <h3 className="text-xl">8. Termination</h3>
                    <p>We reserve the right to terminate or suspend your account and access to Flow at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.</p>
                  </section>

                  <section>
                    <h3 className="text-xl">9. Changes to Terms</h3>
                    <p>We may revise these Terms at any time by updating this page. Your continued use of Flow after changes are made constitutes your acceptance of the updated Terms.</p>
                  </section>

                  <section>
                    <h3 className="text-xl">10. Governing Law</h3>
                    <p>These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction - **Remember to replace this!**], without regard to its conflict of law principles.</p>
                  </section>

                  <section>
                    <h3 className="text-xl">11. Contact Information</h3>
                    <p>If you have any questions about these Terms, please contact us at:</p>
                    <p>Email: legal@flowplatform.com</p>
                  </section>
                </div>
              </div>
            )}

            {/* Privacy Policy Content */}
            {activeTab === 'privacy' && (
              <div className="prose max-w-none prose-indigo prose-headings:font-semibold prose-headings:mb-4 prose-p:text-gray-700 prose-li:text-gray-700">
                <h2 className="text-2xl">Privacy Policy</h2>
                 <p className="text-sm text-gray-500 !mt-2 !mb-6"><strong>Last Updated:</strong> {lastUpdatedDate}</p>

                <div className="space-y-6">
                  <section>
                    <h3 className="text-xl">1. Introduction</h3>
                    <p>At Flow, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform.</p>
                  </section>

                  <section>
                    <h3 className="text-xl">2. Information We Collect</h3>
                    <p>We may collect the following types of information:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Personal Information:</strong> Name, email address, phone number, and professional details.</li>
                      <li><strong>Account Information:</strong> Login credentials and account preferences.</li>
                      <li><strong>Financial Information:</strong> For investors and startups, we may collect relevant financial information for verification purposes.</li>
                      <li><strong>Usage Data:</strong> Information about how you interact with our platform, including Browse patterns and feature usage.</li>
                      <li><strong>Device Information:</strong> IP address, browser type, device type, and operating system.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl">3. How We Use Your Information</h3>
                    <p>We use your information for the following purposes:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>To provide and maintain our services</li>
                      <li>To match investors with appropriate startups</li>
                      <li>To process transactions and manage accounts</li>
                      <li>To send service-related communications</li>
                      <li>To improve and personalize user experience</li>
                      <li>To analyze usage patterns and optimize our platform</li>
                      <li>To detect and prevent fraudulent activities</li>
                      <li>To comply with legal obligations</li>
                    </ul>
                  </section>

                   <section>
                    <h3 className="text-xl">4. Data Sharing and Disclosure</h3>
                    <p>We may share your information with:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Service Providers:</strong> Third parties that help us operate our platform and provide services.</li>
                      <li><strong>Business Partners:</strong> With your consent, we may share information with trusted partners.</li>
                      <li><strong>Legal Requirements:</strong> When required by law or to protect our rights.</li>
                      <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
                    </ul>
                    <p>We will never sell your personal information to third parties.</p>
                  </section>

                  <section>
                    <h3 className="text-xl">5. Data Security</h3>
                    <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee absolute security.</p>
                  </section>

                  <section>
                    <h3 className="text-xl">6. Your Data Protection Rights</h3>
                    <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                     <ul className="list-disc pl-6 space-y-1">
                      <li>Right to access your personal data</li>
                      <li>Right to rectify inaccurate data</li>
                      <li>Right to erasure ("right to be forgotten")</li>
                      <li>Right to restrict processing</li>
                      <li>Right to data portability</li>
                      <li>Right to object to processing</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl">7. Cookie Policy</h3>
                    <p>We use cookies and similar tracking technologies to enhance your experience on our platform. You can set your browser to refuse all or some browser cookies, but this may affect certain features of Flow.</p>
                  </section>

                  <section>
                    <h3 className="text-xl">8. Children's Privacy</h3>
                    <p>Our platform is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18.</p>
                  </section>

                  <section>
                    <h3 className="text-xl">9. International Data Transfers</h3>
                    <p>Your information may be transferred to and processed in countries other than your country of residence. We will take appropriate measures to ensure your information remains protected according to this Privacy Policy.</p>
                  </section>

                  <section>
                    <h3 className="text-xl">10. Changes to This Privacy Policy</h3>
                    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
                  </section>

                  <section>
                    <h3 className="text-xl">11. Contact Information</h3>
                    <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
                    <p>Email: teamflowfunding@gmail.com</p>
                  </section>
                </div>
              </div>
            )}
          </div>

          {/* Last Updated Indicator */}
          <div className="mt-8 text-center text-sm text-gray-500">
            Last updated: {lastUpdatedDate}
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalPage;