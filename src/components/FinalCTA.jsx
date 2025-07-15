import { motion } from "framer-motion";
import { Calendar, Download, MessageCircle, ArrowRight, Star, Shield } from "lucide-react";

const ctaOptions = [
  {
    icon: Calendar,
    title: "Schedule Free Consultation",
    description: "Get personalized advice from our property experts",
    buttonText: "Book Now",
    primary: true
  },
  {
    icon: Download,
    title: "Download Property Guide",
    description: "Essential insights for Nigerian real estate investment",
    buttonText: "Get Guide",
    primary: false
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Us",
    description: "Quick questions? Chat with our team instantly",
    buttonText: "Chat Now",
    primary: false
  }
];

const FinalCTA = () => {
  const phoneNumber = "+2349130136839";
  
  return (
    <section className="py-20 bg-gradient-to-br from-[#1E3240] via-[#205D75] to-[#1E3240] relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-10"
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: "100% 100%" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: "radial-gradient(circle, #AFD4E2 2px, transparent 2px)",
          backgroundSize: "50px 50px"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex justify-center items-center space-x-2 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Star className="w-6 h-6 text-[#AFD4E2]" />
            <span className="text-[#AFD4E2] font-semibold">Launch Special</span>
            <Star className="w-6 h-6 text-[#AFD4E2]" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Own Your 
            <span className="text-[#AFD4E2]"> Dream Property?</span>
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Join our exclusive founding members community and get priority access to premium properties, 
            personalized service, and special benefits as we launch Nigeria's most trusted real estate experience.
          </p>

          {/* Trust Reinforcement */}
          <motion.div
            className="flex justify-center items-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 text-white/80">
              <Shield className="w-5 h-5" />
              <span className="text-sm">100% Legal Compliance</span>
            </div>
            <div className="w-1 h-6 bg-white/30" />
            <div className="flex items-center space-x-2 text-white/80">
              <Star className="w-5 h-5" />
              <span className="text-sm">Professional Team</span>
            </div>
            <div className="w-1 h-6 bg-white/30" />
            <div className="flex items-center space-x-2 text-white/80">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">24/7 Support</span>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ctaOptions.map((option, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 group ${
                option.primary ? 'ring-4 ring-[#AFD4E2] transform scale-105' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {option.primary && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#AFD4E2] text-[#1E3240] px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <motion.div
                className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 ${
                  option.primary 
                    ? 'bg-[#205D75] text-white' 
                    : 'bg-[#AFD4E2] text-[#1E3240] group-hover:bg-[#205D75] group-hover:text-white'
                } transition-colors duration-300`}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <option.icon className="w-8 h-8" />
              </motion.div>

              <h3 className="text-xl font-bold text-[#1E3240] mb-4">
                {option.title}
              </h3>
              
              <p className="text-[#1E3240] mb-6 leading-relaxed">
                {option.description}
              </p>

              <motion.button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  option.primary
                    ? 'bg-[#205D75] text-white hover:bg-[#1E3240]'
                    : 'bg-[#AFD4E2] text-[#1E3240] hover:bg-[#205D75] hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  if (option.title.includes("WhatsApp")) {
                    const message = encodeURIComponent(
                      "Hello! I'm interested in learning more about Udhe Realty Limited's services. Can you help me get started?"
                    );
                    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                  }
                }}
              >
                <span>{option.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Get In Touch Today
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div>
              <h4 className="font-semibold mb-2">Office Location</h4>
              <p className="text-white/80 text-sm">
                Beside Goin Town Hall, Alamleyeseigha Express Road<br />
                Amassoma, Bayelsa State
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Contact</h4>
              <p className="text-white/80 text-sm">
                +234 913 013 6839<br />
                udherealtylimited@gmail.com
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Business Hours</h4>
              <p className="text-white/80 text-sm">
                Monday - Friday: 9AM - 6PM<br />
                Saturday: 10AM - 4PM
              </p>
            </div>
          </div>

          <motion.div
            className="mt-8 pt-6 border-t border-white/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-white/80 text-sm">
              Be among our first trusted clients and experience the future of Nigerian real estate.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;