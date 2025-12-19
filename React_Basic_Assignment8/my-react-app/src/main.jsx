import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// import bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css'
// **Why?** This loads Bootstrap's pre-made styles into your entire app!

// `App.css` → Delete
// **Why?** We're using Bootstrap, so we don't need custom CSS!

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
