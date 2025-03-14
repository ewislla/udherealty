const About = () => (
  <section id="about" className="py-20 bg-gray-100">
    <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 px-6">
      
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        {/* <img  
          src="/images/about.jpg" 
          alt="About Us" 
          className="rounded-lg shadow-lg w-full"
        />*/}
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-left">
        <h3 className="text-4xl font-bold text-[#1E3240] mb-4">About us -Who We Are</h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          Udhe Realty Limited is a globally recognized real estate company dedicated to excellence, innovation, and trust.
          We specialize in connecting buyers, sellers, and investors with premium properties—ranging from luxury residences
          to high-value commercial spaces. Our commitment is to transform the real estate industry through seamless 
          transactions and top-tier services.
        </p>
        <p className="text-gray-600 mt-4 text-lg">
          With a vision to redefine property ownership, we prioritize client satisfaction, integrity, and innovation.
          Experience real estate like never before.
        </p>
      </div>

    </div>
  </section>
);

export default About;
