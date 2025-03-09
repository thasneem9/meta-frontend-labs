//don't use rfce!!
import React, { useEffect, useState } from 'react'
import { createContext, useContext } from 'react' //step 1

//step 2
const ThemeContext=createContext(undefined);
export const ThemeProvider=({children})=>{
    //children refers to stuff that's wrapped inside <ThemeProvider> this stufff</ThemeProvider>
    //which is literally the entire app-component!!!
    const [theme,setTheme]=useState(true);
    const toggleTheme=()=>{
        setTheme((mode)=>!mode);
    }
    useEffect(()=>{
        document.documentElement.setAttribute("data-theme", theme?"dark":"light")

    },[theme])
    return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>);

}
export const useTheme=()=>useContext(ThemeContext);





