import React from 'react';
import { FooterBase } from './styles';
import Logoci from '../../Assets/Images/logo.png';
import './Logoci.css';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src={Logoci} alt="Logo" className="Logoci" />
      </a>
      <p>
        Projeto criado a partir da 
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
