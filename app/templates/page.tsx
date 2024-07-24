import Link from 'next/link';
import React from 'react';

export default function TemplatesPage() {
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
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">25+ Professional Templates</h1>
            <p className="text-lg text-gray-600 mb-8">
              Our extensive collection of over 25 professionally designed templates caters to a variety of needs. Whether you’re launching a blog, setting up an online store, or creating a portfolio, our templates offer a flexible starting point. Each one is crafted to be responsive and mobile-first, ensuring your website looks great on any device.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Designed with modern aesthetics and functionality in mind, our templates provide seamless user experiences. Customize layouts, colors, and features with ease to match your brand or personal style. Our templates come with detailed documentation to help you get started quickly.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Explore our range of templates to find the perfect fit for your next project. Enjoy high-quality designs and robust features that make setting up your site easy and efficient. Dive into our collection today and start building with confidence.
            </p>
            <div className="text-center">
              <Link href="/contact" className="bg-primary text-white px-6 py-3 rounded-full text-lg hover:bg-primary-dark">
                Contact Us for More Details
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
