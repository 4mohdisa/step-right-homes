'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  ChevronRight, 
  ChevronLeft, 
  Fence, 
  Home, 
  Zap, 
  Wrench,
  Building2,
  Clock,
  AlertTriangle,
  Check,
  Sparkles,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';
import { 
  calculateEstimate, 
  ServiceType, 
  PropertySize, 
  UrgencyLevel, 
  JobScope,
  serviceLabels,
  propertySizeLabels,
  urgencyLabels,
  scopeLabels,
} from '@/lib/pricing';
import { COMPANY_INFO } from '@/lib/constants';
import Button from '@/components/ui/Button';

interface QuoteGeneratorProps {
  className?: string;
  compact?: boolean;
}

const serviceIcons: Record<ServiceType, React.ElementType> = {
  fencing: Fence,
  roofing: Home,
  electrical: Zap,
  plumbing: Wrench,
};

const QuoteGenerator: React.FC<QuoteGeneratorProps> = ({ className = '', compact = false }) => {
  const [step, setStep] = useState(1);
  const [service, setService] = useState<ServiceType | null>(null);
  const [propertySize, setPropertySize] = useState<PropertySize | null>(null);
  const [urgency, setUrgency] = useState<UrgencyLevel | null>(null);
  const [scope, setScope] = useState<JobScope | null>(null);
  const [showResult, setShowResult] = useState(false);

  const totalSteps = 4;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (showResult) {
      setShowResult(false);
    } else if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setStep(1);
    setService(null);
    setPropertySize(null);
    setUrgency(null);
    setScope(null);
    setShowResult(false);
  };

  const canProceed = () => {
    switch (step) {
      case 1: return service !== null;
      case 2: return propertySize !== null;
      case 3: return urgency !== null;
      case 4: return scope !== null;
      default: return false;
    }
  };

  const estimate = service && propertySize && urgency && scope
    ? calculateEstimate({ service, propertySize, urgency, scope })
    : null;

  const stepVariants = {
    enter: { opacity: 0, x: 20 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <div className={`bg-white rounded-3xl shadow-elevated overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-neutral-950 text-white p-6 md:p-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-primary-yellow rounded-xl flex items-center justify-center">
            <Calculator size={20} className="text-neutral-900" />
          </div>
          <h3 className="text-xl md:text-2xl font-heading font-bold">
            Instant Quote Calculator
          </h3>
        </div>
        <p className="text-neutral-400 font-body">
          Get an estimated price range for your project in seconds
        </p>

        {/* Progress Bar */}
        {!showResult && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-neutral-400">Step {step} of {totalSteps}</span>
              <span className="text-sm text-primary-yellow">{Math.round((step / totalSteps) * 100)}%</span>
            </div>
            <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(step / totalSteps) * 100}%` }}
                transition={{ duration: 0.3 }}
                className="h-full bg-primary-yellow rounded-full"
              />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={step}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {/* Step 1: Service Selection */}
              {step === 1 && (
                <div>
                  <h4 className="text-lg font-heading font-semibold text-neutral-900 mb-4">
                    What service do you need?
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {(Object.keys(serviceLabels) as ServiceType[]).map((key) => {
                      const Icon = serviceIcons[key];
                      return (
                        <button
                          key={key}
                          onClick={() => setService(key)}
                          className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                            service === key
                              ? 'border-primary-yellow bg-primary-yellow/10'
                              : 'border-neutral-200 hover:border-neutral-300'
                          }`}
                        >
                          <Icon size={24} className={service === key ? 'text-primary-yellow-dark' : 'text-neutral-600'} />
                          <p className="mt-2 font-heading font-semibold text-neutral-900">{serviceLabels[key]}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Property Size */}
              {step === 2 && (
                <div>
                  <h4 className="text-lg font-heading font-semibold text-neutral-900 mb-4">
                    What&apos;s your property size?
                  </h4>
                  <div className="space-y-3">
                    {(Object.keys(propertySizeLabels) as PropertySize[]).map((key) => (
                      <button
                        key={key}
                        onClick={() => setPropertySize(key)}
                        className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center gap-4 ${
                          propertySize === key
                            ? 'border-primary-yellow bg-primary-yellow/10'
                            : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <Building2 size={24} className={propertySize === key ? 'text-primary-yellow-dark' : 'text-neutral-600'} />
                        <div>
                          <p className="font-heading font-semibold text-neutral-900">{propertySizeLabels[key].label}</p>
                          <p className="text-sm text-neutral-500">{propertySizeLabels[key].description}</p>
                        </div>
                        {propertySize === key && (
                          <Check size={20} className="ml-auto text-primary-yellow-dark" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Urgency */}
              {step === 3 && (
                <div>
                  <h4 className="text-lg font-heading font-semibold text-neutral-900 mb-4">
                    How urgent is this job?
                  </h4>
                  <div className="space-y-3">
                    {(Object.keys(urgencyLabels) as UrgencyLevel[]).map((key) => {
                      const icons: Record<UrgencyLevel, React.ElementType> = {
                        standard: Clock,
                        priority: Clock,
                        emergency: AlertTriangle,
                      };
                      const Icon = icons[key];
                      return (
                        <button
                          key={key}
                          onClick={() => setUrgency(key)}
                          className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center gap-4 ${
                            urgency === key
                              ? 'border-primary-yellow bg-primary-yellow/10'
                              : 'border-neutral-200 hover:border-neutral-300'
                          }`}
                        >
                          <Icon size={24} className={urgency === key ? 'text-primary-yellow-dark' : 'text-neutral-600'} />
                          <div>
                            <p className="font-heading font-semibold text-neutral-900">{urgencyLabels[key].label}</p>
                            <p className="text-sm text-neutral-500">{urgencyLabels[key].description}</p>
                          </div>
                          {urgency === key && (
                            <Check size={20} className="ml-auto text-primary-yellow-dark" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 4: Job Scope */}
              {step === 4 && (
                <div>
                  <h4 className="text-lg font-heading font-semibold text-neutral-900 mb-4">
                    What&apos;s the scope of work?
                  </h4>
                  <div className="space-y-3">
                    {(Object.keys(scopeLabels) as JobScope[]).map((key) => (
                      <button
                        key={key}
                        onClick={() => setScope(key)}
                        className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center gap-4 ${
                          scope === key
                            ? 'border-primary-yellow bg-primary-yellow/10'
                            : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <Wrench size={24} className={scope === key ? 'text-primary-yellow-dark' : 'text-neutral-600'} />
                        <div>
                          <p className="font-heading font-semibold text-neutral-900">{scopeLabels[key].label}</p>
                          <p className="text-sm text-neutral-500">{scopeLabels[key].description}</p>
                        </div>
                        {scope === key && (
                          <Check size={20} className="ml-auto text-primary-yellow-dark" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ) : (
            /* Results */
            <motion.div
              key="result"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {estimate && (
                <div className="text-center">
                  {/* AI Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-yellow/10 rounded-full mb-6">
                    <Sparkles size={16} className="text-primary-yellow-dark" />
                    <span className="text-sm font-heading font-semibold text-primary-yellow-dark">
                      AI-Generated Estimate
                    </span>
                  </div>

                  {/* Price Range */}
                  <div className="mb-6">
                    <p className="text-sm text-neutral-500 mb-2">Estimated Price Range</p>
                    <div className="text-4xl md:text-5xl font-heading font-bold text-neutral-900">
                      ${estimate.minPrice.toLocaleString()} - ${estimate.maxPrice.toLocaleString()}
                    </div>
                    <p className="text-neutral-500 mt-2">
                      Estimated duration: <span className="font-semibold text-neutral-700">{estimate.estimatedDuration}</span>
                    </p>
                  </div>

                  {/* Summary */}
                  <div className="bg-neutral-50 rounded-xl p-4 mb-6 text-left">
                    <p className="text-sm font-heading font-semibold text-neutral-700 mb-2">Your Selection:</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div><span className="text-neutral-500">Service:</span> <span className="font-medium">{service && serviceLabels[service]}</span></div>
                      <div><span className="text-neutral-500">Property:</span> <span className="font-medium">{propertySize && propertySizeLabels[propertySize].label}</span></div>
                      <div><span className="text-neutral-500">Urgency:</span> <span className="font-medium">{urgency && urgencyLabels[urgency].label}</span></div>
                      <div><span className="text-neutral-500">Scope:</span> <span className="font-medium">{scope && scopeLabels[scope].label}</span></div>
                    </div>
                  </div>

                  {/* Factors */}
                  <div className="bg-neutral-50 rounded-xl p-4 mb-6 text-left">
                    <p className="text-sm font-heading font-semibold text-neutral-700 mb-2">Price factors include:</p>
                    <ul className="text-sm text-neutral-600 space-y-1">
                      {estimate.factors.map((factor, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary-yellow mt-0.5">•</span>
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Disclaimer */}
                  <p className="text-xs text-neutral-500 mb-6">
                    * This is an AI-generated estimate. Final pricing may vary based on site inspection and specific requirements.
                  </p>

                  {/* CTAs */}
                  <div className="space-y-3">
                    <a
                      href={COMPANY_INFO.phoneHref}
                      className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-primary-yellow text-neutral-900 font-heading font-semibold rounded-xl hover:bg-primary-yellow-dark transition-all duration-300"
                    >
                      <Phone size={20} />
                      Call for Exact Quote
                    </a>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-neutral-100 text-neutral-700 font-heading font-semibold rounded-xl hover:bg-neutral-200 transition-all duration-300"
                    >
                      <Mail size={20} />
                      Email Us
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        {!showResult && (
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-neutral-200">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-heading font-medium transition-all duration-200 ${
                step === 1
                  ? 'text-neutral-300 cursor-not-allowed'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              <ChevronLeft size={20} />
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold transition-all duration-200 ${
                canProceed()
                  ? 'bg-primary-yellow text-neutral-900 hover:bg-primary-yellow-dark'
                  : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
              }`}
            >
              {step === totalSteps ? 'Get Estimate' : 'Continue'}
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Reset for results */}
        {showResult && (
          <div className="mt-6 pt-6 border-t border-neutral-200 flex justify-center">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 font-heading font-medium transition-colors duration-200"
            >
              <ArrowRight size={16} className="rotate-180" />
              Start New Quote
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteGenerator;
