import React from 'react'
import { Link } from 'react-router-dom'
import TimeLine from '../../components/TimeLine';

const data = [
  { key: "Bid Opening Date", value: "Nov 02, 2022, 12:00 AM" },
  { key: "Bid Closing Date", value: "Nov 02, 2022, 12:00 AM" },
  { key: "Bid Document Date", value: "400 Birr" },
  { key: "Bid Bond", value: "300,000 Birr" },
  { key: "Region", value: "Addis Ababa" }
];

const SingleTender = () => {
  return (
    <div className='flex flex-col gap-8 px-8 py-4'>

      {/* Detail Section */}
      <section className="w-full text-gray-700  bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded-[20px] border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
        <div className="py-6 px-12 flex flex-col gap-6">
          <h3 className='font-bold w-3/4 text-4xl py-2  mb-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</h3>
          <div className='grid grid-cols-5 gap-10 justify-between'>
            {data.map((item, index) => {
              return (
                <div className={`flex flex-col items-start justify-center py-4 ${index != 4 && "border-r"}`} key={index}>
                  <div className='text-sm font-light'>{item.key}</div>
                  <span className='text-xl font-bold'>{item.value}</span>
                </div>
              )
            }
            )}
          </div>
          <div>
            <p className='mb-2'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus obcaecati accusantium odio ipsa in quaerat quisquam aliquid, neque expedita. Nam accusantium iusto quo vel sed quam qui ipsa, doloremque nesciunt aspernatur voluptate nostrum voluptatum saepe nulla est modi illum perferendis doloribus voluptatem? Nam ipsam ex rerum similique dolor veniam at! Ea quod natus porro provident impedit, nostrum quibusdam excepturi quasi cum facere, vero corrupti repellat cupiditate ullam rem pariatur placeat!
            </p>
            <p className='mb-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aperiam qui mollitia amet, accusamus odio dolorem? Et corporis exercitationem delectus qui laboriosam ad maiores sed. Nesciunt recusandae tempora nihil esse. adipisicing elit. Corporis aperiam qui mollitia amet, accusamus odio dolorem? Et corporis exercitationem delectus qui laboriosam ad maiores sed.
            </p>
          </div>
          <div>
            <h2 className='text-xl font-semibold'>Details</h2>
            <p className='mb-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque veniam minima, maxime cum voluptatum aliquid saepe architecto fugiat? Incidunt hic eaque placeat accusamus consequatur magni quos sequi esse quaerat in tempore et, nobis similique eius, officia porro ex quibusdam animi explicabo cum debitis, optio libero? Quisquam deleniti totam, sit eligendi laborum nobis quasi libero non,Quia voluptatum enim soluta ipsa cumque!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, voluptatum.</p>
          </div>

          <div className='flex items-center justify-between'>
            <button type="button" className="font-semibold bg-[#3328a8] text-white px-12 py-3 cursor-pointer rounded-full hover:bg-[#3328a8]/90">
              Edit Tender
            </button>
            <button type="button" className="font-semibold bg-[#3328a8] text-white px-8 py-3 cursor-pointer rounded-full hover:bg-[#3328a8]/90">
              Applicationss
            </button>
          </div>
        </div>
      </section>


      <section className='flex gap-x-12 py-8'>
        <div className=" text-gray-700 h-fit w-[40%] bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded-[20px] border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:text-slate-200 dark:shadow-none">
          <div className="py-6 px-12">
            <h3 className='font-bold text-3xl py-2  mb-3'>Activity</h3>
            <TimeLine />
          </div>
        </div>




        <div className="py-8 w-[60%] bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded-[20px] border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
          <div className="py-6 px-12">

            <h3 className='font-bold text-3xl py-2 mb-6'>Clarifications</h3>
            {/* not answered clarifications */}
            <div className='flex flex-col gap-y-12'>
              <div className='flex flex-col gap-y-3'>
                <h4 className=' font-semibold text-xl'>Clarification #1 | Asked by John Doe, Fana Broadcasting..</h4>
                <p className='text-gray-700text-[12px] font-light'>Asked on March 20, 2022 at 10:30am</p>
                <div className='text-gray-700 text-xl'><span className='font-bold'>Question:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, vel.</div>
                <div className='text-gray-700 flex justify-end'>
                  <button type="button" className="font-semibold bg-[#3328a8] text-white px-8 py-3 cursor-pointer rounded-full hover:bg-[#3328a8]/90">
                    Answer
                  </button>
                </div>
              </div>

              <div className='flex flex-col gap-y-3'>
                <h4 className=' font-semibold text-xl'>Clarification #1 | Asked by John Doe, Fana Broadcasting..</h4>
                <p className='text-gray-700 text-[12px] font-light'>Asked on March 20, 2022 at 10:30am</p>
                <div className='text-gray-700 text-xl'><span className='font-bold'>Question:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, vel.</div>
                <div className='text-gray-700 flex justify-end'>
                  <button type="button" className="font-semibold bg-[#3328a8] text-white px-8 py-3 cursor-pointer rounded-full hover:bg-[#3328a8]/90">
                    Answer
                  </button>
                </div>
              </div>
            </div>

            {/* answered clarifications */}
            <h2 className='font-bold text-xl py-6'> Clarifications(answered)</h2>
              <div className='flex flex-col gap-y-6'>
                <h4 className=' font-semibold text-xl'>Clarification #1 | Asked by John Doe, Fana Broadcasting..</h4>
              <p className='text-gray-700 text-[12px] font-light'>
                  <span>Asked on March 20, 2022 at 10:30am,</span> 
                  <span>answered on March 20, 2022 at 10:30am</span>
                </p>
              <div className='text-gray-700 text-xl'><span className='font-bold'>Question:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, vel.</div>
              <p className='text-xl text-gray-700'><span className='text-gray-700 font-bold'>Answer:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo exercitationem non maiores dolore. Debitis saepe aspernatur accusantium. Impedit nobis sequi maxime ratione voluptates fuga, a tenetur. Impedit animi magni aliquid. Optio vitae cum, aspernatur accusantium. Impedit nobis sequi maxime ratione voluptates fuga, a tenetur. Impedit animi magni aliquid. Optio vitae cum, harum natus dolorum recusandae possimus eos id!</p>
              </div>

            
          </div>
        </div>
      </section>

    </div>
  )
}

export default SingleTender
