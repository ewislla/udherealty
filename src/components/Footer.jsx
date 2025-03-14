const Footer = () => (
  <footer className="bg-[#1E3240] text-white py-8 md:py-6">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
      <div className="pl-4 md:pl-0">
        <h4 className="font-bold text-lg mb-4">UDHE REALTY LIMITED</h4>
        <p>   📍Beside Goin Town Hall, Alamleyeseigha express road, Amassoma, Bayelsa</p>
        <p>+43 456 63596-9</p>
        <p>udherealtylimited@gmail.com</p>
      </div>
      <div className="pl-4 md:pl-0">
        <h4 className="font-bold text-lg mb-4">Quick Links</h4>
        <ul>
          <li><a href="#home" className="hover:text-gray-200">Home</a></li>
          <li><a href="#projects" className="hover:text-gray-200">Projects</a></li>
          <li><a href="#vision" className="hover:text-gray-200">Vision</a></li>
          <li><a href="#about" className="hover:text-gray-200">About</a></li>
          <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
        </ul>
      </div>
      <div className="pl-4 md:pl-0">
        <h4 className="font-bold text-lg mb-4">Social Media</h4>
         <ul>
          <li><a href="https://www.facebook.com/share/1ESXuwaRSj/" className="hover:text-gray-200">Facebook</a></li>
          <li><a href="https://www.instagram.com/udhe_realty_limited?igsh=YWI4ZmN0NzIwaWJh" className="hover:text-gray-200">Instagram</a></li>
          <li><a href="#" className="hover:text-gray-200">TikTok</a></li>
        </ul>  
      </div>
    </div>
    <div className="text-center mt-8 text-sm text-gray-300">
      © {new Date().getFullYear()} Udhe Realty Limited Inc. All rights reserved.
    </div>
  </footer>
);

export default Footer;
