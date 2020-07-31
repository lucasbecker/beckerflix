import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
  return (
    <header>
      <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={Logo} alt="Beckerflix Logo" />
        </Link>

        <Button as={Link} className="ButtonLink" to="/cadastro/video">
          Novo Vídeo
        </Button>
      </nav>
    </header>
  );
}

export default Menu;
