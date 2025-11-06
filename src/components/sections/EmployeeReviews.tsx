"use client";

import { motion } from 'framer-motion';
import { Star, Quote, User } from 'lucide-react';
import Link from 'next/link';

const EmployeeReviews = () => {
  const reviews = [
    {
      name: 'Okoronkwo Joshua',
      role: 'Technician',
      rating: 5,
      time: '3 weeks ago',
      text:
        'Thanks for the opportunity to work for the company. Your management & business acumen is really top‑notch. I would like to work with the company again and again.',
      source: 'Google Reviews',
    },
    {
      name: 'Shifan S',
      role: 'Employee',
      rating: 5,
      time: '1 year ago',
      text: 'Very good manpower company who supports the needy.',
      source: 'Google Reviews',
    },
    {
      name: 'zaid sheik',
      role: 'Employee',
      rating: 5,
      time: '2 years ago',
      text: 'Very good Service. They provide all types of Local Manpower.',
      source: 'Google Reviews',
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-semibold text-petrozin-navy mb-6">
            Employee <span className="text-petrozin-orange">Reviews</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
            Real feedback from employees who worked with Petrozin.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-petrozin-gold/30 transition-all duration-300 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-6 right-6 text-petrozin-gold/20">
                <Quote size={40} />
              </div>

              <div className="flex items-center gap-2 pt-1 pb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={18} className="text-petrozin-gold" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-petrozin-gold/10 rounded-full flex items-center justify-center">
                  <User size={18} className="text-petrozin-gold" />
                </div>
                <div className="min-w-0">
                  <div className="font-poppins font-semibold text-petrozin-navy truncate">
                    {review.name}
                  </div>
                  <div className="text-sm text-petrozin-navy/70 truncate">{review.role}</div>
                </div>
                {review.time && (
                  <div className="ml-auto text-right text-xs text-gray-500">{review.time} · {review.source}</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-gray-600 mb-4">See more employee feedback on Google</p>
          <Link
            href="https://www.google.com/search?q=Petrozin+Arabia+Contracting+%26+Facilities+Management+LLC+reviews"
            target="_blank"
            className="inline-flex items-center gap-2 bg-petrozin-gold text-white font-poppins font-semibold px-6 py-3 rounded-xl hover:bg-petrozin-gold/90"
          >
            View Google Reviews
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default EmployeeReviews;
