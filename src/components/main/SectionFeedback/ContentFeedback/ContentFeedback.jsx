import React from 'react';
import Carousel from '../Carousel/Carousel';

const ContentFeedback = () => {
  const reviews = [
    {
      originalPhoto: "https://www.pexels.com/pt-br/foto/homem-vestindo-camisa-esporte-xadrez-azul-e-branca-e-chapeu-preto-1482101/",
      fotoUrl: process.env.NODE_ENV === 'development' ? '/PrecisionV1/Novo_Projeto.jpeg' : '/Novo_Projeto.jpeg',
      nome: "José das Couves",
      avaliacao: 5,
      comentario: "Produto incrível! Superou todas as minhas expectativas"
    },
    {
      originalPhoto: "https://www.pexels.com/pt-br/foto/aldeia-vila-campo-interior-4918149/",
      fotoUrl: process.env.NODE_ENV === 'development' ? '/PrecisionV1/Novo_Projeto1.jpg' : '/Novo_Projeto1.jpg',
      nome: "Marcio das Flores",
      avaliacao: 5,
      comentario: "Produto muito bom! Fácil manuseio"
    },
    {
      originalPhoto: "https://unsplash.com/pt-br/fotografias/homem-em-pe-no-jardim-durante-o-dia-QFmNQXLPbZc",
      fotoUrl: process.env.NODE_ENV === 'development' ? '/PrecisionV1/Novo_Projeto2.jpg' : '/Novo_Projeto2.jpg',
      nome: "Zeca Pimenteira",
      avaliacao: 5,
      comentario: "Produto ótimo, meu vizinho tem um! Então, comprei um igual."
    },
    {
      originalPhoto: "https://www.pexels.com/pt-br/foto/foto-em-preto-e-branco-de-um-homem-3735580/",
      fotoUrl: process.env.NODE_ENV === 'development' ? '/PrecisionV1/Novo_Projeto3.jpg' : '/Novo_Projeto3.jpg',
      nome: "Mario das Laranjeiras",
      avaliacao: 5,
      comentario: "Produto muito bom! Fácil de instalar"
    },
    {
      originalPhoto: "https://pixabay.com/pt/photos/agricultor-homem-de-p%C3%A9-agricultura-330388/",
      fotoUrl: process.env.NODE_ENV === 'development' ? '/PrecisionV1/Novo_Projeto4.jpg' : '/Novo_Projeto4.jpg',
      nome: "Marcio dos Tomates",
      avaliacao: 5,
      comentario: "Produto simples e de ótimo custo benefício."
    },
    {
      originalPhoto: "https://pixabay.com/pt/photos/homem-agricultor-campos-de-arroz-452904/",
      fotoUrl: process.env.NODE_ENV === 'development' ? '/PrecisionV1/Novo_Projeto5.jpg' : '/Novo_Projeto5.jpg',
      nome: "Fábio Marmota",
      avaliacao: 5,
      comentario: "Testado e aprovado, produto é bom demais."
    },
    {
      originalPhoto: "https://pixabay.com/pt/illustrations/ai-gerado-homem-agricultor-colheita-8677657/",
      fotoUrl: process.env.NODE_ENV === 'development' ? '/PrecisionV1/Novo_Projeto6.jpg' : '/Novo_Projeto6.jpg',
      nome: "José Eustáquio",
      avaliacao: 5,
      comentario: "Testado e aprovado, produto é bom demais."
    }
  ];

  return (
    <div className="content-feedback">
      <Carousel reviews={reviews} />
    </div>
  );
};

export default ContentFeedback;
