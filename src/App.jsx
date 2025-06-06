import React from 'react'
import './App.css'
import Todo from './Components/Todo'
import Header from './Components/Header'

function App() {
  return (
    <div className="
    min-h-screen
    flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700
    font-['Kalam']
    text-gray-800">
    <div className='relative z-10 p-6 md:p-8 lg:p-10 bg-white bg-opacity-70 backdrop-blur-sm rounded-xl shadow-xl max-w-md w-full' >
    <Todo/>
    </div>
    </div>
  )
}

export default App