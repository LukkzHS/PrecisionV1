import SeccaoTitulo from "./SeccaoTitulo/SeccaoTitulo.jsx";
import SectionBeneficios from './SectionBeneficios/SectionBeneficios.jsx';
import SectionFeedback from './SectionFeedback/SectionFeedback.jsx';
import Apresentacao from "./Apresentacao/Apresentacao.jsx";
import Quem_Somos from "./Quem_Somos/Quem_Somos.jsx";
import Secao_Quem_Somos from "./Quem_Somos/Secao_Quem_Somos.jsx";
import FAQ from './Faq/Faq';
import ContactModal from './ContactModal/ContactModal';
import './Main.module.css';


function Main() {
    return (  
        <main>
        <SeccaoTitulo/>
        <Apresentacao/>
        <SectionBeneficios/>
        <SectionFeedback/>
        <Secao_Quem_Somos/>
        <FAQ/>
        <ContactModal/>
        </main>
    );
}

export default Main;