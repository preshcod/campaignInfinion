import { useState,useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaEdit, FaTrash,FaRegEye } from "react-icons/fa";
import axios from 'axios'

const Campaign = () => {

  const [allCampaign,setAllCampaign] = useState([])

  const fetchAllCampaign = async () => {
      try {
          const res = await axios.get('https://infinion-test-int-test.azurewebsites.net/api/Campaign')
          // console.log(res?.data);
          setAllCampaign(res?.data);
      } catch (error) {
          console.error(error)
      }
  }

  useEffect(() => {
      fetchAllCampaign()
  }, [])

  const deleteCampaign = async (id) => {
    try {
      await axios.delete(`https://infinion-test-int-test.azurewebsites.net/api/Campaign/${id}`)
      fetchAllCampaign()
    } catch (error) {
      console.log(error);
    }
  }


  function dateFormat(date) {
    const today = new Date(date)
    const yr = today.getFullYear()
    const m = today.getMonth()
    const d = today.getDate()
    const day = d < 10 ? `0${d}`: d
    const fmt = `${day}/${m+1 < 10 ? `0${m +1}`: m + 1}/${yr}`
    // console.log(fmt);
    return fmt;
}

const inActiveCampaign = allCampaign.length > 0 ? (
  allCampaign.filter(campaign => campaign.campaignStatus.toLowerCase() !== 'inactive')
) : []
const activeCampaign = allCampaign.length > 0 ? (
  allCampaign.filter(campaign => campaign.campaignStatus.toLowerCase() === 'inactive')
) : []

console.log(activeCampaign);

  return (
    <section>
    <h2 className='text-[#247b7b] text-2xl font-semibold mx-5'>All Campaigns</h2>

    <div className="border-2   px-[50px] py-4">
        <div className="flex items-center gap-7 w-full justify-between mb-[40px]">
            <div className="flex items-center gap-5">
            <div className='border border-[#247B7B] text-[#247B7B] p-2 rounded-lg'>{`All (${allCampaign.length})`}</div>
            <div className='border border-[#247B7B] text-[#247B7B] p-2 rounded-lg'>{`Inactive (${activeCampaign.length})`}</div>
            <div className='border border-[#247B7B] text-[#247B7B] p-2 rounded-lg'>{`Active (${inActiveCampaign.length})`}</div>
            </div>

            <div className="flex items-center gap-5">
            <div className="flex items-center border px-3 py-2 rounded-lg">
                <input type="text" placeholder="Search..." className="flex-1 h-full w-full focus:outline-none placeholder:text-sm text-lg" />
                <IoIosSearch className="text-lg cursor-pointer"/>
            </div>


            <div className="flex items-center py-2 px-3 border rounded-lg">
                <p>Filter by date</p>
            </div>
            </div>
        </div>

        <div className="w-full">
            <table className="w-full">
               <thead>
               <tr>
                    <th className="py-2 px-10 text-left bg-[#f0f4f4]">S/N</th>
                    <th className="py-2 px-10 text-left bg-[#f0f4f4]">Campaign Name</th>
                    <th className="py-2 px-10 text-left bg-[#f0f4f4]">Start Date</th>
                    <th className="py-2 px-10 text-left bg-[#f0f4f4]">Status</th>
                    <th className="py-2 px-10 text-left bg-[#f0f4f4]">Actions</th>
                </tr>
               </thead>
               <tbody>
               {allCampaign.length > 0 ? (
                            allCampaign.map((campaign,idx) => {
                                const {campaignName, startDate,campaignStatus,id} = campaign;
                                return (
                                    <tr className='border-b' key={id}>
                            <td className="py-2 px-10">{idx + 1}</td>
                            <td className="py-2 px-10">{campaignName}</td>
                            <td className="py-2 px-10">{dateFormat(startDate)}</td>
                            <td className="py-2 px-10">{campaignStatus}</td>

                            <td className="py-2 px-10 flex items-center gap-2">
                                <FaRegEye className="cursor-pointer"/>
                                <FaEdit className="cursor-pointer"/>
                                <FaTrash className="cursor-pointer" onClick={()=>deleteCampaign(id)}/>
                            </td>
                        </tr>
                                )
                            })
                        ) : null}
                       
               </tbody>
            
             
              
               
        
               
               
            </table>
        </div>
    </div>
</section>
  )
}

export default Campaign