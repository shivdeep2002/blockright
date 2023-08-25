import React from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi"
import { NFTcard } from './NFTcard';
export const Shop = () => {
    return (
        <div className='w-[100%]'>
            <div className='mt-5 flex justify-between 2xl:mx-9 '>

                <div className='ml-7 flex justify-between items-center border-2'>
                    <input type="search" placeholder='search' className='h-8 w-[500px] focus:outline-none pl-2' />
                    <div className="">
                        <BiSearchAlt2 size={25} className=' text-gray-400' />
                    </div>
                </div>
                <div className=" mr-7">
                    <IoMdAddCircleOutline size={35} className=' text-gray-400' />
                </div>
            </div>

            <div className='mx-2 my-4 flex justify-around flex-wrap'>
                <NFTcard
                    pair="Here are the biggest"
                    pair1="Here are the biggest"
                    pair2="Here are the biggest"
                    img="/photos/nft.jpg"
                    heading="Noteworthy technology "
                    l_url="/license" />

                <NFTcard
                    pair="Here are the biggest"
                    pair1="Here are the biggest"
                    pair2="Here are the biggest"
                    img="/photos/nft.jpg"
                    heading="Noteworthy technology "
                    l_url="/license" />
                <NFTcard
                    pair="Here are the biggest"
                    pair1="Here are the biggest"
                    pair2="Here are the biggest"
                    img="/photos/nft.jpg"
                    heading="Noteworthy technology "
                    l_url="/license" />
                <NFTcard
                    pair="Here are the biggest"
                    pair1="Here are the biggest"
                    pair2="Here are the biggest"
                    img="/photos/nft.jpg"
                    heading="Noteworthy technology "
                    l_url="/license" />
                <NFTcard
                    pair="Here are the biggest"
                    pair1="Here are the biggest"
                    pair2="Here are the biggest"
                    img="/photos/nft.jpg"
                    heading="Noteworthy technology "
                    l_url="/license" />
                <NFTcard
                    pair="Here are the biggest"
                    pair1="Here are the biggest"
                    pair2="Here are the biggest"
                    img="/photos/nft.jpg"
                    heading="Noteworthy technology "
                    l_url="/license" />
            </div>
        </div>
    )
}


