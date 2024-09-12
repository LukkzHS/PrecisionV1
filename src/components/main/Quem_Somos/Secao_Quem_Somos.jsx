import React from "react";
import "./Quem_Somos.css";

import QuemSomos from "./Quem_Somos";
import TituloSubtitulo from "../Titulo_Subtitulo/Titulo_Subtitulo";

export default function Secao_Quem_Somos() {
    return (
        <div className="quem-somos-section" id="quemSomos">
            <TituloSubtitulo titulo="Quem somos"
                subtitulo="Conheça um pouco da nossa história."
            />
            <QuemSomos />
        </div>
    );
}
