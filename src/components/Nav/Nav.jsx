import React from 'react'
import logo from './../../assets/logo.png';
import './Nav.css'
const Nav =() =>{
    return(
        <div className="nav-container">
            <div className="nav-left">
                <img className= "flash-logo" src={logo} alt="logo"/>
                <p className="flash-logo-text">FasType</p>
            </div>
            <div className="nav-right">
                   <a
                        href="https://github.com/aromalsanthosh/FasType"
                        target="_blank"
                        className="nav-git-link"
                        rel="noreferrer"
                   >
                   GitHub
                   </a>
            </div>
        </div>
    )
}

export default Nav;