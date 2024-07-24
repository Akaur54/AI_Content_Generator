"use client";
import { Button } from '@/components/ui/button';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Loader2Icon } from 'lucide-react';
import { db } from '@/utils/db';
import { UserSubscription } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';

const BillingPage = () => {
  const [loading, setLoading] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const { user } = useUser();
  const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);

  useEffect(() => {
    const loadRazorpayScript = (): Promise<boolean> => {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => {
          resolve(true);
        };
        script.onerror = () => {
          resolve(false);
        };
        document.body.appendChild(script);
      });
    };

    const loadScript = async () => {
      const loaded = await loadRazorpayScript();
      setRazorpayLoaded(loaded);
    };

    loadScript();
  }, []);

  const createSubscription = () => {
    setLoading(true);
    axios.post('/api/Create-description', {})
      .then(res => {
        console.log(res.data);
        onPayment(res.data.id);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  };

  const onPayment = (subId: any) => {
    if (!razorpayLoaded) {
      console.error('Razorpay SDK failed to load');
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      subscription_id: subId,
      name: 'Sample website',
      description: 'Monthly Subscription',
      handler: async (res: { razorpay_payment_id: any; }) => {
        console.log(res);
        if (res) {
          saveSubscription(res.razorpay_payment_id);
        }
        setLoading(false);
      }
    };

    //@ts-ignore
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const saveSubscription = async (paymentId: any) => {
    try {
      const result = await db.insert(UserSubscription)
        .values({
          email: user?.primaryEmailAddress?.emailAddress,
          userName: user?.fullName,
          active: true,
          paymentId: paymentId,
          joinDate: moment().format('DD/MM/YYYY')
        });

      console.log(result);
      if (result) {
        window.location.reload();
      }
    } catch (error) {
      console.error('Error saving subscription:', error);
    }
  };

  const plans = [
    {
      name: 'Free',
      price: 0,
      duration: 'month',
      description: 'You just want to discover',
      features: ['10,000 Words/Month', '50+ Content Templates', 'Unlimited Download & Copy', '1 Month of History'],
      buttonClass: 'bg-gray-800 text-white',
      popular: false,
      buttonText: 'Currently Active Plan',
      buttonDisabled: true,
    },
    {
      name: 'Monthly',
      price: 399,
      duration: 'month',
      description: 'You want to learn and have a personal assistant',
      features: ['1,000,000 Words/Month', '50+ Template Access', 'Unlimited Download & Copy', '1 Year of History'],
      buttonClass: 'bg-white text-[#f07a84] border-[#f07a84] hover:bg-[#ffe3e5]',
      popular: false,
      buttonText: 'Get Started',
      buttonDisabled: false,
    },
  ];

  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-center mt-12 sm:text-5xl">Upgrade With Monthly Plan</h2>
      </div>
      <div className="mt-24 container mx-auto space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-white relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col min-h-[500px]">
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight">₹{plan.price}</span>
                <span className="ml-1 text-xl font-semibold">/{plan.duration}</span>
              </p>
              <ul role="list" className="mt-6 space-y-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 w-6 h-6 text-[#f07a84]"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button
              disabled={loading || plan.buttonDisabled}
              className={`₹{plan.buttonClass} mt-8 flex gap-2 items-center w-full py-3 px-6 border border-transparent rounded-md text-center font-medium`}
              onClick={() => !plan.buttonDisabled && createSubscription()}
            >
              {loading && <Loader2Icon className='animate-spin' />}
              {userSubscription ? 'Active Plan' : plan.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillingPage;
