import React from 'react';
import Menu from "./topo/Menu";
import '../assets/styles/Header.scss';


function Navbar() {
    return(
        <header>
            <nav className='Navbar'>
                <div className='navbar-conteiner'>
                    <div className="logo-menu">
                        <h1>logo</h1>
                    </div>
                    <div className='menu-lists'>
                        <Menu />
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;