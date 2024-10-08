import './Hero.css'
import '../../variaveis.css'
import BotaoIcon from '../elementos/BotaoIcon'
import { Download } from 'lucide-react'

const Hero = () => {
    return (
        <section className='containerHero'>
            <div className='bg-img'>
                <picture>
                    <source srcSet={`${process.env.PUBLIC_URL}/img/img-hero.png`} media='(min-width: 1024px)'/>
                    <img loading='lazy' src={`${process.env.PUBLIC_URL}/img/img-hero-mobile.png`} alt='foto de um prato de macarronada, com um garfo levantando um pouco da comida' />
                </picture>
            </div>
            <article className='textosHero'>
                <h1><span>Sabores</span> na sua porta e <span>Receitas</span> nas suas mãos.</h1>

                <h2>Descubra receitas incríveis e leve mais sabor para o seu dia a dia!</h2> 
                <div className='botoesHero'>
                    <BotaoIcon>
                        <Download color="white" size={20} />
                        <p>Download IOS</p>
                    </BotaoIcon>
                    <BotaoIcon>
                        <Download color="white" size={20} />
                        <p>Download Android</p>
                    </BotaoIcon>
                </div>
            </article>
        </section>
    )
}

export default Hero
