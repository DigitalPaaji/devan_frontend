"use client"
import JobCard from '@/components/JobCard'
import { base_url } from '@/components/utils'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {
const [jobs,setJobs]=useState([])

    const fetchData = async()=>{
      try {
const response = await axios.get(`${base_url}/jobs/applyjob`,{withCredentials:true});
const data = await response.data;
if(data.success){

setJobs(data?.userAppliedjob?.jobappled)
}
else{
setJobs([])
}




} catch (error) {
              setJobs([])
                   }

    }

useEffect(()=>{
    fetchData()
},[])
  return (
    <div className='grid   gap-4  md:grid-cols-2'>


        {jobs?.length >0 && jobs.map((item)=><JobCard job={item} key={item._id} />)}
        
    </div>
  )
}

export default page