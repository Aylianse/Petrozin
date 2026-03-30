'use client';

import { Send, MessageCircle, CheckCircle, AlertCircle, ShieldCheck } from 'lucide-react';
import { useState, useCallback, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// ── Validation helpers ──────────────────────────────────────────────
type FormErrors = Record<string, string>;

const PATTERNS = {
  /** Accepts letters (incl. unicode), spaces, dots, hyphens, ampersands, apostrophes */
  companyName: /^[\p{L}\s.&'()-]{2,120}$/u,
  /** Standard e-mail (loose but effective) */
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  /** International phone: optional +, digits, spaces, dashes, parens */
  phone: /^[+]?[\d\s()-]{7,20}$/,
  /** Extension: digits only, 1-6 digits */
  extension: /^\d{1,6}$/,
  /** URL: must start with http(s) or www */
  url: /^(https?:\/\/|www\.)\S+$/i,
  /** Person name: letters, unicode, spaces, hyphens, dots, apostrophes */
  personName: /^[\p{L}\s.'-]{2,80}$/u,
  /** CR Number: alphanumeric, dashes, slashes */
  crNumber: /^[\w/-]{2,30}$/,
  /** Number of employees: digits only */
  numericPositive: /^\d+$/,
  /** Bank account: alphanumeric, dashes, spaces */
  bankAccount: /^[\w\s-]{4,34}$/,
  /** SWIFT/BIC code: 8 or 11 alphanumeric characters */
  swiftCode: /^[A-Z0-9]{8}([A-Z0-9]{3})?$/i,
  /** Gibberish detector: 4+ consecutive identical characters (e.g. "aaaa", "1111") */
  gibberish: /(.)\1{3,}/,
  /** Keyboard mash detector: common patterns like "asdf", "qwerty", etc. */
  keyboardMash: /(?:asdf|qwert|zxcv|1234|aaaa|abcd|jkl;)/i,
  /** Address: at least 5 meaningful characters */
  address: /^[\p{L}\d\s.,#/()-]{5,200}$/u,
  /** Generic text: at least 2 letters present (catches "!!!" or "123" in name fields) */
  hasLetters: /\p{L}.*\p{L}/u,
};

/** Return an error message or empty string */
function validateField(name: string, value: string): string {
  const v = value.trim();

  // ── Required fields ──
  const requiredFields: Record<string, string> = {
    companyName: 'Company name is required',
    contactEmail: 'Email address is required',
    crNumber: 'C.R. number is required',
    addressLine1: 'Address is required',
    mobile: 'Mobile number is required',
    contactPerson: 'Contact person is required',
  };

  if (requiredFields[name] && !v) return requiredFields[name];

  // Skip further checks for empty optional fields
  if (!v) return '';

  // ── Gibberish / keyboard-mash detection ──
  if (PATTERNS.gibberish.test(v) || PATTERNS.keyboardMash.test(v)) {
    return 'Please enter a valid value (no repeated/random characters)';
  }

  // ── Per-field format rules ──
  switch (name) {
    case 'companyName':
      if (!PATTERNS.companyName.test(v)) return 'Enter a valid company name (letters, spaces, &, hyphens)';
      if (!PATTERNS.hasLetters.test(v)) return 'Company name must contain at least 2 letters';
      break;

    case 'contactEmail':
      if (!PATTERNS.email.test(v)) return 'Enter a valid email address (e.g. name@company.com)';
      break;

    case 'telephone':
    case 'mobile':
    case 'fax':
      if (!PATTERNS.phone.test(v)) return 'Enter a valid phone number (e.g. +974 44512393)';
      break;

    case 'extn':
      if (!PATTERNS.extension.test(v)) return 'Extension must be 1-6 digits';
      break;

    case 'webAddress':
      if (!PATTERNS.url.test(v)) return 'Enter a valid URL starting with http:// or https://';
      break;

    case 'contactPerson':
    case 'sponsor':
    case 'keyPerson':
    case 'authorizedSignature':
      if (!PATTERNS.personName.test(v)) return 'Enter a valid name (letters, spaces, hyphens)';
      if (!PATTERNS.hasLetters.test(v)) return 'Name must contain at least 2 letters';
      break;

    case 'position':
      if (!PATTERNS.hasLetters.test(v)) return 'Position must contain at least 2 letters';
      break;

    case 'crNumber':
      if (!PATTERNS.crNumber.test(v)) return 'Enter a valid C.R. number (alphanumeric, dashes, slashes)';
      break;

    case 'employees':
      if (!PATTERNS.numericPositive.test(v)) return 'Enter a valid number of employees (digits only)';
      if (parseInt(v) > 1000000) return 'Please enter a realistic number of employees';
      break;

    case 'addressLine1':
      if (!PATTERNS.address.test(v)) return 'Enter a valid address (at least 5 characters)';
      if (!PATTERNS.hasLetters.test(v)) return 'Address must contain at least 2 letters';
      break;

    case 'addressLine2':
      if (!PATTERNS.address.test(v)) return 'Enter a valid address';
      break;

    case 'officeLocation':
    case 'streetName':
      if (v.length > 0 && !PATTERNS.hasLetters.test(v)) return 'Please enter a meaningful location';
      break;

    case 'bankAccount':
    case 'bankAccount2':
      if (!PATTERNS.bankAccount.test(v)) return 'Enter a valid account number (4-34 alphanumeric characters)';
      break;

    case 'bankSwift':
    case 'bankSwift2':
      if (!PATTERNS.swiftCode.test(v)) return 'SWIFT code must be 8 or 11 characters (e.g. QNBAQAQA)';
      break;

    case 'bankName':
    case 'bankName2':
    case 'bankBranch':
    case 'bankBranch2':
      if (!PATTERNS.hasLetters.test(v)) return 'Please enter a valid name';
      break;
  }

  return '';
}

// ── Component ───────────────────────────────────────────────────────
// ── Anti-bot: minimum time (ms) a human needs to fill the form ──
const MIN_FORM_TIME_MS = 5000; // 5 seconds

const VendorRegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // ── Anti-bot state ──
  const formLoadTime = useRef(Date.now());
  const [honeypot, setHoneypot] = useState(''); // hidden field — bots fill this, humans don't
  const [botDetected, setBotDetected] = useState(false);

  const [form, setForm] = useState({
    applicationNo: '',
    companyName: '',
    addressLine1: '',
    addressLine2: '',
    telephone: '',
    extn: '',
    mobile: '',
    fax: '',
    contactEmail: '',
    webAddress: '',
    contactPerson: '',
    position: '',
    sponsor: '',
    crNumber: '',
    officeLocation: '',
    streetName: '',
    buildingNo: '',
    floorNo: '',
    employees: '',
    keyPerson: '',
    specializing: '',
    // Services & Operations
    delivery: '',
    maintenance: '',
    guarantee: '',
    paymentMode: '',
    // Bank 1
    bankName: '',
    bankBranch: '',
    bankAccount: '',
    bankSwift: '',
    // Bank 2
    bankName2: '',
    bankBranch2: '',
    bankAccount2: '',
    bankSwift2: '',
    // Authorization
    authorizedSignature: '',
    companySeal: '',
    authDate: '',
    // Official Use Only
    officialCompanyName: '',
    vendorCode: '',
    category: '',
    approvedBy: '',
    officialDate: '',
  });

  const labelClass = 'block text-sm font-medium text-petrozin-navy mb-1';
  const inputBase = 'w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-petrozin-gold focus:border-transparent transition-all';
  const sectionCard = 'bg-petrozin-gray rounded-xl p-5 md:p-6 border border-gray-200';

  /** Returns the input className with conditional error styling */
  const getInputClass = (fieldName: string) => {
    const hasError = touched[fieldName] && errors[fieldName];
    return `${inputBase} ${hasError ? 'border-red-400 bg-red-50/30' : 'border-gray-300'}`;
  };

  /** Inline error message component */
  const FieldError = ({ field }: { field: string }) => {
    if (!touched[field] || !errors[field]) return null;
    return (
      <motion.p
        className="mt-1 text-xs text-red-600 flex items-center gap-1"
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <AlertCircle className="w-3 h-3 flex-shrink-0" />
        {errors[field]}
      </motion.p>
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Live-clear error when the user starts fixing the field
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  /** Validate all vendor-filled fields and return true if valid */
  const validateForm = useCallback((): boolean => {
    // Fields in the "Official Use Only" section are excluded from validation
    const officialFields = new Set([
      'officialCompanyName', 'vendorCode', 'category', 'approvedBy', 'officialDate',
      'applicationNo', // filled by Petrozin
    ]);

    const newErrors: FormErrors = {};
    const allTouched: Record<string, boolean> = {};

    for (const [name, value] of Object.entries(form)) {
      if (officialFields.has(name)) continue;
      allTouched[name] = true;
      const error = validateField(name, value);
      if (error) newErrors[name] = error;
    }

    setTouched((prev) => ({ ...prev, ...allTouched }));
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [form]);

  const emptyForm = {
    applicationNo: '',
    companyName: '',
    addressLine1: '',
    addressLine2: '',
    telephone: '',
    extn: '',
    mobile: '',
    fax: '',
    contactEmail: '',
    webAddress: '',
    contactPerson: '',
    position: '',
    sponsor: '',
    crNumber: '',
    officeLocation: '',
    streetName: '',
    buildingNo: '',
    floorNo: '',
    employees: '',
    keyPerson: '',
    specializing: '',
    delivery: '',
    maintenance: '',
    guarantee: '',
    paymentMode: '',
    bankName: '',
    bankBranch: '',
    bankAccount: '',
    bankSwift: '',
    bankName2: '',
    bankBranch2: '',
    bankAccount2: '',
    bankSwift2: '',
    authorizedSignature: '',
    companySeal: '',
    authDate: '',
    officialCompanyName: '',
    vendorCode: '',
    category: '',
    approvedBy: '',
    officialDate: '',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');
    setBotDetected(false);

    // ── Anti-bot checks ──
    // 1. Honeypot: if the hidden field has a value, it's a bot
    if (honeypot) {
      setBotDetected(true);
      // Silently pretend success so bots think it worked
      setSubmitStatus('success');
      return;
    }

    // 2. Time check: reject submissions faster than a human can fill the form
    const elapsed = Date.now() - formLoadTime.current;
    if (elapsed < MIN_FORM_TIME_MS) {
      setBotDetected(true);
      setSubmitStatus('error');
      return;
    }

    if (!validateForm()) {
      // Scroll to the first error
      setTimeout(() => {
        const firstError = document.querySelector('.text-red-600');
        firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/vendor-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          _hp: honeypot,              // honeypot signal for server
          _ft: elapsed,               // form fill time for server
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit vendor registration');
      }

      setSubmitStatus('success');
      setForm(emptyForm);
      setErrors({});
      setTouched({});
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  /** Count total validation errors for the summary banner */
  const errorCount = Object.values(errors).filter(Boolean).length;

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
      {/* Success/Error Messages */}
      {submitStatus === 'success' && (
        <motion.div
          className="mb-8 p-6 bg-green-50 border border-green-200 rounded-2xl flex items-center space-x-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-green-800">Vendor Registration Submitted Successfully!</h3>
            <p className="text-green-700">Thank you for your submission. We&apos;ll review your application and get back to you soon.</p>
          </div>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          className="mb-8 p-6 bg-red-50 border border-red-200 rounded-2xl flex items-center space-x-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-red-800">Submission Failed</h3>
            <p className="text-red-700">Please try again or contact us directly via phone or email.</p>
          </div>
        </motion.div>
      )}

      {/* Validation Error Summary Banner */}
      {errorCount > 0 && Object.keys(touched).length > 5 && (
        <motion.div
          className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-center space-x-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <p className="text-sm text-amber-800">
            Please fix <strong>{errorCount}</strong> {errorCount === 1 ? 'error' : 'errors'} below before submitting.
          </p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8" noValidate>
        {/* ── Honeypot: invisible to humans, bots auto-fill it ── */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '-9999px',
            top: '-9999px',
            width: 0,
            height: 0,
            overflow: 'hidden',
            opacity: 0,
            pointerEvents: 'none',
          }}
        >
          <label htmlFor="_website_url">Website URL</label>
          <input
            type="text"
            id="_website_url"
            name="_website_url"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        {/* Company Header */}
        <div className={sectionCard}>
          <h2 className="text-lg md:text-xl font-poppins font-semibold text-petrozin-navy mb-4">Company Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className={labelClass}>Application No. (filled by Petrozin Arabia)</label>
              <input name="applicationNo" value={form.applicationNo} onChange={handleChange} className={inputBase + ' border-gray-300'} placeholder="Filled by Petrozin" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label className={labelClass}>Name of the Company <span className="text-red-500">*</span></label>
              <input name="companyName" value={form.companyName} onChange={handleChange} onBlur={handleBlur} className={getInputClass('companyName')} />
              <FieldError field="companyName" />
            </div>
            <div>
              <label className={labelClass}>C.R. # (*Attach Copies) <span className="text-red-500">*</span></label>
              <input name="crNumber" value={form.crNumber} onChange={handleChange} onBlur={handleBlur} className={getInputClass('crNumber')} />
              <FieldError field="crNumber" />
            </div>
          </div>
          <div className="mt-4">
            <label className={labelClass}>Address <span className="text-red-500">*</span></label>
            <input name="addressLine1" value={form.addressLine1} onChange={handleChange} onBlur={handleBlur} className={`${getInputClass('addressLine1')} mb-1`} placeholder="Address line 1" />
            <FieldError field="addressLine1" />
            <input name="addressLine2" value={form.addressLine2} onChange={handleChange} onBlur={handleBlur} className={`${getInputClass('addressLine2')} mt-3`} placeholder="Address line 2" />
            <FieldError field="addressLine2" />
          </div>
        </div>

        {/* Contact Section */}
        <div className={sectionCard}>
          <h2 className="text-lg md:text-xl font-poppins font-semibold text-petrozin-navy mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="sm:col-span-2">
              <label className={labelClass}>Telephone</label>
              <input name="telephone" value={form.telephone} onChange={handleChange} onBlur={handleBlur} className={getInputClass('telephone')} placeholder="e.g., +974 44512393" />
              <FieldError field="telephone" />
            </div>
            <div>
              <label className={labelClass}>Extension</label>
              <input name="extn" value={form.extn} onChange={handleChange} onBlur={handleBlur} className={getInputClass('extn')} />
              <FieldError field="extn" />
            </div>
            <div>
              <label className={labelClass}>Mobile <span className="text-red-500">*</span></label>
              <input name="mobile" value={form.mobile} onChange={handleChange} onBlur={handleBlur} className={getInputClass('mobile')} placeholder="e.g., +974 70820576" />
              <FieldError field="mobile" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <div>
              <label className={labelClass}>Fax</label>
              <input name="fax" value={form.fax} onChange={handleChange} onBlur={handleBlur} className={getInputClass('fax')} />
              <FieldError field="fax" />
            </div>
            <div>
              <label className={labelClass}>E-Mail <span className="text-red-500">*</span></label>
              <input type="email" name="contactEmail" value={form.contactEmail} onChange={handleChange} onBlur={handleBlur} className={getInputClass('contactEmail')} placeholder="name@company.com" />
              <FieldError field="contactEmail" />
            </div>
            <div>
              <label className={labelClass}>Web Address</label>
              <input name="webAddress" value={form.webAddress} onChange={handleChange} onBlur={handleBlur} className={getInputClass('webAddress')} placeholder="https://" />
              <FieldError field="webAddress" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label className={labelClass}>Contact Person <span className="text-red-500">*</span></label>
              <input name="contactPerson" value={form.contactPerson} onChange={handleChange} onBlur={handleBlur} className={getInputClass('contactPerson')} />
              <FieldError field="contactPerson" />
            </div>
            <div>
              <label className={labelClass}>Position</label>
              <input name="position" value={form.position} onChange={handleChange} onBlur={handleBlur} className={getInputClass('position')} />
              <FieldError field="position" />
            </div>
          </div>
        </div>

        {/* Registration & Sponsorship */}
        <div className={sectionCard}>
          <h2 className="text-lg md:text-xl font-poppins font-semibold text-petrozin-navy mb-4">Registration & Sponsorship</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Name of the Sponsor</label>
              <input name="sponsor" value={form.sponsor} onChange={handleChange} onBlur={handleBlur} className={getInputClass('sponsor')} />
              <FieldError field="sponsor" />
            </div>
            <div>
              <label className={labelClass}>No. of Employees</label>
              <input name="employees" value={form.employees} onChange={handleChange} onBlur={handleBlur} className={getInputClass('employees')} placeholder="e.g., 50" />
              <FieldError field="employees" />
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-3">Attach copies of C.R. and relevant licenses when emailing this form.</p>
        </div>

        {/* Office Location */}
        <div className={sectionCard}>
          <h2 className="text-lg md:text-xl font-poppins font-semibold text-petrozin-navy mb-4">Office Location</h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className={labelClass}>Location of the Office</label>
              <input name="officeLocation" value={form.officeLocation} onChange={handleChange} onBlur={handleBlur} className={getInputClass('officeLocation')} />
              <FieldError field="officeLocation" />
            </div>
            <div>
              <label className={labelClass}>Name of the Street</label>
              <input name="streetName" value={form.streetName} onChange={handleChange} onBlur={handleBlur} className={getInputClass('streetName')} />
              <FieldError field="streetName" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Building No.</label>
                <input name="buildingNo" value={form.buildingNo} onChange={handleChange} onBlur={handleBlur} className={getInputClass('buildingNo')} />
              </div>
              <div>
                <label className={labelClass}>Floor #</label>
                <input name="floorNo" value={form.floorNo} onChange={handleChange} onBlur={handleBlur} className={getInputClass('floorNo')} />
              </div>
            </div>
          </div>
        </div>

        {/* Services & Operations */}
        <div className={sectionCard}>
          <h2 className="text-lg md:text-xl font-poppins font-semibold text-petrozin-navy mb-4">Services & Operations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Delivery</label>
              <input name="delivery" value={form.delivery} onChange={handleChange} className={getInputClass('delivery')} placeholder="e.g., Timeline/Terms" />
            </div>
            <div>
              <label className={labelClass}>Maintenance</label>
              <input name="maintenance" value={form.maintenance} onChange={handleChange} className={getInputClass('maintenance')} placeholder="e.g., Support terms" />
            </div>
            <div>
              <label className={labelClass}>Guarantee</label>
              <input name="guarantee" value={form.guarantee} onChange={handleChange} className={getInputClass('guarantee')} placeholder="e.g., Warranty period" />
            </div>
            <div>
              <label className={labelClass}>Payment Mode</label>
              <input name="paymentMode" value={form.paymentMode} onChange={handleChange} className={getInputClass('paymentMode')} placeholder="e.g., Bank Transfer, Cheque" />
            </div>
          </div>
        </div>

        {/* Bank Information */}
        <div className={sectionCard}>
          <h2 className="text-lg md:text-xl font-poppins font-semibold text-petrozin-navy mb-4">Bank Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Bank Name 1</label>
              <input name="bankName" value={form.bankName} onChange={handleChange} onBlur={handleBlur} className={getInputClass('bankName')} />
              <FieldError field="bankName" />
            </div>
            <div>
              <label className={labelClass}>Branch</label>
              <input name="bankBranch" value={form.bankBranch} onChange={handleChange} onBlur={handleBlur} className={getInputClass('bankBranch')} />
              <FieldError field="bankBranch" />
            </div>
            <div>
              <label className={labelClass}>A/C No.</label>
              <input name="bankAccount" value={form.bankAccount} onChange={handleChange} onBlur={handleBlur} className={getInputClass('bankAccount')} />
              <FieldError field="bankAccount" />
            </div>
            <div>
              <label className={labelClass}>Swift Code</label>
              <input name="bankSwift" value={form.bankSwift} onChange={handleChange} onBlur={handleBlur} className={getInputClass('bankSwift')} placeholder="e.g., QNBAQAQA" />
              <FieldError field="bankSwift" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label className={labelClass}>Bank Name 2</label>
              <input name="bankName2" value={form.bankName2} onChange={handleChange} onBlur={handleBlur} className={getInputClass('bankName2')} />
              <FieldError field="bankName2" />
            </div>
            <div>
              <label className={labelClass}>Branch 2</label>
              <input name="bankBranch2" value={form.bankBranch2} onChange={handleChange} onBlur={handleBlur} className={getInputClass('bankBranch2')} />
              <FieldError field="bankBranch2" />
            </div>
            <div>
              <label className={labelClass}>A/C No. 2</label>
              <input name="bankAccount2" value={form.bankAccount2} onChange={handleChange} onBlur={handleBlur} className={getInputClass('bankAccount2')} />
              <FieldError field="bankAccount2" />
            </div>
            <div>
              <label className={labelClass}>Swift Code 2</label>
              <input name="bankSwift2" value={form.bankSwift2} onChange={handleChange} onBlur={handleBlur} className={getInputClass('bankSwift2')} placeholder="e.g., QNBAQAQA" />
              <FieldError field="bankSwift2" />
            </div>
          </div>
        </div>

        {/* Authorization */}
        <div className={sectionCard}>
          <h2 className="text-lg md:text-xl font-poppins font-semibold text-petrozin-navy mb-4">Authorization</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className={labelClass}>Authorized Signature</label>
              <input name="authorizedSignature" value={form.authorizedSignature} onChange={handleChange} onBlur={handleBlur} className={getInputClass('authorizedSignature')} placeholder="Name of authorized signatory" />
              <FieldError field="authorizedSignature" />
            </div>
            <div>
              <label className={labelClass}>Company Seal</label>
              <input name="companySeal" value={form.companySeal} onChange={handleChange} className={getInputClass('companySeal')} placeholder="Reference/ID" />
            </div>
            <div>
              <label className={labelClass}>Date</label>
              <input type="date" name="authDate" value={form.authDate} onChange={handleChange} className={getInputClass('authDate')} />
            </div>
          </div>
        </div>

        {/* Official Use Only */}
        <div className={sectionCard}>
          <h2 className="text-lg md:text-xl font-poppins font-semibold text-petrozin-navy mb-4">For Petrozin Official Use Only</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Name of the Company</label>
              <input name="officialCompanyName" value={form.officialCompanyName} onChange={handleChange} className={inputBase + ' border-gray-300'} />
            </div>
            <div>
              <label className={labelClass}>Vendor Code</label>
              <input name="vendorCode" value={form.vendorCode} onChange={handleChange} className={inputBase + ' border-gray-300'} />
            </div>
            <div>
              <label className={labelClass}>Category</label>
              <input name="category" value={form.category} onChange={handleChange} className={inputBase + ' border-gray-300'} />
            </div>
            <div>
              <label className={labelClass}>Approved By</label>
              <input name="approvedBy" value={form.approvedBy} onChange={handleChange} className={inputBase + ' border-gray-300'} />
            </div>
            <div>
              <label className={labelClass}>Date</label>
              <input type="date" name="officialDate" value={form.officialDate} onChange={handleChange} className={inputBase + ' border-gray-300'} />
            </div>
          </div>
        </div>

        <div className="pt-2 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex items-center gap-2 bg-gradient-to-r from-petrozin-orange to-petrozin-red text-white font-poppins font-bold px-6 py-3 rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                isSubmitting ? 'cursor-wait' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send size={18} /> Submit Registration
                </>
              )}
            </button>
            <div className="text-center sm:text-right">
              <p className="text-sm text-gray-600 mb-2">Have a general inquiry?</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-petrozin-gold hover:text-petrozin-gold/80 font-semibold transition-colors"
              >
                <MessageCircle size={18} />
                Go to Contact Form
              </Link>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Need help? Contact us at <a href="mailto:info@petrozin.com" className="text-petrozin-gold hover:underline">info@petrozin.com</a> or call <a href="tel:+97444512393" className="text-petrozin-gold hover:underline">+974 44512393</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VendorRegistrationForm;
