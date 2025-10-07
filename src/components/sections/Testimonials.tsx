'use client';

import { motion } from 'framer-motion';
import { Star, Quote, User } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmed Al-Mansoori',
      company: 'TEKFEN Construction',
      role: 'Project Manager',
      rating: 5,
      text: 'Petrozin consistently delivers qualified staff who meet our project requirements. Their response time is excellent, and the quality of candidates is always top-notch.',
    },
    {
      name: 'Sarah Johnson',
      company: 'SULZER Engineering',
      role: 'HR Director',
      rating: 5,
      text: 'Working with Petrozin has been a game-changer for our staffing needs. Their temporary manpower supply license gives them a unique advantage in Qatar.',
    },
    {
      name: 'Mohamed Rahman',
      company: 'GETP Qatar',
      role: 'Operations Head',
      rating: 5,
      text: 'Highly professional team! They understand our requirements and provide qualified technicians and engineers within the promised timeframe. Excellent service.',
    },
    {
      name: 'David Thompson',
      company: 'ETHOS ENERGY',
      role: 'Site Supervisor',
      rating: 5,
      text: 'The quality of blue-collar workers provided by Petrozin is outstanding. All staff are well-trained, compliant, and ready to work from day one.',
    },
  ];

  return (
    <section className="section-padding bg-petrozin-gray">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-petrozin-navy mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from companies who trust Petrozin for their workforce solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-petrozin-gold/30 transition-all duration-300 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Quote className="absolute top-6 right-6 text-petrozin-gold/20" size={48} />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-petrozin-gold text-petrozin-gold"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-petrozin-gold/10 rounded-full flex items-center justify-center">
                  <User size={24} className="text-petrozin-gold" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-petrozin-navy">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-petrozin-navy to-petrozin-navy/90 rounded-3xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-petrozin-gold mb-2">500+</div>
              <div className="text-gray-300">Qualified Staff Deployed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-petrozin-gold mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-petrozin-gold mb-2">10 Min</div>
              <div className="text-gray-300">Average Response Time</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

