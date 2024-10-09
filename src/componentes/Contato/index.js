// Contato.js
import React from 'react';
import styled from 'styled-components';
import '../../variaveis.css';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em 1.5em;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    background-color: var(--bege-claro);
    margin: var(--margin-x) 0;
`;

const Title = styled.h2`
    color: var(--marrom-escuro);
    font-size: 1.5em;
    margin: 0;
    padding-bottom: 3em;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    background-color: white;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.24);
    margin-top: 70px;
    position: relative;
    z-index: 1;
`;

const Input = styled.input`
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid var(--marrom-claro);
    border-radius: 5px;
    color: var(--marrom-escuro);
    width: 100%;
    box-sizing: border-box;
`;

const TextArea = styled(Input).attrs({ as: 'textarea' })`
    height: 80px;
    padding: 5px;
`;

const Button = styled.button`
    padding: 10px;
    background-color: var(--bege-medio);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    transition: background-color 0.4s;

    &:hover {
        background-color: var(--marrom-claro);
    }
`;

const Batata = styled.img`
    position: absolute;
    bottom: 80%;
    left: 90%;
    transform: translate(-50%, -50%) scaleX(-1);
    max-width: 80px;
    z-index: 2;

    /* @media (max-width: 768px) {
        top: 150px;
        left: 75%;
    }

    @media (max-width: 480px) {
        max-width: 60px;
        top: 245px;
    } */
`;

const Contato = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Mensagem enviada!");
    };

    return (
        <Container>
            <Title>Quer ficar por dentro das novidades? Deixe o seu contato conosco!</Title>
            <Form onSubmit={handleSubmit}>
                <Batata src={`${process.env.PUBLIC_URL}/mascote-GourmetOn.png`} alt="Mascote GourmetOn" />  
                <label htmlFor="nome">Nome Completo</label>
                <Input type="text" id="nome" placeholder="Digite seu nome completo" required aria-label="Nome Completo" />

                <label htmlFor="email">Email</label>
                <Input type="email" id="email" placeholder="Digite seu email mais usado" required aria-label="Email" />

                <label htmlFor="feedback">Deseja nos dar algum feedback?</label>
                <TextArea id="feedback" placeholder="Digite sua mensagem" required aria-label="Mensagem" />

                <Button type="submit">Enviar</Button>
            </Form>
        </Container>
    );
};

export default Contato;
