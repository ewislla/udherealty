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
         At Udhe Construction, we build the future fast, strong, and innovative. Specializing in high-rise construction, we push the limits of speed, strength, and efficiency, delivering structures that stand the test of time.

As a division of Udhe Realty Limited, our mission is to redefine skylines, maximize value, and set new industry standards. From luxury towers to high-value commercial spaces, we execute with precision, sustainability, and excellence.

At Udhe Construction, we don’t just build we innovate, elevate, and transform real estate.
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
