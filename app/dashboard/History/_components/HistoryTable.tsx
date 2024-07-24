// import React from 'react';

// interface HistoryDataType {
//   id: number;
//   FormData: string;
//   aiResponse: string | null;
//   templateSlug: string;
//   createdBy: string;
//   createdAt: string | null;
// }

// interface HistoryTableProps {
//   historyData: HistoryDataType[];
// }

// // Function to truncate text to a specific number of words
// const truncateText = (text: string | null, wordLimit: number = 25): string => {
//   if (!text) return 'N/A';

//   const words = text.split(' ');
//   if (words.length <= wordLimit) return text;

//   return `${words.slice(0, wordLimit).join(' ')}...`;
// };

// // Function to sort data by ID in descending order
// const sortByIdDesc = (data: HistoryDataType[]): HistoryDataType[] => {
//   return data.slice().sort((a, b) => b.id - a.id); // Sort by ID in descending order
// };

// const HistoryTable: React.FC<HistoryTableProps> = ({ historyData }) => {
//   const isValidArray = Array.isArray(historyData);

//   // Sort data by ID in descending order
//   const sortedHistoryData = isValidArray ? sortByIdDesc(historyData) : [];

//   return (
//     <div className='p-5 border bg-white flex flex-col rounded shadow h-full'>
//       <h1 className='text-2xl font-bold mb-4'>History</h1>
//       <h1 className='text-sm mb-4 text-gray-500'>Search your previously generated AI content</h1>
//       <input className='mb-4 p-2 border rounded w-full' type='text' placeholder='Search...' />
//       <div className='overflow-x-auto'>
//         <table className='w-full table-auto'>
//           <thead>
//             <tr className='bg-gray-100'>
//               <th className='px-4 py-2 font-semibold text-left'>AI RESPONSE</th>
//               <th className='px-4 py-2 font-semibold text-left'>TEMPLATE</th>
//               <th className='px-4 py-2 font-semibold text-left'>CREATED BY</th>
//               <th className='px-4 py-2 font-semibold text-left'>CREATED AT</th>
//               <th className='px-4 py-2 font-semibold text-left'>COPY</th>
//             </tr>
//           </thead>
//           <tbody>
//             {sortedHistoryData.length === 0 ? (
//               <tr>
//                 <td colSpan={5} className='px-4 py-2 text-center text-gray-500'>No data available</td>
//               </tr>
//             ) : (
//               sortedHistoryData.map((item) => (
//                 <tr key={item.id} className='hover:bg-gray-100 border-t'>
//                   <td className='px-4 py-2'>{truncateText(item.aiResponse)}</td>
//                   <td className='px-4 py-2'>{item.templateSlug}</td>
//                   <td className='px-4 py-2'>{item.createdBy}</td>
//                   <td className='px-4 py-2'>{item.createdAt || 'N/A'}</td>
//                   <td className='px-4 py-2'>
//                     <button className='text-white bg-primary hover:bg-pink-500 rounded px-2 py-1'>
//                       Copy
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default HistoryTable;


"use client"; // Add this at the top of the file

import React, { useState } from 'react';

interface HistoryDataType {
  id: number;
  FormData: string;
  aiResponse: string | null;
  templateSlug: string;
  createdBy: string;
  createdAt: string | null;
}

// Function to truncate text to a specific number of words
const truncateText = (text: string | null, wordLimit: number = 25): string => {
  if (!text) return 'N/A';

  const words = text.split(' ');
  if (words.length <= wordLimit) return text;

  return `${words.slice(0, wordLimit).join(' ')}...`;
};

// Function to sort data by ID in descending order
const sortByIdDesc = (data: HistoryDataType[]): HistoryDataType[] => {
  return data.slice().sort((a, b) => b.id - a.id); // Sort by ID in descending order
};

const HistoryTable: React.FC<{ historyData: HistoryDataType[] }> = ({ historyData }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const isValidArray = Array.isArray(historyData);

  // Sort data by ID in descending order
  const sortedHistoryData = isValidArray ? sortByIdDesc(historyData) : [];

  // Filter data based on search query
  const filteredHistoryData = sortedHistoryData.filter(item =>
    item.FormData.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.aiResponse?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.templateSlug.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.createdBy.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='p-5 border bg-white flex flex-col rounded shadow h-full'>
      <h1 className='text-2xl font-bold mb-4'>History</h1>
      <h1 className='text-sm mb-4 text-gray-500'>Search your previously generated AI content</h1>
      <input
        className='mb-4 p-2 border rounded w-full'
        type='text'
        placeholder='Search...'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className='overflow-x-auto'>
        <table className='w-full table-auto'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='px-4 py-2 font-semibold text-left'>TEMPLATE</th>
              <th className='px-4 py-2 font-semibold text-left'>AI RESPONSE</th>
              <th className='px-4 py-2 font-semibold text-left'>CREATED AT</th>
              <th className='px-4 py-2 font-semibold text-left'>WORDS</th>
              <th className='px-4 py-2 font-semibold text-left'>COPY</th>
            </tr>
          </thead>
          <tbody>
            {filteredHistoryData.length === 0 ? (
              <tr>
                <td colSpan={5} className='px-4 py-2 text-center text-gray-500'>No data available</td>
              </tr>
            ) : (
              filteredHistoryData.map((item) => (
                <tr key={item.id} className='hover:bg-gray-100 border-t'>
                  <td className='px-4 py-2'>{item.templateSlug}</td>
                  <td className='px-4 py-2'>{truncateText(item.aiResponse)}</td>
                  <td className='px-4 py-2'>{item.createdAt || 'N/A'}</td>
                  <td className='px-4 py-2'>{item.aiResponse ? item.aiResponse.split(' ').length : 0}</td>
                  <td className='px-4 py-2'>
                    <button className='text-white bg-primary hover:bg-#f07a84 rounded px-2 py-1' 
                    onClick={() => item.aiResponse && navigator.clipboard.writeText(item.aiResponse)}>
                      Copy
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryTable;
