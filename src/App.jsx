import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './components/container.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
     <Container />
    </div>
  )
}

export default App
