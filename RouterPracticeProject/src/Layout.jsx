import React from 'react'
import Navbaar from './components/Navbaar/Navbaar'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Navbaar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
