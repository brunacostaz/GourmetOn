import './BotaoIcon.css'
import '../../../variaveis.css'

const BotaoIcon = (props) => {
    return (
        <button type='button' className='botaoIcon'>
            {props.children}
        </button>
    )
}

export default BotaoIcon