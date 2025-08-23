'use client';

import { motion } from 'framer-motion';
import { Users, Award, Globe, Target } from 'lucide-react';

const TeamSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const teamStats = [
    {
      icon: Users,
      number: '150+',
      label: 'Team Members',
      color: 'from-petrozin-gold to-petrozin-gold/80',
    },
    {
      icon: Award,
      number: '25+',
      label: 'Years Combined Experience',
      color: 'from-petrozin-sky to-petrozin-sky/80',
    },
    {
      icon: Globe,
      number: '15+',
      label: 'Languages Spoken',
      color: 'from-petrozin-gold to-petrozin-sky',
    },
    {
      icon: Target,
      number: '98%',
      label: 'Client Satisfaction',
      color: 'from-petrozin-sky to-petrozin-gold',
    },
  ];

  return (
    <section className="section-padding bg-petrozin-gray">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-petrozin-navy mb-6">
            Meet Our{' '}
            <span className="text-gradient">Team</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our diverse team of professionals brings together decades of industry experience, 
            technical expertise, and a shared commitment to delivering exceptional workforce solutions.
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              variants={itemVariants}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <stat.icon className="text-white" size={36} />
              </div>
              <div className="text-3xl font-poppins font-bold text-petrozin-navy mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Photo Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Team Member 1 */}
          <motion.div
            className="group relative overflow-hidden rounded-2xl shadow-lg"
            variants={itemVariants}
          >
            <div className="aspect-square bg-gradient-to-br from-petrozin-navy to-petrozin-sky relative">
              {/* Placeholder for actual team photo */}
              <div className="absolute inset-0 bg-[url('/team-1.jpg')] bg-cover bg-center bg-no-repeat opacity-80"></div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-petrozin-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-poppins font-semibold mb-2">Sarah Johnson</h3>
                  <p className="text-petrozin-gold font-medium">Chief Executive Officer</p>
                  <p className="text-sm text-gray-200 mt-2">
                    20+ years of experience in industrial workforce management and strategic leadership.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team Member 2 */}
          <motion.div
            className="group relative overflow-hidden rounded-2xl shadow-lg"
            variants={itemVariants}
          >
            <div className="aspect-square bg-gradient-to-br from-petrozin-gold to-petrozin-sky relative">
              <div className="absolute inset-0 bg-[url('/team-2.jpg')] bg-cover bg-center bg-no-repeat opacity-80"></div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-petrozin-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-poppins font-semibold mb-2">Michael Chen</h3>
                  <p className="text-petrozin-gold font-medium">Operations Director</p>
                  <p className="text-sm text-gray-200 mt-2">
                    Expert in project management and operational excellence across multiple industries.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team Member 3 */}
          <motion.div
            className="group relative overflow-hidden rounded-2xl shadow-lg"
            variants={itemVariants}
          >
            <div className="aspect-square bg-gradient-to-br from-petrozin-sky to-petrozin-gold relative">
              <div className="absolute inset-0 bg-[url('/team-3.jpg')] bg-cover bg-center bg-no-repeat opacity-80"></div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-petrozin-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-poppins font-semibold mb-2">Emily Rodriguez</h3>
                  <p className="text-petrozin-gold font-medium">Technical Director</p>
                  <p className="text-sm text-gray-200 mt-2">
                    Specialized in technical recruitment and industry-specific expertise development.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team Member 4 */}
          <motion.div
            className="group relative overflow-hidden rounded-2xl shadow-lg"
            variants={itemVariants}
          >
            <div className="aspect-square bg-gradient-to-br from-petrozin-gold to-petrozin-navy relative">
              <div className="absolute inset-0 bg-[url('/team-4.jpg')] bg-cover bg-center bg-no-repeat opacity-80"></div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-petrozin-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-poppins font-semibold mb-2">David Thompson</h3>
                  <p className="text-petrozin-gold font-medium">Client Relations Manager</p>
                  <p className="text-sm text-gray-200 mt-2">
                    Dedicated to building and maintaining strong client partnerships and satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team Member 5 */}
          <motion.div
            className="group relative overflow-hidden rounded-2xl shadow-lg"
            variants={itemVariants}
          >
            <div className="aspect-square bg-gradient-to-br from-petrozin-sky to-petrozin-navy relative">
              <div className="absolute inset-0 bg-[url('/team-5.jpg')] bg-cover bg-center bg-no-repeat opacity-80"></div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-petrozin-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-poppins font-semibold mb-2">Lisa Park</h3>
                  <p className="text-petrozin-gold font-medium">Quality Assurance Lead</p>
                  <p className="text-sm text-gray-200 mt-2">
                    Ensures all services meet the highest standards of quality and compliance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team Member 6 */}
          <motion.div
            className="group relative overflow-hidden rounded-2xl shadow-lg"
            variants={itemVariants}
          >
            <div className="aspect-square bg-gradient-to-br from-petrozin-navy to-petrozin-gold relative">
              <div className="absolute inset-0 bg-[url('/team-6.jpg')] bg-cover bg-center bg-no-repeat opacity-80"></div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-petrozin-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-poppins font-semibold mb-2">James Wilson</h3>
                  <p className="text-petrozin-gold font-medium">Global Operations Manager</p>
                  <p className="text-sm text-gray-200 mt-2">
                    Manages international operations and global talent acquisition strategies.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Team Culture Statement */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-poppins font-bold text-petrozin-navy mb-4">
              Our Team Culture
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We foster a culture of collaboration, innovation, and continuous learning. Our team members are passionate about 
              delivering exceptional results and building lasting relationships with our clients and partners.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection; 