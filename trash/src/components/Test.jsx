import React, { useState } from 'react'

export const Test = () => {
    const [button,setButton]=useState(true)

  return (
    <div>
        <h2>click to use ur damn code</h2>


        <div onClick={(button)=>setButton(!button)}>
        {button?<button>click me now</button>:<div><p>uu used it all up LOL</p>
        
        <h2> visit our website to renew
            </h2>
            </div>}
        </div>




    </div>
  )
}
