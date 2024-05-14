import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Products from './routes/Products.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Home from './routes/Home.jsx'
import EditForm from './routes/Editform.jsx'
import Info from './routes/Info.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/products/:id", //Rota dinâmica
        element: <EditForm />
      },
      {
        path: "/products/:id/info", //Rota dinâmica
        element: <Info />
      },
    ]
  },
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
