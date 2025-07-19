"use client"
import { useState } from 'react'

import React from 'react'

function page() {
  const [inputValue, setInputValue] = useState("") /*instanciation du state */
  console.log(new Date().getTime())
  return (
    <div>
      <input 
      className="p-2 mb-4 border border-gray-600"
      type="text" 
      value={inputValue} 
      onChange={e => setInputValue(e.target.value)}
      />
      <p>Tu as écrit : {inputValue}</p> 
    </div>
  )
}

export default page
