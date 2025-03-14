const Hero = () => (
  <section 
    id="home"
    className="h-screen bg-cover bg-center flex flex-col justify-center items-start text-left px-6 md:px-12 "
    style={{ backgroundImage: "url('/assets/Hero.png')" }}
  >
    <div className="bg-white bg-opacity-10 p-6 md:p-8 rounded-lg shadow-lg max-w-lg w-full">
  <h2 className="text-4xl md:text-4xl font-bold text-[#1E3240] mb-4 leading-tight">
    Find Your Dream Home & Invest in the Future
  </h2>
  <p className="text-lg md:text-xl text-[#1E3240] mb-4">
    We specialize in property sales, rentals, management, & investments.
  </p>
  <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
    <button className="bg-[#1E3240] text-white py-2 px-6 rounded hover:bg-[#162634]">
      Our Projects
    </button>
    <button className="border border-[#1E3240] text-[#1E3240] py-2 px-6 rounded hover:bg-[#162634] hover:text-white">
      Contact Us
    </button>
  </div>
</div>

  </section>
);

export default Hero;
