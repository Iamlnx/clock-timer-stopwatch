import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Clock from './routes/Clock.tsx'
import Timer from './routes/Timer.tsx'
import Stopwatch from './routes/Stopwatch.tsx'
import Error from './routes/Error.tsx'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Clock />,
      },
      {
        path: '/timer',
        element: <Timer />,
      },
      {
        path: '/stopwatch',
        element: <Stopwatch />,
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
