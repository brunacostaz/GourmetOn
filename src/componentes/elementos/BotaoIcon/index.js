import '../../../variaveis.css'
import styled from 'styled-components'

const Botao = styled.button`
    display: flex;
    align-items: center;
    color: white;
    gap: 8px;
    background-color: var(--marrom-claro);
    border: none;
    border-radius: 18px;
    height: auto;
    padding: 0 20px;
    transition: background-color 0.4s;

    p {
    font-size: 0.90em;
    }

    &:hover {
        background-color: var(--marrom-escuro);
        cursor: pointer;
    }

    @media screen and (min-width: 1024px) {
        p {
            font-size: 1.12em;
        }
    }
`

const BotaoIcon = (props) => {
    return (
        <Botao>
            {props.children}
        </Botao>
    )
}

export default BotaoIcon