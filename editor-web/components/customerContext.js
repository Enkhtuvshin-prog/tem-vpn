import axios from 'axios';
import React, {  createContext, useEffect, useState } from 'react'

export const CustomerContext = createContext();



const CustomerProvider = ({children}) => {
    const [isLoading, setIsLoading]= useState(true)


  return (
    <CustomerContext.Provider value={{ isLoading, setIsLoading}  } >
        {children}
    </CustomerContext.Provider>
  )
}

export default CustomerProvider;