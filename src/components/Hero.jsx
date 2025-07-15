import { motion } from "framer-motion";
import { ArrowRight, Shield, Users, Award } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home"
      className="min-h-screen bg-gradient-to-br from-[#AFD4E2] via-[#F8FAFC] to-white flex flex-col justify-center items-center text-center px-6 md:px-12 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-[#1E3240] opacity-10 rounded-full"
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-16 h-16 bg-[#205D75] opacity-15 rounded-full"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-12 h-12 bg-[#AFD4E2] opacity-20 rounded-full"
        animate={{ scale: [1, 1.2, 1], rotate: [0, -180, -360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content */}
      <motion.div
        className="max-w-4xl mx-auto z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Trust Badges */}
        <motion.div
          className="flex justify-center items-center space-x-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            <Shield className="w-4 h-4 text-[#205D75]" />
            <span className="text-sm font-medium text-[#1E3240]">Legal Compliance</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            <Award className="w-4 h-4 text-[#205D75]" />
            <span className="text-sm font-medium text-[#1E3240]">Professional Team</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-[#1E3240] mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Own Your Dream{" "}
          <span className="text-[#205D75] relative">
            Nigerian Property
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 bg-[#AFD4E2]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-xl md:text-2xl text-[#1E3240] mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Nigeria's newest premium real estate company, built for transparency, trust, and your success. 
          Perfect for diaspora investors and local professionals.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.button
            className="bg-[#205D75] text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-[#1E3240] transition-all duration-300 flex items-center space-x-2 group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Schedule Free Consultation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.button
            className="border-2 border-[#205D75] text-[#205D75] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#205D75] hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Download Property Guide
          </motion.button>
        </motion.div>

        {/* Launch Announcement */}
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="flex items-center justify-center space-x-3 mb-3">
            <Users className="w-6 h-6 text-[#205D75]" />
            <h3 className="text-lg font-semibold text-[#1E3240]">Be Among Our First Trusted Clients</h3>
          </div>
          <p className="text-[#1E3240] text-center">
            Join our exclusive launch community and get priority access to premium properties, 
            personalized service, and special founding member benefits.
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#205D75] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#205D75] rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;