import css from './Card.module.css'
const Card = (props) => {
	return (
		<div className={css.card}>
			<div>
				<h3>
					{props.texto}
				</h3>
			</div>
			<div>
				<p>
					{props.paragrafo}
				</p>
			</div>
		</div>
	)
}
export default Card;