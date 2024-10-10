import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import '../../variaveis.css'

const ContainerReceitas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 3em 1.5em;
  background-color: white;
  border-radius: 20px;
  box-shadow: 5px 10px 15px var(--color-shadow);

  .subtitulo {
    color: var(--marrom-claro);
    font-size: var(--p-mobile);
  }

  h1 {
    color: var(--marrom-claro);
    text-align: center;
    font-size: var(--h1-mobile);
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    .subtitulo {
        font-size: var(--p-tablet);
    }

    h1 {
        text-align: center;
        font-size: var(--h1-tablet);
    }
  }

  @media (min-width: 1280px) {
    .subtitulo {
        font-size: var(--p-desktop);
    }

    h1 {
        text-align: center;
        font-size: var(--h1-desktop);
    }
  }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 20px;
    max-width: 90%;

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const Card = styled.div`
  background-color: #f9e9d2;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ImagemComida = styled.div`
   background-color: #ffd59a;
  height: 150px; 
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; 

`;

const NomeComida = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
`;

const ContainerBotoes = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Botao = styled.button`
  background-color: #a86932;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #8f5c2a;
  }
`;

const CampoBuscars = styled.input`
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
  width: 300px;
  margin-bottom: 20px;
`;

const BotaoBuscar = styled.button`
  background-color: #a86932;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  margin-left: 10px;

  &:hover {
    background-color: #8f5c2a;
  }
`;

const Receitas = () => {
  const URL = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=19e06fe280924f5b89a74ebdef67a17d';

  const [comidas, setComidas] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${URL}&query=${query}`);
        const data = await response.json();
        setComidas(data.results || []);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, [query]);

  return (
        <ContainerReceitas>
            <p className='subtitulo'>Teste agora mesmo!</p>
            <h1>Explore a nossa variedade de receitas e busque pelas suas preferências</h1>
            <div>
            <CampoBuscars
                type="text"
                placeholder="Digite uma receita, alimento..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <BotaoBuscar>Buscar</BotaoBuscar>
            </div>

            <Grid>
                {comidas.length > 0 ? (
                  comidas.map((comida) => (
                      <Card key={comida.id}>
                      <ImagemComida>
                          <img
                          src={comida.image}
                          alt={comida.title}
                          style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '10px' }}
                          />
                      </ImagemComida>
                      <NomeComida>{comida.title}</NomeComida>
                      <ContainerBotoes>
                          <Botao>Comprar</Botao>
                          <Botao>Ver receita</Botao>
                      </ContainerBotoes>
                      </Card>
                ))
                ) : (
                <p>Nenhuma receita encontrada.</p>
                )}
            </Grid>
        </ContainerReceitas>
    );
};

export default Receitas;
