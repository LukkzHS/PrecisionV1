// src/FAQ/FAQ.jsx
import React, { useState, useEffect } from 'react';
import './FAQ.css'; // Import CSS
import TituloSubtitulo from '../Titulo_Subtitulo/Titulo_Subtitulo';

const FAQ = () => {
  const [faqprova, setFaqprova] = useState([]);

  useEffect(() => {
    fetch('faqprova.json')
      .then((response) => response.json())
      .then((data) => setFaqprova(data.faqs)) // Acessando a chave 'faqs'
      .catch((error) => console.error('Erro ao carregar o JSON:', error));
  }, []);

  return (
    <section className="faq-section">
      <TituloSubtitulo titulo="Perguntas frequentes" subtitulo="" />
      <div className="faq-container">
        {faqprova.map((item, index) => (
          <div className="faq-item" key={index}>
            <div
              className="faq-question"
              onClick={() => document.getElementById(`faq-answer-${index}`)?.classList.toggle('show')}
            >
              {item.pergunta} {/* Atualizado para 'pergunta' */}
            </div>
            <div className="faq-answer" id={`faq-answer-${index}`}>
              {item.resposta} {/* Atualizado para 'resposta' */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
