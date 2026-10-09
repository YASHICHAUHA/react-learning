import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './Card.jsx'
function App() {
const myobj={
  username:"yashi chauhan",
  email:"yashichuahan198@gmail.com"
}
  return (
    <>
      <Card name="chiya chauhan" usernamee={myobj.username} email={myobj.email}/>
      <Card name="lakshi chauhan"/>
      <Card name ="lakshi"/>
    </>
  )
}

export default App
