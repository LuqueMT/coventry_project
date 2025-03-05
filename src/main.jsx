import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from "./Routes/routes"
import "./App.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AppRoutes/>
  </StrictMode>,
)
