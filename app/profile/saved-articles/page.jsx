"use client"
import { base_url } from '@/components/utils'
import axios from 'axios'
import React from 'react'

const page = () => {
    const fetchArticle= async()=>{
        try {
            const response =await axios.get(`${base_url}/auth/article-save`,{withCredentials:true})
            const data = await response.data;
            console.log(data)
        } catch (error) {
            
        }
    }
  return (
    <div>


    </div>
  )
}

export default page