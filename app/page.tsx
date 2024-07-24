'use client';

// import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div>
      <header className='p-5 shadow-sm border-b-2 bg-white flex justify-between items-center'>
        <img src={'/logo.svg'} alt="Logo" className='h-10' /> {/* Replace with your logo path */}
        <div className='flex gap-5 items-center'>
          <h2 className='bg-primary p-1 rounded-full text-xs text-white px-2'>🔥Join Membership just for $10.95/month</h2>
          {/* <UserButton /> */}
        </div>
      </header>

      <main className="bg-gray-50 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">AI Content Generator</h1>
          <p className="text-xl text-gray-600 mb-8">Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.</p>
          <Link href="/dashboard" className="bg-primary text-white px-6 py-3 rounded-full text-lg">
            Get Started
          </Link>
        </div>
      </main>

      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-2xl font-bold mb-2">25+ templates</h3>
              <p className="text-gray-600">Responsive, and mobile-first project on the web.</p>
              <Link href="/templates" className='text-primary hover:underline block mt-4'>Learn More</Link>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Customizable</h3>
              <p className="text-gray-600">Components are easily customized and extendable.</p>
              <Link href="/customization" className='text-primary hover:underline block mt-4'>Learn More</Link>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Free to Use</h3>
              <p className="text-gray-600">Every component and plugin is well documented.</p>
              <Link href="/pricing" className='text-primary hover:underline block mt-4'>Learn More</Link>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-2xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Contact us 24 hours a day, 7 days a week.</p>
              <Link href="/support" className='text-primary hover:underline block mt-4'>Learn More</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
