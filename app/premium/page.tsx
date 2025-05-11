import React from "react";

export default function PremiumPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">🚀 Go Premium — Invest in Your Success</h1>
        <p className="text-lg mb-6 text-gray-700">
          Upgrade to Flow Premium today for exclusive access to real investors who are ready to fund game-changing ideas like yours.
        </p>
        <div className="mb-4 p-4 bg-green-100 border border-green-300 text-green-700 rounded-xl">
          <strong>🎉 Limited-Time Launch Offer:</strong> Get Premium for only <span className="font-bold">Ksh 250</span> instead of 500!
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-semibold mb-2 text-left">Why Go Premium?</h2>
            <ul className="list-disc list-inside text-left space-y-2 text-gray-700">
              <li>Direct messaging with active, verified investors</li>
              <li>Boost your credibility with a Premium badge</li>
              <li>Early access to new funding opportunities</li>
              <li>Fast-track support from the Flow team</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600 italic">
              Premium users are 3× more likely to get investor responses within the first 7 days.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-semibold mb-2 text-left">How to Pay via M-Pesa</h2>
            <p className="mb-2 text-left text-gray-700">
              Send <span className="font-bold text-blue-800">Ksh 250</span> to the Paybill below:
            </p>
            <div className="text-left">
              <p><span className="font-bold">Paybill:</span> 123456</p>
              <p><span className="font-bold">Account:</span> flowpremium</p>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              After payment, fill in your details below. We'll verify and activate your premium access within 24 hours.
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl text-left mb-10">
          <h3 className="text-lg font-semibold text-yellow-700 mb-2">🔒 Secure & Verified</h3>
          <p className="text-gray-700 text-sm">
            Flow is a registered digital service. All M-Pesa payments are securely verified before activation. We never share your data, and you’ll receive a confirmation email once verified.
          </p>
          <p className="text-gray-700 text-sm mt-2">
            We're currently integrating in-app purchases. For now, M-Pesa offers the fastest and most accessible way for Kenyan entrepreneurs to upgrade to Premium.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-white border border-gray-200 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-4">📝 Verify Your Payment</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="M-Pesa Transaction Code (e.g. QJD123XYZ)"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
              style={{ backgroundColor: '#0674B4' }}
            >
              Submit for Verification
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            We'll review your payment within 24 hours and notify you via email once your premium access is activated.
          </p>
        </div>

        <p className="text-sm text-gray-600 mt-8">
          💬 Have questions? Contact us on WhatsApp: <a href="tel:+254790123456" className="text-blue-600 underline">0790 123 456</a> or email <a href="mailto:support@flowapp.co.ke" className="text-blue-600 underline">support@flowapp.co.ke</a>
        </p>
      </div>
    </div>
  );
}
