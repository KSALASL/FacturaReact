import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Factura }  from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Factura />
  </StrictMode>,
)
