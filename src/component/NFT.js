import React from 'react'
import { Data } from './User_data'
import { Pageno } from './Pageno'
export const NFT = () => {
    let a = "border-2 p-3 w-100%"
    let b = "border-2"
    return (
        <div>
            <div className="flex justify-center mt-5">
                <table className='w-100% h-100% text-center text-sm'>
                    <tr className={b} >
                        <th className={a}>Sn.</th>
                        <th className={a}>UserName</th>
                        <th className={a}>wallet address</th>
                        <th className={a}>Country</th>
                        <th className={a}>Company</th>
                        <th className={a}>Contact</th>
                        <th className={a}>Country</th>
                        <th className={a}>Company</th>
                        <th className={a}>Contact</th>
                        <th className={a}>Country</th>

                    </tr>
                    {Data.map((d, i)=>(

                        <tr key= {i} className={b}>
                        <td>{d.Sn}</td>
                        <td className={a}>NFT</td>
                        <td className={a}>{d.wallet_address}</td>
                        <td className={a}>{d.Country}</td>
                        <td className={a}>{d.Company}</td>
                        <td className={a}>{d.Contact}</td>
                        <td className={a}>{d.Country}</td>
                        <td className={a}>{d.Company}</td>
                        <td className={a}>{d.Contact}</td>
                        <td className={a}>{d.Country}</td>
                        
                        </tr>
                        ))}
                </table>

            </div>
            <div className='flex justify-center mt-2 '>
                <div aria-label="Page navigation example">
                    <ul className="inline-flex -space-x-px text-sm">
                        <Pageno number="Previous"/>
                        <Pageno number="1"/>
                        <Pageno number="2"/>
                        <Pageno number="3"/>
                        <Pageno number="4"/>
                        <Pageno number="5"/>
                        <Pageno number="Next"/>
                    </ul>
                </div>
            </div>



        </div>
    )
}


