import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Images/cinflix.png';
import './Menu.css'
import Button from '../Button/Index';

function Menu() {

    return(
        <header>
            <nav className="Menu">
                <Link to="/">
                    <img src={Logo} alt="Cinflix Logo" className="Logo" />
                </Link>
                <Button as={Link} className="ButtonLink" to="/cadastro/video">
                    New Video
                </Button>
            </nav>
        </header>
    );
}

export default Menu;