import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import SearchBar from '../searchbar/SearchBar'

function Header() {
    return (
        <header className="header-container">
            <img src={logo} alt="logo" className="image"/>
            <SearchBar />
        </header>
    )
}

export default Header