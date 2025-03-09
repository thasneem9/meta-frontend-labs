import { useContext,createContext } from "react";
import { useState } from "react";

const LangContext=createContext(undefined);
export const LangProvider=({children})=>{
    const [lang,setLang]=useState('en');
    
    const toggleLang=()=>{
        const newLang=lang==='en'?'fr':'en';
        document.getElementsByTagName("html").setAttribute("lang","newLang");
        setLang(newLang)
    }
    return(
        <LangContext.Provider value={{lang,toggleLang}}>
            {children}

        </LangContext.Provider>
    )

}
export const useLang=()=>useContext(LangContext);