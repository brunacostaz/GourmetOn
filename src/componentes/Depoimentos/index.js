import React from 'react'; 
import styled from 'styled-components';
import '../../variaveis.css';

// Estilos para a seção
const Secao = styled.section`
  background-color: rgba(135, 105, 78, 0.69);
  padding: 6em 0; 
  text-align: center;
  width: 100%;
`;

const Titulo = styled.h2`
  color: var(--bege-claro);
  font-size: var(--h2-mobile);
  margin: 0 0 80px; 

  @media (min-width: 768px) {
    font-size: var(--h2-desktop);
    margin: 0 0 80px; 
  }
`;

const ContainerDepoimentos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 105px; 

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    gap: 60px; 
  }
`;

const CartaoDepoimento = styled.div`
  background-color: var(--bege-claro);
  border-radius: 15px;
  padding: 60px 10px 20px; 
  width: 90%;
  text-align: left;
  position: relative;

  @media (min-width: 1024px) {
    width: 400px;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 55px 55px 0 55px;
    border-style: solid;
    border-color: var(--bege-claro) transparent transparent transparent;
  }
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid var(--bege-claro);
`;

const Nome = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;
`;

const Texto = styled.p`
  font-size: var(--p-mobile);

  @media (min-width: 768px) {
    font-size: var(--p-desktop);
  }
`;

const SecaoDepoimentos = () => {
  return (
    <Secao>
      <Titulo>O que as pessoas estão dizendo sobre a GourmetOn?</Titulo>
      <ContainerDepoimentos>
        <CartaoDepoimento>
          <Avatar src={`${process.env.PUBLIC_URL}/img/Ana.png`} alt="Ana Lopes" />
          <Nome>Ana Lopes</Nome>
          <Texto>"Adoro a praticidade do Gourmet On! Além de receber comida deliciosa em minutos, as receitas me inspiram a cozinhar mais em casa. Um verdadeiro salvador para os dias corridos!"</Texto>
        </CartaoDepoimento>
        <CartaoDepoimento>
          <Avatar src={`${process.env.PUBLIC_URL}/img/Joao.png`} alt="João Pereira" />
          <Nome>João Pereira</Nome>
          <Texto>"O Gourmet On me surpreendeu! Sempre consigo encontrar opções saudáveis e o filtro de dietas me ajuda muito. E ainda aprendi novas receitas para variar no cardápio."</Texto>
        </CartaoDepoimento>
        <CartaoDepoimento>
          <Avatar src={`${process.env.PUBLIC_URL}/img/Joaquim.png`} alt="Joaquim Figueroa" />
          <Nome>Joaquim Figueroa</Nome>
          <Texto>"Incrível como o Gourmet On facilita meu dia a dia. As refeições são saborosas e chegam sempre no horário. Sem contar que o atendimento ao cliente é excelente!"</Texto>
        </CartaoDepoimento>
      </ContainerDepoimentos>
    </Secao>
  );
};

export default SecaoDepoimentos;
