export const ROUTE_PATHS = {
  HOME: "/",
} as const;

export interface FormData {
  name: string;
  email: string;
  websiteUrl: string;
  monthlyRevenue: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  bestFor: string;
  spendRange: string;
  channels: string;
  funnel: string;
  features: string[];
  targetRoas: string;
  cta: string;
  popular?: boolean;
  color: "primary" | "secondary" | "accent" | "destructive" | "muted";
}

export const packages: PricingPackage[] = [
  {
    id: "basic",
    name: "🟢 BASIC – Test & Stabilise",
    price: "₹30,000",
    bestFor: "Perfect for brands just starting with paid ads",
    spendRange: "₹50,000 – ₹1,00,000",
    channels: "Google OR Meta (we recommend the best one)",
    funnel: "Focus on getting your first profitable sales",
    features: [
      "We set up your ads and make them profitable",
      "Find the right customers for your products",
      "Write ads that actually sell your products",
      "Track which ads bring real sales",
    ],
    targetRoas: "2x – 3x ROAS",
    cta: "Book My Free Growth Call",
    color: "secondary",
  },
  {
    id: "premium",
    name: "🔵 PREMIUM – Scale What Works",
    price: "₹60,000",
    bestFor: "For brands ready to scale and grow fast",
    spendRange: "₹1,00,000 – ₹2,00,000",
    channels: "Google + Meta (double the reach)",
    funnel: "Full customer journey from discovery to purchase",
    features: [
      "Complete marketing strategy across all platforms",
      "Test different audiences and scale winners",
      "Constant testing to improve your results",
      "Weekly calls to review and optimize performance",
    ],
    targetRoas: "3x – 4x ROAS",
    cta: "Book My Free Growth Call",
    popular: true,
    color: "primary",
  },
  {
    id: "super-premium",
    name: "🟣 SUPER PREMIUM – Growth Partner",
    price: "₹1,00,000",
    bestFor: "For established brands ready to dominate their market",
    spendRange: "₹2,00,000+ per month",
    channels: "All profitable channels + new opportunities",
    funnel: "Complete growth system + customer retention",
    features: [
      "Complete business growth strategy (not just ads)",
      "Aggressive testing to find new profit opportunities",
      "Improve your website to convert more visitors",
      "Advanced tracking to see exactly what's working",
      "Direct access to our strategy team",
    ],
    targetRoas: "4x+ ROAS",
    cta: "Book My Free Growth Call",
    color: "accent",
  },
];

export interface CaseStudy {
  id: string;
  title: string;
  metrics: string[];
  description: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "dtc-book",
    title: "DTC Ecommerce Book Brand",
    metrics: [
      "6X More Website Orders",
      "8X ROAS on Amazon",
      "10X Revenue Growth",
    ],
    description:
      "This book brand was spending money on ads but barely breaking even. We found their best customers, created ads that actually converted, and scaled the winners. Result: they went from struggling to profitable in 60 days.",
  },
  {
    id: "dtc-education",
    title: "DTC Education Brand",
    metrics: [
      "150% More Walk-ins",
      "25% More Admissions",
      "12X ROAS",
    ],
    description:
      "This education brand was getting leads but they weren't converting. We created a system to attract serious students and nurture them until they enrolled. Now they have a waiting list.",
  },
];

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "How quickly will I see results?",
    answer:
      "Most brands see improvements within 30 days. We spend the first 2-4 weeks understanding your business and setting up properly, then you'll start seeing better results.",
  },
  {
    question: "Do you guarantee ROAS?",
    answer:
      "We can't guarantee specific numbers because every business is different. But we only work with brands we believe we can help. If we don't think we can improve your results, we'll tell you upfront.",
  },
  {
    question: "Is there a minimum ad budget?",
    answer:
      "Yes, we recommend at least ₹50,000 per month in ad spend. This gives us enough data to test and optimize properly. Less than this and it's hard to get reliable results.",
  },
  {
    question: "Is this suitable for early-stage brands?",
    answer:
      "Absolutely! Our Basic package is perfect for new brands. We'll help you find your first profitable customers and build a foundation for growth.",
  },
];
