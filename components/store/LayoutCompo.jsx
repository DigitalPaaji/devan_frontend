"use client"
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

const LayoutCompo = ({children}) => {
  return (
   <Provider store={store}>
{children} 


</Provider>
  )
}

export default LayoutCompo