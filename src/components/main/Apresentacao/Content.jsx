export default function Content() {
  const whatsappNumber = "+5534999615745";
  const message = encodeURIComponent("Gostaria de saber mais sobre o Dosador de Adubo Precision");

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;

  return (
    <div className="image-with-details">
      <iframe
        src="https://www.youtube.com/embed/dK_HY-AVxX4"
        title="Dosador de Adubo Precision"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="product-video"
      ></iframe>
      <div className="details">
        <p className="details-text">
          O nosso dosador proporciona uma adubação precisa, sem perdas, sem
          falhas, garantindo uma melhor e maior lucratividade da lavoura. É
          de fácil manejo, fácil limpeza e pode ser instalado em
          praticamente todas as plantadeiras e adubadeiras do mercado. Como
          somos fabricantes temos também todas as peças de reposição. Entre
          em contato e saiba mais sobre o nosso Dosador de Adubo Precision.
        </p>
        <a href={whatsappUrl} className="cta-button" target="_blank" rel="noopener noreferrer">
          <p className="button-text">COMPRE AGORA</p>
        </a>
      </div>
    </div>
  );
}
