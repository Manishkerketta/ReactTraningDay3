import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StatusCard from './componentDay3/StatusCard.jsx'
import Task3 from './componentDay3/Task3.jsx'
import Task4 from './componentDay3/Task4.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <StatusCard></StatusCard>
    <Task3></Task3>
    <Task4></Task4>
  </StrictMode>,
)
