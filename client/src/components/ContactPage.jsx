import '../styles/contact.css';
import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for reaching out, ${formData.name}! We'll get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section">
      <p>Contact Us</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
        />

        <label>Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your.email@example.com"
        />

        <label>Message</label>
        <textarea 
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Write your message here"
          rows="5"
        />

        <button type="submit" className="contact-button">Send</button>
      </form>
    </section>
  );
};

export default ContactPage;
