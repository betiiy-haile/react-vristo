import React from 'react'
import { Link } from 'react-router-dom'
import { LuTimerReset } from 'react-icons/lu'
import Table from '../components/Table'
import ProgressBar from '../components/ProgressBar'


const tender_breakdown = [
  {
    amount: "500",
    name: "Private Tenders",
    percent: "40%",
  },
  {
    amount: "1,200",
    name: "IT Tenders",
    percent: "80%",
  },
  {
    amount: "350",
    name: "Construction Tenders",
    percent: "28%",
  },
  {
    amount: "950",
    name: "Consulting Tenders",
    percent: "76%",
  }
]

const Index = () => {
  return (
    <div className='w-full flex flex-col gap-y-8 px-8 py-4 '>

      {/* cards sections */}
      <section className='flex gap-6 py-4 '>

        {/* card one */}
        <div className="max-w-[26%] text-gray-700 w-full bg-white shadow-lg rounded-[20px]  dark:shadow-none">
          <div className="py-5 px-6">
            <h3 className='font-bold text-xl py-2 border-b-2 mb-3'>Clarificaions</h3>
            <div className='flex gap-x-2 items-end justify-start mb-1'>
              <div className='text-3xl font-bold'>145</div>
              <span className='text-[13px] font-light'>unanswered</span>
            </div>
            <Link className='flex gap-1 items-center font-light text-sm text-blue-400 hover:underline' to={"/"}><LuTimerReset /> <span className='text-[11px] font-light'>see all contributions</span></Link>
          </div>
        </div>

        {/* Card Two */}
        <div className="max-w-[22%] text-gray-700 w-full bg-white shadow-lg rounded-[20px]  dark:shadow-none">
          <div className="py-5 px-6">
            <h3 className='font-bold text-xl py-2 border-b-2 mb-3'>Applications</h3>
            <div className='flex gap-x-2 items-end justify-start mb-1'>
              <div className='text-3xl font-bold'>40,125</div>
            </div>
            <Link className='flex gap-1 items-center font-light text-sm text-blue-400 hover:underline' to={"/"}><LuTimerReset /> <span className='text-[11px] font-light'>see all contributions</span></Link>
          </div>
        </div>

        {/* Card Three */}
        <div className="max-w-[15%] text-gray-700 w-full bg-white shadow-lg rounded-[20px]  dark:shadow-none">
          <div className="py-5 px-6">
            <h3 className='font-bold text-xl py-2 border-b-2 mb-3'>Suppliers</h3>
            <div className='flex gap-x-2 items-end justify-start mb-1'>
              <div className='text-3xl font-bold'>1,245</div>
            </div>
            <Link className='flex gap-1 items-center font-light text-sm text-blue-400 hover:underline' to={"/"}><LuTimerReset /> <span className='text-[11px] font-light'>see all contributions</span></Link>
          </div>
        </div>

      {/* card four */}
        <div className="max-w-[32%] text-gray-700 w-full bg-white shadow-lg rounded-[20px]  dark:shadow-none">
          <div className="py-5 px-6">
            <h3 className='font-bold text-xl py-2 border-b-2 '>Revenue from Documents</h3>
            <div className='flex gap-x-2 py-2 items-center justify-between'>
              <div className='flex flex-col  border-r-2 w-1/2 '>
                <span className='text-[12px] font-light text-gray-700'>ETB</span>
                <div className='text-3xl font-bold leading-6'>845, 646</div>
              </div>
              <div className='flex flex-col w-1/2'>
                <span className='text-[12px] font-light text-gray-700 pl-8'>USD</span>
                <div className='text-3xl font-bold leading-6 pl-8'>45, 646</div>
              </div>
            </div>
            <Link className='flex gap-1 items-center font-light text-sm text-blue-400 hover:underline' to={"/"}><LuTimerReset /> <span className='text-[11px] font-light'>Transaction History</span></Link>
          </div>
        </div>
      </section>

    {/* Table section */}

      <section className=' bg-white p-8 shadow-lg dark:bg-black rounded-[20px]'>
        <div className="flex items-center justify-between mb-5">
          <h5 className="font-bold text-xl dark:text-white-light">Recent Tenders</h5>
          <button type="button" className="font-semibold bg-[#3328a8] text-white px-5 py-3 cursor-pointer rounded-full hover:bg-[#3328a8]/90">
            Add new Tender
          </button>
        </div>
        <Table />

    </section>


        <section className="w-[40%] text-gray-700  bg-white shadow-lg rounded-[20px]  dark:shadow-none">
          <div className="py-5 px-6">
            <h3 className='font-bold text-xl py-2 border-b-2 mb-3'>Tender Breakdowm</h3>
            <div className='flex gap-y-4 flex-col'>
              {
                tender_breakdown.map((item, index) => (
                  <div key={index} className='flex flex-col gap-y-2 justify-between'>
                    <div className='flex justify-between'>
                      <div className='flex gap-6'>
                        <span className='text-lg font-bold'>{item.amount}</span>
                        <span className='text-sm font-light text-gray-600'> {item.name}</span>
                      </div>
                      <div className='text-lg font-bold'>{item.percent} </div>
                    </div>
                    <ProgressBar percent={item.percent} />

                  </div>
                ))
              }
            </div>
           
         </div>
        </section>

    </div>
  )
}

export default Index
