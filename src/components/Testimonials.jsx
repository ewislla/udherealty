import { motion } from "framer-motion";
import { Star, Quote, MapPin, User } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Chioma Okafor",
    location: "London, UK → Lagos Investment",
    role: "Diaspora Investor",
    rating: 5,
    image: "/api/placeholder/60/60",
    testimonial: "As a Nigerian living in London, I was skeptical about buying property back home. Udhe Realty made the entire process transparent and secure. I bought a 3-bedroom apartment in Lekki without even visiting Nigeria. The ROI has been incredible - 22% in the first year!",
    property: "3-Bed Apartment, Lekki Phase 1",
    investment: "₦45M",
    roi: "22% Annual Return"
  },
  {
    id: 2,
    name: "Dr. Emeka Nwankwo",
    location: "Abuja",
    role: "Medical Professional",
    rating: 5,
    image: "/api/placeholder/60/60",
    testimonial: "I needed a reliable property management company for my rental properties. Udhe Realty handles everything - from tenant screening to maintenance. I haven't had a single vacancy in 2 years, and the monthly reports give me complete peace of mind.",
    property: "4 Rental Units Portfolio",
    investment: "₦120M Portfolio",
    roi: "95% Occupancy Rate"
  },
  {
    id: 3,
    name: "Fatima Al-Hassan",
    location: "Toronto, Canada → Abuja",
    role: "Tech Executive",
    rating: 5,
    image: "/api/placeholder/60/60",
    testimonial: "The market analysis and investment guidance from Udhe Realty helped me make smart decisions. They identified emerging areas before they became popular. My property value has increased by 40% in just 18 months.",
    property: "Luxury Villa, Guzape District",
    investment: "₦85M",
    roi: "40% Value Appreciation"
  },
  {
    id: 4,
    name: "Olumide Adebayo",
    location: "Lagos",
    role: "Business Owner",
    rating: 5,
    image: "/api/placeholder/60/60",
    testimonial: "First-time property buyer and I was completely lost. The team at Udhe Realty educated me about the market, helped with financing options, and ensured all legal documents were perfect. Now I own my dream home in Victoria Island.",
    property: "4-Bed Duplex, Victoria Island",
    investment: "₦95M",
    roi: "Dream Home Achieved"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentTestimonial = testimonials[currentIndex];

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
            <Star className="w-4 h-4 mr-2" />
            Client Success Stories
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Results From
            <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text">
              Real Nigerian Families
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From diaspora investors to first-time buyers, see how we've helped 
            Nigerian families achieve their real estate dreams.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Testimonial Content */}
            <motion.div 
              key={currentTestimonial.id}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 relative"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Quote Icon */}
              <motion.div 
                className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
              >
                <Quote className="w-6 h-6 text-white" />
              </motion.div>

              {/* Rating */}
              <motion.div 
                className="flex items-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i, duration: 0.3 }}
                  >
                    <Star className="w-5 h-5 text-amber-400 fill-current" />
                  </motion.div>
                ))}
                <span className="ml-2 text-gray-600 font-medium">5.0</span>
              </motion.div>

              {/* Testimonial Text */}
              <motion.blockquote 
                className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 italic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                "{currentTestimonial.testimonial}"
              </motion.blockquote>

              {/* Client Info */}
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">{currentTestimonial.name}</div>
                  <div className="text-gray-600 text-sm flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {currentTestimonial.location}
                  </div>
                  <div className="text-emerald-600 text-sm font-medium">{currentTestimonial.role}</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Investment Details */}
            <motion.div 
              key={`details-${currentTestimonial.id}`}
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Property Card */}
              <motion.div 
                className="bg-gradient-to-br from-emerald-50 to-blue-50 border border-emerald-200 rounded-2xl p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="font-bold text-gray-900 mb-2">Property Investment</h4>
                <div className="text-emerald-700 font-semibold text-lg">{currentTestimonial.property}</div>
                <div className="text-gray-600 mt-1">Investment: {currentTestimonial.investment}</div>
              </motion.div>

              {/* ROI Card */}
              <motion.div 
                className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="font-bold text-gray-900 mb-2">Results Achieved</h4>
                <div className="text-amber-700 font-semibold text-lg">{currentTestimonial.roi}</div>
                <div className="text-gray-600 mt-1">Verified performance metrics</div>
              </motion.div>

              {/* Trust Badge */}
              <motion.div 
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl font-bold text-gray-900 mb-1">Verified Client</div>
                <div className="text-gray-600 text-sm">Real person, real results</div>
                <div className="mt-3 inline-flex items-center text-emerald-600 text-sm font-medium">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2" />
                  Identity Confirmed
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <motion.div 
            className="flex justify-center mt-12 space-x-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-emerald-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-gray-600 mb-6 text-lg">
            Ready to join our success stories? Let's discuss your real estate goals.
          </p>
          <motion.button 
            className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Success Story
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;