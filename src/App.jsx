import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lobby from './components/Lobby'
import './styles/lobby.css'
import './styles/main.css'
import './styles/room.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <Lobby />
  )
}

export default App
