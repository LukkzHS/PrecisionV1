import React from "react";
import "./Quem_Somos.css";

export default function Quem_Somos() {
    return (
            <div className="conteudo">
                <div className="texto-principal">
                    <p>
                        Nós da Precision somos especialistas no desenvolvimento e fabricação de Dosadores de
                        Precisão para dosar adubos e fertilizantes nas mais diversas granulometrias.
                    </p>
                    <p>
                        Temos uma equipe de desenvolvimento com vasto conhecimento em Projetos Mecânicos de Precisão, nossos produtos foram desenhados e simulados nos mais modernos softwares de engenharia mecânica, posteriormente foram testados e validados em campo com potenciais clientes antes de serem industrializados e comercializados, para assim entregarmos aos nossos clientes produtos robustos, confiáveis e de alta qualidade.
                    </p>
                    <p>
                        Estamos estrategicamente localizados bem no meio do Brasil, na região do Triângulo Mineiro, na cidade de Uberlândia, de onde conseguimos enviar nossos produtos para todo o Brasil com a máxima agilidade e rapidez.
                    </p>
                </div>

                <div className="imagem-container">
                    <img src="PrecisionV1/precision.jpeg" alt="" className="imagem-precision" />
                </div>
            </div>
    );
}