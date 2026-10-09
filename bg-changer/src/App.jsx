import { useState } from 'react'

function App() {
   const [color, setcolor]=useState('olive')
  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
    <div  className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
        <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
          <button onClick={()=>setcolor("red")} className='outline-none px-4 py-1  rounded-4xl text-white' style={{backgroundColor:"red"}}>
             red
          </button>
          <button onClick={()=>setcolor("yellow")} className='outline-none px-4 py-1  rounded-4xl text-white ' style={{backgroundColor:"yellow"}}>
            yellow 
          </button>
          <button onClick={()=>setcolor("orange")} className='outline-none px-4 py-1  rounded-4xl text-white' style={{backgroundColor:"orange"}}>
             orange
          </button>
          <button  onClick={()=>setcolor("blue")}className='outline-none px-4 py-1  rounded-4xl text-white ' style={{backgroundColor:"blue"}}>
             blue
          </button>
          <button  onClick={()=>setcolor("black")}className='outline-none px-4 py-1  rounded-4xl  text-white' style={{backgroundColor:"black"}}>
             black
          </button>
           <button onClick={()=>setcolor("violet")}className='outline-none px-4 py-1  rounded-4xl  text-white' style={{backgroundColor:"violet"}}>
             violet
          </button>
        </div>
  
      </div>
    </div>
    </>
  )
}

export default App
