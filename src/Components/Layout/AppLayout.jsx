import React from 'react'
import Header from '../UI/Header'
import Footer from '../UI/Footer'
import { Outlet } from 'react-router-dom'


const AppLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen"> 
        <Header />
        <main className="flex-grow"> 
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default AppLayout