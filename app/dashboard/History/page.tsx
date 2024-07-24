"use client"; // Add this at the top of the file

import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { HistoryDataType, fetchHistoryData } from '@/utils/fetchHistoryData'; // Adjust import if necessary
import HistoryTable from './_components/HistoryTable';

const Page: React.FC = () => {
  const [historyData, setHistoryData] = useState<HistoryDataType[]>([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      if (user?.primaryEmailAddress?.emailAddress) {
        const data = await fetchHistoryData(user.primaryEmailAddress.emailAddress);
        setHistoryData(data);
      }
    };
    fetchData();
  }, [user]);

  return (
    <div className='flex h-screen'>
      <div className='flex-grow h-full p-5'>
        <HistoryTable historyData={historyData} />
      </div>
    </div>
  );
};

export default Page;
