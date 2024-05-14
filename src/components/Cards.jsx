import React from 'react'
import { LuTimerReset } from "react-icons/lu";
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    //   <div className="mb-5 flex items-center justify-center">
          <div className="max-w-[19rem] text-gray-700 w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded-[20px] border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
              <div className="py-7 px-6">
              <h3 className='font-bold text-xl py-2 border-b-2 mb-3'>Clarificaions</h3>
              <div className='flex gap-x-2 items-end justify-start mb-2'>
                      <div className='text-3xl font-bold'>145</div>
                      <span className='text-sm font-light'>unanswered</span>
              </div>
                
                  <Link className='flex gap-1 items-center font-light text-sm text-blue-500 hover:underline' to={"/"}><LuTimerReset /> see all contributions</Link>
              </div>
          </div>
    //   </div>
  )
}

export default Cards
