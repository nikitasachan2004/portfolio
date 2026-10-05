export interface Project {
  id: string;
  number: string;
  badge: string;
  tagline: string;
  title: string;
  shortDescription: string;
  problem: string;
  approach: string;
  impactMetrics?: string[];
  tags: string[];
  category: 'AI / ML' | 'Computer Vision' | 'Agri-Tech / Data' | 'NLP & Agents' | 'Forecasting' | 'RAG & Agents';
  accentColor: string; // Tailwind background or hex
  metaStatus: string;
  githubUrl?: string;
  liveUrl?: string; // Live deployed website (e.g. Vercel, web app)
  demoUrl?: string; // YouTube video walkthrough
  architectureFlow?: string[];
  sampleCode?: string;
}

export interface ExperienceRole {
  title: string;
  company: string;
  period: string;
  periodBadgeColor: string;
  achievements: string[];
  skills: string[];
  type?: 'internship' | 'leadership' | 'hackathon';
  accentColor?: string;
  darkAccentColor?: string;
  tagColor?: string;
  icon?: string;
  highlightStat?: { label: string; value: string; color: string };
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  badgeColor: string;
  credentialId?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  periodBadgeColor: string;
  score: string;
  scoreBadgeColor: string;
  coursework?: string[];
  location?: string;
  specialization?: string;
}

export interface ManifestoCard {
  id: string;
  number: string;
  title: string;
  emoji?: string;
  bgClass: string;
  pillClass: string;
  description: string;
  sticker?: string;
  washiText?: string;
  subtag?: string;
}

export interface TerminalCommandOutput {
  command: string;
  response: string | string[];
}
