import React from 'react'
import { FiArrowRightCircle } from "react-icons/fi";
export const NFTcard = (props) => {
    return (
        <div>
        <div className=" pt-2 mt-[2%] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="/">
            <h5 className="px-5 mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{props.heading}</h5>
        </a>
        <div className="px-5 ">
            <a href="/">
                <img className=" h-[200px]" src= {props.img} alt="" />
            </a>
            
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.pair}<br/>
            {props.pair1}<br/>
            {props.pair2}
            
                <a href={props.l_url} className='float-right' >

                    <FiArrowRightCircle size={30} className="text-blue-500  " />
                </a>
            </p>

        </div>
        
    </div>
        </div>
    )
}


