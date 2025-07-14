import { motion } from "framer-motion";
import { Home, Key, Shield, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Smart Property Investment",
    description: "Find high-ROI properties with our data-driven market analysis and exclusive off-market deals.",
    benefits: ["15-25% annual returns", "Legal due diligence", "Market trend insights"],
    cta: "Explore Investments",
    color: "emerald"
  },
  {
    icon: Key,
    title: "Hassle-Free Rentals",
    description: "From tenant screening to maintenance - we handle everything so you can focus on what matters.",
    benefits: ["Verified tenants only", "24/7 maintenance", "Guaranteed rent collection"],
    cta: "List Your Property",
    color: "blue"
  },
  {
    icon: Shield,
    title: "Complete Property Management",
    description: "Professional management services that maximize your property value and minimize your stress.",
    benefits: ["Monthly reports", "Property upgrades", "Legal compliance"],
    cta: "Get Management Quote",
    color: "purple"
  },
  {
    icon: TrendingUp,
    title: "Expert Real Estate Consulting",
    description: "Strategic guidance for portfolio growth, market entry, and investment optimization.",
    benefits: ["Personalized strategy", "Market forecasting", "Risk assessment"],
    cta: "Book Consultation",
    color: "amber"
  }
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Comprehensive Real Estate Solutions
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Nigerian Families
            <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text">
              Choose Us First
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From first-time buyers to seasoned investors, we provide transparent, 
            secure, and profitable real estate solutions tailored for the Nigerian market.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const colorClasses = {
              emerald: "from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700",
              blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
              purple: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
              amber: "from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
            };

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
                whileHover={{ y: -5 }}
              >
                {/* Icon */}
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${colorClasses[service.color]} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button 
                  className="group/btn w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center hover:bg-gray-800 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {service.cta}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p className="text-gray-600 mb-6">
            Not sure which service fits your needs? Let's discuss your goals.
          </p>
          <motion.button 
            className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;