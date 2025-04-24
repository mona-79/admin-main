import React from 'react'
import { IoSearch } from "react-icons/io5";


 const SearchBox = () => {
  return (

    <div className='w-full h-auto border border-[rgba(0,0,0,0.1)] bg-[#f1f1f1] relative overflow-hidden'>
     <IoSearch className='absolute top-[13px] left-[10px] z-50 pointer-events-none opacity-50'/>
     <input type='text' className='w-full h-[40px] bg-[#f1f1f1] pl-8
       p-2 focus:outline-none focus:border-[rgba(0,0,0,0.5)]
       rounded-md text-[13px]' placeholder='Search here...'/>
    </div>
  )
}
export default SearchBox;