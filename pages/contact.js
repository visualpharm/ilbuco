import { useState } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout 
      title="Contact Us - Il Buco – Cariló"
      description="Get in touch with us for bookings and inquiries about your stay in Cariló."
    >
      <header>
        <h1>Contact Us</h1>
        <p>Have questions about your stay? Send us a message and we'll get back to you as soon as possible.</p>
      </header>

      <section className="col-6">
        <h2>Send us a Message</h2>
        
        {submitStatus === 'success' && (
          <div className="success-message">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="error-message">
            There was an error sending your message. Please try again later.
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>
          
          <button type="submit" disabled={isSubmitting} className="button">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>

      <section className="col-6">
        <h2>Contact Information</h2>
        <address>
          <p><strong>Address:</strong><br />
          Il Buco<br />
          Calle Los Pinos 1234<br />
          Cariló, Buenos Aires<br />
          Argentina</p>
          
          <p><strong>Phone:</strong> +54 9 1234 5678</p>
          <p><strong>Email:</strong> info@ilbucocarilo.com</p>
        </address>
        
        <h3>Business Hours</h3>
        <p>Front Desk: 8:00 AM - 10:00 PM</p>
        <p>Check-in: 3:00 PM</p>
        <p>Check-out: 11:00 AM</p>
      </section>
    </Layout>
  );
}
