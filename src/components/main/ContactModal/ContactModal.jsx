import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactModal.css';

const ContactModal = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.values(formData).some(value => value === '')) {
      alert('Todos os campos são obrigatórios!');
      return;
    }

    const templateParams = {
      from_name: formData.name,
      to_name: formData.email,
      email: formData.email,
      message: formData.message
    };

    emailjs.send('service_u3c9sqg', 'template_n2veh2t', templateParams, 'uMLVlXf3_32TNEWbI')
      .then((result) => {
        console.log(result.text);
        alert('Mensagem enviada com sucesso!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section className="contact-section">
      <div className="contact-content">
        <div className="product-info">
          <img src="PrecisionV1/produto.png" alt="Produto" className="product-image" />
          <p className="product-description">
         O Precision garante adubação exata e uniforme, sem desperdícios. Compatível com diversas plantadeiras e fácil de instalar, ele oferece mais segurança e rentabilidade para sua lavoura. Entre em contato para saber mais!
          </p>
        </div>
        <div className="contact-form-container">
          <div className="contact-header">
            <h5 className="contact-title">Fale Conosco</h5>
          </div>
          <div className="contact-body">
            <form onSubmit={handleSubmit}>
              <div className="contact-form-group">
                <label htmlFor="name" className="contact-form-label">Nome</label>
                <input
                  type="text"
                  className="contact-form-control contact-form-control-full"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="email" className="contact-form-label">Email</label>
                <input
                  type="email"
                  className="contact-form-control contact-form-control-half"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />

                <label htmlFor="phone" className="contact-form-label">Telefone</label>
                <input
                  type="tel"
                  className="contact-form-control contact-form-control-half"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="message" className="contact-form-label">Mensagem</label>
                <textarea
                  className="contact-form-control contact-form-control-full"
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-btn-primary">ENVIAR</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactModal;
