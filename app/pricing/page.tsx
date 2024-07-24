import Link from 'next/link';
import React from 'react';

export default function FreeToUsePage() {
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
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Free to Use</h1>
            <p className="text-lg text-gray-600 mb-8">
              Enjoy complete access to all our components and plugins without any cost. Our collection is designed to be fully functional and available to you at no charge. This means you can start building your projects immediately without worrying about licensing fees or hidden costs.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Each component and plugin is meticulously documented to help you integrate and use them effectively. Our comprehensive documentation includes examples, usage guidelines, and troubleshooting tips, ensuring you have everything you need to get started quickly and efficiently.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Take advantage of our free resources to enhance your projects and streamline your development process. Enjoy a free trial of up to 10,000 credits to explore our features, with additional premium options available through subscription.
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
