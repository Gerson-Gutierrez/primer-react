import React from "react";
import logo from '../../assets/logo.png'
import "./Navbar.css"
import { Nav } from './Nav/Nav';
import CartWidget from '../Cartidget/CartWidget';


const Navbar = () => {
  
  
  
    const categorias = [

        { id: 0, nombre: 'Inicio' },
        { id: 1, nombre: 'Hombre' },
        { id: 2, nombre: 'Mujeres' },
        { id: 3, nombre: 'Niños' },
        { id: 4, nombre: 'Nosotros' },
    ] 
  
    return (


        <header  >
            <nav className="container" >
                <picture  >
                    <img className="logo" src={logo} alt="{logo}" />
                    </picture>
                    <Nav categorias={categorias}/>
                  <CartWidget />
            </nav>
        </header>

    )
}

export default Navbar






