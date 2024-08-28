import css from './Card.module.css'

function Card(props){

    return(
        <div className={css.Card}>
            <div>
                <h3>{props.texto}</h3>
            </div>
            <div>
                <p>{props.paragrafo}</p>
            </div>
        </div>
    )
}

export default Card;