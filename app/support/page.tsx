import Link from 'next/link';
import React from 'react';

export default function SupportPage() {
  return (
    <div>
      <header className='p-5 shadow-sm border-b-2 bg-white flex justify-between items-center'>
        <img src={'/logo.svg'} alt="Logo" className='h-10' /> {/* Replace with your logo path */}
        <div className='flex gap-5 items-center'>
          <h2 className='bg-primary p-1 rounded-full text-xs text-white px-2'>🔥Join Membership just for $10.95/month</h2>
        </div>
      </header>

      <main className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white p-10 rounded-lg shadow-lg w-full">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">24/7 Support</h1>
            <p className="text-lg text-gray-600 mb-8">
              We offer round-the-clock support to ensure that you receive assistance whenever you need it. Our dedicated support team is available 24 hours a day, 7 days a week, to address any questions or issues you may encounter.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Whether you have technical questions, need help with your account, or require support with our products, we are here to help. Our goal is to provide you with the best possible experience and ensure that your needs are met promptly and efficiently.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Don’t hesitate to reach out to us anytime. We are committed to offering reliable and responsive support to make your experience as smooth as possible.
            </p>
            <div className="text-center">
              <Link href="/contact" className="bg-primary text-white px-6 py-3 rounded-full text-lg hover:bg-primary-dark">
                Contact Us for Support
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white py-10">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
