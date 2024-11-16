import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './Components/Counter.jsx'
import ToggleButton from './Components/ToggleButton.jsx'
import TextInput from './Components/TextInput.jsx'
import FetchPosts from './Components/FetchPosts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FetchPosts />
  </StrictMode>,
)
