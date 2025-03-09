//don't use rfce!!
import React, { useState } from 'react'
import { createContext, useContext } from 'react' //step 1

//step 2
const ThemeContext=createContext(undefined);
export const ThemeProvider=({children})=>{
    //children refers to stuff that's wrapped inside <ThemeProvider> this stufff</ThemeProvider>
    //which is literally the entire app-component!!!
    const [theme,setTheme]=useState("light");
    return (
    <ThemeContext.Provider value={{theme,toggleTheme:()=>setTheme(theme==="light"?"dark":"light")}}>
        {children}
    </ThemeContext.Provider>);

}
export const useTheme=()=>useContext(ThemeContext);





