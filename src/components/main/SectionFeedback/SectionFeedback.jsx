import ContentFeedback from './ContentFeedback/ContentFeedback'
import TituloSubtitulo from '../Titulo_Subtitulo/Titulo_Subtitulo'
import css from '../SectionFeedback/SectionFeedback.module.css'

function SectionFeedback(){

    return(
        <div className={css.feedback}>
                <TituloSubtitulo titulo="Oque nossos clientes estão dizendo" subtitulo="Confira o que nossos clientes estão dizendo sobre o novo dosador de adubo Precision."/>
                <ContentFeedback className={css.contentFeedback}/>
        </div>
    )
}

export default SectionFeedback;