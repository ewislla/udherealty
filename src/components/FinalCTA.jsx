import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MessageCircle, Calendar, Download, MapPin } from "lucide-react";

const ctaOptions = [
  {
    icon: Calendar,
    title: "Free Consultation",
    description: "30-minute strategy session",
    action: "Book Now",
    urgency: "Limited slots available",
    color: "emerald"
  },
  {
    icon: Download,
    title: "Property Investment Guide",
    description: "2024 Nigerian market insights",
    action: "Download Free",
    urgency: "Updated monthly",
    color: "blue"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    description: "Instant property assistance",
    action: "Chat Now",
    urgency: "Available 24/7",
    color: "green"
  }
];

const contactMethods = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+234 913 013 6839",
    action: "tel:+2349130136839"
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "udherealtylimited@gmail.com",
    action: "mailto:udherealtylimited@gmail.com"
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Amassoma, Bayelsa State",
    action: "#"
  }
];

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Main CTA Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Urgency Badge */}
          <motion.div 
            className="inline-flex items-center bg-amber-500/20 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse" />
            Property prices rising 15% annually - Act now
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Ready to Own Your
            <span className="block text-transparent bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text">
              Dream Nigerian Property?
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Join 2,500+ satisfied families who chose Udhe Realty for their real estate journey. 
            Whether you're in Nigeria or abroad, we make property ownership simple, secure, and profitable.
          </motion.p>

          {/* Primary CTA Button */}
          <motion.button 
            className="group bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your Free Property Consultation
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform inline" />
          </motion.button>

          <motion.p 
            className="text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            No obligation • 30-minute session • Expert guidance included
          </motion.p>
        </motion.div>

        {/* CTA Options Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {ctaOptions.map((option, index) => {
            const Icon = option.icon;
            const colorClasses = {
              emerald: "from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700",
              blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
              green: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
            };

            return (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${colorClasses[option.color]} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-3">{option.title}</h3>
                <p className="text-gray-300 mb-4">{option.description}</p>
                
                <motion.div 
                  className="inline-flex items-center bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm font-medium mb-6"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {option.urgency}
                </motion.div>

                <motion.button 
                  className={`w-full bg-gradient-to-r ${colorClasses[option.color]} text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {option.action}
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Prefer to reach out directly?
            </h3>
            <p className="text-gray-300">
              Our team is available to assist you through multiple channels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.action}
                  className="group flex flex-col items-center text-center p-6 rounded-2xl hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  whileHover={{ y: -3 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="text-emerald-400 font-semibold mb-2">{method.label}</div>
                  <div className="text-white text-sm">{method.value}</div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Final Trust Statement */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center text-gray-300 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="flex -space-x-2 mr-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full border-2 border-slate-800" />
              ))}
            </div>
            Join 2,500+ satisfied families who chose Udhe Realty
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;