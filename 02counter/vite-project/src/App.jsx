import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'  
import './App.css'
function App() {
 let [counter, setcounter] =useState(15);
  
    const addvalue = () => {
       counter=counter+1;
       setcounter(counter);
      
    }
  
    const removevalue=()=>{
      counter=counter-1;
      if(counter<0){
        counter=0;
      }
    setcounter(counter);

    }

  return (
    
    <>
    <h1>hey  yashi chauhan </h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={addvalue}>add value{counter}</button>
    <br/>
    <button onClick={removevalue}>remove value {counter}</button>
    </>
  
  )
}

export default App
