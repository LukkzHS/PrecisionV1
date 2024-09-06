import React, { useState, useEffect } from 'react';
import './Faq.css'; // Import CSS
import TituloSubtitulo from '../Titulo_Subtitulo/Titulo_Subtitulo';

const FAQ = () => {
  const [faqData, setFaqData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null); // Estado para acompanhar a pergunta ativa

  useEffect(() => {
    fetch('faqData.json') // Nome correto do arquivo JSON
      .then((response) => response.json())
      .then((data) => setFaqData(data)) // Acessando diretamente o array
      .catch((error) => console.error('Erro ao carregar o JSON:', error));
  }, []);

  const handleQuestionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Alterna entre a pergunta ativa e nenhuma
  };

  return (
    <section className="faq-section">
      <TituloSubtitulo titulo="Perguntas frequentes" subtitulo="" />
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <div
              className="faq-question"
              onClick={() => handleQuestionClick(index)}
            >
              {item.question} {/* Atualizado para 'question' */}
            </div>
            <div
              className={`faq-answer ${activeIndex === index ? 'show' : ''}`}
            >
              {item.answer} {/* Atualizado para 'answer' */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;