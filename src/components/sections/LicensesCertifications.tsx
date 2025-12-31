'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Shield, FileCheck, X, Download, Eye, FileText } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

interface Certificate {
  id: string;
  icon: typeof Shield;
  title: string;
  description: string;
  pdfPath: string;
  color: string;
  bgColor: string;
  highlight: boolean;
  category: string;
}

const LicensesCertifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certificates: Certificate[] = [
    {
      id: 'icv',
      icon: Shield,
      title: 'ICV Certificate',
      description: 'In-Country Value Certificate - Updated score 23-09-2025. Committed to local value creation and compliance with In-Country Value requirements.',
      pdfPath: '/images/ICV Certificate - Update score 23-09-2025.pdf',
      color: 'from-petrozin-gold to-petrozin-gold/80',
      bgColor: 'bg-petrozin-gold/5',
      highlight: false,
      category: 'Compliance',
    },
    {
      id: 'iso-9001',
      icon: Award,
      title: 'ISO 9001:2015',
      description: 'Quality Management Systems - Demonstrating our commitment to quality excellence and continuous improvement.',
      pdfPath: '/images/Petrozin - ISO 9001 2015.pdf',
      color: 'from-petrozin-sky to-petrozin-sky/80',
      bgColor: 'bg-petrozin-sky/5',
      highlight: false,
      category: 'Quality',
    },
    {
      id: 'iso-14001',
      icon: Award,
      title: 'ISO 14001:2015',
      description: 'Environmental Management Systems - Our dedication to environmental responsibility and sustainable practices.',
      pdfPath: '/images/Petrozin - ISO 14001 2015.pdf',
      color: 'from-petrozin-sky to-petrozin-sky/80',
      bgColor: 'bg-petrozin-sky/5',
      highlight: false,
      category: 'Environment',
    },
    {
      id: 'iso-45001',
      icon: Award,
      title: 'ISO 45001:2018',
      description: 'Occupational Health & Safety Management - Ensuring the highest standards of workplace safety and employee wellbeing.',
      pdfPath: '/images/Petrozin - ISO 45001 2018.pdf',
      color: 'from-petrozin-sky to-petrozin-sky/80',
      bgColor: 'bg-petrozin-sky/5',
      highlight: false,
      category: 'Safety',
    },
    {
      id: 'manpower-license',
      icon: FileCheck,
      title: 'Manpower Supply License',
      description: 'Licensed by Qatar Government for temporary manpower supply - A rare and strategic advantage enabling direct, compliant manpower deployments.',
      pdfPath: '',
      color: 'from-petrozin-gold to-petrozin-sky',
      bgColor: 'bg-gradient-to-br from-petrozin-gold/5 to-petrozin-sky/5',
      highlight: true,
      category: 'License',
    },
  ];

  const handleCertificateClick = (certificate: Certificate) => {
    if (certificate.pdfPath) {
      setSelectedCertificate(certificate);
      setIsModalOpen(true);
    }
  };

  const handleDownload = (pdfPath: string, title: string) => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-petrozin-light-grey/30 to-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-petrozin-navy mb-6">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Recognitions that validate our compliance, capability, and commitment to quality excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className={`${certificate.bgColor} rounded-2xl p-6 lg:p-8 border-2 ${
                  certificate.highlight 
                    ? 'border-petrozin-gold shadow-xl ring-2 ring-petrozin-gold/20' 
                    : 'border-transparent hover:border-petrozin-gold/30'
                } transition-all duration-300 relative cursor-pointer group h-full flex flex-col ${
                  certificate.pdfPath ? 'hover:shadow-2xl hover:-translate-y-2' : ''
                }`}
                onClick={() => certificate.pdfPath && handleCertificateClick(certificate)}
                whileHover={certificate.pdfPath ? { scale: 1.02 } : {}}
              >
                {certificate.highlight && (
                  <motion.div
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-petrozin-gold to-petrozin-gold/80 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    EXCLUSIVE LICENSE
                  </motion.div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${certificate.color} rounded-xl flex items-center justify-center shadow-lg ${
                    certificate.highlight ? 'animate-pulse' : 'group-hover:scale-110 transition-transform'
                  }`}>
                    <certificate.icon className="text-white" size={28} />
                  </div>
                  {certificate.pdfPath && (
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="text-petrozin-gold" size={20} />
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className={`text-xl font-poppins font-bold ${
                      certificate.highlight ? 'text-petrozin-gold' : 'text-petrozin-navy'
                    }`}>
                      {certificate.title}
                    </h3>
                  </div>
                  <span className="inline-block text-xs font-semibold text-petrozin-gold bg-petrozin-gold/10 px-3 py-1 rounded-full mb-3">
                    {certificate.category}
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">{certificate.description}</p>
                </div>

                {certificate.pdfPath && (
                  <motion.div
                    className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <FileText size={14} />
                      Click to view
                    </span>
                    <Download className="text-petrozin-gold group-hover:translate-y-1 transition-transform" size={16} />
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Modal */}
        <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
          <AnimatePresence>
            {isModalOpen && selectedCertificate && (
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />
                <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-6xl h-[90vh] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
                  <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-petrozin-navy to-petrozin-navy/90">
                    <div>
                      <Dialog.Title className="text-2xl font-poppins font-bold text-white">
                        {selectedCertificate.title}
                      </Dialog.Title>
                      <p className="text-sm text-gray-300 mt-1">{selectedCertificate.category} Certificate</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <motion.button
                        onClick={() => handleDownload(selectedCertificate.pdfPath, selectedCertificate.title)}
                        className="flex items-center gap-2 bg-petrozin-gold hover:bg-petrozin-gold/90 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Download size={18} />
                        Download
                      </motion.button>
                      <Dialog.Close asChild>
                        <motion.button
                          className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                          whileHover={{ scale: 1.1, rotate: 90 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <X size={24} />
                        </motion.button>
                      </Dialog.Close>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden bg-gray-100">
                    <iframe
                      src={`${selectedCertificate.pdfPath}#toolbar=1&navpanes=1&scrollbar=1`}
                      className="w-full h-full border-0"
                      title={selectedCertificate.title}
                    />
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            )}
          </AnimatePresence>
        </Dialog.Root>
      </div>
    </section>
  );
};

export default LicensesCertifications;
