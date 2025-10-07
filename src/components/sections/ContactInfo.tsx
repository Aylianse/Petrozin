'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Globe, Users } from 'lucide-react';

const ContactInfo = () => {
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

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+97444512393',
      secondary: 'WhatsApp: +97470820576',
      color: 'from-petrozin-gold to-petrozin-gold/80',
      bgColor: 'bg-petrozin-gold/5',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'admin@petrozin.com',
      secondary: 'For general inquiries',
      color: 'from-petrozin-sky to-petrozin-sky/80',
      bgColor: 'bg-petrozin-sky/5',
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'BIN SHEIKH BUILDING, 5th Floor, Office 502',
      secondary: 'Above Al Anees Store, Near Al Jadeeda Metro Station, Doha, Qatar',
      color: 'from-petrozin-gold to-petrozin-sky',
      bgColor: 'bg-gradient-to-br from-petrozin-gold/5 to-petrozin-sky/5',
    },
  ];

  const additionalInfo = [
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Monday - Thursday: 8:00 AM - 5:00 PM',
      secondary: 'Saturday: 8:00 AM - 12:00 PM | Friday: Closed',
    },
    {
      icon: Globe,
      title: 'Public Transportation',
      value: 'Near Al Jadeeda Metro Station & Bus Station',
      secondary: 'Core center of Doha - Easy to reach',
    },
    {
      icon: Users,
      title: 'Response Time',
      value: 'Within 10 minutes',
      secondary: 'Our team responds to urgent messages quickly',
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
            Contact{' '}
            <span className="text-gradient">Information</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Get in touch with us through multiple channels. Our team is ready to assist you 
            with all your workforce solution needs.
          </p>
        </motion.div>

        {/* Primary Contact Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className={`${info.bgColor} rounded-2xl p-8 h-full border-2 border-transparent hover:border-petrozin-gold/20 transition-all duration-300 card-hover`}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <info.icon className="text-white" size={32} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-poppins font-semibold text-petrozin-navy mb-4 group-hover:text-petrozin-gold transition-colors duration-300">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  <p className="text-lg font-medium text-gray-800">
                    {info.value}
                  </p>
                  <p className="text-gray-600">
                    {info.secondary}
                  </p>
                </div>

                {/* Hover Effect Line */}
                <div className={`mt-6 w-0 h-1 bg-gradient-to-r ${info.color} group-hover:w-full transition-all duration-500 rounded-full`}></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Information */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {additionalInfo.map((info, index) => (
            <motion.div
              key={info.title}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-petrozin-gray rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.icon className="text-petrozin-navy" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-poppins font-semibold text-petrozin-navy mb-2">
                    {info.title}
                  </h4>
                  <p className="text-gray-700 font-medium mb-1">
                    {info.value}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {info.secondary}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Emergency Contact Banner */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-petrozin-navy to-petrozin-sky rounded-3xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-poppins font-bold mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-lg text-gray-200 mb-6">
              For urgent workforce requirements or emergency support, contact our 24/7 hotline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-3">
                <Phone className="text-petrozin-gold" size={24} />
                <span className="text-xl font-semibold">+97470820576</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-petrozin-gold" size={24} />
                <span className="text-xl font-semibold">admin@petrozin.com</span>
              </div>
            </div>
            <div className="mt-6">
              <a href="/vendor-registration" className="inline-block bg-white text-petrozin-navy font-semibold px-5 py-3 rounded-xl hover:bg-white/90">
                Vendor Registration Form
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo; 