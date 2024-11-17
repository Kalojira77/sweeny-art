import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message envoyé par ${formData.name}`);
    // Ajouter ici l'envoi par email (cf. étape suivante)
  };

  return (
    <div>
      <h1>Contactez l'artiste</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Votre nom" 
          value={formData.name} 
          onChange={handleChange} 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Votre email" 
          value={formData.email} 
          onChange={handleChange} 
        />
        <textarea 
          name="message" 
          placeholder="Votre message" 
          value={formData.message} 
          onChange={handleChange} 
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;

