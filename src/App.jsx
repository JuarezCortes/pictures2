import { useState } from 'react'
import SearchBar from './components/SearchBar'


import './App.css'

function App() {
  const [images, setImages] = useState([])

  const handleFormSubmit = async(term) => {
    console.log('usted esta buscando con:', term)
  }

  return(
    <div>
      <h1>App</h1>
      <SearchBar onSubmit={handleSubmit}/>
    </div>
  )
}

export default App
