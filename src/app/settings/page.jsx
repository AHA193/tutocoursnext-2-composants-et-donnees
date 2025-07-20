// import React from 'react'

"use client"
import { useContext } from "react"
import { DarkModeContext } from "@/context/DarkModeContext"

function page() {
    const {theme, toggleTheme} = useContext(DarkModeContext)
  return (
    <div>
      <h1 className="mb-4">Paramètres</h1>
       <button 
 onClick={toggleTheme}
 className="border 
 border-violet-500 p-3 dark:bg-slate-900 dark:text-slate-100" 
 >
    Mode: {theme}
    </button>
    </div>
  )
}

export default page
