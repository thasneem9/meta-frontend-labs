import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import { useLang } from '../../context/LangContext';

function MySwitch() {
  const {theme,toggleTheme}=useTheme();
  const {lang,toggleLang}=useLang();
  return (
    <>
    click to chnage theme
    <input type="checkbox" 
    checked={theme}
    onChange={toggleTheme}
    />
    click ot chnage oangugage
    <input type="checkbox"
    checked={lang==="fr"}
    onChange={toggleLang}/>
    </>
  )
}

export default MySwitch