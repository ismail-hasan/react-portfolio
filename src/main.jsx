import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Components/Layout.jsx'
import ProjectLayout from './Components/ProjectLayout.jsx'
import About from './Components/About.jsx'
import ProjectSection from './Components/ProjectSection.jsx'
import Experience from './Components/Experience.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "project",
        element: <ProjectSection></ProjectSection>
      },
      {
        path: "/experience",
        element: <Experience></Experience>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
