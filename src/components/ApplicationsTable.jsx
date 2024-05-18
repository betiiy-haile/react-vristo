import React from 'react'
import { GoTrash } from "react-icons/go";

const tableData = [
    {
        tender_id: '54321',
        Submitted_date: 'Feb 15, 2024',
        company_name: "Aswan Construction Co.",
        invoiced_amount: "1,200,000ETB",
        CPO: "Attached",
        sample: "Attached",
        pin_code: "opened",
        total_point: "82"
    },
    {
        tender_id: '98765',
        Submitted_date: 'Aug 3, 2023',
        company_name: "Mubarak Engineering Ltd.",
        invoiced_amount: "785,000ETB",
        CPO: "Attached",
        sample: "Attached",
        pin_code: "opened",
        total_point: "71"
    },
    {
        tender_id: '67890',
        Submitted_date: 'Nov 20, 2023',
        company_name: "Karim Construction Inc.",
        invoiced_amount: "900,000ETB",
        CPO: "Attached",
        sample: "Attached",
        pin_code: "opened",
        total_point: "75"
    },
    {
        tender_id: '43210',
        Submitted_date: 'May 1, 2024',
        company_name: "Al-Noor General Contractors",
        invoiced_amount: "1,100,000ETB",
        CPO: "Attached",
        sample: "Attached",
        pin_code: "pin code",
        total_point: "90"
    },
    {
        tender_id: '78901',
        Submitted_date: 'Sep 12, 2023',
        company_name: "Fatima Builders Ltd.",
        invoiced_amount: "820,000ETB",
        CPO: "Attached",
        sample: "Attached",
        pin_code: "opened",
        total_point: "68"
    },
    {
        tender_id: '45678',
        Submitted_date: 'Dec 1, 2023',
        company_name: "Horizon Engineering Group",
        invoiced_amount: "950,000ETB",
        CPO: "Attached",
        sample: "Attached",
        pin_code: "opened",
        total_point: "79"
    },
    {
        tender_id: '23456',
        Submitted_date: 'Mar 25, 2024',
        company_name: "Nile Contractors LLC",
        invoiced_amount: "1,050,000ETB",
        CPO: "Attached",
        sample: "Attached",
        pin_code: "pin code",
        total_point: "85"
    },
    {
        tender_id: '87654',
        Submitted_date: 'Jul 18, 2023',
        company_name: "Sandara Construction Co.",
        invoiced_amount: "780,000ETB",
        CPO: "Attached",
        sample: "Attached",
        pin_code: "pin code",
        total_point: "72"
    },
    {
        tender_id: '56789',
        Submitted_date: 'Oct 30, 2023',
        company_name: "Ahmad & Sons Builders",
        invoiced_amount: "900,000ETB",
        CPO: "Attached",
        sample: "Attached",
        pin_code: "pin code",
        total_point: "77"
    },
    {
        tender_id: '34567',
        Submitted_date: 'Apr 10, 2024',
        company_name: "Zaki Contracting LLC",
        invoiced_amount: "1,150,000ETB",
        CPO: "Attached",
        sample: "Attached",
        pin_code: "pin code",
        total_point: "88"
    }
]

const ApplicationsTable = () => {
  return (
      <div className="table-responsive mb-5 px-1">
          <table className="table-hover dark:text-white">
              <thead >
                  <tr>
                      <th className='text-center'>Tender ID</th>
                      <th className='text-center'>Submitted Date</th>
                      <th className='text-center'>Company Name</th>
                      <th className='text-center'>Invoiced Amount</th>
                      <th className='text-center'>CPO</th>
                      <th className='text-center'>Sample</th>
                      <th className='text-center'>Pin Code</th>
                      <th className="text-center">Total Point</th>
                  </tr>
              </thead>
              <tbody>
                  {tableData.map((data) => {
                      return (
                          <tr key={data.id} className='text-lg text-center'>
                              <td className='text-center'>{data.tender_id} </td>
                              <td className='text-center'>{data.Submitted_date}</td>
                              <td className='text-center'>{data.company_name}</td>
                              <td className='text-center'>{data.invoiced_amount}</td>
                              <td className='text-center'>{data.CPO}</td>
                              <td className='text-center'>{data.sample}</td>
                              <td className='text-center'>
                                  <button type="button" className={`font-bold capitalize bg-transparent border ${data.pin_code === "opened" ? "text-green-700 border-green-700 hover:bg-green-700 hover:text-white !important" : "text-[#d3b639] border-[#d3b639] hover:bg-[#d3b639] hover:text-white"} px-6 py-1 cursor-pointer`}>
                                      {data.pin_code}
                                  </button>
                              </td>
                            <td className='text-center'>{data.total_point}</td>
                        
                          </tr>
                      );
                  })}
              </tbody>
          </table>
      </div>
  )
}

export default ApplicationsTable
