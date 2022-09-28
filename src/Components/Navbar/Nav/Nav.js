import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Nav = ({ categorias }) => {
    return (
        <nav>
            {categorias.map((categoria) => {
                return <a key={categoria.id} style={styles.links} to="#">{categoria.nombre}</a>
            })}
        </nav>
    )
}


const styles = {
    links: {
        padding: 50,
    }
}