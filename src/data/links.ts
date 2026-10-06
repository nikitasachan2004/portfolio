/**
 * Single source of truth for all links across the portfolio.
 * Extracted from the old portfolio and centralized here.
 */

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface ProjectLinkItem {
  id: string;
  title: string;
  githubUrl: string;
  liveUrl?: string;
  demoUrl?: string;
}

export const LINKS = {
  // Personal & Contact
  email: 'mailto:nikitasachan36@gmail.com',
  emailRaw: 'nikitasachan36@gmail.com',

  // Social & Coding Profiles
  github: 'https://github.com/nikitasachan2004',
  linkedin: 'https://www.linkedin.com/in/nikita-sachan-1ba900282/',
  leetcode: 'https://leetcode.com/u/nikitasachan_/',

  // Resumes
  resumes: {
    aiMl: '/NIKITA_ML_RESUME.pdf',
    sde: '/NIKITA%20SDE.pdf',
    primary: '/NIKITA_ML_RESUME.pdf',
  },

  // Internal Navigation Section Anchors
  nav: [
    { id: 'hero', label: 'HOME', href: '#hero' },
    { id: 'about', label: 'ABOUT', href: '#about' },
    { id: 'experience', label: 'EXPERIENCE', href: '#experience' },
    { id: 'projects', label: 'PROJECTS', href: '#projects' },
    { id: 'skills', label: 'SKILLS', href: '#skills' },
    { id: 'credentials', label: 'CREDENTIALS', href: '#credentials' },
    { id: 'contact', label: 'CONTACT', href: '#contact' },
  ] as NavLink[],

  // Projects repositories and demos
  projects: {
    vayudrishti: {
      id: '1',
      title: 'VayuDrishti',
      githubUrl: 'https://github.com/nishant-gupta911/VayuDrishtii',
      demoUrl: 'https://youtu.be/046abcHkaLs?si=x4yDpVYfRU4v6uGW',
    },
    cookai: {
      id: '2',
      title: 'CookAI',
      githubUrl: 'https://github.com/nikitasachan2004/CookAI',
      liveUrl: 'https://cook-ai-xi.vercel.app',
    },
    krishimandi: {
      id: '3',
      title: 'KrishiMind SustainAI',
      githubUrl: 'https://github.com/nikitasachan2004/KrishiMind_SustainAi',
      liveUrl: 'https://krishi-mind-sustain-ai.vercel.app',
    },
    chatAnalyzer: {
      id: '4',
      title: 'Chat Analyzer',
      githubUrl: 'https://github.com/nikitasachan2004/chat-analyzer-ai',
    },
    promptQuest: {
      id: '5',
      title: 'PromptQuest: Infinite Lore',
      githubUrl: 'https://github.com/nikitasachan2004/promptquest-infinite-lore',
    },
    emotionVision: {
      id: '6',
      title: 'Emotion Vision',
      githubUrl: 'https://github.com/nikitasachan2004/face-emotion-recognition',
    },
    smartInventory: {
      id: '7',
      title: 'Smart Inventory Management System',
      githubUrl: 'https://github.com/nishant-gupta911/Smart_Inventory_Management_System',
      liveUrl: 'https://smart-inventory-management-system-rho.vercel.app',
      demoUrl: 'https://youtu.be/FIwXLg6SQ70?si=39Veg3gtqKnq80eX',
    },
    colophon: {
      id: '8',
      title: 'Colophon: RAG Knowledge Assistant',
      githubUrl: 'https://github.com/nikitasachan2004/colophon',
      liveUrl: 'https://colophon-rag.vercel.app',
    },
  },

  // Visitor Counter
  visitorCounter: 'https://hits.sh/nikitasachan-portfolio.json',
} as const;
