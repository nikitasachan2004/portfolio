import { Project, ExperienceRole, ManifestoCard, EducationItem, CertificationItem } from '../types';
import { LINKS } from './links';

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    number: '#01',
    badge: 'AI AQI',
    tagline: '24H FORECAST',
    title: 'VayuDrishti',
    shortDescription: 'Satellite and ground-station machine learning model that forecasts hyper-local AQI spikes up to 24 hours in advance with 88% precision.',
    problem: 'Delhi-NCR and tier-1 Indian metros suffer from acute PM2.5 pollution spikes where citizens and municipal health teams only discover toxicity after hazardous smog has already settled over neighbourhoods.',
    approach: 'Fused ground-station CPCB sensor measurements with Copernicus Sentinel-5P tropospheric gas column satellite data. Architected a hybrid Gradient Boosting and Bi-LSTM temporal forecasting pipeline predicting PM2.5 curves 24 hours ahead at 88% precision with sub-150ms inference via FastAPI and ONNX runtime.',
    impactMetrics: [
      '88% prediction accuracy maintained across rolling 24-hr horizons',
      '42% reduction in inference latency through ONNX graph quantization',
      'Continuous ingest from 40+ CPCB real-time monitoring stations'
    ],
    tags: ['PyTorch', 'FastAPI', 'Sentinel-5P', 'Bi-LSTM', 'Docker', 'Pandas', 'ONNX'],
    category: 'AI / ML',
    accentColor: 'bg-[#FEF08A]',
    metaStatus: 'STATUS: DEPLOYED // ACCURACY: 88%',
    githubUrl: LINKS.projects.vayudrishti.githubUrl,
    demoUrl: LINKS.projects.vayudrishti.demoUrl,
    architectureFlow: [
      'Copernicus Sentinel-5P + CPCB 40-Station Ingestion Feed',
      'Spatiotemporal Feature Alignment & Outlier Imputation',
      'Bi-LSTM Recurrent Encoder + LightGBM Residual Forecaster',
      'Quantized ONNX Runtime Export with Sub-150ms Latency'
    ],
    sampleCode: `# VayuDrishti Hybrid Bi-LSTM + LightGBM Forecasting Pipe
import onnxruntime as ort
import numpy as np

def forecast_aqi_spike(sentinel_gas_vector, ground_cpcb_seq):
    session = ort.InferenceSession("models/vayudrishti_v2.onnx")
    tensor_in = np.concatenate([sentinel_gas_vector, ground_cpcb_seq], axis=-1)
    predictions = session.run(None, {"spatial_temporal_input": tensor_in})[0]
    return {
        "pm25_curve_24h": predictions.tolist(),
        "anomaly_flag": bool(np.max(predictions) > 300)
    }`
  },
  {
    id: '2',
    number: '#02',
    badge: 'COMPUTER VISION',
    tagline: 'RECIPE GEN',
    title: 'CookAI',
    shortDescription: 'Zero-waste recipe assistant: snap a photo of your fridge ingredients; models detect items & synthesize culinary steps with nutrient macros.',
    problem: 'Household food waste is a primary driver of urban grocery loss and avoidable emissions, mainly because everyday home cooks struggle to identify cohesive recipes from fragmented leftover ingredients.',
    approach: 'Fine-tuned YOLOv8 for edge ingredient and produce bounding box detection from low-light smartphone photography. The detected ingredients stream into a structured Gemini prompt that derives step-by-step gourmet recipes balancing cook time and nutritional macros.',
    impactMetrics: [
      '4.8★ user experience rating across beta kitchen trials',
      'Zero-waste meal synthesis in < 1.8 seconds end-to-end',
      'Recognizes 140+ common perishable raw ingredients & condiments'
    ],
    tags: ['YOLOv8', 'Gemini API', 'OpenCV', 'FastAPI', 'React', 'Python'],
    category: 'Computer Vision',
    accentColor: 'bg-[#BAE6FD]',
    metaStatus: 'STATUS: ACTIVE // ZERO-WASTE ENGINE',
    githubUrl: LINKS.projects.cookai.githubUrl,
    liveUrl: LINKS.projects.cookai.liveUrl,
    architectureFlow: [
      'Smartphone Image Upload via Camera Stream',
      'YOLOv8 Small Quantized Object Detection Pipeline',
      'Pantry Inventory Aggregator & Freshness Classifier',
      'Gemini LLM Culinary Synthesis with Nutrient Macro Breakdown'
    ],
    sampleCode: `# CookAI Edge Detection & Macro Synthesis
from ultralytics import YOLO
from google import genai

model = YOLO("weights/pantry_yolov8.pt")

def analyze_fridge(frame_bytes):
    detections = model.predict(frame_bytes, conf=0.45)
    ingredients = [model.names[int(box.cls)] for box in detections[0].boxes]
    return ingredients`
  },
  {
    id: '3',
    number: '#03',
    badge: 'AGRI-FINTECH',
    tagline: 'PRICING AI',
    title: 'KrishiMandi AI',
    shortDescription: 'Empowering smallholder farmers with predictive mandi commodity price trends, weather alerts, and multi-lingual voice querying in Hindi & Rajasthani.',
    problem: 'Smallholder farmers in Rajasthan and Madhya Pradesh struggle with commodity price opacity and frequently fall prey to distress selling due to an absence of localized, vernacular market intelligence.',
    approach: 'Engineered automated scrapers for open-source Agmarknet mandi feeds and trained an XGBoost time-series regressor. Integrated OpenAI Whisper speech-to-text to let farmers ask real-time price questions verbally in conversational Hindi or Rajasthani and receive spoken audio advice.',
    impactMetrics: [
      'Pilot active across 5 major agricultural commodity markets in Rajasthan',
      'Multi-dialect Hindi & Rajasthani speech recognition pipeline',
      'Calculates fair transport cost arbitrage across nearby APMC mandis'
    ],
    tags: ['XGBoost', 'Whisper', 'Streamlit', 'Scikit-Learn', 'Python', 'Pandas'],
    category: 'Agri-Tech / Data',
    accentColor: 'bg-[#A7F3D0]',
    metaStatus: 'STATUS: PILOT // 5 COMMODITY MARKETS',
    githubUrl: LINKS.projects.krishimandi.githubUrl,
    liveUrl: LINKS.projects.krishimandi.liveUrl,
  },
  {
    id: '4',
    number: '#04',
    badge: 'NLP INSIGHTS',
    tagline: 'MESSAGING',
    title: 'Chat Analyzer',
    shortDescription: 'Interactive NLP telemetry parsing WhatsApp exported chats into sentiment heatmaps, peak message frequency graphs, emoji clusters, and user network graphs.',
    problem: 'Group chats and direct message archives contain rich interpersonal dynamics and emotional shifts that are completely obscured when viewed as flat text transcripts.',
    approach: 'Constructed an automated regex parsing and tokenization pipeline in Python that processes raw chat exports with 100% in-browser privacy. Generates sentiment curves, active hour polar heatmaps, lexical diversity scoring, and emoji frequency matrices.',
    impactMetrics: [
      '100% client-side zero-leakage privacy guarantee',
      'Visualizes 50,000+ message history logs in under 800ms',
      'Extracts emoji frequency matrices and conversation sentiment arcs'
    ],
    tags: ['Python', 'Streamlit', 'NLTK', 'Matplotlib', 'Seaborn', 'Pandas'],
    category: 'NLP & Agents',
    accentColor: 'bg-[#DDD6FE]',
    metaStatus: 'STATUS: OPEN-SOURCE UTILITY',
    githubUrl: LINKS.projects.chatAnalyzer.githubUrl,
  },
  {
    id: '5',
    number: '#05',
    badge: 'GAME ENGINE',
    tagline: 'INFINITE RPG',
    title: 'PromptQuest',
    shortDescription: 'Procedurally generated interactive narrative sandbox where an LLM dungeon master tracks health stats, inventory arrays, and evolving branching lore.',
    problem: 'Traditional single-player text adventure games rely on rigid pre-scripted decision trees that quickly become predictable and break when players attempt creative or unconventional actions.',
    approach: 'Architected a deterministic stateful agentic workflow with LangChain. The LLM Dungeon Master dynamically generates high-fantasy plotlines, evaluates tactical feasibility of player moves, and maintains strict internal state (HP, gold, inventory items, NPC alliances) across turns.',
    impactMetrics: [
      'Zero hallucination of player inventory through state schema checks',
      'Infinite procedurally generated fantasy branches and quest encounters',
      'Dynamic battle resolution engine with dice-roll simulation'
    ],
    tags: ['LangChain', 'Next.js', 'GPT-4o-mini', 'Tailwind CSS', 'TypeScript'],
    category: 'NLP & Agents',
    accentColor: 'bg-[#FECDD3]',
    metaStatus: 'STATUS: DEMO RELEASED // DYNAMIC LORE',
    githubUrl: LINKS.projects.promptQuest.githubUrl,
  },
  {
    id: '6',
    number: '#06',
    badge: 'EDGE CV',
    tagline: '60 FPS // FACE REC',
    title: 'Emotion Vision',
    shortDescription: 'Real-time facial micro-expression detector running MobileNetV2 in lightweight web contexts, classifying 7 distinct emotional expressions.',
    problem: 'Real-time user engagement and sentiment telemetry often requires heavy server infrastructure or introduces prohibitive latency and severe privacy hurdles when streaming webcam feeds over cloud sockets.',
    approach: 'Trained a distilled MobileNetV2 architecture on FER-2013 facial expression benchmarks. Deployed client-side inference using TensorFlow.js and OpenCV WebAssembly, locking a consistent 60 FPS in browser with near-zero latency and strictly localized video processing.',
    impactMetrics: [
      'Rock-solid 60 FPS in modern browser runtimes without GPU requirement',
      'Classifies 7 distinct emotional states (Neutral, Joy, Surprise, Sadness, etc.)',
      'Micro-expression telemetry updated every 16ms'
    ],
    tags: ['TensorFlow', 'MobileNetV2', 'OpenCV', 'JavaScript', 'WebAssembly'],
    category: 'Computer Vision',
    accentColor: 'bg-[#FED7AA]',
    metaStatus: 'STATUS: 60 FPS ON MOBILE HARDWARE',
    githubUrl: LINKS.projects.emotionVision.githubUrl,
    architectureFlow: [
      'Webcam Video Stream Frame Capture via WebRTC',
      'Face Landmark Bounding Box Localization via OpenCV Haar/SSD',
      'Distilled MobileNetV2 Softmax Inference on FER-2013',
      'Real-time 16ms Micro-expression Telemetry & State Classification'
    ],
    sampleCode: `# Emotion Vision Lightweight MobileNetV2 Face & Expression Inference
import cv2
import numpy as np

EMOTIONS = ['Angry', 'Disgust', 'Fear', 'Happy', 'Sad', 'Surprise', 'Neutral']

def predict_micro_expression(face_crop_gray):
    # Resized to 48x48 normalized input tensor
    resized = cv2.resize(face_crop_gray, (48, 48)) / 255.0
    tensor_input = np.expand_dims(np.expand_dims(resized, -1), 0)
    probabilities = model.predict(tensor_input, verbose=0)[0]
    top_idx = int(np.argmax(probabilities))
    return {
        "emotion": EMOTIONS[top_idx],
        "confidence": float(probabilities[top_idx]),
        "latency_ms": 16.4
    }`
  },
  {
    id: '7',
    number: '#07',
    badge: 'FORECASTING',
    tagline: 'SUPPLY CHAIN INTELLIGENCE',
    title: 'Smart Demand Inventory',
    shortDescription: 'Time-series replenishment optimizer utilizing LSTM recurrent models to prevent stockouts and cut over-storage depreciation by 26%.',
    problem: 'Retail distributors suffer from high carrying costs due to unnecessary stock buffering and lost revenue during erratic demand surges in fast-moving consumer items.',
    approach: 'Built an end-to-end LSTM recurrent architecture augmented with seasonal STL decomposition. The model parses multi-channel historical sales, supplier lead times, and festival seasonality to compute dynamic safety stocks and recommended purchase order cadences.',
    impactMetrics: [
      '26% verified reduction in holding inventory buffer costs',
      '34% drop in sudden stockout events during promotional periods',
      'Automated daily re-order triggers piped into operational databases'
    ],
    tags: ['LSTM', 'Scikit-Learn', 'PostgreSQL', 'Pandas', 'FastAPI', 'NumPy'],
    category: 'Forecasting',
    accentColor: 'bg-[#A5F3FC]',
    metaStatus: 'STATUS: BENCHMARKED // 26% SAVINGS',
    githubUrl: LINKS.projects.smartInventory.githubUrl,
    demoUrl: LINKS.projects.smartInventory.demoUrl,
    architectureFlow: [
      'Multi-channel ERP & Point-of-Sale Data Ingest',
      'STL Seasonal & Trend Decomposition Pipeline',
      'LSTM Recurrent Safety Stock Optimization Engine',
      'Automated Purchase Cadence Trigger via FastAPI'
    ],
    sampleCode: `# Smart Demand LSTM Replenishment Estimator
import torch
import torch.nn as nn

class DemandForecaster(nn.Module):
    def __init__(self, in_features=12, hidden_dim=64, num_layers=2):
        super().__init__()
        self.lstm = nn.LSTM(in_features, hidden_dim, num_layers, batch_first=True)
        self.regressor = nn.Linear(hidden_dim, 1)

    def forward(self, x):
        out, _ = self.lstm(x)
        forecast = self.regressor(out[:, -1, :])
        return torch.relu(forecast)`
  },
  {
    id: '8',
    number: '#08',
    badge: 'PRODUCTION RAG',
    tagline: '77 PAGES // BM25 + DENSE RRF',
    title: 'Colophon: RAG Knowledge Assistant',
    shortDescription: 'Production-grade hybrid RAG QA engine over 77 pages (2,621 chunks) of Claude API docs with BM25 + dense search, cross-encoder reranking, and 100% refusal guardrails.',
    problem: 'Developers building with rapidly evolving API documentation struggle with hallucinated parameters, inaccurate code snippets, and naive vector retrieval failing on exact syntax identifiers like tool_choice.',
    approach: 'Engineered a production hybrid retrieval pipeline combining all-MiniLM-L6-v2 dense vector search with sparse BM25 fused via Reciprocal Rank Fusion (RRF) and cross-encoder reranking. Added a confidence-threshold guardrail achieving 100% out-of-domain refusal accuracy, and implemented a dev/prod backend switch (local Ollama or cloud Groq) via a single config flag.',
    impactMetrics: [
      'Recall@5 boosted from 0.80 to 0.90 via hybrid RRF search',
      'Context precision raised from 0.80 to 0.86 and faithfulness from 0.56 to 0.71 (RAGAS ablation study)',
      '100% refusal accuracy on out-of-domain evaluation queries via confidence guardrails',
      'Shipped robust FastAPI service with 20 passing automated tests, CI, and Docker containerization'
    ],
    tags: ['Python', 'FastAPI', 'Next.js', 'Groq', 'Ollama', 'Docker'],
    category: 'RAG & Agents',
    accentColor: 'bg-[#E9D5FF]',
    metaStatus: 'STATUS: BENCHMARKED // RAGAS VERIFIED',
    githubUrl: LINKS.projects.colophon.githubUrl,
    liveUrl: LINKS.projects.colophon.liveUrl,
    architectureFlow: [
      'Ingestion & Markdown Parsing of 77 Pages (2,621 Chunks) of Claude API Docs',
      'Parallel Dense Vector Search (all-MiniLM-L6-v2) + Sparse BM25 Keyword Search',
      'Reciprocal Rank Fusion (RRF) & Cross-Encoder Reranking Layer for Exact Identifier Precision',
      'Confidence Threshold Guardrail Gate (100% Out-of-Domain Refusal Accuracy on Eval Set)',
      'FastAPI Dev/Prod Toggle (Local Ollama vs Cloud Groq) with Grounded Inline Citations'
    ],
    sampleCode: `# Colophon Hybrid RRF Retrieval & Guardrail Gate
from sentence_transformers import CrossEncoder
import numpy as np

def hybrid_rrf_query(query: str, vector_hits, bm25_hits, k=60):
    scores = {}
    for rank, doc_id in enumerate(vector_hits):
        scores[doc_id] = scores.get(doc_id, 0) + 1.0 / (k + rank + 1)
    for rank, doc_id in enumerate(bm25_hits):
        scores[doc_id] = scores.get(doc_id, 0) + 1.0 / (k + rank + 1)
    
    # Candidate pool reranking
    candidates = sorted(scores.keys(), key=lambda d: scores[d], reverse=True)[:15]
    reranked = rerank_with_cross_encoder(query, candidates)
    
    # Confidence-threshold guardrail refusal check
    if reranked[0]["score"] < 0.42:
        return {"refusal": True, "message": "Query out-of-domain for Claude API docs."}
    return {"refusal": False, "context": reranked[:5]}`
  }
];

