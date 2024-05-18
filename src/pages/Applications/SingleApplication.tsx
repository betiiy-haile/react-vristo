import React from 'react'
import { MdArrowBackIos } from "react-icons/md";
import { FaRegFilePdf } from 'react-icons/fa';
import { HiPrinter } from "react-icons/hi2";

const docs = [
    "Technical_proposal.pdf", "Portfolio.pdf", "Relevant_CV.pdf", "CPO.pdf"
]

const contact = [
    {
        key: "Phone Number",
        value: "+251 123 456 789"
    },
    {
        key: "Email",
        value: "info@ebstv.com"
    }, 
    {
        key: "TIN Number",
        value: "123456789"
    },
    {
        key: "VAT Registration No.",
        value: "123456789"
    },
    {
        key: "Business License No.",
        value: "123456789"
    }, 
    {
        key: "Submitted Date",
        value: "Nov 21, 2023"
    }
]

const SingleApplication = () => {
  return (
      <div className=' py-4 px-8 flex flex-col gap-6 '>
          
          <div className=" text-gray-700 h-fit w-full bg-white shadow rounded-[20px] border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:text-slate-200 dark:shadow-none">
              <div className="py-3 px-12 flex items-center gap-4">
                  <MdArrowBackIos className='text-2xl cursor-pointer' />
                  <h3 className='font-bold text-3xl py-2 w-3/4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. The industry's standard </h3>
              </div>
          </div>

          <div className=" min-h-[700px] text-gray-700 h-fit w-full bg-white shadow rounded-[20px] border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:text-slate-200 dark:shadow-none">
              <div className="py-3 pl-12 pr-20 flex items-center gap-4">
                    <div className='flex items-center justify-between py-4 w-full border-b-2 '>
                        <h3 className='text-2xl font-medium'>EBS Multimedia</h3> 
                        <div className='flex gap-4'> 
                          <button type="button" className=" text-[#3328a8]/70 flex items-center gap-4 bg-white-light  px-4 py-2 cursor-pointer rounded-full ">
                              <HiPrinter className='text-[#3328a8] text-xl' />
                              Print Quote
                          </button>
                          <button type="button" className=" bg-[#3328a8] flex items-center gap-4 text-white-light  px-4 py-2 cursor-pointer rounded-full hover:bg-[#3328a8]/90">
                              <FaRegFilePdf className='text-red-500 text-xl' />
                              Download Invoice
                          </button>
                          
                        </div>
                    </div> 

                </div>

                
              <div className='flex items-start justify-between py-3 pl-12 pr-20 '>
              <div className=' flex items-start gap-20 '>
                  <div className='flex justify-start flex-col gap-4 '>
                      <h4 className=' text-2xl py-2'>Attached Files</h4>
                      {
                          docs.map((doc, index) => (
                              <div key={index} className='flex gap-4 '>
                                  <FaRegFilePdf className='text-red-500 text-2xl' />
                                  <p>Download "{doc}"</p>

                              </div>
                          ))
                      }
                  </div>


                  <div className='flex justify-start flex-col gap-4 '>
                      <h4 className=' text-2xl py-2'>Account Files</h4>
                              <div className='flex gap-4 '>
                                  <FaRegFilePdf className='text-red-500 text-2xl' />
                                  <p>Download Portfolio.pdf</p>

                              </div>
                              <div className='flex gap-4'>
                                <FaRegFilePdf className='text-red-500 text-2xl' />
                                <p>Relevant_CV.pdf</p>
                              </div>
                                
                  </div>
                  </div>

                  <div className='flex flex-col items-end gap-2'>
                      <h3 className='text-3xl font-bold'>EBS Ethiopia</h3>
                      {
                          contact.map((contact, index) => (
                              <div key={index} className='flex items-end gap-4'>
                                  <p>{contact.key}</p>:
                                  <p className='font-bold'>{contact.value}</p>
                              </div>
                          ))
                      }
                  </div>
                        
                    </div>
              
                      <div className='py-10 pl-12 pr-20 '>
                        <h3 className='text-3xl font-bold py-2'>Grade the Technical Proposal</h3>
                        <div className='flex gap-4 items-center mb-4'>
                            <input type="text" className='border border-gray-400 w-16 rounded-lg py-3 outline-none px-2' />
                            Out of
                            <input type="text" value="80" className='border border-gray-400 w-16 rounded-lg py-3 outline-none px-2' />

                        </div>
                        <button type="button" className="font-semibold bg-[#3328a8] flex items-center gap-4 text-white-light  px-6 py-2 cursor-pointer rounded-full hover:bg-[#3328a8]/90">
                            Grade
                        </button>
                      </div>


          </div>
          <div className='flex justify-end'>
              <button type="button" className="font-semibold bg-[#3328a8] text-xl flex items-center gap-4 text-white-light  px-10 py-4 cursor-pointer rounded-full hover:bg-[#3328a8]/90">
                  Approve Technical
              </button>
          </div>
    </div>
  )
}

export default SingleApplication
