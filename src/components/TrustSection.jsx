import { motion } from "framer-motion";
import { Shield, Award, Users, FileCheck, Star, TrendingUp } from "lucide-react";

const trustMetrics = [
  {
    icon: Users,
    number: "2,500+",
    label: "Happy Families",
    description: "Successful property transactions"
  },
  {
    icon: TrendingUp,
    number: "₦50B+",
    label: "Property Value",
    description: "Total transactions completed"
  },
  {
    icon: Star,
    number: "4.9/5",
    label: "Client Rating",
    description: "Based on 500+ reviews"
  },
  {
    icon: Award,
    number: "15+",
    label: "Years Experience",
    description: "In Nigerian real estate"
  }
];

const trustPillars = [
  {
    icon: Shield,
    title: "Legal Protection First",
    description: "Every transaction backed by comprehensive legal verification and title insurance.",
    highlight: "100% verified titles"
  },
  {
    icon: FileCheck,
    title: "Transparent Process",
    description: "No hidden fees, no surprise costs. What you see is exactly what you pay.",
    highlight: "Zero hidden charges"
  },
  {
    icon: Users,
    title: "Diaspora Friendly",
    description: "Special support for overseas Nigerians with remote viewing and secure payments.",
    highlight: "Global client support"
  }
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Shield className="w-4 h-4 mr-2" />
            Trusted by Thousands
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Nigerian Families
            <span className="block text-transparent bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text">
              Trust Us With Their Future
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            In a market where trust is everything, we've built our reputation on transparency, 
            legal compliance, and putting our clients' interests first.
          </p>
        </motion.div>

        {/* Trust Metrics */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {trustMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-emerald-500/50 transition-colors duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <Icon className="w-8 h-8 text-emerald-400" />
                </motion.div>
                <motion.div 
                  className="text-3xl lg:text-4xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index, duration: 0.6, type: "spring" }}
                >
                  {metric.number}
                </motion.div>
                <div className="text-emerald-400 font-semibold mb-1">{metric.label}</div>
                <div className="text-gray-400 text-sm">{metric.description}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust Pillars */}
        <motion.div 
          className="grid lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {trustPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 10 }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {pillar.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {pillar.description}
                </p>

                <motion.div 
                  className="inline-flex items-center bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2" />
                  {pillar.highlight}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Trust Statement */}
        <motion.div 
          className="text-center mt-16 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.div 
            className="text-2xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            "The only real estate company we trust with our family's future"
          </motion.div>
          <div className="text-emerald-400 font-medium">
            - Adebayo Family, Lagos (Diaspora Investors from UK)
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;