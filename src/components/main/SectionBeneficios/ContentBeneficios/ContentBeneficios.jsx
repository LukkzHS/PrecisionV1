import Card from './Card/Card'
import css from './ContentBeneficios.module.css'

function ContentBeneficios(){

    return(
        <div className={css.ContentBeneficios}>
            <Card texto="PRECISÃO" paragrafo="na dosagem do adubo através do sistema de rosca sem fim"/>
            <Card texto="UNIFORMIDADE" paragrafo=" na adubação através da rampa de transbordo no bocal de saída"/>
            <Card texto="SEGURANÇA" paragrafo="na linha de plantio, evita falhas e gera lucro"/>
            <Card texto="COMPATIBILIDADE"  paragrafo="pode ser instalado em qualquer plantadeira e adubadeira do mercado"/>
            <Card texto="ROBUSTEZ" paragrafo="produto robusto, de fácil instalação, fácil limpeza e fácil manutenção"/>
            <Card texto="ECONOMIA"  paragrafo="com o melhor custo-benefício do mercado"/>
        </div>
    )
}

export default ContentBeneficios;