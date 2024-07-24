'use client';

import React, { useState } from 'react';

export default function ContactUsPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const formData = { name, email, message };

        try {
            const res = await fetch('/api/contact-data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await res.json();

            if (res.ok) {
                setResponse('Message sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setResponse(result.error || 'Failed to send message.');
            }
        } catch (error) {
            setResponse('An unexpected error occurred.');
        }
    };

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
                    <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
                        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Contact Us for Support</h1>
                        <p className="text-lg text-gray-600 mb-8 text-center">
                            We are here to help you with any questions or issues you might have. Please use the form below to get in touch with our support team, and we'll get back to you as soon as possible.
                        </p>

                        {response && (
                            <p className="text-center mb-6">{response}</p>
                        )}

                        <div className="flex flex-col items-center">
                            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                        placeholder="example@example.com"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                        placeholder="Your message here..."
                                        required
                                    />
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="bg-primary text-white px-6 py-3 rounded-full text-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
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
