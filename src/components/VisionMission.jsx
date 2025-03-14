const VisionMission = () => (
  <section id="vision" className="py-20 bg-gray-100">
    <div className="container mx-auto px-6 lg:px-12">
      <h3 className="text-4xl font-bold text-center text-[#1E3240] mb-10 uppercase tracking-wide">
        Our Vision & Mission
      </h3>

      <div className="flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-12">
        {/* Image Section */}
        <div className="md:w-1/3 w-full">
          <img 
            src="/assets/visionimg.png" 
            alt="Vision and Mission" 
            className="rounded-lg w-full shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 text-left">
          {/* Vision */}
          <div className="mb-8">
            <h4 className="text-2xl font-semibold text-[#1E3240] flex items-center">
              <span className="text-4xl text-[#AFD4E2] mr-2">“</span> VISION
            </h4>
            <p className="text-lg text-gray-700 mt-2 leading-relaxed">
              To become a leading real estate company that transforms communities, 
              empowers individuals through smart property investments, and contributes 
              to sustainable housing solutions for all.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h4 className="text-2xl font-semibold text-[#1E3240]">
              <span className="text-4xl text-[#AFD4E2]  mr-2">“</span>
              MISSION</h4>
            <p className="text-lg text-gray-700 mt-2 leading-relaxed">
              To provide high-quality, affordable, and innovative real estate solutions, 
              making homeownership and property investment accessible to everyone. We are 
              committed to excellence, integrity, and creating long-term value for our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VisionMission;
