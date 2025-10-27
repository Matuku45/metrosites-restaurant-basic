import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />  
      <main className="container mx-auto p-4">  
       <Home />
      </main> 
      <Footer />
  
    </>
  )
}

export default App
