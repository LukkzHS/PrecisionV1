import React from 'react';
import Carousel from '../Carousel/Carousel';

import Novo_Projeto from '/src/assets/img/Novo_Projeto.jpeg';
import Novo_Projeto1 from '/src/assets/img/Novo_Projeto1.jpg';
import Novo_Projeto2 from '/src/assets/img/Novo_Projeto2.jpg';
import Novo_Projeto3 from '/src/assets/img/Novo_Projeto3.jpg';
import Novo_Projeto4 from '/src/assets/img/Novo_Projeto4.jpg';
import Novo_Projeto5 from '/src/assets/img/Novo_Projeto5.jpg';
import Novo_Projeto6 from '/src/assets/img/Novo_Projeto6.jpg';


const ContentFeedback = () => {
  const reviews = [
    {
      originalPhoto: "https://www.pexels.com/pt-br/foto/homem-vestindo-camisa-esporte-xadrez-azul-e-branca-e-chapeu-preto-1482101/",
      fotoUrl: Novo_Projeto,
      nome: "José das Couves",
      avaliacao: 5,
      comentario: "Produto incrível! Superou todas as minhas expectativas"
    },
    {
      originalPhoto: "https://www.pexels.com/pt-br/foto/aldeia-vila-campo-interior-4918149/",
      fotoUrl: Novo_Projeto1,
      nome: "Marcio das Flores",
      avaliacao: 5,
      comentario: "Produto muito bom! Fácil manuseio"
    },
    {
      originalPhoto: "https://unsplash.com/pt-br/fotografias/homem-em-pe-no-jardim-durante-o-dia-QFmNQXLPbZc",
      fotoUrl: Novo_Projeto2,
      nome: "Zeca Pimenteira",
      avaliacao: 5,
      comentario: "Produto ótimo, meu vizinho tem um! Então, comprei um igual."
    },
    {
      originalPhoto: "https://www.pexels.com/pt-br/foto/foto-em-preto-e-branco-de-um-homem-3735580/",
      fotoUrl: Novo_Projeto3,
      nome: "Mario das Laranjeiras",
      avaliacao: 5,
      comentario: "Produto muito bom! Fácil de instalar"
    },
    {
      originalPhoto: "https://pixabay.com/pt/photos/agricultor-homem-de-p%C3%A9-agricultura-330388/",
      fotoUrl: Novo_Projeto4,
      nome: "Marcio dos Tomates",
      avaliacao: 5,
      comentario: "Produto simples e de ótimo custo benefício."
    },
    {
      originalPhoto: "https://pixabay.com/pt/photos/homem-agricultor-campos-de-arroz-452904/",
      fotoUrl: Novo_Projeto5,
      nome: "Fábio Marmota",
      avaliacao: 5,
      comentario: "Testado e aprovado, produto é bom demais."
    },
    {
      originalPhoto: "https://pixabay.com/pt/illustrations/ai-gerado-homem-agricultor-colheita-8677657/",
      fotoUrl: Novo_Projeto6,
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
