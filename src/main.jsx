import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Components/Layout.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
