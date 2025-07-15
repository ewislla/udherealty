import { motion } from "framer-motion";
import { Shield, Users, Award, CheckCircle, Eye, Heart } from "lucide-react";

const trustPillars = [
  {
    icon: Shield,
    title: "Legal Protection First",
    description: "Every transaction backed by proper documentation and legal compliance."
  },
  {
    icon: Eye,
    title: "Complete Transparency",
    description: "No hidden fees, clear processes, and honest communication at every step."
  },
  {
    icon: Heart,
    title: "Client-Centered Approach",
    description: "Your success is our success. We're building relationships, not just transactions."
  }
];

const commitments = [
  "Professional team with verified credentials",
  "Transparent pricing with no hidden costs",
  "Legal compliance in every transaction",
  "Dedicated support for diaspora clients",
  "Modern technology for seamless experience",
  "Commitment to ethical business practices"
];

const TrustSection = () => {
  return (
    <section id="trust" className="py-20 bg-white">
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
            Our Commitment to 
            <span className="text-[#205D75]"> Excellence</span>
          </h2>
          <p className="text-xl text-[#1E3240] max-w-3xl mx-auto leading-relaxed">
            As Nigeria's newest premium real estate company, we're setting new standards 
            for professionalism, transparency, and client success.
          </p>
        </motion.div>

        {/* Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {trustPillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-[#AFD4E2] to-[#205D75] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 10 }}
              >
                <pillar.icon className="w-10 h-10 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-[#1E3240] mb-4">
                {pillar.title}
              </h3>
              
              <p className="text-[#1E3240] leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Commitments Grid */}
        <motion.div
          className="bg-[#F8FAFC] rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Content */}
            <div>
              <h3 className="text-3xl font-bold text-[#1E3240] mb-6">
                Why Choose Udhe Realty Limited?
              </h3>
              
              <p className="text-lg text-[#1E3240] mb-8 leading-relaxed">
                We're not just another real estate company. We're building the future of 
                property transactions in Nigeria with integrity, innovation, and your success at heart.
              </p>

              <div className="space-y-4">
                {commitments.map((commitment, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-6 h-6 text-[#205D75] flex-shrink-0" />
                    <span className="text-[#1E3240]">{commitment}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                className="bg-white rounded-xl p-6 text-center shadow-lg"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-[#AFD4E2] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-[#1E3240]" />
                </div>
                <h4 className="text-2xl font-bold text-[#205D75] mb-2">100%</h4>
                <p className="text-[#1E3240] text-sm">Legal Compliance</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-6 text-center shadow-lg"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-[#AFD4E2] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-[#1E3240]" />
                </div>
                <h4 className="text-2xl font-bold text-[#205D75] mb-2">24/7</h4>
                <p className="text-[#1E3240] text-sm">Client Support</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-6 text-center shadow-lg"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-[#AFD4E2] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-[#1E3240]" />
                </div>
                <h4 className="text-2xl font-bold text-[#205D75] mb-2">Zero</h4>
                <p className="text-[#1E3240] text-sm">Hidden Fees</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-6 text-center shadow-lg"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-[#AFD4E2] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-6 h-6 text-[#1E3240]" />
                </div>
                <h4 className="text-2xl font-bold text-[#205D75] mb-2">Full</h4>
                <p className="text-[#1E3240] text-sm">Transparency</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;