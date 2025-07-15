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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1E3240] mb-4">
            Ready to Start Your
            <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text">
              Property Journey?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're buying your first home or expanding your investment portfolio, 
            our team is here to guide you every step of the way.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <form 
            onSubmit={handleSubmit} 
            className="w-full lg:w-2/3 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Send us a message</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input 
                name="firstName" 
                type="text" 
                placeholder="First name" 
                required 
                className="border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" 
              />
              <input 
                name="lastName" 
                type="text" 
                placeholder="Last name" 
                required 
                className="border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" 
              />
            </div>

            <div className="mb-6">
              <input 
                name="email" 
                type="email" 
                placeholder="Email address" 
                required 
                className="border border-gray-300 p-4 rounded-lg w-full focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" 
              />
            </div>

            <div className="mb-6">
              <textarea 
                name="message" 
                placeholder="Tell us about your property goals..." 
                required 
                rows="4"
                className="border border-gray-300 p-4 rounded-lg w-full focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="bg-[#205D75] text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-[#1E3240] w-full transition-all duration-300 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Get My Free Consultation'}
            </button>
            
            <p className="text-center text-sm text-[#1E3240] mt-4">
              No obligation • Professional advice • Completely free
            </p>
          </form>
        
          {/* Contact Information */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-8 rounded-2xl border border-emerald-200">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h4>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Visit Our Office</div>
                    <div className="text-gray-600 text-sm">Beside Goin Town Hall, Alamleyeseigha Express Road, Amassoma, Bayelsa</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Call Us</div>
                    <div className="text-gray-600 text-sm">+234 913 013 6839</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">✉️</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email Us</div>
                    <div className="text-gray-600 text-sm">udherealtylimited@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Quick Response Promise</h4>
              <p className="text-gray-600 text-sm mb-4">
                We respond to all inquiries within 2 hours during business hours.
              </p>
              <div className="text-emerald-600 font-semibold text-sm">
                ⚡ Average response time: 45 minutes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;