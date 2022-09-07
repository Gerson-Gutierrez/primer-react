import React from "react";
import logo from '../../assets/logo.png'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import "./Header.css"


const Header = () => {
    return (

        <header  >
            <nav className="container" >
                <picture  >
                    <img className="logo" src={logo} alt="{logo}" />
                    </picture>
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Hombre</a></li>
                    <li><a href="">Mujeres</a></li>
                    <li><a href="">Niños</a></li>
                    <li><a href="">Nosotros</a></li>
                </ul>
                <div className="carrito">
                    < LocalMallOutlinedIcon />
                </div>
            </nav>
        </header>

    )
}

export default Header