import React from 'react'
import { Outlet } from 'react-router'
// Otros componentes
import FooterP from '../_partials/Footers'
import NavbarP, { NavbarM } from '../_partials/Navbars'

// Public main layout
function Publiclayout() {
  return (
    <div>
      <header className='absolute inset-x-0 z-50 items-center justify-center'>
        <NavbarP />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterP />
      </footer>
    </div>
  )
}

// Public layout main more page
function PubliclayoutM() {
  return (
    <div>
      <header className='absolute inset-x-0 z-50 items-center justify-center'>
        <NavbarM />
      </header>
      <main className='h-full'>
        <Outlet />
      </main>
      <footer>
        <FooterP />
      </footer>
    </div>
  )
}

// Private layout main
function Privatelayout() {
  return (
    <div>
      {/* header */}
      <main>
        <Outlet />
      </main>
      {/* footer */}
    </div>
  )
}

// Exporting the layouts
export default Publiclayout
export { PubliclayoutM }
export { Privatelayout }
