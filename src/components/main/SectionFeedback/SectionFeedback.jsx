import ContentFeedback from './ContentFeedback/ContentFeedback'
import css from '../SectionFeedback/SectionFeedback.module.css'
import TituloSubtitulo from "../Titulo_Subtitulo/Titulo_Subtitulo";

function SectionFeedback() {

    return (
        <section className={css.section}>
            <div className={css.content}>
                <TituloSubtitulo titulo="O que Nossos Clientes Estão Dizendo"
                subtitulo="Confira o que nossos clientes estão dizendo sobre o novo dosador de adubo e sua eficiência no plantio."
            />
                <ContentFeedback />
            </div>
        </section>
    )
}

export default SectionFeedback