export const EXPERIENCES: ExperienceRole[] = [
  {
    title: 'AI Engineer',
    company: 'Drytis Inc.',
    period: 'OCT 2026 – PRESENT',
    periodBadgeColor: 'bg-[#10B981]',
    type: 'internship',
    accentColor: 'bg-[#ECFDF5]',
    darkAccentColor: 'dark:bg-[#0B2018]',
    tagColor: 'bg-[#34D399]',
    highlightStat: { label: 'CURRENT ROLE', value: 'Active Contractor', color: 'bg-[#10B981]' },
    achievements: [
      'Develop and deploy AI-assisted coding solutions, leveraging LLMs and advanced prompt engineering to resolve complex full-stack software challenges across Python and JavaScript ecosystems.',
      'Deliver real-time and asynchronous technical guidance to clients within cloud-based development environments, accelerating problem resolution by [X%].',
      'Debug, refactor, and optimize full-stack codebases, enhancing platform reliability and improving runtime performance by [X%].',
      'Collaborate across distributed engineering workflows to refine internal developer tools and streamline continuous deployment pipelines.'
    ],
    skills: ['Python', 'JavaScript', 'LLMs', 'Prompt Engineering', 'FastAPI', 'Docker']
  },
  {
    title: 'AI Data Analytics Intern',
    company: 'InAmigos Foundation',
    period: 'JUN 2026 – JUL 2026',
    periodBadgeColor: 'bg-[#FBBF24]',
    type: 'internship',
    accentColor: 'bg-[#FEF9C3]', // Lemon cream
    darkAccentColor: 'dark:bg-[#1E2618]',
    tagColor: 'bg-[#FDE047]',
    highlightStat: { label: 'EDA & VISUALS', value: '100% Python Driven', color: 'bg-[#FDE047]' },
    achievements: [
      'Analysed datasets with Python, Pandas, and NumPy; ran EDA to surface patterns and actionable insights.',
      'Built Matplotlib and Seaborn visualisations to communicate findings and support reporting workflows.',
      'Applied data preprocessing, feature engineering, and statistical analysis across multiple analytics tasks.'
    ],
    skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'EDA']
  },
  {
    title: 'Web Development Intern',
    company: 'InAmigos Foundation',
    period: 'MAY 2026 – JUN 2026',
    periodBadgeColor: 'bg-[#38BDF8]',
    type: 'internship',
    accentColor: 'bg-[#E0F2FE]', // Sky cyan
    darkAccentColor: 'dark:bg-[#132838]',
    tagColor: 'bg-[#7DD3FC]',
    highlightStat: { label: 'SPRINTS DELIVERED', value: '3+ Features Shipped', color: 'bg-[#38BDF8]' },
    achievements: [
      'Delivered responsive React components and optimised load performance on the foundation\'s platform.',
      'Tested 5+ REST API endpoints; identified and fixed bugs across frontend and backend modules.',
      'Shipped 3+ frontend features across a 4-week sprint using Git branching, code reviews, and iterative testing.'
    ],
    skills: ['React', 'TypeScript', 'JavaScript (ES6+)', 'REST APIs', 'Tailwind CSS']
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'Manipal University Jaipur',
    degree: 'B.Tech in Computer Science & Engineering',
    period: '2023 – 2027 (Expected)',
    periodBadgeColor: 'bg-[#FBBF24]',
    score: '',
    scoreBadgeColor: '',
    coursework: [],
    location: '',
    specialization: 'Artificial Intelligence & Machine Learning (AI & ML)'
  },
  {
    institution: 'Carmel Convent Sr. Sec. School',
    degree: 'Class XII (Senior Secondary Examination)',
    period: '2023',
    periodBadgeColor: 'bg-white',
    score: 'CBSE BOARD',
    scoreBadgeColor: 'bg-[#7DD3FC]',
    coursework: [],
    location: '',
    specialization: 'Mathematics, Physics & Computer Science'
  },
  {
    institution: 'Carmel Convent Sr. Sec. School',
    degree: 'Class X (Secondary School Examination)',
    period: '2021',
    periodBadgeColor: 'bg-white',
    score: 'CBSE BOARD',
    scoreBadgeColor: 'bg-[#A7F3D0]',
    coursework: [],
    location: '',
    specialization: 'Foundation in Science, Mathematics, Computer Applications & Social Sciences'
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    name: 'Generative AI: Introduction & Applications',
    issuer: 'IBM',
    year: '',
    badgeColor: 'bg-[#F9A8D4]',
    credentialId: ''
  },
  {
    name: 'Azure AI Fundamentals',
    issuer: 'Microsoft Certified',
    year: '',
    badgeColor: 'bg-[#7DD3FC]',
    credentialId: ''
  },
  {
    name: 'Data Structures, Algorithms & Machine Learning',
    issuer: 'NPTEL',
    year: '',
    badgeColor: 'bg-[#FDE047]',
    credentialId: ''
  },
  {
    name: 'System Administration (RH124 & RH134)',
    issuer: 'Red Hat',
    year: '',
    badgeColor: 'bg-[#FCA5A5]',
    credentialId: ''
  },
  {
    name: 'Database Programming with PL/SQL',
    issuer: 'Oracle',
    year: '',
    badgeColor: 'bg-[#C7D2FE]',
    credentialId: ''
  },
  {
    name: 'Python Programming Essentials',
    issuer: 'Cisco',
    year: '',
    badgeColor: 'bg-[#6EE7B7]',
    credentialId: ''
  }
];

