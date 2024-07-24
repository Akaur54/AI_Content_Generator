import Link from 'next/link';
import React from 'react';

export default function CustomizablePage() {
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
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Customizable Components</h1>
            <p className="text-lg text-gray-600 mb-8">
              Our components are designed to be highly customizable, allowing you to tailor every aspect to meet your specific needs. Whether you need to adjust colors, fonts, or layouts, our components provide the flexibility to achieve your desired look and feel.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Each component is built with modularity in mind, making it easy to extend and adapt to different use cases. You can seamlessly integrate them into your existing projects or use them as a foundation to build new features. Detailed documentation and examples are provided to guide you through the customization process.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Enjoy the freedom to modify and enhance components without the need for extensive coding. Our user-friendly design ensures that you can achieve your vision quickly and efficiently. Explore our customizable components and see how they can elevate your project.
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
