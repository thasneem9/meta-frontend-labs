import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useReducer } from 'react'
import './App.css'

const reducer=(state,action)=>{
  if(action.type==='sell_meal') return{money:state.money +10}
  if(action.type==='buy_meal') return{money:state.money-10}
  if(action.type==='celebrity_visit') return{money:state.money+500}

  return state;
}

function App() {
  const initial_state={money:10};
  const [state, dispatch]=useReducer(reducer,initial_state)

  return (
    <>
    <h2>WALLET:{state.money}</h2>
    <button onClick={()=>{dispatch({type:'sell_meal'})}}>clcik to sell meal</button>



    <button onClick={()=>{dispatch({type:'buy_meal'})}}>Click to buyy meal</button>

    <button onClick={()=>{dispatch({type:'celebrity_visit'})}}>Cleberty visit</button>
     
      
    </>
  )
}

export default App
