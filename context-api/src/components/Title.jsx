import React from 'react'
import { useTheme } from '../../context/ThemeContext'

function Title() {

    const theme=useTheme();
  return (
    <div style={{color:theme==="light"?"black":"white"}}
    >Title</div>
  )
}

export default Title