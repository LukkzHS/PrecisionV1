import React, { useState, useEffect } from 'react';
import './FAQ.css';  // Importando o CSS
import TituloSubtitulo from "../Titulo_Subtitulo/Titulo_Subtitulo";

const FAQ = () => {
  const [faqData, setFaqData] = useState<any[]>([]);

  useEffect(() => {
    fetch('/src/faqData.json')
      .then((response) => response.json())
      .then((data) => setFaqData(data))
      .catch((error) => console.error('Erro ao carregar o JSON:', error));
  }, []);

  return (
    <section className="faq-section">
      <TituloSubtitulo titulo="FAQ"
        subtitulo="Perguntas frequentes"
      />
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => document.getElementById(`faq-answer-${index}`)?.classList.toggle('show')}>
              {item.question}
            </div>
            <div className="faq-answer" id={`faq-answer-${index}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
