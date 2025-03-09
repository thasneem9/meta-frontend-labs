import React from 'react'
import { useTheme } from '../../context/ThemeContext';

function MySwitch() {
  const {theme,toggleTheme}=useTheme();
  return (
    <>
    click to chnage theme
    <input type="checkbox" 
    checked={theme==="light"}
    onChange={toggleTheme}
    />
    </>
  )
}

export default MySwitch