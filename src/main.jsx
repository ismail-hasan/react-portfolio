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
import ExperienceTwo from './Components/ExperienceTwo.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [

      {
        path: "project",
        element: <ProjectSection></ProjectSection>
      },
      // {
      //   path: "/experience",
      //   element: <Experience></Experience>
      // }
      {
        path: "/experience",
        element: <ExperienceTwo></ExperienceTwo>
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
