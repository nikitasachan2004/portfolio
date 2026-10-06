import { Project, ExperienceRole, ManifestoCard, EducationItem, CertificationItem } from '../types';
import { LINKS } from './links';

export const PROJECTS_DATA: Project[] = [
  {
    id: '2',
    number: '#01',
    badge: 'RECIPE & IR ENGINE',
    tagline: 'SMART PANTRY MATCHER',
    title: 'CookAI',
    shortDescription: 'Solves the everyday "empty fridge dilemma" by calculating exactly what you can make from the ingredients already in your kitchen — using a TF-IDF vector retrieval engine paired with a Gemini 2.5 culinary chatbot.',
    problem: 'Household food waste is driven by a simple daily friction: home cooks open a fridge full of random leftover produce, pantry staples, and condiments, but have no easy way to turn those scattered items into a cohesive, delicious meal.',
    approach: 'Engineered a vector-space retrieval model using TF-IDF and Cosine Similarity calibrated for cooking: universal staples (salt, water, oil) receive lower weights while distinctive ingredients (paneer, tofu, miso) carry high discriminative scores. Added Levenshtein typo and plural tolerance (distance ≤ 2), a smart culinary substitution matrix (awarding 75% partial credit for swaps like tofu for paneer), equipment and dietary constraint enforcement, and an embedded Google Gemini 2.5 Flash chatbot with real-time function calling (match_recipes) to query verified recipes directly from MongoDB.',
    impactMetrics: [
      'Sub-50ms TF-IDF recipe matching over precomputed Inverse Document Frequency (IDF) ingredient space',
      'Levenshtein fuzzy matching (distance ≤ 2) and canonical alias mapping for zero-friction typo handling',
      'Smart substitution matrix awarding 75% score credit for valid culinary swaps (e.g., chicken ↔ tofu)',
      'Gemini 2.5 Flash culinary assistant with live Function Calling to query verified database recipes'
    ],
    tags: ['React 19', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Gemini 2.5 Flash', 'Vitest'],
    category: 'AI / ML',
    accentColor: 'bg-[#BAE6FD]',
    metaStatus: 'LIVE // REACT 19 + GEMINI 2.5',
    githubUrl: LINKS.projects.cookai.githubUrl,
    liveUrl: LINKS.projects.cookai.liveUrl,
    architectureFlow: [
      'Ingredient Normalization: Levenshtein Typo Tolerance (≤ 2) & Canonical Alias Mapping',
      'TF-IDF Vector Space Indexing with Smart Culinary Substitution Matrix (75% Score Credit)',
      'Hard Constraint Filtering (Equipped Kitchen Appliances, Max Prep Time & Dietary Rules)',
      'Gemini 2.5 Flash Conversational Agent with Real-Time match_recipes Function Calling'
    ],
    sampleCode: `// CookAI TF-IDF Recipe Scoring & Substitution Engine
export function calculateRecipeScore(
  userIngredients: Set<string>,
  recipe: Recipe,
  idfMap: Map<string, number>,
  substitutions: Map<string, string[]>
): number {
  let matchedWeight = 0;
  let totalRecipeWeight = 0;

  for (const ingredient of recipe.ingredients) {
    const idf = idfMap.get(ingredient.id) ?? 1.0;
    totalRecipeWeight += idf;

    if (userIngredients.has(ingredient.id)) {
      matchedWeight += idf;
    } else {
      // Award 75% credit if a valid pantry substitution exists
      const swaps = substitutions.get(ingredient.id) ?? [];
      const hasSwap = swaps.some((alt) => userIngredients.has(alt));
      if (hasSwap) matchedWeight += idf * 0.75;
    }
  }

  return totalRecipeWeight > 0 ? (matchedWeight / totalRecipeWeight) * 100 : 0;
}`
  },
  {
    id: '3',
    number: '#02',
    badge: 'CLIMATE & AGRI-TECH',
    tagline: '706 DISTRICTS // GREEN AI',
    title: 'KrishiMind SustainAI',
    shortDescription: 'High-speed decision engine helping farmers choose resilient, profitable crops across 706 Indian districts — complete with dual ML yield & price forecasts and "what-if" climate stress testing for drought and heatwaves.',
    problem: 'Smallholder farmers face compounding risks from planting water-intensive crops in ground-depleted districts, blanket chemical fertilizer application, and erratic monsoon cycles — with virtually no tools to stress-test their decisions before sowing.',
    approach: 'Built a lightweight Green AI system pairing dual Random Forest regression models (crop yield forecaster based on rainfall anomalies, heatwave counts, and growing degree days GDD + mandi commodity price forecaster in ₹/tonne) with a deterministic agronomic sustainability engine. Added interactive "what-if" stress testing (e.g., simulate a +2°C heatwave or -20% monsoon deficit) to rank crops by resilience, ecological footprint, and net revenue — computing results in under 15ms on commodity CPUs with under 256MB RAM.',
    impactMetrics: [
      'Covers all 706 agricultural districts across India with hyper-local agro-climatic baselines',
      'Sub-15ms inference latency per candidate crop on standard commodity CPUs (<256MB RAM footprint)',
      'Dual RandomForest models forecasting empirical yields and wholesale mandi prices (₹/tonne)',
      'What-if climate resilience stress simulator evaluating drought (-20% rain) and heatwave (+2°C) shocks'
    ],
    tags: ['Python', 'FastAPI', 'Next.js 15', 'Scikit-Learn', 'Pandas', 'Green AI'],
    category: 'Agri-Tech / Data',
    accentColor: 'bg-[#A7F3D0]',
    metaStatus: 'DEPLOYED // <15ms ON CPU',
    githubUrl: LINKS.projects.krishimandi.githubUrl,
    liveUrl: LINKS.projects.krishimandi.liveUrl,
    architectureFlow: [
      'District Agro-Climatic Ingestion: Monsoon History, GDD & Soil Indices across 706 Districts',
      'Dual ML Regression Engine: 8-Feature Yield Regressor + Mandi Market Price Forecaster',
      'What-If Climate Stress Simulator: Drought (-20% Rain) & Heatwave (+2°C) Perturbations',
      'Multi-Criteria Optimization: Ranks Crops by Net Revenue, Water Savings & Carbon Footprint'
    ],
    sampleCode: `# KrishiMind SustainAI Dual Model & Climate Stress Evaluator
import numpy as np

def evaluate_crop_resilience(district_features, crop_models, temp_delta=0.0, rain_delta=0.0):
    """Simulates yield, price, and eco-scores under drought or heatwave stress."""
    stressed = district_features.copy()
    stressed["growing_degree_days"] += temp_delta * 30.5
    stressed["monsoon_rainfall_anomaly"] += rain_delta

    ranked_crops = []
    for crop_name, (yield_reg, price_reg) in crop_models.items():
        pred_yield = yield_reg.predict([stressed.values])[0]
        pred_price = price_reg.predict([stressed.values])[0]
        revenue = pred_yield * pred_price
        eco_score = compute_sustainability_index(crop_name, stressed)
        
        ranked_crops.append({"crop": crop_name, "yield": pred_yield, "net_return": revenue, "eco_score": eco_score})
        
    return sorted(ranked_crops, key=lambda c: (c["eco_score"] * 0.4 + c["net_return"] * 0.6), reverse=True)`
  },
  {
    id: '1',
    number: '#03',
    badge: 'SATELLITE & ML',
    tagline: 'ALL-INDIA AQI FORECAST',
    title: 'VayuDrishti',
    shortDescription: 'India-wide air quality forecaster fusing satellite observations with ground sensors and weather feeds — bringing life-saving pollution warnings even to rural areas without physical monitoring stations.',
    problem: 'Over 65% of India completely lacks ground air monitoring stations. Citizens and municipal health teams only discover toxic particulate matter after hazardous smog has already settled over neighbourhoods and villages.',
    approach: 'Led Phase 1 & 2 data engineering: collected and unified data from 40+ CPCB ground stations, NASA/ESA satellite Aerosol Optical Depth (Sentinel-5P & MODIS), and ECMWF ERA5 meteorological reanalysis into an ML-ready spatiotemporal dataset. Trained machine learning regression models predicting AQI categories and PM2.5 curves at R² = 0.900, deployed via an interactive Streamlit dashboard and Docker with sub-100ms inference.',
    impactMetrics: [
      'R² = 0.900 (90% validation accuracy) across diverse Indian micro-climates and weather seasons',
      'Expands coverage across 3.3M km² — bridging the gap for 65% of India lacking physical ground stations',
      'Unified multi-source pipeline integrating Sentinel-5P/MODIS AOD, 40+ CPCB stations, and ERA5 weather feeds',
      'Sub-100ms inference time with production Streamlit dashboard, Docker containerization, and REST API'
    ],
    tags: ['Python', 'Scikit-Learn', 'Sentinel-5P', 'Streamlit', 'Docker', 'Pandas', 'FastAPI'],
    category: 'AI / ML',
    accentColor: 'bg-[#FEF08A]',
    metaStatus: 'DEPLOYED // R² = 0.90 VALIDATED',
    githubUrl: LINKS.projects.vayudrishti.githubUrl,
    demoUrl: LINKS.projects.vayudrishti.demoUrl,
    architectureFlow: [
      'Multi-Source Ingestion: Sentinel-5P/MODIS Satellite AOD + CPCB Ground Feeds + ERA5 Weather',
      'Spatiotemporal Feature Alignment, Geographic Encoding & Missing Value Imputation',
      'Trained ML Regression Engine Predicting PM2.5 / PM10 & Categorical AQI Bands',
      'Interactive Streamlit Dashboard & Sub-100ms REST API for Nationwide Monitoring'
    ],
    sampleCode: `# VayuDrishti Multi-Source Feature Fusion & AQI Prediction
import joblib
import numpy as np

def predict_regional_aqi(satellite_aod, era5_weather, cpcb_station_history):
    """Fuses satellite aerosol depth with reanalysis weather to predict AQI."""
    features = np.array([
        satellite_aod["aod_550nm"],
        era5_weather["temperature_k"],
        era5_weather["relative_humidity"],
        era5_weather["surface_pressure"],
        era5_weather["wind_speed_10m"],
        cpcb_station_history["rolling_pm25_mean"]
    ]).reshape(1, -1)

    model = joblib.load("models/vayudrishti_rf_model.pkl")
    pm25_pred = float(model.predict(features)[0])
    
    return {
        "pm25_forecast": round(pm25_pred, 2),
        "aqi_category": "Severe" if pm25_pred > 250 else "Poor" if pm25_pred > 120 else "Moderate",
        "alert_triggered": bool(pm25_pred > 250)
    }`
  },
  {
    id: '7',
    number: '#04',
    badge: 'RETAIL ML & SUSTAINABILITY',
    tagline: 'SPARKATHON 2025 // FOOD RESCUE',
    title: 'Smart Inventory Management System',
    shortDescription: 'Retail inventory intelligence platform built for Walmart Sparkathon 2025 that pairs sales demand forecasting with expiry-risk classification — cutting food waste while automatically routing near-expiry perishables to food banks.',
    problem: 'Retail supermarkets discard millions of tons of edible food each year due to rigid restocking cycles, while simultaneously suffering costly stockouts when erratic demand surges strike popular perishable items.',
    approach: 'Trained predictive machine learning models on Walmart store transaction data, engineering rolling sales averages, holiday calendars, and seasonal demand factors to forecast item-level sales. Coupled this with an expiry-risk classification model that tracks batch shelf life, computes dynamic replenishment quantities, and triggers automated food rescue donation alerts for regional charities before perishables spoil. Packaged into an interactive Streamlit store manager dashboard with Plotly visual analytics.',
    impactMetrics: [
      'Built for Walmart Sparkathon 2025: Tackles retail inventory waste and store-level stock imbalances',
      '~30% simulated reduction in perishable grocery waste through proactive shelf-life expiry classification',
      '~25% revenue optimization via feature-engineered store-item demand forecasting',
      'Automated charity donation triggers routing soon-to-expire food batches to regional food banks'
    ],
    tags: ['Python', 'Scikit-Learn', 'Streamlit', 'Pandas', 'Plotly', 'NumPy'],
    category: 'Forecasting',
    accentColor: 'bg-[#A5F3FC]',
    metaStatus: 'SPARKATHON 2025 // 30% WASTE CUT',
    githubUrl: LINKS.projects.smartInventory.githubUrl,
    liveUrl: LINKS.projects.smartInventory.liveUrl,
    demoUrl: LINKS.projects.smartInventory.demoUrl,
    architectureFlow: [
      'Walmart Transaction Data Ingest: Sales History, Holiday Indicators & Promotional Markdown Signals',
      'Feature Engineering Pipeline: Rolling Sales Windows, Day-of-Week Trends & Seasonal Volatility',
      'Dual ML Decision Engine: Item Demand Forecasting Regressor + Batch Expiry Risk Classifier',
      'Actionable Store Manager Dashboard: Dynamic Restock Suggestions & Automated Donation Workflows'
    ],
    sampleCode: `# Smart Inventory Expiry Risk & Restocking Optimizer
import numpy as np

def calculate_smart_restock(inventory_batch, forecast_model, shelf_life_days):
    """Predicts upcoming sales demand and flags batches needing charity donation."""
    expected_sales_next_7d = float(forecast_model.predict([inventory_batch["features"]])[0])
    current_stock = inventory_batch["current_stock_units"]
    days_to_expiry = inventory_batch["days_until_expiration"]

    # If stock exceeds projected sales before expiration, trigger donation
    surplus_at_expiry = current_stock - (expected_sales_next_7d * (days_to_expiry / 7.0))
    donation_recommended = surplus_at_expiry > 0 and days_to_expiry <= 3

    reorder_quantity = max(0, int(expected_sales_next_7d * 1.2 - current_stock))
    return {
        "recommended_reorder": reorder_quantity,
        "expiry_risk_alert": bool(days_to_expiry <= 2),
        "charity_donation_units": max(0, int(surplus_at_expiry)) if donation_recommended else 0
    }`
  },
  {
    id: '8',
    number: '#05',
    badge: 'PRODUCTION RAG',
    tagline: '77 PAGES // BM25 + DENSE RRF',
    title: 'Colophon: RAG Knowledge Assistant',
    shortDescription: 'Production-grade hybrid RAG assistant over 77 pages of Claude API documentation that fuses sparse BM25 keyword search with dense semantic embeddings to eliminate hallucinated code syntax.',
    problem: 'When developers query technical API documentation, standard vector search frequently fails on exact identifier names like tool_choice or specific HTTP params, causing LLMs to confidently hallucinate wrong code syntax.',
    approach: 'Scraped and structured 77 pages (2,621 chunks) of Anthropic\'s Claude API documentation with heading-aware, code-atomic chunking. Built a hybrid retrieval pipeline querying dense all-MiniLM-L6-v2 vectors and sparse BM25 in parallel, fused via Reciprocal Rank Fusion (RRF, k=60) and reranked using a cross-encoder. Added a confidence-threshold guardrail achieving 100% out-of-domain refusal accuracy on test benchmarks, and implemented an instant dev/prod switch between local Ollama (llama3.1:8b) and cloud Groq inference via a single .env flag. Shipped with a Next.js 16 frontend and FastAPI backend backed by 20 automated pytest tests and a full RAGAS evaluation ablation study.',
    impactMetrics: [
      'Recall@5 jumped from 0.80 to 0.90 via hybrid RRF search, catching exact API syntax vectors miss',
      'Context precision raised to 0.86 and faithfulness to 0.71 across 25 held-out RAGAS ablation benchmarks',
      '100% refusal accuracy on out-of-domain queries (stops hallucinations before LLM generation)',
      'Dual-backend toggle: zero-cost local dev with Ollama or high-speed cloud production with Groq'
    ],
    tags: ['Python', 'FastAPI', 'Next.js 16', 'ChromaDB', 'Groq', 'Ollama', 'Docker'],
    category: 'RAG & Agents',
    accentColor: 'bg-[#E9D5FF]',
    metaStatus: 'BENCHMARKED // RAGAS VERIFIED',
    githubUrl: LINKS.projects.colophon.githubUrl,
    liveUrl: LINKS.projects.colophon.liveUrl,
    architectureFlow: [
      'Documentation Ingestion: 77 Claude API Pages (2,621 Chunks) with Heading-Aware Code Chunking',
      'Parallel Hybrid Retrieval: all-MiniLM-L6-v2 Vector Embeddings + Sparse BM25 Keyword Search',
      'Reciprocal Rank Fusion (RRF k=60) & Cross-Encoder Reranking for Exact Syntax Precision',
      'Confidence Guardrail Gate (100% Out-of-Domain Refusal) + Fast Dual Backend (Ollama / Groq)'
    ],
    sampleCode: `# Colophon Hybrid RRF Retrieval & Guardrail Gate
from sentence_transformers import CrossEncoder

def hybrid_rrf_query(query: str, vector_hits, bm25_hits, k=60):
    """Fuses dense vector results and sparse BM25 keyword hits using RRF."""
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
  },
  {
    id: '5',
    number: '#06',
    badge: 'TERMINAL RPG',
    tagline: 'RETRO CRT // NVIDIA NIM',
    title: 'PromptQuest: Infinite Lore',
    shortDescription: 'A cinematic retro-terminal text adventure where you define any starting premise and an AI Game Master authors a living, unscripted world — complete with CRT scanlines, 8-bit sound effects, and structured turn-by-turn narrative branches.',
    problem: 'Traditional text adventure games rely on predictable, pre-scripted decision trees that quickly lose replayability, while open-ended LLM chats suffer from hallucinations, forgotten inventory items, and a lack of true game mechanics.',
    approach: 'Engineered a stateful, interactive web terminal combining a React 18 frontend with a FastAPI backend powered by NVIDIA NIM. Designed an open scenario onboarding workflow where players define custom premises and genre tags. The backend enforces strict Pydantic JSON schemas to generate narrative prose, dynamic ASCII art illustrations, and exactly three meaningful follow-up choices every turn while deterministically tracking player health (HP), inventory items, and game-over states. Enhanced with CRT phosphor scanlines, glitch typography, typewriter pacing, and vintage Web Audio sound effects.',
    impactMetrics: [
      'FastAPI backend powered by high-throughput NVIDIA NIM inference via OpenAI-compatible SDK',
      'Strict Pydantic JSON schema ensuring structured turns: narrative prose, ASCII art & 3 contextual choices',
      'Deterministic state machine tracking HP, inventory pickups, turn history & game-over conditions',
      'Immersive retro terminal UI with CRT scanlines, glitch typography, typewriter pacing & vintage audio SFX'
    ],
    tags: ['React 18', 'FastAPI', 'NVIDIA NIM', 'Tailwind CSS', 'Pydantic', 'Web Audio API', 'Vite'],
    category: 'NLP & Agents',
    accentColor: 'bg-[#FECDD3]',
    metaStatus: 'LIVE // CINEMATIC ENGINE',
    githubUrl: LINKS.projects.promptQuest.githubUrl,
    architectureFlow: [
      'Player Onboarding: Custom Opening Premise Definition & Multi-Genre Tag Selection',
      'Deterministic State Packaging: Tracks Health (HP), Inventory Arrays & Turn History',
      'NVIDIA NIM LLM Inference with Enforced JSON Schema (Prose, ASCII Art & 3 Choices)',
      'CRT Terminal Display: Scanlines, Typewriter Pacing, Audio SFX & Branching Input'
    ],
    sampleCode: `# PromptQuest FastAPI Engine & NVIDIA NIM Structured Story Loop
from openai import OpenAI
from pydantic import BaseModel

class GameTurnResponse(BaseModel):
    narrative: str
    ascii_art: str
    hp_delta: int
    inventory_added: list[str]
    choices: list[str]  # Exactly 3 branching contextual actions
    is_game_over: bool

def generate_story_turn(player_state: dict, chosen_action: str) -> GameTurnResponse:
    client = OpenAI(base_url="https://integrate.api.nvidia.com/v1", api_key=NIM_API_KEY)
    response = client.beta.chat.completions.parse(
        model="meta/llama-3.1-70b-instruct",
        messages=[
            {"role": "system", "content": "You are an unyielding Game Master. Advance the world based on state."},
            {"role": "user", "content": f"State: {player_state} | Player Action: {chosen_action}"}
        ],
        response_format=GameTurnResponse,
    )
    return response.choices[0].message.parsed`
  },
  {
    id: '6',
    number: '#07',
    badge: 'HYBRID DEEP LEARNING',
    tagline: '8-CLASS WEBCAM CV',
    title: 'Emotion Vision',
    shortDescription: 'Real-time facial emotion recognition engine that fuses a custom convolutional network with a fine-tuned MobileNetV2 backbone to classify 8 human emotional expressions from live webcam feeds or uploaded photos.',
    problem: 'Facial expression recognition models often suffer from poor generalization across diverse lighting conditions, high inference latency, or severe class confusion on nuanced emotions like contempt, fear, and disgust.',
    approach: 'Architected a hybrid deep learning model combining a custom multi-layer CNN front-end with a pre-trained MobileNetV2 backbone in TensorFlow/Keras. Built an end-to-end data and training pipeline: MD5 image deduplication, corrupt image purging, class balancing, and a two-stage training strategy (Phase 1: freeze backbone to train classification heads; Phase 2: unfreeze top 30 MobileNetV2 layers with label smoothing). Deployed real-time webcam inference featuring OpenCV Haar cascade face detection, per-emotion probability bars, and an interactive Streamlit web dashboard.',
    impactMetrics: [
      'Hybrid architecture combining custom 3-block CNN with MobileNetV2 transfer learning backbone',
      'Rigorous two-stage training loop: frozen head convergence followed by top-30 layer fine-tuning',
      'Accurately classifies 8 human emotions: Anger, Contempt, Disgust, Fear, Happy, Neutral, Sad, Surprise',
      'Live real-time webcam inference with OpenCV bounding boxes, confidence bar overlays & Streamlit app'
    ],
    tags: ['TensorFlow', 'MobileNetV2', 'OpenCV', 'Streamlit', 'Python', 'Plotly', 'Scikit-Learn'],
    category: 'Computer Vision',
    accentColor: 'bg-[#FED7AA]',
    metaStatus: 'TESTED // 8 EMOTIONS CLASSIFIED',
    githubUrl: LINKS.projects.emotionVision.githubUrl,
    architectureFlow: [
      'Data Pipeline & Hygiene: MD5 Deduplication, Corrupt Image Purging & RGB Standardization',
      'Hybrid Dual-Branch Model: Custom Convolutional Feature Extractor Fused with MobileNetV2 Backbone',
      'Two-Stage Fine-Tuning: Frozen Backbone Warmup (Phase 1) + Top-30 Layer Unfreezing (Phase 2)',
      'Live Inference Engine: OpenCV Haar Face Localization + Real-Time Webcam Streamlit Telemetry'
    ],
    sampleCode: `# Emotion Vision Hybrid Architecture & Real-Time Inference
import tensorflow as tf
from tensorflow.keras import layers, Model
from tensorflow.keras.applications import MobileNetV2

def build_hybrid_emotion_model(input_shape=(75, 75, 3), num_classes=8):
    inputs = layers.Input(shape=input_shape)
    
    # Branch A: Custom Conv Front-End
    x_cnn = layers.Conv2D(32, (3, 3), padding='same', activation='relu')(inputs)
    x_cnn = layers.BatchNormalization()(x_cnn)
    x_cnn = layers.MaxPooling2D()(x_cnn)
    x_cnn = layers.Flatten()(x_cnn)
    
    # Branch B: MobileNetV2 Backbone
    base = MobileNetV2(input_shape=input_shape, include_top=False, weights='imagenet')
    base.trainable = False  # Unfrozen in Phase 2
    x_mobile = layers.GlobalAveragePooling2D()(base(inputs))
    
    # Concatenate branches and classify
    merged = layers.concatenate([x_cnn, x_mobile])
    dense = layers.Dense(512, activation='relu')(merged)
    dense = layers.Dropout(0.4)(dense)
    outputs = layers.Dense(num_classes, activation='softmax')(dense)
    
    return Model(inputs=inputs, outputs=outputs)`
  },
  {
    id: '4',
    number: '#08',
    badge: 'MULTI-MODEL NLP',
    tagline: 'WHATSAPP SENTIMENT & OCR',
    title: 'Chat Analyzer',
    shortDescription: 'Transforms raw WhatsApp chat logs or phone screenshots into deep behavioral insights — running three batched transformer models to reveal sentiment arcs, 6 core emotions, toxicity spikes, and relationship red flags.',
    problem: 'Chat transcripts are dense walls of text where emotional dynamics, escalating conflicts, subtle toxicity, and conversational imbalances stay completely hidden from casual reading.',
    approach: 'Constructed an end-to-end conversation intelligence app supporting WhatsApp .txt exports, direct copy-paste, or mobile screenshot OCR via EasyOCR. Implemented batched inference across three Hugging Face transformer models: Twitter-RoBERTa for sentiment polarity, DistilBERT for 6 discrete emotions (joy, sadness, anger, fear, love, surprise), and Toxic-BERT for toxic language detection. Added behavioral heuristic filters to flag gaslighting phrases, emotional distress patterns, and conversational one-sidedness while scoring participant communication health (0–100).',
    impactMetrics: [
      'Triple transformer pipeline: Twitter-RoBERTa (sentiment) + DistilBERT (emotions) + Toxic-BERT (toxicity)',
      'Multi-modal input support: WhatsApp .txt exports, raw text paste, or smartphone screenshot OCR via EasyOCR',
      'Batched model inference keeping analysis fast and responsive across 10,000+ message logs',
      'Behavioral relationship diagnostics: flags gaslighting phrases, emotional distress & one-sided replies'
    ],
    tags: ['Python', 'Streamlit', 'Transformers', 'RoBERTa', 'DistilBERT', 'EasyOCR', 'Plotly'],
    category: 'NLP & Agents',
    accentColor: 'bg-[#DDD6FE]',
    metaStatus: 'OPEN-SOURCE // 3 TRANSFORMERS',
    githubUrl: LINKS.projects.chatAnalyzer.githubUrl,
    architectureFlow: [
      'Flexible Chat Ingest: WhatsApp .txt Parser, Raw Text Stream, or EasyOCR Screenshot Extractor',
      'Batched Transformer Inference: Twitter-RoBERTa (Sentiment) + DistilBERT (6 Emotions)',
      'Toxic-BERT Screening & Relationship Behavioral Flagging (Gaslighting, Conversational Imbalance)',
      'Interactive Streamlit Dashboard with Participant Communication Health Scores (0-100) & Plotly Arcs'
    ],
    sampleCode: `# Chat Analyzer Batched Multi-Model NLP Pipeline
from transformers import pipeline

def analyze_conversation_batch(messages: list[str]):
    """Runs batched inference across sentiment, emotion, and toxicity models."""
    sentiment_pipe = pipeline("sentiment-analysis", model="cardiffnlp/twitter-roberta-base-sentiment-latest")
    emotion_pipe = pipeline("text-classification", model="bhadresh-savani/distilbert-base-uncased-emotion")
    toxicity_pipe = pipeline("text-classification", model="unitary/toxic-bert")

    # Batched inference processes messages in efficient tensor passes
    sentiments = sentiment_pipe(messages, batch_size=32, truncation=True)
    emotions = emotion_pipe(messages, batch_size=32, truncation=True)
    toxicities = toxicity_pipe(messages, batch_size=32, truncation=True)

    toxic_count = sum(1 for t in toxicities if t["score"] > 0.5)
    return {
        "dominant_emotions": [e["label"] for e in emotions],
        "sentiment_scores": [s["score"] for s in sentiments],
        "toxicity_alerts": toxic_count,
        "communication_score": max(0, 100 - (toxic_count * 10))
    }
  }`
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
    highlightStat: { label: 'CURRENT ROLE', value: 'Active Freelancer', color: 'bg-[#10B981]' },
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
    sticker: '★ CHAOS → CODE',
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
