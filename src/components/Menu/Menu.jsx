import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'
import { TranslationContext } from '../../context/translation/translationContext';

export const Menu = () => {
    const translation = useContext(TranslationContext);
    return <nav>
        <ul style={{
                listStyle: 'none', 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '25px',
            }}>
            <li>
                <NavLink to="/" 
                // className={({ isActive }) => 
                // `${isActive ? "activeLink" : ""}`}
                >{translation.menu.main}</NavLink>
            </li>
            <li>
                <NavLink to="/about-us" 
                // className={({isActive}) =>
                // `${isActive ? "activeLink" : ""}`}
                >{translation.menu.about}</NavLink>
            </li>
            <li>
                <NavLink to="/movie-list"
                // className={({isActive}) => 
                // `${isActive ? "activeLink" : ""}`}
                >{translation.menu.movieList}</NavLink>
            </li>
            <li>
                <NavLink to="/reviews">{translation.menu.reviews}</NavLink>
            </li>
        </ul>
    </nav>
}
