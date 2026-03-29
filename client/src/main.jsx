window.onload = () => { document.body.style.border = "10px solid blue"; document.body.innerHTML += '<h1 style="color:blue">SCRIPT EXECUTED</h1>'; };
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
