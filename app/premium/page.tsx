
"use client"; // Required for using hooks like useState and for client-side interactions

import React, { useState } from "react";

export default function PremiumPage() {
  const [formData, setFormData] = useState({
    mpesaCode: "",
    fullName: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    // Basic validation check for M-Pesa code (you might want to make this more robust)
    if (!formData.mpesaCode.trim() || !formData.fullName.trim() || !formData.email.trim()) {
        setSubmissionStatus("error");
        setFeedbackMessage("Please fill in all required fields.");
        setIsSubmitting(false);
        return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mwpoagbz", {
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
          "Verification submitted! We'll review and activate your premium access within 24 hours."
        );
        setFormData({
          // Reset form
          mpesaCode: "",
          fullName: "",
          email: "",
        });
      } else {
        const errorData = await response.json();
        setSubmissionStatus("error");
        setFeedbackMessage(
          errorData.errors?.map((err: any) => err.message).join(", ") ||
            "An error occurred. Please try again or contact support."
        );
      }
    } catch (error) {
      setSubmissionStatus("error");
      setFeedbackMessage(
        "An unexpected error occurred. Please check your internet connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f7fc] text-gray-800 px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#0674B4]">
          🚀 Go Premium — Invest in Your Success
        </h1>
        <p className="text-lg mb-6 text-gray-700">
          Upgrade to Flow Premium today for exclusive access to real investors
          who are ready to fund game-changing ideas like yours.
        </p>
        <div className="mb-4 p-4 bg-green-100 border border-green-300 text-green-700 rounded-xl">
          <strong>🎉 Limited-Time Launch Offer:</strong> Get Premium for only{" "}
          <span className="font-bold">Ksh 500</span> instead of 750!
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-semibold mb-2 text-left">
              Why Go Premium?
            </h2>
            <ul className="list-disc list-inside text-left space-y-2 text-gray-700">
              <li>Direct messaging with active, verified investors</li>
              <li>Boost your credibility with a Premium badge</li>
              <li>Early access to new funding opportunities</li>
              <li>Fast-track support from the Flow team</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600 italic">
              Premium users are 3× more likely to get investor responses within
              the first 7 days.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-semibold mb-2 text-left">
              How to Pay via M-Pesa
            </h2>
            <p className="mb-2 text-left text-gray-700">
              Send <span className="font-bold text-blue-800">Ksh 500</span> to
              the Paybill below:
            </p>
            <div className="text-left">
              <p>
                <span className="font-bold">Paybill:</span> 522522
              </p>
              <p>
                <span className="font-bold">Account:</span> 1289891117
              </p>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              After payment, fill in your details below. We&apos;ll verify and
              activate your premium access within 24 hours.
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl text-left mb-10">
          <h3 className="text-lg font-semibold text-yellow-700 mb-2">
            🔒 Secure & Verified
          </h3>
          <p className="text-gray-700 text-sm">
            Flow is a registered digital service. All M-Pesa payments are
            securely verified before activation. We never share your data, and
            you’ll receive a confirmation email once verified.
          </p>
          <p className="text-gray-700 text-sm mt-2">
            We&apos;re currently integrating in-app purchases. For now, M-Pesa
            offers the fastest and most accessible way for Kenyan entrepreneurs
            to upgrade to Premium.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-white border border-gray-200 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-4">📝 Verify Your Payment</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="mpesaCode" className="sr-only">M-Pesa Transaction Code</label>
              <input
                type="text"
                id="mpesaCode"
                name="mpesaCode"
                placeholder="M-Pesa Transaction Code (e.g. QJD123XYZ)"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.mpesaCode}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="fullName" className="sr-only">Your Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Your Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Your Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Feedback Messages */}
            {submissionStatus === "success" && feedbackMessage && (
              <div className="p-3 rounded-md bg-green-50 border border-green-300 text-green-700 text-sm">
                {feedbackMessage}
              </div>
            )}
            {submissionStatus === "error" && feedbackMessage && (
              <div className="p-3 rounded-md bg-red-50 border border-red-300 text-red-700 text-sm">
                {feedbackMessage}
              </div>
            )}
             {isSubmitting && !feedbackMessage && (
                <div className="text-sm text-blue-600">Submitting for verification...</div>
            )}


            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              style={{ backgroundColor: isSubmitting ? "#055a8c" : "#0674B4" }} // Adjust disabled style if needed
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                "Submit for Verification"
              )}
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            We&apos;ll review your payment within 24 hours and notify you via
            email once your premium access is activated.
          </p>
        </div>

        <p className="text-sm text-gray-600 mt-8">
          💬 Have questions? Contact us on WhatsApp:{" "}
          <a
            href="tel:+254729822061"
            className="text-blue-600 underline"
          >
            0729 822 061
          </a>{" "}
          or email{" "}
          <a
            href="mailto:teamflowfunding@gmail.com"
            className="text-blue-600 underline"
          >
            teamflowfunding@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}