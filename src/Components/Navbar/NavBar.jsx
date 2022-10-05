
import React from "react";
import logo from "../../assets/logo.svg"
import logomusic from "../../assets/logomusica.svg"
import CartWidget from "../Cart/CartWidget";
import { Link, NavLink } from 'react-router-dom'
import { products } from "../../assets/productos";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const NavBar = () => {
   const { Cart } = useContext(CartContext)
   return (
      <>
         <header>
            <nav className="flex-row container">
               <Link to="/">
                  <picture className="logoContainer" >
                     <img className="logo" src={logo} alt="Logo" />
                  </picture>
               </Link>


               <ul className=" menu flex-row">
                  <li className="menu__item">
                     <Link className="menu__link" to="">Categories<box-icon name='chevron-down' type='solid' color='#ffffff' ></box-icon> </Link>
                     <ul className="sub-menu">
                        <li className="sub-menu__item ">
                           {/* <Link to="" className="sub-menu__link">remeras</Link> */}
                           <ul className="flex-column listCategories ">
                              <section className="flex-row">
                                 <Link to="/categoria/hombre">
                                    <li className="ppp">
                                       <h2>HOMBRE</h2>
                                       <i className="fa-solid fa-shirt"></i>
                                    </li>
                                 </Link>
                                 <Link to="/categoria/mujer">
                                    <li className="ppp" >
                                       <h2>MUJER</h2>
                                       <i className="fa-solid fa-music"></i>
                                    </li>
                                 </Link>
                                 <Link to="/categoria/niño">
                                    <li className="ppp" >
                                       <h2>NIÑOS</h2>
                                       <i className="fa-solid fa-gamepad"></i>
                                    </li>
                                 </Link>
                              </section>
                              
                           </ul>
                        </li>
                        
                     </ul>
                  </li>
                  <li className="menu__item">
                     <Link className="menu__link" to="">Collections <box-icon name='chevron-down' type='solid' color='#ffffff' ></box-icon> </Link>
                  </li>
               </ul>
               <ul className=" menuSecond flex-row">
                  <li className="menuSecond__item">
                     <Link className="menuSecond__link" to="">Help </Link>
                  </li>
                  <i className="fa-solid fa-circle"></i>
                  <li className="menuSecond__item">
                     <Link className="menuSecond__link " to="">login</Link>
                  </li>
               </ul>
               <section className="mainBuscador">
                  <i className="fa-solid fa-magnifying-glass lupa"></i>
               </section>
               <Link to="/cart">
                  <section className="sectionCarrito">
                     < CartWidget />
                  </section>
               </Link>
            </nav>

         </header>
      </>
   )
}

export default NavBar































































































































// import React from "react";
// import logo from '../../assets/logo.png'
// import CartWidget from '../Cart/CartWidget';
// import { Link, NavLink } from 'react-router-dom'
// import { products } from "../../assets/productos"
// const Navbar = () => {

//    return (
//       <header  >
//          <nav className="navbar" >

//             <Link to="/">
//                <picture>
//                   <img className="logo" src={logo} alt="{logo}" />
//                </picture>
//             </Link>

//             <ul className="menu">
//                <Link>
//                   <li className="menu__item">
//                      <h2>Home</h2>
//                   </li>
//                </Link>

//                <Link to="/categoria/hombre">
//                   <li className="menu__item">
//                      <h2>Hombre</h2>
//                   </li>
//                </Link>

//                <Link to="/categoria/mujer">
//                   <li className="menu__item">
//                      <h2>Mujeres</h2>
//                   </li>
//                </Link>

//                <Link to="/categoria/niños">
//                   <li className="menu__item">
//                      <h2>Niños</h2>
//                   </li>
//                </Link>

//                <Link to="/categoria/nosotros">
//                   <li className="menu__item">
//                      <h2>Nosotros</h2>
//                   </li>
//                </Link>

//                <Link to="/cart">
//                         <section>
//                             < CartWidget />
//                         </section>
//                     </Link>

//             </ul>
//          </nav>
//       </header>

//    )
// }

// export default Navbar


















