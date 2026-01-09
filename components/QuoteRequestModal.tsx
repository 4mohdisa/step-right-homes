'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Upload, 
  Trash2, 
  Send, 
  Phone, 
  User, 
  MapPin,
  FileText,
  CheckCircle2,
  AlertCircle,
  Info,
  Video,
  Image as ImageIcon
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Textarea from '@/components/ui/Textarea';
import { COMPANY_INFO, SERVICES, PRICING_POLICY } from '@/lib/constants';

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  service: string;
  urgency: string;
  description: string;
  preferredContact: string;
  agreeToTerms: boolean;
  agreeToCalloutFee: boolean;
}

interface MediaFile {
  file: File;
  preview: string;
  type: 'image' | 'video';
}

const QuoteRequestModal: React.FC<QuoteRequestModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: preselectedService,
    urgency: 'standard',
    description: '',
    preferredContact: 'phone',
    agreeToTerms: false,
    agreeToCalloutFee: false,
  });
  
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newMediaFiles: MediaFile[] = [];

    Array.from(files).forEach((file) => {
      if (mediaFiles.length + newMediaFiles.length >= 10) return;
      
      if (file.type.startsWith('image/')) {
        newMediaFiles.push({
          file,
          preview: URL.createObjectURL(file),
          type: 'image'
        });
      } else if (file.type.startsWith('video/')) {
        newMediaFiles.push({
          file,
          preview: URL.createObjectURL(file),
          type: 'video'
        });
      }
    });

    setMediaFiles((prev) => [...prev, ...newMediaFiles]);
    
    // Reset the input so the same file can be selected again
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeMedia = (index: number) => {
    URL.revokeObjectURL(mediaFiles[index].preview);
    setMediaFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.description.trim()) newErrors.description = 'Please describe the work required';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';
    if (!formData.agreeToCalloutFee) newErrors.agreeToCalloutFee = 'You must acknowledge the callout fee';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log('Quote request submitted:', { formData, mediaFiles: mediaFiles.map(m => m.file) });
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    if (!isSubmitting) {
      // Clean up media previews
      mediaFiles.forEach((media) => URL.revokeObjectURL(media.preview));
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        service: '',
        urgency: 'standard',
        description: '',
        preferredContact: 'phone',
        agreeToTerms: false,
        agreeToCalloutFee: false,
      });
      setMediaFiles([]);
      setIsSubmitted(false);
      setErrors({});
      
      onClose();
    }
  };

  if (!isOpen) return null;

  const imageCount = mediaFiles.filter(m => m.type === 'image').length;
  const videoCount = mediaFiles.filter(m => m.type === 'video').length;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-elevated overflow-hidden"
          >
            {/* Header */}
            <div className="sticky top-0 bg-neutral-950 text-white px-6 py-4 z-10">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-heading font-bold">Request a Quote</h2>
                <button
                  onClick={handleClose}
                  disabled={isSubmitting}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200 disabled:opacity-50"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-64px)]">
              {isSubmitted ? (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-8 text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={40} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-2">
                    Quote Request Submitted!
                  </h3>
                  <p className="text-neutral-600 font-body mb-6 max-w-md mx-auto">
                    Thank you for your request. We&apos;ll review your details and get back to you 
                    within 24 hours with a detailed quote.
                  </p>
                  <Button variant="primary" size="lg" onClick={handleClose}>
                    Close
                  </Button>
                </motion.div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="p-6">
                  {/* Callout Fee Notice */}
                  <div className="bg-primary-yellow/10 border border-primary-yellow/30 rounded-xl p-3 mb-6">
                    <div className="flex items-start gap-3">
                      <Info size={18} className="text-primary-yellow-dark flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-neutral-700 font-body">
                        <strong>Callout Fee:</strong> {PRICING_POLICY.minimumCalloutDescription}
                      </p>
                    </div>
                  </div>

                  {/* Form Grid - Two Columns */}
                  <div className="grid lg:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-5">
                      {/* Personal Details */}
                      <div>
                        <h3 className="text-base font-heading font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                          <User size={18} className="text-primary-yellow" />
                          Your Details
                        </h3>
                        <div className="space-y-3">
                          <div>
                            <label className="block mb-1.5 text-sm font-body font-medium text-neutral-700">
                              Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              placeholder="John Smith"
                              value={formData.name}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 border-2 rounded-xl font-body text-neutral-900 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-yellow/20 focus:border-primary-yellow bg-white ${
                                errors.name ? 'border-red-500' : 'border-neutral-200'
                              }`}
                            />
                            {errors.name && (
                              <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                                <AlertCircle size={14} />
                                {errors.name}
                              </p>
                            )}
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block mb-1.5 text-sm font-body font-medium text-neutral-700">
                                Email <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="email"
                                name="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border-2 rounded-xl font-body text-neutral-900 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-yellow/20 focus:border-primary-yellow bg-white ${
                                  errors.email ? 'border-red-500' : 'border-neutral-200'
                                }`}
                              />
                              {errors.email && (
                                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                                  <AlertCircle size={14} />
                                  {errors.email}
                                </p>
                              )}
                            </div>
                            <div>
                              <label className="block mb-1.5 text-sm font-body font-medium text-neutral-700">
                                Phone <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="tel"
                                name="phone"
                                placeholder="0412 345 678"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border-2 rounded-xl font-body text-neutral-900 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-yellow/20 focus:border-primary-yellow bg-white ${
                                  errors.phone ? 'border-red-500' : 'border-neutral-200'
                                }`}
                              />
                              {errors.phone && (
                                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                                  <AlertCircle size={14} />
                                  {errors.phone}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Property Address */}
                      <div>
                        <h3 className="text-base font-heading font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                          <MapPin size={18} className="text-primary-yellow" />
                          Property Address
                        </h3>
                        <div>
                          <label className="block mb-1.5 text-sm font-body font-medium text-neutral-700">
                            Full Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="address"
                            placeholder="123 Main Street, Adelaide SA 5000"
                            value={formData.address}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border-2 rounded-xl font-body text-neutral-900 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-yellow/20 focus:border-primary-yellow bg-white ${
                              errors.address ? 'border-red-500' : 'border-neutral-200'
                            }`}
                          />
                          {errors.address && (
                            <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                              <AlertCircle size={14} />
                              {errors.address}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Service Selection */}
                      <div>
                        <h3 className="text-base font-heading font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                          <FileText size={18} className="text-primary-yellow" />
                          Service Details
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block mb-1.5 text-sm font-body font-medium text-neutral-700">
                              Service <span className="text-red-500">*</span>
                            </label>
                            <select
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 border-2 rounded-xl font-body text-neutral-900 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-yellow/20 focus:border-primary-yellow bg-white ${
                                errors.service ? 'border-red-500' : 'border-neutral-200'
                              }`}
                            >
                              <option value="">Select a service</option>
                              {SERVICES.map((service) => (
                                <option key={service.id} value={service.id}>
                                  {service.title}
                                </option>
                              ))}
                              <option value="multiple">Multiple Services</option>
                              <option value="other">Other</option>
                            </select>
                            {errors.service && (
                              <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                                <AlertCircle size={14} />
                                {errors.service}
                              </p>
                            )}
                          </div>
                          <div>
                            <label className="block mb-1.5 text-sm font-body font-medium text-neutral-700">
                              Urgency
                            </label>
                            <select
                              name="urgency"
                              value={formData.urgency}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl font-body text-neutral-900 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-yellow/20 focus:border-primary-yellow bg-white"
                            >
                              <option value="standard">Standard (1-2 weeks)</option>
                              <option value="priority">Priority (2-3 days)</option>
                              <option value="emergency">Emergency (Same day)</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-5">
                      {/* Work Description */}
                      <div>
                        <Textarea
                          name="description"
                          label="Describe the Work Required"
                          placeholder="Please describe the work you need done, including size of area, materials preferred, access issues, etc."
                          value={formData.description}
                          onChange={handleChange}
                          rows={4}
                          error={errors.description}
                          maxLength={2000}
                          showCount
                          required
                        />
                      </div>

                      {/* Media Upload */}
                      <div>
                        <h3 className="text-base font-heading font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                          <Upload size={18} className="text-primary-yellow" />
                          Upload Photos & Videos
                          <span className="text-sm font-normal text-neutral-500">(Optional)</span>
                        </h3>
                        <p className="text-xs text-neutral-500 font-body mb-3">
                          Upload up to 10 files (photos or videos) to help us understand the work required.
                        </p>

                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*,video/*"
                          multiple
                          onChange={handleMediaUpload}
                          className="hidden"
                        />

                        {/* Upload Area */}
                        <div
                          onClick={() => mediaFiles.length < 10 && fileInputRef.current?.click()}
                          className={`border-2 border-dashed rounded-xl p-4 text-center transition-all duration-200 ${
                            mediaFiles.length < 10
                              ? 'border-neutral-300 hover:border-primary-yellow cursor-pointer hover:bg-primary-yellow/5'
                              : 'border-neutral-200 bg-neutral-50 cursor-not-allowed'
                          }`}
                        >
                          <div className="flex items-center justify-center gap-3 mb-2">
                            <ImageIcon size={24} className="text-neutral-400" />
                            <Video size={24} className="text-neutral-400" />
                          </div>
                          <p className="text-sm text-neutral-600 font-body">
                            {mediaFiles.length < 10
                              ? 'Click to upload photos or videos'
                              : 'Maximum 10 files reached'}
                          </p>
                          <p className="text-xs text-neutral-400 mt-1">
                            {imageCount} photos, {videoCount} videos ({mediaFiles.length}/10)
                          </p>
                        </div>

                        {/* Media Previews */}
                        {mediaFiles.length > 0 && (
                          <div className="grid grid-cols-5 gap-2 mt-3">
                            {mediaFiles.map((media, index) => (
                              <div key={index} className="relative group aspect-square">
                                {media.type === 'image' ? (
                                  <img
                                    src={media.preview}
                                    alt={`Upload ${index + 1}`}
                                    className="w-full h-full object-cover rounded-lg"
                                  />
                                ) : (
                                  <div className="w-full h-full bg-neutral-800 rounded-lg flex items-center justify-center">
                                    <Video size={20} className="text-white" />
                                  </div>
                                )}
                                <button
                                  type="button"
                                  onClick={() => removeMedia(index)}
                                  className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                >
                                  <Trash2 size={12} />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Terms */}
                      <div className="bg-neutral-50 rounded-xl p-3 space-y-3">
                        <label className={`flex items-start gap-2 cursor-pointer ${errors.agreeToCalloutFee ? 'text-red-500' : ''}`}>
                          <input
                            type="checkbox"
                            name="agreeToCalloutFee"
                            checked={formData.agreeToCalloutFee}
                            onChange={handleChange}
                            className="mt-0.5 w-4 h-4 rounded border-neutral-300 text-primary-yellow focus:ring-primary-yellow"
                          />
                          <span className="text-xs font-body text-neutral-700">
                            I agree to the <strong>${PRICING_POLICY.minimumCallout} callout fee</strong> (includes first hour + quote prep). <span className="text-red-500">*</span>
                          </span>
                        </label>

                        <label className={`flex items-start gap-2 cursor-pointer ${errors.agreeToTerms ? 'text-red-500' : ''}`}>
                          <input
                            type="checkbox"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                            className="mt-0.5 w-4 h-4 rounded border-neutral-300 text-primary-yellow focus:ring-primary-yellow"
                          />
                          <span className="text-xs font-body text-neutral-700">
                            I agree to the{' '}
                            <a href="/terms" target="_blank" className="text-primary-yellow-dark hover:underline">Terms</a>
                            {' & '}
                            <a href="/privacy" target="_blank" className="text-primary-yellow-dark hover:underline">Privacy Policy</a>. <span className="text-red-500">*</span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex items-center justify-between gap-4 mt-6 pt-4 border-t border-neutral-200">
                    <a
                      href={COMPANY_INFO.phoneHref}
                      className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-primary-yellow-dark font-body"
                    >
                      <Phone size={16} />
                      Or call {COMPANY_INFO.phone}
                    </a>
                    <div className="flex gap-3">
                      <Button
                        type="button"
                        variant="ghost"
                        size="md"
                        onClick={handleClose}
                        disabled={isSubmitting}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        variant="primary"
                        size="md"
                        icon={Send}
                        iconPosition="right"
                        loading={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Request'}
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuoteRequestModal;
