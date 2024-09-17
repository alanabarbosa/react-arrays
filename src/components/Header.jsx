import React from 'react';
import Nav from '../components/Nav';
import Clientes from '../components/Clientes';
import Livros from '../components/Livros';

const Header = () => {
    return (
        <>
            <Nav link="#" text="Home"></Nav>
            <Nav link="#" text="About"></Nav>
            <Nav link="#" text="Cases"></Nav>
            <Nav link="#" text="Contact"></Nav>
            <Nav link="#" text="Blog"></Nav>

            <Clientes />
            <Livros />

            
        </>
    )
}

export default Header;