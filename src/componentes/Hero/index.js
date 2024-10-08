import '../../variaveis.css'
import BotaoIcon from '../elementos/BotaoIcon'
import { Download } from 'lucide-react'
import styled from 'styled-components'

const ContainerHero = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 5em;
    padding: var(--margin-y) var(--margin-x) var(--margin-y) 0;
`

const BgImg = styled.div`
    content: '';
    position: relative;
    background-color: var(--marrom-claro);
    border-radius: 0 18px 18px 0;
    max-width: 20%;
    padding-left: 2em;
    left: 0;

    img {
        filter: drop-shadow(0 12px 12px var(--color-shadow));
    }
`

const TextosHero = styled.article`
    padding: var(--margin-y) 1em;

    h1,h2 {
        font-weight: normal;
        color: var(--marrom-escuro)
    }

    h1 {
        font-size: var(--h1-mobile);
    }

    h2 {
        font-size: var(--h2-mobile);
    }

    span {
        color: var(--marrom-claro);
        font-weight: bold;
        display: inline-block;
    }
`

const BotoesHero = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding-top: 1em;
`


const Hero = () => {
    return (
        <ContainerHero>
            <BgImg>
                <picture>
                    <source srcSet={`${process.env.PUBLIC_URL}/img/img-hero.png`} media='(min-width: 1024px)'/>
                    <img loading='lazy' src={`${process.env.PUBLIC_URL}/img/img-hero-mobile.png`} alt='foto de um prato de macarronada, com um garfo levantando um pouco da comida' />
                </picture>
            </BgImg>
            <TextosHero>
                <h1><span>Sabores</span> na sua porta e <span>Receitas</span> nas suas mãos.</h1>

                <h2>Descubra receitas incríveis e leve mais sabor para o seu dia a dia!</h2> 
                <BotoesHero>
                    <BotaoIcon>
                        <Download color="white" size={20} />
                        <p>Download IOS</p>
                    </BotaoIcon>
                    <BotaoIcon>
                        <Download color="white" size={20} />
                        <p>Download Android</p>
                    </BotaoIcon>
                </BotoesHero>
            </TextosHero>
        </ContainerHero>
    )
}

export default Hero
