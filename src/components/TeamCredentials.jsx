import { motion } from "framer-motion";
import { GraduationCap, Award, Building, Users, MapPin, Globe } from "lucide-react";

const teamHighlights = [
  {
    icon: GraduationCap,
    title: "Professional Qualifications",
    description: "Our team brings together certified real estate professionals, legal experts, and industry specialists."
  },
  {
    icon: Building,
    title: "Industry Expertise",
    description: "Deep understanding of Nigerian property markets, regulations, and investment opportunities."
  },
  {
    icon: Globe,
    title: "Diaspora Focus",
    description: "Specialized experience serving Nigerian diaspora communities worldwide with remote-friendly processes."
  },
  {
    icon: Award,
    title: "Commitment to Excellence",
    description: "Dedicated to setting new standards for professionalism and client service in Nigerian real estate."
  }
];

const partnerships = [
  {
    category: "Legal Partners",
    description: "Certified legal firms ensuring compliance"
  },
  {
    category: "Financial Partners", 
    description: "Trusted banking and mortgage providers"
  },
  {
    category: "Technology Partners",
    description: "Modern platforms for seamless experience"
  },
  {
    category: "Professional Associations",
    description: "Active members of industry bodies"
  }
];

const TeamCredentials = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-br from-[#F8FAFC] to-white">
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
            Meet Your 
            <span className="text-[#205D75]"> Professional Team</span>
          </h2>
          <p className="text-xl text-[#1E3240] max-w-3xl mx-auto leading-relaxed">
            Our founding team combines years of individual expertise in real estate, law, and technology 
            to create Nigeria's most professional property experience.
          </p>
        </motion.div>

        {/* Team Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg text-center group hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="w-16 h-16 bg-[#AFD4E2] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#205D75] transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <highlight.icon className="w-8 h-8 text-[#1E3240] group-hover:text-white transition-colors duration-300" />
              </motion.div>
              
              <h3 className="text-lg font-bold text-[#1E3240] mb-3">
                {highlight.title}
              </h3>
              
              <p className="text-[#1E3240] text-sm leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Founder Vision Section */}
        <motion.div
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#1E3240] mb-6">
                Our Founder's Vision
              </h3>
              
              <p className="text-lg text-[#1E3240] mb-6 leading-relaxed">
                "Having witnessed the challenges in Nigeria's real estate market firsthand, 
                we founded Udhe Realty Limited to bring transparency, professionalism, and 
                trust to every property transaction."
              </p>
              
              <p className="text-[#1E3240] mb-6 leading-relaxed">
                Our team combines extensive experience in real estate, legal compliance, 
                and technology to serve both local professionals and diaspora investors 
                with the highest standards of service.
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#AFD4E2] rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#1E3240]" />
                </div>
                <div>
                  <p className="font-semibold text-[#1E3240]">Professional Team</p>
                  <p className="text-sm text-[#1E3240]">Certified & Experienced</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#F8FAFC] rounded-xl p-6">
                <h4 className="font-bold text-[#1E3240] mb-3 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-[#205D75]" />
                  Local Market Expertise
                </h4>
                <p className="text-[#1E3240] text-sm">
                  Deep understanding of Nigerian property markets, regulations, and investment opportunities.
                </p>
              </div>

              <div className="bg-[#F8FAFC] rounded-xl p-6">
                <h4 className="font-bold text-[#1E3240] mb-3 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-[#205D75]" />
                  Diaspora Specialists
                </h4>
                <p className="text-[#1E3240] text-sm">
                  Specialized processes and support for Nigerian diaspora investors worldwide.
                </p>
              </div>

              <div className="bg-[#F8FAFC] rounded-xl p-6">
                <h4 className="font-bold text-[#1E3240] mb-3 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-[#205D75]" />
                  Professional Standards
                </h4>
                <p className="text-[#1E3240] text-sm">
                  Committed to the highest levels of legal compliance and ethical business practices.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Professional Partnerships */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#1E3240] mb-8">
            Professional Network & Partnerships
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                whileHover={{ y: -3 }}
              >
                <h4 className="font-semibold text-[#205D75] mb-2">
                  {partnership.category}
                </h4>
                <p className="text-[#1E3240] text-sm">
                  {partnership.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamCredentials;