import { motion } from "framer-motion";
import { Home, Key, Shield, TrendingUp, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Smart Property Sales",
    description: "Make informed investment decisions with our transparent process and expert market insights.",
    benefits: ["Market analysis", "Legal verification", "Investment guidance"],
    cta: "Explore Properties"
  },
  {
    icon: Key,
    title: "Hassle-Free Rentals",
    description: "Experience seamless rental processes designed for busy professionals and diaspora clients.",
    benefits: ["Virtual viewings", "Digital contracts", "24/7 support"],
    cta: "Find Rentals"
  },
  {
    icon: Shield,
    title: "Peace of Mind Management",
    description: "Professional property management that protects your investment while you focus on what matters.",
    benefits: ["Regular inspections", "Tenant screening", "Maintenance coordination"],
    cta: "Learn More"
  },
  {
    icon: TrendingUp,
    title: "Expert Investment Consulting",
    description: "Strategic guidance from industry professionals to maximize your real estate portfolio returns.",
    benefits: ["Market forecasting", "Portfolio optimization", "Risk assessment"],
    cta: "Get Consultation"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3240] mb-6">
            Your Real Estate Journey, 
            <span className="text-[#205D75]"> Simplified</span>
          </h2>
          <p className="text-xl text-[#1E3240] max-w-3xl mx-auto leading-relaxed">
            We're building Nigeria's most trusted real estate experience. 
            Every service designed with transparency, professionalism, and your success in mind.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#AFD4E2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon */}
              <motion.div
                className="w-16 h-16 bg-[#AFD4E2] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#205D75] transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <service.icon className="w-8 h-8 text-[#1E3240] group-hover:text-white transition-colors duration-300" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#1E3240] mb-4 group-hover:text-[#205D75] transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-[#1E3240] mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-2 mb-6">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-sm text-[#1E3240]">
                    <div className="w-2 h-2 bg-[#205D75] rounded-full mr-3" />
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                className="flex items-center space-x-2 text-[#205D75] font-semibold group-hover:text-[#1E3240] transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <span>{service.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-[#1E3240] mb-6">
            Ready to experience real estate done right?
          </p>
          <motion.button
            className="bg-[#205D75] text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-[#1E3240] transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Journey Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;