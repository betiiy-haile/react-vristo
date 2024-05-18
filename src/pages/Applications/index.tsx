import React from 'react'
import { GoDotFill } from "react-icons/go";
import { MdArrowBackIos } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa";
import ebs_logo from "../../assets/images/ebs-logo.png";

import Pagination from '../../components/Pagination';
import ApplicationsTable from '../../components/ApplicationsTable';

const users = [
    {
        name: 'Abraham Kebede',
        title: 'Chairman',
        status: 'green',
    },
    {
        name: 'Abraham Kebede',
        title: 'Chairman',
        status: 'green',
    },
    {
        name: 'Abraham Kebede',
        title: 'Chairman',
        status: 'green',
    },
    {
        name: 'Abraham Kebede',
        title: 'Chairman',
        status: 'green',
    },
    {
        name: 'Abraham Kebede',
        title: 'Chairman',
        status: 'red',
    },
    {
        name: 'Abraham Kebede',
        title: 'Chairman',
        status: 'green',
    },
    {
        name: 'Abraham Kebede',
        title: 'Chairman',
        status: 'red',
    },
    {
        name: 'Abraham Kebede',
        title: 'Chairman',
        status: 'red',
    },
]

const docs = [
"Technical_proposal.pdf","Portfolio.pdf", "Relevant_CV.pdf" , "CPO.pdf"
]
const index = () => {
  return (
    <div className=' py-4 px-8 flex flex-col gap-10 '>
      
      
        <div className=" text-gray-700 h-fit w-full bg-white shadow rounded-[20px] border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:text-slate-200 dark:shadow-none">
            <div className="py-3 px-12 flex items-center gap-4">
                  <MdArrowBackIos className='text-2xl cursor-pointer'/>
                <h3 className='font-bold text-3xl py-2 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h3>
            </div>
        </div>

          <div className="  h-fit w-full bg-white shadow rounded-[20px] border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:text-slate-200 dark:shadow-none">
              <div className="py-6 pl-12 pr-24 flex gap-x-4 items-start justify-between">
                  <h3 className='font-bold text-3xl py-2  mb-3'>Opening Committee Online</h3>
                    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
                        {
                            users.map((user, index) => (
                                 <div className='flex flex-row items-center gap-2'>
                                    <GoDotFill className={`text-2xl ${user.status === "green" ? "text-green-600" : "text-red-600"}`} />
                                    <div className='flex flex-col '>
                                        <div className='font-bold text-xl'>{user.name}</div>
                                        <p className='text-lg'>{user.title}</p>
                                    </div>
                                </div>
                            ))
                        }
                      
                    </div>
                  
              </div>
          </div>

          <div className="  h-fit w-full bg-white shadow rounded-[20px] border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:text-slate-200 dark:shadow-none">
              <div className="py-6 pl-12 pr-24 flex gap-x-16 items-start ">

                  <div className='flex flex-col gap-8 '>
                      <h4 className='font-bold text-3xl py-2  mb-3'>Winner</h4>
                      <div className='flex items-center gap-4 justify-center'>
                        <img className='rounded-full w-20 h-20' src={ebs_logo} alt="ebs logo" />
                        <div>
                            <h4 className='text-2xl font-bold'>EBS Ethiopia</h4>
                            <p>Total Points: <span className='font-bold'>65/100</span></p>
                        </div>
                      </div>
                      <button type="button" className="font-semibold text-[#3328a8]/70 border border-[#3328a8]/70 bg-white-light  px-4 py-3 cursor-pointer rounded-full ">
                          ShortListed/Awarded
                      </button>
                  </div>
                  
                  <div className='flex justify-start flex-col gap-4 '>
                      <h4 className=' text-3xl py-2  mb-3'>Technical</h4>
                      {
                          docs.map((doc, index) => (
                              <div key={index} className='flex gap-4 '>
                                  <FaRegFilePdf className='text-red-500 text-2xl' />
                                  <p>Download "{doc}"</p>
                                  
                              </div>
                          ))
                      }
                  </div>

                  <div className='flex flex-col gap-4 '>
                      <h4 className=' text-3xl py-2  mb-3'>Financial</h4>
                      
                      <button type="button" className="font-semibold bg-[#3328a8] flex items-center gap-4 text-white-light  px-4 py-3 cursor-pointer rounded-full hover:bg-[#3328a8]/90">
                          <FaRegFilePdf className='text-red-500 text-xl' />
                          Download Invoice
                      </button>

                      <div>
                        <span className='text-lg'>Financial Quote</span>
                        <p className='text-3xl font-bold'>5,698,560 ETB</p>
                      </div>
                  </div>

              </div>
          </div>

          <div className='flex items-center justify-between'>
              <button type="button" className="font-semibold bg-[#3328a8] text-white px-12 py-3 cursor-pointer rounded-full hover:bg-[#3328a8]/90">
                  Edit Tender
              </button>
              <div className='flex gap-6'>
                  <button type="button" className="font-semibold bg-[#3328a8] text-white px-8 py-3 cursor-pointer rounded-full hover:bg-[#3328a8]/90">
                      Send Notification(pop up)
                  </button>
                  <p className='w-[300px]'>
                      This will send an SMS for a specific applicant with "Subject" and "Content"
                  </p>
              </div>
              
              <button type="button" className="font-semibold bg-[#3328a8] text-white px-12 py-3 cursor-pointer rounded-full hover:bg-[#3328a8]/90">
                  Open Clarifications
              </button>
              <button type="button" className="font-semibold bg-[#3328a8] text-white px-12 py-3 cursor-pointer rounded-full hover:bg-[#3328a8]/90">
                  Hold Minute
              </button>
              <button type="button" className="font-semibold bg-[#d3b639] text-white px-12 py-3 cursor-pointer rounded-full hover:bg-[#3328a8]/90">
                  Open Tender
              </button>
          </div>

          <section className=' bg-white p-8 shadow border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] rounded-[20px]'>
              <ApplicationsTable />
              <Pagination />
          </section>

    </div>
  )
}

export default index
