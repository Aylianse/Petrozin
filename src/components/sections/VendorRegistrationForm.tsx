'use client';

import { Send } from 'lucide-react';
import { useState } from 'react';

const VendorRegistrationForm = () => {
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
  const inputClass = 'w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-petrozin-gold focus:border-transparent transition-all';
  const textareaClass = 'w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-petrozin-gold focus:border-transparent transition-all';
  const sectionCard = 'bg-petrozin-gray rounded-xl p-5 md:p-6 border border-gray-200';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Vendor Registration Submission\n\n` +
      `Application No.: ${form.applicationNo}\n` +
      `Company Name: ${form.companyName}\n` +
      `Address Line 1: ${form.addressLine1}\n` +
      `Address Line 2: ${form.addressLine2}\n` +
      `Telephone: ${form.telephone} Extn: ${form.extn}\n` +
      `Mobile: ${form.mobile}\n` +
      `Fax: ${form.fax}\n` +
      `Email: ${form.contactEmail}\n` +
      `Web Address: ${form.webAddress}\n` +
      `Contact Person: ${form.contactPerson}\n` +
      `Position: ${form.position}\n` +
      `Name of Sponsor: ${form.sponsor}\n` +
      `C.R.#: ${form.crNumber}\n` +
      `Office Location: ${form.officeLocation}\n` +
      `Street Name: ${form.streetName}\n` +
      `Building No.: ${form.buildingNo}\n` +
      `Floor #: ${form.floorNo}\n` +
      `No. of Employees: ${form.employees}\n` +
      `Key Person: ${form.keyPerson}\n` +
      `Specializing: ${form.specializing}\n\n` +
      `Services & Operations\n` +
      `Delivery: ${form.delivery}\n` +
      `Maintenance: ${form.maintenance}\n` +
      `Guarantee: ${form.guarantee}\n` +
      `Payment Mode: ${form.paymentMode}\n\n` +
      `Bank Information\n` +
      `Bank Name 1: ${form.bankName}\n` +
      `Branch: ${form.bankBranch}\n` +
      `A/C No.: ${form.bankAccount}\n` +
      `Swift Code: ${form.bankSwift}\n` +
      `Bank Name 2: ${form.bankName2}\n` +
      `Branch 2: ${form.bankBranch2}\n` +
      `A/C No. 2: ${form.bankAccount2}\n` +
      `Swift Code 2: ${form.bankSwift2}\n\n` +
      `Authorization\n` +
      `Authorized Signature: ${form.authorizedSignature}\n` +
      `Company Seal: ${form.companySeal}\n` +
      `Date: ${form.authDate}\n\n` +
      `For Petrozin Official Use Only\n` +
      `Name of the Company: ${form.officialCompanyName}\n` +
      `Vendor Code: ${form.vendorCode}\n` +
      `Category: ${form.category}\n` +
      `Approved By: ${form.approvedBy}\n` +
      `Date: ${form.officialDate}\n`
    );
    window.location.href = `mailto:admin@petrozin.com?subject=Vendor%20Registration%20Submission&body=${body}`;
  };

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Company Header */}
        <div className={sectionCard}>
          <h2 className="text-lg md:text-xl font-poppins font-semibold text-petrozin-navy mb-4">Company Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className={labelClass}>Application No. (filled by Petrozin Arabia)</label>
              <input name="applicationNo" value={form.applicationNo} onChange={handleChange} className={inputClass} placeholder="Filled by Petrozin" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label className={labelClass}>Name of the Company</label>
              <input name="companyName" value={form.companyName} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>C.R. # (*Attach Copies)</label>
              <input name="crNumber" value={form.crNumber} onChange={handleChange} className={inputClass} required />
            </div>
          </div>
          <div className="mt-4">
            <label className={labelClass}>Address</label>
            <input name="addressLine1" value={form.addressLine1} onChange={handleChange} className={`${inputClass} mb-3`} placeholder="Address line 1" required />
            <input name="addressLine2" value={form.addressLine2} onChange={handleChange} className={inputClass} placeholder="Address line 2" />
          </div>
        </div>

        {/* Contact Section */}
        <div className={sectionCard}>
          <h2 className="text-lg md:text-xl font-poppins font-semibold text-petrozin-navy mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="sm:col-span-2">
              <label className={labelClass}>Telephone</label>
              <input name="telephone" value={form.telephone} onChange={handleChange} className={inputClass} placeholder="e.g., +97444512393" />
            </div>
            <div>
              <label className={labelClass}>Extension</label>
              <input name="extn" value={form.extn} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Mobile</label>
              <input name="mobile" value={form.mobile} onChange={handleChange} className={inputClass} placeholder="e.g., +97470820576" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <div>
              <label className={labelClass}>Fax</label>
              <input name="fax" value={form.fax} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>E-Mail</label>
              <input type="email" name="contactEmail" value={form.contactEmail} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Web Address</label>
              <input name="webAddress" value={form.webAddress} onChange={handleChange} className={inputClass} placeholder="https://" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label className={labelClass}>Contact Person</label>
              <input name="contactPerson" value={form.contactPerson} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Position</label>
              <input name="position" value={form.position} onChange={handleChange} className={inputClass} />
            </div>
          </div>
        </div>

        {/* Registration & Sponsorship */}
        <div className={sectionCard}>
          <h2 className="text-lg md:text-xl font-poppins font-semibold text-petrozin-navy mb-4">Registration & Sponsorship</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Name of the Sponsor</label>
              <input name="sponsor" value={form.sponsor} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>No. of Employees</label>
              <input name="employees" value={form.employees} onChange={handleChange} className={inputClass} />
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
              <input name="officeLocation" value={form.officeLocation} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Name of the Street</label>
              <input name="streetName" value={form.streetName} onChange={handleChange} className={inputClass} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Building No.</label>
                <input name="buildingNo" value={form.buildingNo} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Floor #</label>
                <input name="floorNo" value={form.floorNo} onChange={handleChange} className={inputClass} />
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
              <input name="delivery" value={form.delivery} onChange={handleChange} className={inputClass} placeholder="e.g., Timeline/Terms" />
            </div>
            <div>
              <label className={labelClass}>Maintenance</label>
              <input name="maintenance" value={form.maintenance} onChange={handleChange} className={inputClass} placeholder="e.g., Support terms" />
            </div>
            <div>
              <label className={labelClass}>Guarantee</label>
              <input name="guarantee" value={form.guarantee} onChange={handleChange} className={inputClass} placeholder="e.g., Warranty period" />
            </div>
            <div>
              <label className={labelClass}>Payment Mode</label>
              <input name="paymentMode" value={form.paymentMode} onChange={handleChange} className={inputClass} placeholder="e.g., Bank Transfer, Cheque" />
            </div>
          </div>
        </div>

        {/* Bank Information */}
        <div className={sectionCard}>
          <h2 className="text-lg md:text-xl font-poppins font-semibold text-petrozin-navy mb-4">Bank Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Bank Name 1</label>
              <input name="bankName" value={form.bankName} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Branch</label>
              <input name="bankBranch" value={form.bankBranch} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>A/C No.</label>
              <input name="bankAccount" value={form.bankAccount} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Swift Code</label>
              <input name="bankSwift" value={form.bankSwift} onChange={handleChange} className={inputClass} />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label className={labelClass}>Bank Name 2</label>
              <input name="bankName2" value={form.bankName2} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Branch 2</label>
              <input name="bankBranch2" value={form.bankBranch2} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>A/C No. 2</label>
              <input name="bankAccount2" value={form.bankAccount2} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Swift Code 2</label>
              <input name="bankSwift2" value={form.bankSwift2} onChange={handleChange} className={inputClass} />
            </div>
          </div>
        </div>

        {/* Authorization */}
        <div className={sectionCard}>
          <h2 className="text-lg md:text-xl font-poppins font-semibold text-petrozin-navy mb-4">Authorization</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className={labelClass}>Authorized Signature</label>
              <input name="authorizedSignature" value={form.authorizedSignature} onChange={handleChange} className={inputClass} placeholder="Name of authorized signatory" />
            </div>
            <div>
              <label className={labelClass}>Company Seal</label>
              <input name="companySeal" value={form.companySeal} onChange={handleChange} className={inputClass} placeholder="Reference/ID" />
            </div>
            <div>
              <label className={labelClass}>Date</label>
              <input type="date" name="authDate" value={form.authDate} onChange={handleChange} className={inputClass} />
            </div>
          </div>
        </div>

        {/* Official Use Only */}
        <div className={sectionCard}>
          <h2 className="text-lg md:text-xl font-poppins font-semibold text-petrozin-navy mb-4">For Petrozin Official Use Only</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Name of the Company</label>
              <input name="officialCompanyName" value={form.officialCompanyName} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Vendor Code</label>
              <input name="vendorCode" value={form.vendorCode} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Category</label>
              <input name="category" value={form.category} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Approved By</label>
              <input name="approvedBy" value={form.approvedBy} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Date</label>
              <input type="date" name="officialDate" value={form.officialDate} onChange={handleChange} className={inputClass} />
            </div>
          </div>
        </div>

        <div className="pt-2">
          <button type="submit" className="inline-flex items-center gap-2 bg-gradient-to-r from-petrozin-orange to-petrozin-red text-white font-poppins font-bold px-6 py-3 rounded-xl">
            <Send size={18} /> Submit via Email
          </button>
        </div>
      </form>
    </div>
  );
};

export default VendorRegistrationForm;
