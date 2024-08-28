import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactModal.css';

const ContactModal = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    company: '',
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
          city: '',
          state: '',
          company: '',
          message: ''
        });
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section className="contact-section">
      <div className="contact-header">
        <h5 className="contact-title">Fale Conosco</h5>
      </div>
      <div className="contact-body">
        <form onSubmit={handleSubmit}>
          <div className="contact-form-group">
            <label htmlFor="name" className="contact-form-label">Nome</label>
            <input type="text" className="contact-form-control contact-form-control-full" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>

          <div className="contact-form-group">
            <label htmlFor="email" className="contact-form-label">Email</label>
            <input type="email" className="contact-form-control contact-form-control-half" id="email" name="email" value={formData.email} onChange={handleInputChange} required />

            <label htmlFor="phone" className="contact-form-label">Telefone</label>
            <input type="tel" className="contact-form-control contact-form-control-half" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
          </div>

          <div className="contact-form-group">
            <label htmlFor="city" className="contact-form-label">Cidade</label>
            <input type="text" className="contact-form-control contact-form-control-half" id="city" name="city" value={formData.city} onChange={handleInputChange} required />

            <label htmlFor="state" className="contact-form-label">Estado</label>
            <input type="text" className="contact-form-control contact-form-control-half" id="state" name="state" value={formData.state} onChange={handleInputChange} required />
          </div>

          <div className="contact-form-group">
            <label htmlFor="company" className="contact-form-label">Empresa</label>
            <input type="text" className="contact-form-control contact-form-control-full" id="company" name="company" value={formData.company} onChange={handleInputChange} required />
          </div>

          <div className="contact-form-group">
            <label htmlFor="message" className="contact-form-label">Mensagem</label>
            <textarea className="contact-form-control contact-form-control-full" id="message" name="message" rows={4} value={formData.message} onChange={handleInputChange} required></textarea>
          </div>

          <button type="submit" className="contact-btn-primary">ENVIAR</button>
        </form>
      </div>
    </section>
  );
};

export default ContactModal;
