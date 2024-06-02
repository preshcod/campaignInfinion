import React, { useState } from 'react'
import Campaign from './Campaign'
import axios from 'axios'


function CreateCampaign() {

    const [formData,setFormData] = useState({
        campaignName: "",
        description: "",
        startDate: "",
        endDate: "",
        linkedKeywords: ""
        
    })

    const handleChange = (e) => {
        const {value,name} = e.target
        setFormData((prevState)=>{
            return {...prevState,[name]:value}
        })
    }

    const handleSubmit = async (e) => {
            e.preventDefault()
        try {
           await axios.post(`https://infinion-test-int-test.azurewebsites.net/api/Campaign`,formData)
                
                            
        } catch (error) {
            console.log(error);
        }
    }


    console.log(formData);
  return (
    <section className='px-[50px] py-4'>
        <h2 className='text-[#247b7b] text-2xl font-semibold my-4'>Create New Campaign</h2>
    

        <form className='' onSubmit={handleSubmit}>
            <label className='block my-2 font-semibold' htmlFor="campaignName">Campaign Name:</label>
            <input className='block border w-full py-2 px-3 focus:outline-none' type="text" id="campaignName" name="campaignName" placeholder='e.g  The Future is now' onChange={(e)=>handleChange(e)}/>

            <label className='block my-2 font-semibold'  htmlFor="description">Campaign Description</label>
            <textarea className='block border w-full h-[120px] py-2 px-3 focus:outline-none' name="description" id="description" placeholder='Please add a description to your campaign'onChange={(e)=>handleChange(e)} ></textarea>

            <div className='flex gap-4 justify-between mt-4'>

                <div className='flex-1'>
                    
                    <label className='block my-2 font-semibold' htmlFor="startDate">Start Date:</label>
                    <input className='block border py-2 px-3 w-full focus:outline-none' type="text" id="startDate" name="startDate"  placeholder='dd/mm/yyy' onChange={(e)=>handleChange(e)}/>
                </div>

                <div className='flex-1'>
                    <label className='block my-2 font-semibold' htmlFor="endDate">End Date:</label>
                    <input className='block border py-2 px-3 w-full focus:outline-none' type="text" id="endDate" name="endDate" placeholder='dd/mm/yyy' onChange={(e)=>handleChange(e)}/>
                </div>

            </div>

            <div className='flex items-center justify-between my-4 '>
             <p className='text-sm'>Want to receive daily digest about the campaign?</p>

                <div className='bg-black w-[50px] h-[25px] rounded-xl'></div>
            </div> 

           <label className='block my-2 w-full font-semibold focus:outline-none'  htmlFor="linkedWords">Linked Keywords</label>
           <textarea className="block border py-2 px-3 w-full h-[100px] focus:outline-none" placeholder='To add keywords, type your keyword and press enter'  name="linkedKeywords" id="linkedKeywords" onChange={(e)=>handleChange(e)}/>

            <button>submit</button>
            
        </form>

    </section>
  )
}

export default CreateCampaign