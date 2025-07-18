const About = () => (
  <section id="about" className="py-20 bg-[#F8FAFC]">
    <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 px-6">
      
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <div className="bg-gradient-to-br from-[#AFD4E2] to-[#205D75] rounded-2xl p-8 text-white text-center">
          <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
          <p className="text-lg leading-relaxed">
            To revolutionize Nigerian real estate through transparency, professionalism, 
            and unwavering commitment to client success.
          </p>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-left">
        <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          Our Story
        </div>
        
        <h3 className="text-4xl font-bold text-gray-900 mb-6">
          Building Trust in Nigerian
          <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text">
            Real Estate Since 2024
          </span>
        </h3>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          At Udhe Realty Limited, we understand that buying property in Nigeria can feel overwhelming - especially for diaspora investors. That's why we've founded the most transparent, secure, and client-focused real estate company in the country.
        </p>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          From our headquarters in Bayelsa to serving clients across Lagos, Abuja, and internationally, we're committed to facilitating secure property transactions while maintaining the highest client satisfaction standards.
        </p>
        
        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="text-center p-4 bg-white rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-emerald-600">100%</div>
            <div className="text-gray-600 text-sm">Legal Compliance</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-blue-600">24/7</div>
            <div className="text-gray-600 text-sm">Client Support</div>
          </div>
        </div>
        
        <p className="text-[#1E3240] text-lg leading-relaxed mb-6 mt-6">
          Our team combines extensive expertise in real estate, legal compliance, and technology 
          to serve middle-class Nigerians and diaspora investors with the highest standards of service.
        </p>
        
        <p className="text-[#1E3240] text-lg leading-relaxed">
          We believe every Nigerian deserves access to legitimate, transparent, and professionally 
          managed real estate opportunities. That's why we're building the future of property 
          ownership in Nigeria.
        </p>
      </div>
    </div>
  </section>
);

export default About;