import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Logo from '../../assets/pokemon-base.png';
import { Container, Form, Content } from './styles';

function Header() {

  return (
    <Container>
      <img src={Logo} alt="logo" />
      <h1>Conheça todos os pokemons</h1>
      <Content>
        <Form>
          <input type="text" placeholder="Buscar" />
          <button type="submit" ><FaSearch /></button>
        </Form>
      </Content>
    </Container>
  )
}


export default Header;
