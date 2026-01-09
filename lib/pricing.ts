// Pricing estimation logic for AI quote generator

export type ServiceType = 'fencing' | 'roofing' | 'electrical' | 'plumbing';
export type PropertySize = 'small' | 'medium' | 'large' | 'commercial';
export type UrgencyLevel = 'standard' | 'priority' | 'emergency';
export type JobScope = 'minor' | 'moderate' | 'major' | 'full';

interface PricingFactors {
  service: ServiceType;
  propertySize: PropertySize;
  urgency: UrgencyLevel;
  scope: JobScope;
}

interface PriceEstimate {
  minPrice: number;
  maxPrice: number;
  estimatedDuration: string;
  factors: string[];
}

// Base pricing by service type (in AUD)
const basePricing: Record<ServiceType, { min: number; max: number }> = {
  fencing: { min: 500, max: 1500 },
  roofing: { min: 800, max: 2500 },
  electrical: { min: 150, max: 800 },
  plumbing: { min: 120, max: 600 },
};

// Property size multipliers
const propertySizeMultipliers: Record<PropertySize, number> = {
  small: 1.0,
  medium: 1.5,
  large: 2.2,
  commercial: 3.0,
};

// Urgency multipliers
const urgencyMultipliers: Record<UrgencyLevel, number> = {
  standard: 1.0,
  priority: 1.25,
  emergency: 1.75,
};

// Job scope multipliers
const scopeMultipliers: Record<JobScope, number> = {
  minor: 0.5,
  moderate: 1.0,
  major: 2.0,
  full: 3.5,
};

// Estimated durations by scope
const durationEstimates: Record<ServiceType, Record<JobScope, string>> = {
  fencing: {
    minor: '1-2 hours',
    moderate: '1-2 days',
    major: '3-5 days',
    full: '1-2 weeks',
  },
  roofing: {
    minor: '2-4 hours',
    moderate: '1-2 days',
    major: '3-7 days',
    full: '1-3 weeks',
  },
  electrical: {
    minor: '1-2 hours',
    moderate: '2-4 hours',
    major: '1-2 days',
    full: '2-5 days',
  },
  plumbing: {
    minor: '1-2 hours',
    moderate: '2-4 hours',
    major: '1 day',
    full: '2-4 days',
  },
};

// Service-specific factors
const serviceFactors: Record<ServiceType, string[]> = {
  fencing: [
    'Material type (timber, Colorbond, etc.)',
    'Linear meters required',
    'Ground conditions',
    'Permit requirements',
  ],
  roofing: [
    'Roof material and pitch',
    'Accessibility',
    'Extent of damage',
    'Weather conditions',
  ],
  electrical: [
    'Complexity of wiring',
    'Switchboard condition',
    'Safety compliance needs',
    'Number of circuits',
  ],
  plumbing: [
    'Pipe material and age',
    'Access to plumbing',
    'Fixture quality',
    'Drainage requirements',
  ],
};

export function calculateEstimate(factors: PricingFactors): PriceEstimate {
  const base = basePricing[factors.service];
  const sizeMultiplier = propertySizeMultipliers[factors.propertySize];
  const urgencyMultiplier = urgencyMultipliers[factors.urgency];
  const scopeMultiplier = scopeMultipliers[factors.scope];

  const totalMultiplier = sizeMultiplier * urgencyMultiplier * scopeMultiplier;

  // Add some variance for realism (+/- 15%)
  const variance = 0.15;
  const minPrice = Math.round((base.min * totalMultiplier * (1 - variance)) / 10) * 10;
  const maxPrice = Math.round((base.max * totalMultiplier * (1 + variance)) / 10) * 10;

  return {
    minPrice,
    maxPrice,
    estimatedDuration: durationEstimates[factors.service][factors.scope],
    factors: serviceFactors[factors.service],
  };
}

// Display labels
export const serviceLabels: Record<ServiceType, string> = {
  fencing: 'Fencing',
  roofing: 'Roofing',
  electrical: 'Electrical Works',
  plumbing: 'Plumbing Works',
};

export const propertySizeLabels: Record<PropertySize, { label: string; description: string }> = {
  small: { label: 'Small', description: 'Unit, apartment, or small home' },
  medium: { label: 'Medium', description: 'Standard 3-4 bedroom home' },
  large: { label: 'Large', description: 'Large home or multi-story' },
  commercial: { label: 'Commercial', description: 'Commercial or industrial property' },
};

export const urgencyLabels: Record<UrgencyLevel, { label: string; description: string }> = {
  standard: { label: 'Standard', description: 'Within 1-2 weeks' },
  priority: { label: 'Priority', description: 'Within 2-3 days' },
  emergency: { label: 'Emergency', description: 'Same day / urgent' },
};

export const scopeLabels: Record<JobScope, { label: string; description: string }> = {
  minor: { label: 'Minor', description: 'Small repair or fix' },
  moderate: { label: 'Moderate', description: 'Standard repair or installation' },
  major: { label: 'Major', description: 'Significant work required' },
  full: { label: 'Complete', description: 'Full installation or replacement' },
};
