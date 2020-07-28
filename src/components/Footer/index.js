import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente desenvolvido durante a
        {' '}
        <a target="_blank" href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
        {' '}
        por 
        {' '}
        <a target="_blank" href="https://lucasbecker.github.io/">
          Lucas Becker
        </a>
        .
      </p>
    </FooterBase>
  );
}

export default Footer;
