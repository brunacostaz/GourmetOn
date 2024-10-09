import '../../variaveis.css';
import styled from 'styled-components';
import { Heart, Bell, Utensils, Truck, Star, CookingPot } from 'lucide-react';

const ContainerFuncionalidades = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 1em;
`;

const Title = styled.h1`
  font-size: 24px;
  color: var(--marrom-escuro);
  margin-bottom: 2em;
`;

const GridFuncionalidades = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (min-width: 1150px) {
    grid-template-columns: repeat(3, 1fr); 
    width: 80%

  }
`;

const Card = styled.div`
  color: var(--bege-medio);
  border-radius: 10px;
  padding: 1.5em;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 16px rgba(0,0,0,0.2);
      cursor: pointer;
    }
`;

const IconWrapper = styled.div`
  margin-bottom: 10px;
  color: var(--marrom-claro);
`;

const CardTitle = styled.h3`
  font-size: 18px;
  color: var(--marrom-claro);
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: var(--marrom-escuro);
`;

const Funcionalidades = () => {
  return (
    <ContainerFuncionalidades>
      <Title>Funcionalidades</Title>
      <GridFuncionalidades>
        <Card>
          <IconWrapper>
            <Utensils size={32} />
          </IconWrapper>
          <CardTitle>Filtros de Dieta</CardTitle>
          <CardDescription>
            Encontre refeições e receitas adaptadas às suas restrições alimentares.
          </CardDescription>
        </Card>
        <Card>
          <IconWrapper>
            <Heart size={32} />
          </IconWrapper>
          <CardTitle>Favoritos Personalizados</CardTitle>
          <CardDescription>
            Salve seus pratos e receitas preferidos para acesso rápido.
          </CardDescription>
        </Card>
        <Card>
          <IconWrapper>
            <CookingPot size={32} />
          </IconWrapper>
          <CardTitle>Receitas Exclusivas</CardTitle>
          <CardDescription>
            Acesse receitas detalhadas para preparar pratos incríveis em casa.
          </CardDescription>
        </Card>
        <Card>
          <IconWrapper>
            <Truck size={32} />
          </IconWrapper>
          <CardTitle>Delivery Rápido</CardTitle>
          <CardDescription>
            Receba suas refeições favoritas de forma rápida e segura.
          </CardDescription>
        </Card>
        <Card>
          <IconWrapper>
            <Bell size={32} />
          </IconWrapper>
          <CardTitle>Notificações de Promoções</CardTitle>
          <CardDescription>
            Fique por dentro das ofertas e descontos especiais.
          </CardDescription>
        </Card>
        <Card>
          <IconWrapper>
            <Star size={32} />
          </IconWrapper>
          <CardTitle>Avaliações e Recomendações</CardTitle>
          <CardDescription>
            Confira avaliações e receba recomendações personalizadas de novos pratos.
          </CardDescription>
        </Card>
      </GridFuncionalidades>
    </ContainerFuncionalidades>
  );
};

export default Funcionalidades;
