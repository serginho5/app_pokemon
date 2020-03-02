import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import { Container, Content, CardMain, ContentButton } from './styles';
import { getPokemon, getAllPokemon } from '../../services/pokemon';
const initialURL = 'https://pokeapi.co/api/v2/pokemon'

function Search() {
  const [pokemonData, setPokemonData] = useState([])
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL)
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])


  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }

  return (
    <Container>
      <Content>
        <div>
          {loading ? <Loading /> : (
            <>
              <ContentButton>
                <button onClick={prev}>Prev</button>
                <button onClick={next}>Next</button>
              </ ContentButton>
              <CardMain>
                {pokemonData.map((pokemon, i) => {
                  return <Card key={i} pokemon={pokemon} />
                })}
              </ CardMain>
              <ContentButton>
                <button onClick={prev}>Prev</button>
                <button onClick={next}>Next</button>
              </ ContentButton>
            </>
          )}
        </div>

      </Content>
    </Container>
  )
}

export default Search;
