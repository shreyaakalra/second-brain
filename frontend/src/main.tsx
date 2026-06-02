import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp.tsx'
import SignIn from "./pages/SignIn.tsx"
import Dashboard from './pages/Dashboard.tsx'
import CheckDemo from './pages/CheckDemo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/dashboardd" element={<Dashboard />} />
        <Route path="/check-demo" element={<CheckDemo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
