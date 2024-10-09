import '../../variaveis.css'
import styled from 'styled-components'

const ContainerGourmet = styled.section`
    width: 98%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 7em;
    padding: var(--margin-y) var(--margin-x);

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
        gap: 0;
    }
`

const TextosGourmet = styled.article`
    padding: var(--margin-y) 1em;
    max-width: 100%;
    margin-right: 5em;

    h2 {
        font-size: var(--h1-mobile);
        font-weight: normal;
        color: var(--marrom-escuro);
    }

    p {
        font-size: var(--h2-mobile);
        color: var(--marrom-escuro);
        line-height: 1.5;
    }

    span {
        color: var(--marrom-claro);
        font-weight: bold;
    }

    .cta {
        border: 2px solid var(--marrom-claro);
        padding: 15px;
        margin-top: 20px;
        border-radius: 8px;

        p {
            color: var(--marrom-claro);
            font-weight: bold;
            text-align: center;
            font-size: 16px;
        }
    }

    @media (min-width: 768px) {
        width: 60%;
    }

    @media (min-width: 1280px) {
        width: 50%;
    }
`

const GourmetImages = styled.div`
    display: none;
    flex-direction: column;
    gap: 20px;

    img {
        width: 150px;
        height: auto;
        border-radius: 8px;
        filter: drop-shadow(10px 12px 10px var(--color-shadow));
    }

    .img-carne {
        margin-left: -90px;
    }

    @media (min-width: 768px) {
        display: flex;
    }
`

const Sobre = () => {
    return (
        <ContainerGourmet>
            <TextosGourmet>
                <h2>Sobre a <span>GourmetOn</span></h2>
                <p>A <span>GourmetOn</span> é a parceria ideal para uma experiência culinária completa. Com ela, você recebe refeições deliciosas na sua porta e ainda acessa receitas exclusivas para recriar pratos incríveis em casa.</p>
                
                <div className="cta">
                    <p>Aproveite o melhor do delivery e aprenda novas receitas para deixar seu dia a dia mais saboroso e prático!</p>
                </div>
            </TextosGourmet>

            <GourmetImages>
                <img src={`${process.env.PUBLIC_URL}/img/img-bolo.png`} alt="Bolo" />
                <img className="img-carne" src={`${process.env.PUBLIC_URL}/img/img-carne.png`} alt="Carne" />
                <img src={`${process.env.PUBLIC_URL}/img/img-frango.png`} alt="Frango" />
            </GourmetImages>
        </ContainerGourmet>
    )
}


export default Sobre;
