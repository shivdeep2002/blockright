import {React, useState} from 'react'
import { Data } from './User_data';

export const Orders = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 15;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = Data.slice(firstIndex, lastIndex)
    const npage = Math.ceil(Data.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)

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
                    {records.map((d, i) => (

                        <tr key={i} className={b}>
                            <td>{d.Sn}</td>
                            <td className={a}>{d.UserName}</td>
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
            <div className='flex justify-center mt-2  sticky bottom-0 '>
                <div aria-label="Page navigation exampl ">
                    <ul className="inline-flex space-x-px text-sm bor border-2">
                        <li className='w-10 pl-1'><a href="#" onClick={perPage}> Prev </a></li>

                    {numbers.map((n,i) =>(
                    <li className={`page-item ${currentPage === n ? '# text-blue-500 ': '' }`} key={i}  >
                    <a href="#" onClick={()=> changeCPage(n)}  className='p-1 '>{n}  </a>
                    </li>
                    ))}
                    
                    <li className='pl-2 w-10'><a href="#" onClick={nexPage}> Next</a></li>
                    </ul>
                    
                </div>

            </div>

        </div>
    )
    
    function perPage(){
        if (currentPage !== firstIndex){
            setCurrentPage(currentPage - 1)
        }
    }

    function changeCPage (id){
        setCurrentPage(id)
    }

    function nexPage() {
        if (currentPage !== npage){
            setCurrentPage(currentPage + 1)
        }
    }
}

