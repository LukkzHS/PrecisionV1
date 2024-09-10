import React from "react";

import "./Apresentacao.css";
import TituloSubtitulo from "../Titulo_Subtitulo/Titulo_Subtitulo";
import Content from "./Content";

export default function Apresentacao() {
  return (
    <div className="main-section" id="apresentacao">
      <div className="section-content">
        <TituloSubtitulo titulo="O que é o Precision?"
                subtitulo="O Dosador de Adubo Precision é tudo que o agricultor precisa na hora de adubar a sua lavoura."
            />
        <Content />
      </div>
    </div>
  );
}
