import React from 'react'
import overimage from "../../public/assets/overImage.png"
import {FaPlus} from "react-icons/fa6";

const Overview = () => {
  return (
   <section className='flex items-center justify-center'>
     <div className='flex flex-col items-center justify-center '> 
      <img src={overimage} alt=" Search" />
      <p className='my-4'>
      No activity yet. Create anew campaign to get started 
      </p>
      <button className="flex items-center bg-[#247B7B] px-2 py-1 gap-2 text-sm text-white mt-3">
        <FaPlus />
        New Campaign
        </button>
    </div>
   </section>
  )
}

export default Overview