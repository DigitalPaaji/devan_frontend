"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const page = () => {
    const route = useRouter()
  const {info,isError,isLoading,isUser} = useSelector(state=>state.user)
     console.log({info,isError,isLoading,isUser})

useEffect(()=>{
  if(!isUser){
route.push("/login")
  }

},[])


  return (
    <div>page</div>
  )
}

export default page