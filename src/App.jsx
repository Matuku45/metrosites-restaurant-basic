import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Welcome to Tailwind Test!
      </h1>
      <p className="text-gray-700 text-lg mb-6">
        This is a paragraph styled with Tailwind CSS. You can change the colors, spacing, and text sizes easily!
      </p>
      <div className="flex items-center gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={() => setCount(count + 1)}
        >
          Increase
        </button>
        <span className="text-lg font-medium">{count}</span>
      </div>
    </div>
  )
}

export default App
