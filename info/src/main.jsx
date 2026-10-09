import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
const reactELement = React.createElement(
  'a',
  {href:'https://www.google.com', target:'_blank'},
  'click here to visit the google so please click here'
)
createRoot(document.getElementById('root')).render(

    reactELement

)
