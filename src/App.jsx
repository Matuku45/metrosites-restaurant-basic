import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />  
      <main className="container mx-auto p-4">  
        <h2 className="text-3xl font-semibold mb-4">Welcome to MetroSites Restaurant</h2> 
        <p className="mb-6">Experience the best dining with us. Explore our menu and enjoy delicious meals crafted with love.</p> 
      </main> 
      <Footer />
  
    </>
  )
}

export default App
