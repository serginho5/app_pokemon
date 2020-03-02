import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { CardPokemon, CardName, CardInfo, CardDetail } from './styles';

function Card({ pokemon }) {
  return (
    <CardPokemon>
      <div className="Card__img">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <CardName>
        <p>{pokemon.name}</p>
      </ CardName>
      <CardDetail>
        <CardInfo>
          <p className="title">Weight: </p>
          <p>{pokemon.weight}</p>
        </ CardInfo>
        <CardInfo>
          <p className="title">Height: </p>
          <p>{pokemon.height}</p>
        </ CardInfo>
        <CardInfo>
          <p className="title">Ability: </p>
          <p>{pokemon.abilities[0].ability.name}</p>
        </ CardInfo>
      </ CardDetail>
      <button>Saiba mais <FaChevronRight /></button>
    </ CardPokemon>
  );
}

export default Card;