export const MANIFESTO_CARDS: ManifestoCard[] = [
  {
    id: 'manifesto-1',
    number: '01',
    title: 'I GET CURIOUS',
    bgClass: 'bg-[#FBBF24]',
    pillClass: 'bg-white text-black',
    washiText: 'CORE // 01',
    sticker: "★ ASK 'WHY?'",
    subtag: 'FIRST PRINCIPLES',
    description: "“But why?” is usually where I start. I pull things apart, sketch the weird bits, and keep digging until the aha happens."
  },
  {
    id: 'manifesto-2',
    number: '02',
    title: 'I NOTICE THE WEIRD STUFF',
    bgClass: 'bg-[#34D399]',
    pillClass: 'bg-white text-black',
    washiText: 'CRAFT // 02',
    sticker: '✦ 99.9% ATTENTION',
    subtag: 'EDGE CASES & DETAILS',
    description: "Working isn’t the same as working well. I care about the tiny details, awkward edge cases, and things everyone else walks past."
  },
  {
    id: 'manifesto-3',
    number: '03',
    title: 'MESSY PROBLEMS > EASY ONES',
    bgClass: 'bg-[#FB7185]',
    pillClass: 'bg-white text-black',
    washiText: 'SYSTEMS // 03',
    sticker: '⚡ CHAOS → CODE',
    subtag: 'UNTANGLE DATA',
    description: "The messier, the more interesting. I like turning tangled data, fuzzy ideas, and real-world chaos into something surprisingly simple."
  },
  {
    id: 'manifesto-4',
    number: '04',
    title: 'I EXPLAIN THINGS',
    bgClass: 'bg-[#A78BFA]',
    pillClass: 'bg-white text-black',
    washiText: 'CLARITY // 04',
    sticker: '✦ RUBBER DUCK',
    subtag: 'MENTAL MODELS',
    description: "If I can’t explain it simply, I’m probably not done. My favorite debugging tool isn’t always a debugger. Sometimes it’s explaining the problem to a friend."
  }
];

