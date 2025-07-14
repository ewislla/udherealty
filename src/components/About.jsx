const About = () => (
  <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50">
    <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 px-6">
      
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <div className="aspect-video bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center shadow-2xl">
          <div className="text-gray-600 text-lg font-medium">Our Story Visual</div>
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
            Real Estate Since 2009
          </span>
        </h3>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          At Udhe Realty Limited, we understand that buying property in Nigeria can feel overwhelming - especially for diaspora investors. That's why we've spent over 15 years building the most transparent, secure, and client-focused real estate company in the country.
        </p>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          From our headquarters in Bayelsa to serving clients across Lagos, Abuja, and internationally, we've facilitated over ₦50 billion in property transactions while maintaining a 98% client satisfaction rate.

        </p>
        
        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="text-center p-4 bg-white rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-emerald-600">2,500+</div>
            <div className="text-gray-600 text-sm">Families Served</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-blue-600">₦50B+</div>
            <div className="text-gray-600 text-sm">Properties Sold</div>
          </div>
        </div>
        
        <p className="text-gray-600 mt-6 text-lg font-medium">
          Your property dreams deserve a partner you can trust. Experience real estate done right.
        </p>
      </div>

    </div>
  </section>
);

export default About;
