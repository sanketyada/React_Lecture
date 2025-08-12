import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Hero from './components/Hero/Hero.jsx'
import UserData from './components/UserData/UserData.jsx'
import Joke, { jokefunction } from './components/Joke/Joke.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='hero' element={<Hero/>}/>
      <Route path=':userid' element={<UserData/>}/>
      <Route loader={jokefunction} path='joke' element={<Joke/>}/>
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
