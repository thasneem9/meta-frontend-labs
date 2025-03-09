import React from 'react'
import { useTheme } from '../../context/ThemeContext'

function Title() {

    const {theme}=useTheme();
  return (
    <div >
      <h2>THIS PATICLAR STUF WIL CHANGE ON SWITCH THEME</h2>
     <button></button>
      </div>
  )
}

export default Title