export interface SkillCategory {
  id: string;
  title: string;
  bg: string;
  skills: string[];
}

export const SKILLS_CATEGORIES_DETAILED: SkillCategory[] = [
  {
    id: 'prog-lang',
    title: 'LANGUAGES',
    bg: 'bg-[#FDE047]', // Bright Golden Yellow
    skills: ['Python', 'TypeScript', 'JavaScript', 'SQL']
  },
  {
    id: 'ml-dl',
    title: 'AI, ML & AGENTS',
    bg: 'bg-[#FB923C]', // Vibrant Tangerine Orange
    skills: [
      'LLMs',
      'RAG Pipelines',
      'Prompt Engineering',
      'PyTorch',
      'LangChain',
      'scikit-learn',
      'TensorFlow',
      'Computer Vision',
      'RAGAS Evals'
    ]
  },
  {
    id: 'data-eng',
    title: 'DATA & ANALYTICS',
    bg: 'bg-[#4ADE80]', // Vibrant Spring Green
    skills: ['Pandas', 'NumPy', 'EDA', 'Matplotlib', 'Seaborn']
  },
  {
    id: 'databases',
    title: 'DATABASES & VECTOR',
    bg: 'bg-[#38BDF8]', // Electric Sky Blue
    skills: ['PostgreSQL', 'MySQL', 'Dense Vector Stores', 'BM25 Indexing']
  },
  {
    id: 'backend-apis',
    title: 'BACKEND & APIS',
    bg: 'bg-[#A78BFA]', // Electric Lavender
    skills: [
      'FastAPI',
      'REST APIs',
      'Node.js',
      'ONNX Runtime',
      'Groq / Ollama SDKs'
    ]
  },
  {
    id: 'frontend',
    title: 'FRONTEND ARCHITECTURE',
    bg: 'bg-[#F472B6]', // Hot Bubblegum Pink
    skills: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'Framer Motion',
      'State Management'
    ]
  },
  {
    id: 'tools-cloud',
    title: 'DEV & CLOUD INFRA',
    bg: 'bg-[#22D3EE]', // Vibrant Electric Cyan
    skills: [
      'Docker',
      'Linux',
      'Azure AI',
      'Streamlit',
      'CI / Automated Tests'
    ]
  }
];
