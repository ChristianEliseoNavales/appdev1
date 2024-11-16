import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './Components/Counter.jsx'
import ToggleButton from './Components/ToggleButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToggleButton />
  </StrictMode>,
)
