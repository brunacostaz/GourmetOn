import '../../variaveis.css'
import BotaoIcon from '../elementos/BotaoIcon'
import { Download } from 'lucide-react'
import styled from 'styled-components'

const ContainerHero = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 1em;
    padding: var(--margin-y) var(--margin-x) var(--margin-y) 0;
    box-sizing: border-box;

    @media (min-width: 768px) and (max-width: 1279px) {
        gap: 4em;
    }
`

const BgImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    position: relative;
    box-sizing: border-box;

    .bgHero {
        position: absolute;
        top: 0;
        left: 0;
        width: 60%;
        height: 100%;
        background-color: var(--marrom-claro);
        border-radius: 0 20% 20% 0;
        padding-left: 2em;
    }

    .imgHero {
        position: relative;
        max-width: 100%;
        height: auto;
        z-index: 1;
        // padding-left: 1em;
        filter: drop-shadow(0 12px 12px var(--color-shadow));
    }

    @media (min-width: 768px) and (max-width: 1279px) {
        
    }
`

const TextosHero = styled.article`
    padding: var(--margin-y) 1em;

    h1, h2 {
        font-weight: normal;
        color: var(--marrom-escuro);
        max-width: 100px;
    }

    h1 {
        font-size: var(--h1-mobile);
        font-weight: normal;
        color: var(--marrom-escuro);
        max-width: 260px;
    }

    h2 {
        font-size: var(--p-mobile);
        font-weight: normal;
        color: var(--marrom-escuro);
        max-width: 260px;
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
                <div className='bgHero'></div>
                <div className='imgHero'>
                    <picture>
                        <source srcSet={`${process.env.PUBLIC_URL}/img/img-hero.png`} media='(min-width: 1024px)'/>
                        <img loading='lazy' src={`${process.env.PUBLIC_URL}/img/img-hero-mobile.png`} alt='foto de um prato de macarronada, com um garfo levantando um pouco da comida' />
                    </picture>
                </div>
            </BgImg>
            <TextosHero>
                <h1><span>Sabores</span> na sua porta e <span>Receitas</span> nas suas mãos.</h1>

                <h2>Descubra receitas incríveis e leve mais sabor para o seu dia a dia!</h2> 
                <BotoesHero>
                    <BotaoIcon>
                        <Download color="white" size={20} />
                        <p>Baixar IOS</p>
                    </BotaoIcon>
                    <BotaoIcon>
                        <Download color="white" size={20} />
                        <p>Baixar Android</p>
                    </BotaoIcon>
                </BotoesHero>
            </TextosHero>
        </ContainerHero>
    )
}

export default Hero
