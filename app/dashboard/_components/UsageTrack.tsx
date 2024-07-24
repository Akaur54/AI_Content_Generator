"use client";

import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { AIOutput, UserSubscription } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import React, { useContext, useEffect, useState } from 'react';
import { HistoryDataType } from '@/utils/fetchHistoryData'
import { eq } from 'drizzle-orm';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';
import { useRouter } from 'next/navigation';

function UsageTrack() {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);
  const [maxWords, setMaxWords] = useState(10000);
  const {updateCreditUsage, setUpdateCreditUsage} = useContext(UpdateCreditUsageContext)
  const router = useRouter()

  useEffect(() => {
    if (user) {
      GetData();
      IsUserSubscribe();
    }
  }, [user]);

  useEffect(() => {
    user && GetData();
  }, [updateCreditUsage && user])

  const GetData = async () => {
    if (user?.primaryEmailAddress?.emailAddress) {
      const result: HistoryDataType[] = await db
        .select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress));

      GetTotalUsage(result);
    }
  };

  const IsUserSubscribe = async () => {
    if (user?.primaryEmailAddress?.emailAddress) {
      const result = await db
        .select()
        .from(UserSubscription)
        .where(eq(UserSubscription.email, user.primaryEmailAddress.emailAddress));

      if (result.length > 0) {
        setUserSubscription(true);
        setMaxWords(100000);
      } else {
        setUserSubscription(false);
        setMaxWords(10000);
      }
    }
  };

  const GetTotalUsage = (result: HistoryDataType[]) => {
    let total: number = 0;
    result.forEach((element) => {
      total = total + (element.aiResponse?.length ?? 0);
    });

    setTotalUsage(total);
    console.log(total);
  };

  const handleUpgradeClick = () => {
    router.push('/dashboard/billing')
  }

  return (
    <div className='m-5'>
      <div className='bg-primary text-white p-3 rounded-lg'>
        <h2 className='font-medium'>Credits</h2>
        <div className='h-2 bg-[#f5a6b0] w-full rounded-full mt-3'>
          <div
            className='h-2 bg-white rounded-full'
            style={{ width: `${(totalUsage / maxWords) * 100}%` }}
          ></div>
        </div>
        <h2 className='text-sm my-2'>{totalUsage}/{maxWords} Credits used</h2>
      </div>
      <Button onClick={handleUpgradeClick} variant={'secondary'} className='w-full my-3 text-primary'>
        Upgrade
      </Button>
    </div>
  );
}

export default UsageTrack;
