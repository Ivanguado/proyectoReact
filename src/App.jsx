import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Cart } from './componentes/cart'
import { Pants } from './componentes/pants'
import { Sneakers } from './componentes/sneakers'
import { Shirts } from './componentes/t-shirts'
import { Logo } from './componentes/logo'
import { Main } from './componentes/main'


function App() {

  const Parrafo = () => {
    <h2>Si funciona</h2>
  }


  return (
    <>
      <header className='header_style'>
        <div>
          <Logo/>
        </div>
        <div className='header_div--links'>
          <Pants />
          <Sneakers />
          <Shirts />
        </div>
        <div className='header_cart'>
          <Cart/>
        </div>
      </header>   
      <main>
        <Main greeting='No pude hacer mucho'/>
      </main>
      <footer>

      </footer>
    </>
  )
  
  }

export default App
