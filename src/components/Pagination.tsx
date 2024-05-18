import React from 'react'
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Pagination = () => {
    return (
        <div className='flex mt-10 items-center justify-center '>
            <ul className="inline-flex mx-auto items-center space-x-1 rtl:space-x-reverse">
                <li>
                    <button
                        type="button"
                        className="flex justify-center font-semibold px-3.5 py-2 rounded transition  text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                    >
                        <MdArrowBackIos />
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className="flex justify-center font-semibold px-3.5 py-2 rounded transition  text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                    >
                        1
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className="flex justify-center font-semibold px-3.5 py-2 rounded transition  text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                    >
                        2
                    </button>
                </li>
                <li>
                    <button type="button" className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-primary text-white dark:text-white-light dark:bg-primary">
                        3
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className="flex justify-center font-semibold px-3.5 py-2 rounded transition  text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                    >
                        4
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className="flex justify-center font-semibold px-3.5 py-2 rounded transition  text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                    >
                        5
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className="flex justify-center font-semibold px-3.5 py-2 rounded transition  text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                    >
                        <MdArrowForwardIos />
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Pagination
