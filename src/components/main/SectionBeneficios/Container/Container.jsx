import TituloSubtitulo from '../../Titulo_Subtitulo/Titulo_Subtitulo';
import Content from '../Content/Content';
import css from './Container.module.css'
function Container() {
	return (
		<div className={css.container}>
			<TituloSubtitulo titulo="Características e benefícios" subtitulo="Explore as características do Precision, benefícios que fazem a diferença:"/>
			<Content/>
		</div>
	);
}
export default Container;