import React from 'react'

export const Header = () => {
let color = 'hover:text-blue-700 text-lg'
    return (
        <div className='sticky top-0 left-0 right-0 '>
            <nav >
                <div className="bg-neutral-100 flex justify-between items-center h-[70px] shadow-xl shadow-black-900 ">
                    <div className="ml-3">
                        <h1 className='text-black text-2xl'><b>Blockright</b></h1>
                    </div>
                    <div className=" w-[35%]">
                        <ul className='text-black  flex justify-around '>
                            <li><a className= {color} href="/">User</a></li>
                            <li><a className= {color} href="/nft">NFT</a></li>
                            <li><a className= {color} href="/products">Products</a></li>
                            <li><a className= {color} href="/orders" aria-current="page">Orders</a></li>
                            <li><a className= {color} href="/shop" aria-current="page">Shop</a></li>
                            <li><a className= {color} href="/license" aria-current="page">license</a></li>
                            <li><a className= {color} href="/payment" aria-current="page">Payment</a></li>
                        </ul>
                    </div>
                    <div className="bg-black rounded-full h-11 w-11 mr-3">
                        <img className='rounded-full' src="/photos/sachi.png" alt="User" />
                    </div>
                </div>
            </nav>
        </div>
    )
}


