import ContentBeneficios from './ContentBeneficios/ContentBeneficios'
import css from './SectionBeneficios.module.css'
import TituloSubtitulo from "../Titulo_Subtitulo/Titulo_Subtitulo";

function SectionBeneficios() {

    return (
        <section className={css.SectionBeneficios}>
            <TituloSubtitulo titulo="Características e Benefícios"
                subtitulo="Explorando as vantagens do Precision: detalhes que fazem a diferença"
            />
            <ContentBeneficios />
        </section>
    )
}

export default SectionBeneficios;