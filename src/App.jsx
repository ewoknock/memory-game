import { useState } from 'react'
import Navbar from './components/Navbar'
import CardsContainer from './components/CardsContainer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <CardsContainer />
    </>
  )
}

export default App
