const Footer = () => (
  <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        
        {/* Company Info */}
        <div className="lg:col-span-2">
          <h4 className="font-bold text-2xl mb-6 text-transparent bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text">
            UDHE REALTY LIMITED
          </h4>
          <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
            Nigeria's most trusted real estate company, serving families and investors 
            with transparency, security, and exceptional results since 2009.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center text-gray-300">
              <span className="mr-3">📍</span>
              <span className="text-sm">Beside Goin Town Hall, Alamleyeseigha Express Road, Amassoma, Bayelsa</span>
            </div>
            <div className="flex items-center text-gray-300">
              <span className="mr-3">📞</span>
              <span className="text-sm">+234 913 013 6839</span>
            </div>
            <div className="flex items-center text-gray-300">
              <span className="mr-3">✉️</span>
              <span className="text-sm">udherealtylimited@gmail.com</span>
            </div>
          </div>
        </div>
        
        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-emerald-400">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="#home" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">Home</a></li>
            <li><a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">Services</a></li>
            <li><a href="#testimonials" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">Success Stories</a></li>
            <li><a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">About Us</a></li>
            <li><a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">Contact</a></li>
          </ul>
        </div>
        
        {/* Services */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-emerald-400">Our Services</h4>
          <ul className="space-y-3">
            <li><span className="text-gray-300 text-sm">Property Sales</span></li>
            <li><span className="text-gray-300 text-sm">Rentals & Leasing</span></li>
            <li><span className="text-gray-300 text-sm">Property Management</span></li>
            <li><span className="text-gray-300 text-sm">Investment Consulting</span></li>
            <li><span className="text-gray-300 text-sm">Diaspora Services</span></li>
          </ul>
        </div>
      </div>
      
      {/* Social Media & Newsletter */}
      <div className="border-t border-gray-700 pt-8 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h4 className="font-bold text-lg mb-4 text-emerald-400">Follow Our Journey</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1ESXuwaRSj/" className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-colors">
                <span className="text-white text-sm">Facebook</span>
              </a>
              <a href="https://www.instagram.com/udhe_realty_limited?igsh=YWI4ZmN0NzIwaWJh" className="bg-pink-600 p-3 rounded-lg hover:bg-pink-700 transition-colors">
                <span className="text-white text-sm">Instagram</span>
              </a>
              <a href="#" className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors">
                <span className="text-white text-sm">TikTok</span>
              </a>
            </div>
          </div>
          
          <div className="mt-6 md:mt-0">
            <h4 className="font-bold text-lg mb-4 text-emerald-400">Stay Updated</h4>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 border border-gray-600 rounded-l-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500"
              />
              <button className="bg-emerald-500 hover:bg-emerald-600 px-6 py-2 rounded-r-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trust Badges */}
      <div className="border-t border-gray-700 pt-8 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-emerald-400">2,500+</div>
            <div className="text-gray-400 text-sm">Happy Families</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400">₦50B+</div>
            <div className="text-gray-400 text-sm">Properties Sold</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400">15+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-amber-400">98%</div>
            <div className="text-gray-400 text-sm">Client Satisfaction</div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-400 mb-4 md:mb-0">
          © {new Date().getFullYear()} Udhe Realty Limited. All rights reserved.
        </div>
        <div className="flex space-x-6 text-sm text-gray-400">
          <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Legal Compliance</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
