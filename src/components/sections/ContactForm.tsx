'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, FileText } from 'lucide-react';
import Link from 'next/link';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-petrozin-navy mb-6">
              Send Us a{' '}
              <span className="text-gradient">Message</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fill out the form below and our team will get back to you within 24 hours. 
              We&apos;re here to help with all your workforce solution needs.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-petrozin-gray rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6 text-center text-gray-700 space-y-3">
              <p>
                Prefer direct contact? Call Landline: <span className="font-semibold">+974 44512393</span> or WhatsApp: <span className="font-semibold">+97470820576</span>.
              </p>
              <p>
                Email us at <a href="mailto:info@petrozin.com" className="text-petrozin-gold font-medium hover:underline">info@petrozin.com</a>.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">Looking to become a vendor?</p>
                <Link
                  href="/vendor-registration"
                  className="inline-flex items-center gap-2 text-petrozin-gold hover:text-petrozin-gold/80 font-semibold transition-colors"
                >
                  <FileText size={18} />
                  Go to Vendor Registration Form
                </Link>
              </div>
            </div>
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <motion.div
                className="mb-8 p-6 bg-green-50 border border-green-200 rounded-2xl flex items-center space-x-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle className="w-6 h-6 text-green-600" />
                <div>
                  <h3 className="font-semibold text-green-800">Message Sent Successfully!</h3>
                  <p className="text-green-700">Thank you for contacting us. We&apos;ll get back to you within 24 hours.</p>
                </div>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                className="mb-8 p-6 bg-red-50 border border-red-200 rounded-2xl flex items-center space-x-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <AlertCircle className="w-6 h-6 text-red-600" />
                <div>
                  <h3 className="font-semibold text-red-800">Something went wrong</h3>
                  <p className="text-red-700">Please try again or contact us directly via phone or email.</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-petrozin-navy mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-petrozin-gold focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-petrozin-navy mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-petrozin-gold focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Company and Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-petrozin-navy mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-petrozin-gold focus:border-transparent transition-all duration-300"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-petrozin-navy mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-petrozin-gold focus:border-transparent transition-all duration-300"
                    placeholder="e.g., +97444512393 or +97470820576"
                  />
                </div>
              </div>

              {/* Service Type */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-petrozin-navy mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-petrozin-gold focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  <option value="manpower-supply">Manpower Supply</option>
                  <option value="recruitment">Recruitment Services</option>
                  <option value="project-support">Project Support</option>
                  <option value="technical-expertise">Technical Expertise</option>
                  <option value="facilities-management">Facilities Management</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="vendor-registration">Vendor Registration</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-petrozin-navy mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-petrozin-gold focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your workforce needs and how we can help..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`btn-primary text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed ${
                    isSubmitting ? 'cursor-wait' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </div>
                  )}
                </button>
              </div>
            </form>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 text-sm">
                By submitting this form, you agree to our{' '}
                <a href="/privacy" className="text-petrozin-gold hover:underline">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="/terms" className="text-petrozin-gold hover:underline">
                  Terms of Service
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 