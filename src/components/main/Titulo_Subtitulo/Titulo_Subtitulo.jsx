import React from "react";
import "./Titulo_Subtitulo.css";

export default function TituloSubtitulo({ titulo, subtitulo, tituloClassName = "titulo-padrao", subtituloClassName = "subtitulo-padrao" }) {
    return (
        <div className="titulo-subtitulo">
            <h2 className={tituloClassName}>{titulo}</h2>
            <p className={subtituloClassName}>{subtitulo}</p>
        </div>
    );
}
