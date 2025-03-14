import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Get form data
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());

    // Replace with your EmailJS credentials
    const serviceID = 'service_mq0jqwf';
    const templateID = 'template_v6fqy2k';
    const publicKey = 'Nw_hgz4LsAPa2FoBW';

    try {
      const response = await emailjs.send(
        serviceID,
        templateID,
        formValues,
        publicKey
      );

      if (response.status === 200) {
        alert('Message sent successfully!');
        e.target.reset();
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <form 
          onSubmit={handleSubmit} 
          className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-3xl font-bold mb-6 text-center">Contact Us</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input name="firstName" type="text" placeholder="First name" required className="border p-2 rounded" />
            <input name="lastName" type="text" placeholder="Last name" required className="border p-2 rounded" />
          </div>

          <div className="mb-4">
            <input name="email" type="email" placeholder="Email address" required className="border p-2 rounded w-full" />
          </div>

          <div className="mb-4">
            <textarea name="message" placeholder="Message" required className="border p-2 rounded w-full"></textarea>
          </div>

          <button 
            type="submit" 
            className="bg-[#1E3240] text-white py-2 px-6 rounded hover:bg-[#AFD4E2] w-full"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
