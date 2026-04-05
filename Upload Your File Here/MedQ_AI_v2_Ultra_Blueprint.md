# 🧠 MedQ AI — v2.0 ULTRA BLUEPRINT
## React + Vite | Bilingual AR/EN | Zero-Gap Code | Premium UI
### Every line written. No room for AI improvisation.

---

> **⚠️ CRITICAL INSTRUCTION FOR THE CODING AI:**
> This document is a COMPLETE specification. You MUST copy code EXACTLY as written.
> Do NOT invent new libraries. Do NOT change variable names. Do NOT add features not listed.
> Every file is specified. Every function is written. Your job is ASSEMBLY, not invention.

---

# ══════════════════════════════════════
# PART 0 — PROJECT SETUP (DO THIS FIRST)
# ══════════════════════════════════════

## Step 0.1 — Create Vite React Project

Run these commands IN ORDER. Do not skip any:

```bash
npm create vite@latest medq-ai -- --template react
cd medq-ai
npm install
npm install axios
npm install react-router-dom
npm install react-dropzone
npm install mammoth
npm install jszip
npm install react-hot-toast
npm install lucide-react
npm install react-i18next i18next
npm install pdfjs-dist
npm run dev
```

## Step 0.2 — Delete Default Files

Delete these files (they will be replaced):
- `src/App.css`
- `src/index.css`
- `src/App.jsx`
- `src/assets/react.svg`
- `public/vite.svg`

## Step 0.3 — Create Folder Structure

Run this command to create all folders:

```bash
mkdir -p src/components/ui
mkdir -p src/components/upload
mkdir -p src/components/config
mkdir -p src/components/results
mkdir -p src/components/layout
mkdir -p src/api
mkdir -p src/utils
mkdir -p src/hooks
mkdir -p src/i18n
mkdir -p src/styles
mkdir -p public/fonts
```

---

# ══════════════════════════════════════
# PART 1 — DESIGN TOKENS & GLOBAL STYLES
# ══════════════════════════════════════

## File: `src/styles/tokens.css`
## CREATE THIS FILE — COPY EXACTLY:

```css
/* ============================================
   MEDQ AI — DESIGN TOKENS
   DO NOT MODIFY THESE VALUES
   ============================================ */

:root {
  /* ── BACKGROUNDS ── */
  --bg-base:        #050A14;
  --bg-elevated:    #0A1628;
  --bg-card:        #0D1E35;
  --bg-card-hover:  #112440;
  --bg-surface:     #162B47;
  --bg-overlay:     rgba(5, 10, 20, 0.85);

  /* ── BRAND COLORS ── */
  --brand-primary:    #3B82F6;
  --brand-primary-dim: rgba(59, 130, 246, 0.15);
  --brand-secondary:  #8B5CF6;
  --brand-secondary-dim: rgba(139, 92, 246, 0.12);
  --brand-accent:     #06B6D4;
  --brand-accent-dim: rgba(6, 182, 212, 0.12);

  /* ── QUESTION TYPE COLORS ── */
  --color-mcq:     #3B82F6;
  --color-mcq-dim: rgba(59,130,246,0.12);
  --color-tf:      #8B5CF6;
  --color-tf-dim:  rgba(139,92,246,0.12);
  --color-sa:      #10B981;
  --color-sa-dim:  rgba(16,185,129,0.12);
  --color-fb:      #F59E0B;
  --color-fb-dim:  rgba(245,158,11,0.12);

  /* ── STATUS COLORS ── */
  --color-success:  #10B981;
  --color-warning:  #F59E0B;
  --color-error:    #EF4444;
  --color-info:     #3B82F6;

  /* ── TEXT ── */
  --text-primary:   #F1F5F9;
  --text-secondary: #94A3B8;
  --text-muted:     #475569;
  --text-inverse:   #050A14;

  /* ── BORDERS ── */
  --border-subtle:  rgba(255,255,255,0.06);
  --border-default: rgba(255,255,255,0.10);
  --border-strong:  rgba(255,255,255,0.18);
  --border-brand:   rgba(59,130,246,0.40);

  /* ── SHADOWS ── */
  --shadow-sm:   0 2px 8px rgba(0,0,0,0.4);
  --shadow-md:   0 4px 20px rgba(0,0,0,0.5);
  --shadow-lg:   0 8px 40px rgba(0,0,0,0.6);
  --shadow-xl:   0 16px 60px rgba(0,0,0,0.7);
  --shadow-brand: 0 0 30px rgba(59,130,246,0.20);
  --shadow-glow:  0 0 60px rgba(59,130,246,0.15), 0 0 120px rgba(139,92,246,0.08);

  /* ── GRADIENTS ── */
  --grad-brand:     linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
  --grad-accent:    linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%);
  --grad-card:      linear-gradient(145deg, #0D1E35 0%, #0A1628 100%);
  --grad-hero:      linear-gradient(160deg, #050A14 0%, #0A1628 50%, #050A14 100%);
  --grad-mcq:       linear-gradient(135deg, #1E3A5F 0%, #0D1E35 100%);
  --grad-tf:        linear-gradient(135deg, #2D1B5A 0%, #0D1E35 100%);
  --grad-sa:        linear-gradient(135deg, #064E3B 0%, #0D1E35 100%);
  --grad-fb:        linear-gradient(135deg, #451A03 0%, #0D1E35 100%);

  /* ── SPACING ── */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;

  /* ── RADIUS ── */
  --radius-sm:   8px;
  --radius-md:   12px;
  --radius-lg:   16px;
  --radius-xl:   20px;
  --radius-2xl:  28px;
  --radius-full: 9999px;

  /* ── TYPOGRAPHY ── */
  --font-en: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-ar: 'Cairo', 'Noto Kufi Arabic', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  /* ── TRANSITIONS ── */
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-sharp:  cubic-bezier(0.4, 0, 1, 1);
  --duration-fast:   150ms;
  --duration-normal: 250ms;
  --duration-slow:   400ms;
  --duration-slower: 600ms;
}
```

---

## File: `src/styles/global.css`
## CREATE THIS FILE — COPY EXACTLY:

```css
/* ============================================
   MEDQ AI — GLOBAL STYLES
   ============================================ */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Cairo:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap');
@import './tokens.css';

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-en);
  line-height: 1.6;
  min-height: 100vh;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* RTL Support */
body[dir="rtl"],
body[dir="rtl"] * {
  font-family: var(--font-ar);
}

body[dir="ltr"],
body[dir="ltr"] * {
  font-family: var(--font-en);
}

/* Arabic-specific overrides */
[dir="rtl"] .font-mono,
[dir="rtl"] .timer,
[dir="rtl"] .count-badge {
  font-family: var(--font-mono) !important;
  direction: ltr;
  display: inline-block;
}

/* Scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg-base); }
::-webkit-scrollbar-thumb {
  background: var(--bg-surface);
  border-radius: var(--radius-full);
}
::-webkit-scrollbar-thumb:hover { background: var(--text-muted); }

/* Selection */
::selection {
  background: var(--brand-primary-dim);
  color: var(--brand-primary);
}

/* Focus visible */
:focus-visible {
  outline: 2px solid var(--brand-primary);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

/* Remove default button styles */
button {
  border: none;
  cursor: pointer;
  background: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
}

/* Remove default input styles */
input, textarea, select {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background: none;
  border: none;
  outline: none;
}

/* ── UTILITY CLASSES ── */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
}

/* ── KEYFRAME ANIMATIONS ── */

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInScale {
  from { opacity: 0; transform: scale(0.96); }
  to   { opacity: 1; transform: scale(1); }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(-20px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 20px rgba(59,130,246,0.2); }
  50%       { box-shadow: 0 0 40px rgba(59,130,246,0.5), 0 0 60px rgba(139,92,246,0.2); }
}

@keyframes shimmer {
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-8px); }
}

@keyframes wave {
  0%, 100% { transform: scaleY(1); }
  50%       { transform: scaleY(2); }
}

@keyframes dotPulse {
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40%            { transform: scale(1); opacity: 1; }
}

@keyframes progressFill {
  from { width: 0%; }
  to   { width: var(--target-width, 100%); }
}

@keyframes cardEntrance {
  from { opacity: 0; transform: translateY(30px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes orbFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(30px, -20px) scale(1.05); }
  66%       { transform: translate(-20px, 15px) scale(0.97); }
}

@keyframes borderRotate {
  from { --border-angle: 0deg; }
  to   { --border-angle: 360deg; }
}

/* ── ANIMATION UTILITY CLASSES ── */

.animate-fadeIn      { animation: fadeIn var(--duration-normal) var(--ease-smooth) both; }
.animate-fadeInUp    { animation: fadeInUp var(--duration-slow) var(--ease-smooth) both; }
.animate-fadeInScale { animation: fadeInScale var(--duration-slow) var(--ease-bounce) both; }
.animate-slideInRight { animation: slideInRight var(--duration-slow) var(--ease-smooth) both; }
.animate-slideInLeft  { animation: slideInLeft var(--duration-slow) var(--ease-smooth) both; }
.animate-pulseGlow   { animation: pulseGlow 3s ease-in-out infinite; }
.animate-spin        { animation: spin 1s linear infinite; }
.animate-bounce      { animation: bounce 1.5s ease-in-out infinite; }

/* Stagger delays */
.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
.delay-500 { animation-delay: 500ms; }
.delay-600 { animation-delay: 600ms; }
.delay-700 { animation-delay: 700ms; }
.delay-800 { animation-delay: 800ms; }
```

---

# ══════════════════════════════════════
# PART 2 — i18n TRANSLATIONS
# ══════════════════════════════════════

## File: `src/i18n/en.js`
## CREATE THIS FILE — COPY EXACTLY:

```javascript
const en = {
  // App
  appName: "MedQ AI",
  appTagline: "AI-Powered Medical Question Generator",

  // Navigation
  nav: {
    home: "Home",
    upload: "Upload",
    generate: "Generate",
    results: "Results",
    history: "History",
  },

  // Language toggle
  switchLang: "العربية",

  // Upload Section
  upload: {
    title: "Upload Lecture Files",
    subtitle: "Drop your PDF, PPTX, DOCX, or images and let AI do the work",
    dropHere: "Drop files here",
    orBrowse: "or click to browse",
    supported: "Supported: PDF · PPTX · DOCX · JPG · PNG · WEBP",
    maxSize: "Max 20MB per file",
    uploading: "Processing files...",
    filesReady: "Files ready",
    addMore: "Add more files",
    removeFile: "Remove",
    fileCount_one: "{{count}} file selected",
    fileCount_other: "{{count}} files selected",
  },

  // Configuration
  config: {
    title: "Configure Questions",
    subtitle: "Set how many questions of each type",
    mcq: "Multiple Choice (MCQ)",
    tf: "True / False",
    sa: "Short Answer",
    fb: "Fill in the Blank",
    total: "Total Questions",
    difficulty: "Difficulty Level",
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
    language: "Output Language",
    outputAr: "Arabic",
    outputEn: "English",
    outputBoth: "Both",
  },

  // Actions
  actions: {
    generate: "Generate Questions",
    generating: "Generating...",
    download: "Download",
    downloadPDF: "Download PDF",
    downloadJSON: "Download JSON",
    copy: "Copy",
    copied: "Copied!",
    share: "Share",
    retry: "Try Again",
    clear: "Clear All",
    back: "Back",
    next: "Next",
    startOver: "Start Over",
  },

  // Processing stages
  stages: {
    extracting: "Extracting file content...",
    analyzing: "AI Vision analyzing slides...",
    generating: "MiniMax generating questions...",
    formatting: "Formatting output...",
    done: "Questions ready!",
  },

  // Results
  results: {
    title: "Generated Questions",
    questionCount: "{{count}} Questions Generated",
    showAnswer: "Show Answer",
    hideAnswer: "Hide Answer",
    correct: "Correct",
    incorrect: "Incorrect",
    answer: "Answer",
    explanation: "Explanation",
    modelAnswer: "Model Answer",
    topic: "Topic",
    from: "From",
    filter: "Filter by type",
    all: "All",
    noResults: "No questions yet. Upload a file to get started.",
  },

  // File types
  types: {
    MCQ: "MCQ",
    TF: "True / False",
    SA: "Short Answer",
    FB: "Fill in Blank",
  },

  // Errors
  errors: {
    fileTooBig: "File too large. Maximum size is 20MB.",
    unsupportedType: "Unsupported file type.",
    apiError: "AI service error. Please try again.",
    networkError: "Network error. Check your connection.",
    parseError: "Could not read AI response. Retrying...",
    noFile: "Please upload at least one file.",
    noConfig: "Please select at least one question type.",
  },

  // History
  history: {
    title: "Past Sessions",
    empty: "No sessions yet",
    session: "Session",
    questions: "questions",
    restore: "View",
    delete: "Delete",
  },

  // Footer
  footer: {
    poweredBy: "Powered by OpenRouter",
    madeWith: "Made for Medical Students",
  },
};

export default en;
```

## File: `src/i18n/ar.js`
## CREATE THIS FILE — COPY EXACTLY:

```javascript
const ar = {
  // App
  appName: "MedQ AI",
  appTagline: "مولّد أسئلة طبية بالذكاء الاصطناعي",

  // Navigation
  nav: {
    home: "الرئيسية",
    upload: "رفع الملفات",
    generate: "توليد",
    results: "النتائج",
    history: "السجل",
  },

  // Language toggle
  switchLang: "English",

  // Upload Section
  upload: {
    title: "ارفع ملفات المحاضرة",
    subtitle: "اسحب ملفات PDF أو PPTX أو DOCX أو الصور ودع الذكاء الاصطناعي يعمل",
    dropHere: "اسحب الملفات هنا",
    orBrowse: "أو اضغط للاختيار",
    supported: "الصيغ المدعومة: PDF · PPTX · DOCX · JPG · PNG · WEBP",
    maxSize: "الحد الأقصى 20 ميغا لكل ملف",
    uploading: "جاري معالجة الملفات...",
    filesReady: "الملفات جاهزة",
    addMore: "إضافة ملفات",
    removeFile: "حذف",
    fileCount_one: "ملف واحد محدد",
    fileCount_other: "{{count}} ملفات محددة",
  },

  // Configuration
  config: {
    title: "ضبط الأسئلة",
    subtitle: "حدد عدد أسئلة كل نوع",
    mcq: "اختيار من متعدد",
    tf: "صح أو خطأ",
    sa: "إجابة قصيرة",
    fb: "أكمل الفراغ",
    total: "إجمالي الأسئلة",
    difficulty: "مستوى الصعوبة",
    easy: "سهل",
    medium: "متوسط",
    hard: "صعب",
    language: "لغة الإخراج",
    outputAr: "عربي",
    outputEn: "إنجليزي",
    outputBoth: "كلاهما",
  },

  // Actions
  actions: {
    generate: "توليد الأسئلة",
    generating: "جاري التوليد...",
    download: "تحميل",
    downloadPDF: "تحميل PDF",
    downloadJSON: "تحميل JSON",
    copy: "نسخ",
    copied: "تم النسخ!",
    share: "مشاركة",
    retry: "إعادة المحاولة",
    clear: "مسح الكل",
    back: "رجوع",
    next: "التالي",
    startOver: "البداية",
  },

  // Processing stages
  stages: {
    extracting: "جاري استخراج محتوى الملفات...",
    analyzing: "الذكاء البصري يحلل المحتوى...",
    generating: "MiniMax يولّد الأسئلة...",
    formatting: "جاري تنسيق النتائج...",
    done: "الأسئلة جاهزة!",
  },

  // Results
  results: {
    title: "الأسئلة المولّدة",
    questionCount: "{{count}} سؤال مولّد",
    showAnswer: "إظهار الإجابة",
    hideAnswer: "إخفاء الإجابة",
    correct: "صحيح",
    incorrect: "خطأ",
    answer: "الإجابة",
    explanation: "التفسير",
    modelAnswer: "الإجابة النموذجية",
    topic: "الموضوع",
    from: "من",
    filter: "تصفية حسب النوع",
    all: "الكل",
    noResults: "لا توجد أسئلة بعد. ارفع ملفاً للبدء.",
  },

  // File types
  types: {
    MCQ: "اختيار متعدد",
    TF: "صح / خطأ",
    SA: "إجابة قصيرة",
    FB: "أكمل الفراغ",
  },

  // Errors
  errors: {
    fileTooBig: "الملف كبير جداً. الحد الأقصى 20 ميغابايت.",
    unsupportedType: "صيغة الملف غير مدعومة.",
    apiError: "خطأ في خدمة الذكاء الاصطناعي. حاول مجدداً.",
    networkError: "خطأ في الشبكة. تحقق من اتصالك.",
    parseError: "تعذّر قراءة رد الذكاء الاصطناعي. إعادة المحاولة...",
    noFile: "يرجى رفع ملف واحد على الأقل.",
    noConfig: "يرجى تحديد نوع سؤال واحد على الأقل.",
  },

  // History
  history: {
    title: "الجلسات السابقة",
    empty: "لا توجد جلسات سابقة",
    session: "جلسة",
    questions: "سؤال",
    restore: "عرض",
    delete: "حذف",
  },

  // Footer
  footer: {
    poweredBy: "مدعوم بـ OpenRouter",
    madeWith: "لطلاب الكليات الطبية",
  },
};

export default ar;
```

## File: `src/i18n/index.js`
## CREATE THIS FILE — COPY EXACTLY:

```javascript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import ar from './ar';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: localStorage.getItem('medq-lang') || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
```

---

# ══════════════════════════════════════
# PART 3 — API LAYER (COMPLETE)
# ══════════════════════════════════════

## File: `src/api/openrouter.js`
## CREATE THIS FILE — COPY EXACTLY:

```javascript
// ============================================
// OPENROUTER API — BASE HANDLER
// ============================================

const OPENROUTER_BASE = 'https://openrouter.ai/api/v1';
const VISION_MODEL    = 'google/gemini-2.0-flash-exp:free';
const QUESTION_MODEL  = 'minimax/minimax-m2.5:free';

// Get API key from environment variable
// In your .env file: VITE_OPENROUTER_KEY=your_key_here
function getApiKey() {
  const key = import.meta.env.VITE_OPENROUTER_KEY;
  if (!key) throw new Error('VITE_OPENROUTER_KEY is not set in .env file');
  return key;
}

// ── BASE FETCH FUNCTION ──
async function callAPI(model, messages, maxTokens = 2000) {
  const response = await fetch(`${OPENROUTER_BASE}/chat/completions`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${getApiKey()}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://medq-ai.app',
      'X-Title': 'MedQ AI',
    },
    body: JSON.stringify({
      model,
      messages,
      max_tokens: maxTokens,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`API Error ${response.status}: ${errorBody}`);
  }

  const data = await response.json();

  if (!data.choices || !data.choices[0] || !data.choices[0].message) {
    throw new Error('Invalid API response structure');
  }

  return data.choices[0].message.content;
}

// ── STAGE 1: VISION MODEL ──
// Analyzes ONE page/image and extracts its content
export async function analyzeImageWithVision(base64Image, mimeType = 'image/jpeg') {
  const messages = [
    {
      role: 'user',
      content: [
        {
          type: 'image_url',
          image_url: {
            url: `data:${mimeType};base64,${base64Image}`,
          },
        },
        {
          type: 'text',
          text: `You are a medical content extractor. Analyze this lecture slide/page carefully.
Extract ALL content including: headings, bullet points, numbered lists, definitions,
medical terms, drug names, anatomical structures, physiological processes, 
pathological conditions, tables, and any other educational content.

Return ONLY this JSON (no markdown, no explanation):
{
  "title": "main title or heading of this slide",
  "keyTerms": ["term1", "term2", "term3"],
  "mainPoints": ["point1", "point2", "point3"],
  "definitions": [{"term": "name", "definition": "meaning"}],
  "fullText": "all text content concatenated here"
}`,
        },
      ],
    },
  ];

  const raw = await callAPI(VISION_MODEL, messages, 1000);

  // Clean and parse JSON
  const cleaned = raw.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();

  try {
    return JSON.parse(cleaned);
  } catch {
    // If JSON parse fails, return raw text wrapped in structure
    return {
      title: 'Page Content',
      keyTerms: [],
      mainPoints: [],
      definitions: [],
      fullText: raw,
    };
  }
}

// ── STAGE 2: QUESTION GENERATION MODEL ──
// Takes extracted content and generates questions
export async function generateQuestions(allContent, config) {
  const { mcqCount, tfCount, saCount, fbCount, difficulty, outputLang } = config;

  // Build combined content string
  const contentText = allContent
    .map((page, i) => {
      const lines = [];
      if (page.title) lines.push(`[SLIDE ${i + 1}]: ${page.title}`);
      if (page.mainPoints && page.mainPoints.length > 0) {
        lines.push('Key Points: ' + page.mainPoints.join(' | '));
      }
      if (page.definitions && page.definitions.length > 0) {
        page.definitions.forEach(d => {
          lines.push(`Definition: ${d.term} = ${d.definition}`);
        });
      }
      if (page.keyTerms && page.keyTerms.length > 0) {
        lines.push('Terms: ' + page.keyTerms.join(', '));
      }
      if (page.fullText) lines.push(page.fullText);
      return lines.join('\n');
    })
    .join('\n\n---\n\n');

  // Language instruction
  const langInstruction =
    outputLang === 'ar'
      ? 'Write ALL questions and answers in ARABIC language only.'
      : outputLang === 'en'
      ? 'Write ALL questions and answers in ENGLISH language only.'
      : 'Write questions in BOTH Arabic and English (Arabic first, then English translation).';

  const prompt = `You are an expert medical exam question writer.

LECTURE CONTENT:
${contentText}

TASK: Generate exam questions ONLY from the content above. Do NOT invent content.

LANGUAGE INSTRUCTION: ${langInstruction}

REQUIRED QUESTION COUNTS:
- MCQ (multiple choice, 4 options): ${mcqCount} questions
- TF (true or false): ${tfCount} questions
- SA (short answer): ${saCount} questions
- FB (fill in the blank): ${fbCount} questions

DIFFICULTY: ${difficulty}

RETURN ONLY THIS JSON (no markdown, no explanation outside JSON):
{
  "questions": [
    {
      "id": 1,
      "type": "MCQ",
      "question": "Question text here?",
      "options": {"A": "Option A", "B": "Option B", "C": "Option C", "D": "Option D"},
      "correctAnswer": "A",
      "explanation": "Why A is correct",
      "topic": "topic from lecture"
    },
    {
      "id": 2,
      "type": "TF",
      "question": "Statement here.",
      "correctAnswer": true,
      "explanation": "Why this is true or false",
      "topic": "topic from lecture"
    },
    {
      "id": 3,
      "type": "SA",
      "question": "Short answer question?",
      "modelAnswer": "Expected answer",
      "topic": "topic from lecture"
    },
    {
      "id": 4,
      "type": "FB",
      "question": "The _____ is responsible for X.",
      "answer": "correct word",
      "topic": "topic from lecture"
    }
  ],
  "summary": "Brief summary of the lecture content in 2 sentences",
  "totalGenerated": ${mcqCount + tfCount + saCount + fbCount}
}`;

  const raw = await callAPI(QUESTION_MODEL, [{ role: 'user', content: prompt }], 4000);

  const cleaned = raw.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();

  try {
    return JSON.parse(cleaned);
  } catch {
    throw new Error('Could not parse question generation response. Please try again.');
  }
}

export { VISION_MODEL, QUESTION_MODEL };
```

---

# ══════════════════════════════════════
# PART 4 — FILE PROCESSORS (COMPLETE)
# ══════════════════════════════════════

## File: `src/utils/fileProcessor.js`
## CREATE THIS FILE — COPY EXACTLY:

```javascript
// ============================================
// FILE PROCESSOR — Handles PDF, PPTX, DOCX, Images
// All functions return: Array of { imageBase64, mimeType, pageNumber, textFallback }
// ============================================

import mammoth from 'mammoth';
import JSZip from 'jszip';

// ── MAXIMUM FILE SIZE: 20MB ──
export const MAX_FILE_SIZE = 20 * 1024 * 1024;

// ── SUPPORTED FILE TYPES ──
export const SUPPORTED_TYPES = {
  'application/pdf': 'pdf',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'pptx',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
  'image/jpeg': 'image',
  'image/jpg': 'image',
  'image/png': 'image',
  'image/webp': 'image',
};

// ── VALIDATE FILE ──
export function validateFile(file) {
  if (file.size > MAX_FILE_SIZE) {
    return { valid: false, error: 'fileTooBig' };
  }
  if (!SUPPORTED_TYPES[file.type]) {
    return { valid: false, error: 'unsupportedType' };
  }
  return { valid: true, error: null };
}

// ── GET FILE EXTENSION ICON ──
export function getFileIcon(file) {
  const type = SUPPORTED_TYPES[file.type];
  if (type === 'pdf')   return '📄';
  if (type === 'pptx')  return '📊';
  if (type === 'docx')  return '📝';
  if (type === 'image') return '🖼️';
  return '📎';
}

// ── CONVERT FILE TO BASE64 ──
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      // reader.result is "data:mime/type;base64,XXXXX"
      // We want only the base64 part after the comma
      const base64 = reader.result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = () => reject(new Error('FileReader failed'));
    reader.readAsDataURL(file);
  });
}

// ── PROCESS IMAGE FILE ──
async function processImage(file) {
  const base64 = await fileToBase64(file);
  return [
    {
      imageBase64: base64,
      mimeType: file.type,
      pageNumber: 1,
      textFallback: null,
    },
  ];
}

// ── PROCESS PDF FILE ──
async function processPDF(file) {
  // Dynamically import pdfjs to avoid bundle issues
  const pdfjsLib = await import('pdfjs-dist');

  // IMPORTANT: Set worker source to CDN to avoid build errors
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

  const pages = [];

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);

    // Extract text
    const textContent = await page.getTextContent();
    const text = textContent.items
      .map((item) => item.str)
      .filter((str) => str.trim().length > 0)
      .join(' ');

    // Render page to canvas → base64
    const viewport = page.getViewport({ scale: 1.5 });
    const canvas = document.createElement('canvas');
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext('2d');

    await page.render({ canvasContext: ctx, viewport }).promise;

    // Convert canvas to base64 JPEG (smaller than PNG)
    const base64 = canvas.toDataURL('image/jpeg', 0.82).split(',')[1];

    pages.push({
      imageBase64: base64,
      mimeType: 'image/jpeg',
      pageNumber: pageNum,
      textFallback: text,
    });

    // Clean up canvas
    canvas.width = 0;
    canvas.height = 0;
  }

  return pages;
}

// ── PROCESS PPTX FILE ──
async function processPPTX(file) {
  const arrayBuffer = await file.arrayBuffer();
  const zip = await JSZip.loadAsync(arrayBuffer);

  // Find all slide XML files and sort them numerically
  const slideEntries = Object.keys(zip.files)
    .filter((name) => /^ppt\/slides\/slide\d+\.xml$/.test(name))
    .sort((a, b) => {
      const numA = parseInt(a.match(/slide(\d+)\.xml/)[1], 10);
      const numB = parseInt(b.match(/slide(\d+)\.xml/)[1], 10);
      return numA - numB;
    });

  const slides = [];

  for (let i = 0; i < slideEntries.length; i++) {
    const xmlContent = await zip.files[slideEntries[i]].async('text');

    // Extract text from XML — get content between <a:t> tags
    const textMatches = xmlContent.match(/<a:t[^>]*>([^<]*)<\/a:t>/g) || [];
    const text = textMatches
      .map((match) => match.replace(/<[^>]+>/g, '').trim())
      .filter((t) => t.length > 0)
      .join(' ');

    // For PPTX we don't render to canvas — we send the text directly
    // This is more reliable than trying to render slides
    slides.push({
      imageBase64: null,          // No image for PPTX slides
      mimeType: null,
      pageNumber: i + 1,
      textFallback: text || `Slide ${i + 1} (no text content)`,
    });
  }

  return slides;
}

// ── PROCESS DOCX FILE ──
async function processDOCX(file) {
  const arrayBuffer = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer });

  // Split into chunks of ~500 words for better processing
  const words = result.value.split(/\s+/).filter((w) => w.length > 0);
  const chunkSize = 500;
  const chunks = [];

  for (let i = 0; i < words.length; i += chunkSize) {
    chunks.push(words.slice(i, i + chunkSize).join(' '));
  }

  // If document is short, keep as single chunk
  if (chunks.length === 0) {
    chunks.push(result.value || 'Empty document');
  }

  return chunks.map((chunk, i) => ({
    imageBase64: null,
    mimeType: null,
    pageNumber: i + 1,
    textFallback: chunk,
  }));
}

// ── MAIN PROCESSOR — Entry point ──
export async function processFile(file) {
  const type = SUPPORTED_TYPES[file.type];

  if (type === 'image') return processImage(file);
  if (type === 'pdf')   return processPDF(file);
  if (type === 'pptx')  return processPPTX(file);
  if (type === 'docx')  return processDOCX(file);

  throw new Error(`Unsupported file type: ${file.type}`);
}

// ── PROCESS MULTIPLE FILES ──
export async function processAllFiles(files, onProgress) {
  const allPages = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (onProgress) {
      onProgress(Math.round((i / files.length) * 50)); // 0–50%
    }
    const pages = await processFile(file);
    allPages.push(...pages);
  }

  return allPages;
}
```

---

# ══════════════════════════════════════
# PART 5 — MAIN ORCHESTRATION HOOK
# ══════════════════════════════════════

## File: `src/hooks/useGenerator.js`
## CREATE THIS FILE — COPY EXACTLY:

```javascript
// ============================================
// GENERATOR HOOK — Orchestrates the full pipeline
// ============================================

import { useState, useCallback } from 'react';
import { processAllFiles } from '../utils/fileProcessor';
import { analyzeImageWithVision, generateQuestions } from '../api/openrouter';

// Stage definitions for UI display
export const STAGES = {
  IDLE:       { key: 'idle',       label: null,                    progress: 0   },
  EXTRACTING: { key: 'extracting', labelKey: 'stages.extracting',  progress: 15  },
  ANALYZING:  { key: 'analyzing',  labelKey: 'stages.analyzing',   progress: 40  },
  GENERATING: { key: 'generating', labelKey: 'stages.generating',  progress: 75  },
  FORMATTING: { key: 'formatting', labelKey: 'stages.formatting',  progress: 92  },
  DONE:       { key: 'done',       labelKey: 'stages.done',        progress: 100 },
  ERROR:      { key: 'error',      labelKey: null,                 progress: 0   },
};

export function useGenerator() {
  const [stage, setStage]       = useState(STAGES.IDLE);
  const [progress, setProgress] = useState(0);
  const [results, setResults]   = useState(null);
  const [error, setError]       = useState(null);

  const reset = useCallback(() => {
    setStage(STAGES.IDLE);
    setProgress(0);
    setResults(null);
    setError(null);
  }, []);

  const generate = useCallback(async (files, config) => {
    try {
      setError(null);
      setResults(null);

      // ── STAGE 1: Extract file content ──
      setStage(STAGES.EXTRACTING);
      setProgress(5);

      const rawPages = await processAllFiles(files, (p) => {
        setProgress(5 + Math.round(p * 0.20)); // 5–25%
      });

      setProgress(25);

      // ── STAGE 2: Analyze with Vision AI ──
      setStage(STAGES.ANALYZING);

      const analyzedPages = [];
      const pagesWithImages = rawPages.filter((p) => p.imageBase64 !== null);
      const pagesTextOnly   = rawPages.filter((p) => p.imageBase64 === null);

      // Analyze pages that have images with Vision model
      for (let i = 0; i < pagesWithImages.length; i++) {
        const page = pagesWithImages[i];
        try {
          const analyzed = await analyzeImageWithVision(page.imageBase64, page.mimeType);
          analyzedPages.push({ ...analyzed, pageNumber: page.pageNumber });
        } catch {
          // If vision fails for a page, use text fallback
          analyzedPages.push({
            title: `Page ${page.pageNumber}`,
            keyTerms: [],
            mainPoints: [],
            definitions: [],
            fullText: page.textFallback || '',
            pageNumber: page.pageNumber,
          });
        }
        setProgress(25 + Math.round(((i + 1) / pagesWithImages.length) * 35)); // 25–60%
      }

      // Add text-only pages (DOCX/PPTX) directly without vision
      pagesTextOnly.forEach((page) => {
        analyzedPages.push({
          title: `Section ${page.pageNumber}`,
          keyTerms: [],
          mainPoints: [],
          definitions: [],
          fullText: page.textFallback || '',
          pageNumber: page.pageNumber,
        });
      });

      // Sort by page number
      analyzedPages.sort((a, b) => a.pageNumber - b.pageNumber);
      setProgress(65);

      // ── STAGE 3: Generate questions ──
      setStage(STAGES.GENERATING);
      setProgress(70);

      const questionData = await generateQuestions(analyzedPages, config);
      setProgress(90);

      // ── STAGE 4: Format output ──
      setStage(STAGES.FORMATTING);
      setProgress(95);

      // Save to localStorage history
      const historyItem = {
        id: Date.now().toString(),
        date: new Date().toISOString(),
        fileNames: files.map((f) => f.name),
        config,
        questions: questionData.questions,
        summary: questionData.summary || '',
        totalGenerated: questionData.totalGenerated,
      };

      const existing = JSON.parse(localStorage.getItem('medq-history') || '[]');
      existing.unshift(historyItem);
      // Keep only last 20 sessions
      localStorage.setItem('medq-history', JSON.stringify(existing.slice(0, 20)));

      setProgress(100);
      setResults(questionData);
      setStage(STAGES.DONE);

    } catch (err) {
      setError(err.message || 'Unknown error occurred');
      setStage(STAGES.ERROR);
      setProgress(0);
    }
  }, []);

  return {
    stage,
    progress,
    results,
    error,
    generate,
    reset,
    isIdle:      stage.key === 'idle',
    isProcessing: !['idle', 'done', 'error'].includes(stage.key),
    isDone:      stage.key === 'done',
    isError:     stage.key === 'error',
  };
}
```

---

# ══════════════════════════════════════
# PART 6 — UI COMPONENTS (COMPLETE CODE)
# ══════════════════════════════════════

## File: `src/components/ui/Badge.jsx`

```jsx
// TYPE BADGE — shows MCQ, TF, SA, FB with color
import React from 'react';
import './Badge.css';

const TYPE_COLORS = {
  MCQ: { bg: 'var(--color-mcq-dim)', text: 'var(--color-mcq)', border: 'var(--color-mcq)' },
  TF:  { bg: 'var(--color-tf-dim)',  text: 'var(--color-tf)',  border: 'var(--color-tf)'  },
  SA:  { bg: 'var(--color-sa-dim)',  text: 'var(--color-sa)',  border: 'var(--color-sa)'  },
  FB:  { bg: 'var(--color-fb-dim)',  text: 'var(--color-fb)',  border: 'var(--color-fb)'  },
};

export function Badge({ type, label, size = 'md' }) {
  const colors = TYPE_COLORS[type] || TYPE_COLORS.MCQ;

  return (
    <span
      className={`badge badge--${size}`}
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
        borderColor: colors.border,
      }}
    >
      {label || type}
    </span>
  );
}
```

## File: `src/components/ui/Badge.css`

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  border: 1px solid;
  border-radius: var(--radius-full);
  font-weight: 600;
  letter-spacing: 0.03em;
  white-space: nowrap;
  text-transform: uppercase;
  transition: all var(--duration-fast) var(--ease-smooth);
}
.badge--sm { padding: 2px 8px;  font-size: 10px; }
.badge--md { padding: 4px 12px; font-size: 11px; }
.badge--lg { padding: 6px 16px; font-size: 13px; }
```

---

## File: `src/components/ui/Button.jsx`

```jsx
import React from 'react';
import './Button.css';

export function Button({
  children,
  onClick,
  variant = 'primary',   // primary | secondary | ghost | danger
  size = 'md',           // sm | md | lg
  loading = false,
  disabled = false,
  fullWidth = false,
  icon = null,
  className = '',
  type = 'button',
}) {
  return (
    <button
      type={type}
      className={[
        'btn',
        `btn--${variant}`,
        `btn--${size}`,
        fullWidth ? 'btn--full' : '',
        loading ? 'btn--loading' : '',
        className,
      ].filter(Boolean).join(' ')}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <>
          <span className="btn__spinner" aria-hidden="true" />
          <span className="btn__text">{children}</span>
        </>
      ) : (
        <>
          {icon && <span className="btn__icon" aria-hidden="true">{icon}</span>}
          <span className="btn__text">{children}</span>
        </>
      )}
    </button>
  );
}
```

## File: `src/components/ui/Button.css`

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  border-radius: var(--radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-smooth);
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  border: 1px solid transparent;
}

/* Ripple effect on click */
.btn::after {
  content: '';
  position: absolute;
  inset: 0;
  background: white;
  opacity: 0;
  transition: opacity var(--duration-fast);
}
.btn:active::after { opacity: 0.08; }

/* Sizes */
.btn--sm  { padding: 8px 16px;  font-size: 13px; border-radius: var(--radius-sm); }
.btn--md  { padding: 12px 24px; font-size: 14px; }
.btn--lg  { padding: 16px 32px; font-size: 16px; border-radius: var(--radius-lg); }
.btn--full { width: 100%; }

/* Variants */
.btn--primary {
  background: var(--grad-brand);
  color: #fff;
  box-shadow: 0 4px 15px rgba(59,130,246,0.35);
}
.btn--primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59,130,246,0.50);
}
.btn--primary:active:not(:disabled) { transform: translateY(0); }

.btn--secondary {
  background: var(--bg-surface);
  color: var(--text-primary);
  border-color: var(--border-default);
}
.btn--secondary:hover:not(:disabled) {
  background: var(--bg-card-hover);
  border-color: var(--border-strong);
}

.btn--ghost {
  background: transparent;
  color: var(--text-secondary);
  border-color: transparent;
}
.btn--ghost:hover:not(:disabled) {
  background: var(--brand-primary-dim);
  color: var(--brand-primary);
}

.btn--danger {
  background: rgba(239,68,68,0.15);
  color: var(--color-error);
  border-color: rgba(239,68,68,0.30);
}
.btn--danger:hover:not(:disabled) {
  background: rgba(239,68,68,0.25);
}

/* Disabled */
.btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

/* Loading spinner */
.btn__spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  flex-shrink: 0;
}

.btn__icon {
  display: flex;
  align-items: center;
  font-size: 1.1em;
}
```

---

## File: `src/components/upload/DropZone.jsx`

```jsx
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import { validateFile, getFileIcon } from '../../utils/fileProcessor';
import toast from 'react-hot-toast';
import './DropZone.css';

export function DropZone({ files, onFilesChange }) {
  const { t } = useTranslation();

  const onDrop = useCallback((acceptedFiles) => {
    const validFiles = [];

    acceptedFiles.forEach((file) => {
      const { valid, error } = validateFile(file);
      if (valid) {
        validFiles.push(file);
      } else {
        toast.error(t(`errors.${error}`));
      }
    });

    if (validFiles.length > 0) {
      onFilesChange((prev) => {
        // Avoid duplicates by name
        const existingNames = new Set(prev.map((f) => f.name));
        const newFiles = validFiles.filter((f) => !existingNames.has(f.name));
        return [...prev, ...newFiles];
      });
    }
  }, [onFilesChange, t]);

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'image/webp': ['.webp'],
    },
    maxSize: 20 * 1024 * 1024,
    multiple: true,
  });

  const removeFile = (name) => {
    onFilesChange((prev) => prev.filter((f) => f.name !== name));
  };

  const formatSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="dropzone-wrapper">
      {/* Drop area */}
      <div
        {...getRootProps()}
        className={[
          'dropzone',
          isDragActive  ? 'dropzone--active'  : '',
          isDragReject  ? 'dropzone--reject'  : '',
          files.length  ? 'dropzone--has-files' : '',
        ].filter(Boolean).join(' ')}
      >
        <input {...getInputProps()} />

        {/* Animated background orbs */}
        <div className="dropzone__orb dropzone__orb--1" aria-hidden="true" />
        <div className="dropzone__orb dropzone__orb--2" aria-hidden="true" />

        {/* Content */}
        <div className="dropzone__content">
          {isDragActive && !isDragReject ? (
            <>
              <div className="dropzone__icon dropzone__icon--active">⚡</div>
              <p className="dropzone__primary">{t('upload.dropHere')}</p>
            </>
          ) : isDragReject ? (
            <>
              <div className="dropzone__icon dropzone__icon--reject">✕</div>
              <p className="dropzone__primary">{t('errors.unsupportedType')}</p>
            </>
          ) : (
            <>
              <div className="dropzone__icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                  <path d="M8 30V38C8 39.1 8.9 40 10 40H38C39.1 40 40 39.1 40 38V30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M24 8V28M24 8L16 16M24 8L32 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="dropzone__primary">
                <strong>{t('upload.dropHere')}</strong>&nbsp;{t('upload.orBrowse')}
              </p>
              <p className="dropzone__secondary">{t('upload.supported')}</p>
              <p className="dropzone__hint">{t('upload.maxSize')}</p>
            </>
          )}
        </div>
      </div>

      {/* File list */}
      {files.length > 0 && (
        <ul className="file-list" role="list">
          {files.map((file) => (
            <li key={file.name} className="file-item animate-slideInRight">
              <span className="file-item__icon">{getFileIcon(file)}</span>
              <div className="file-item__info">
                <span className="file-item__name">{file.name}</span>
                <span className="file-item__size">{formatSize(file.size)}</span>
              </div>
              <button
                className="file-item__remove"
                onClick={() => removeFile(file.name)}
                aria-label={`${t('upload.removeFile')} ${file.name}`}
              >
                <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

## File: `src/components/upload/DropZone.css`

```css
.dropzone-wrapper { display: flex; flex-direction: column; gap: var(--space-4); }

.dropzone {
  position: relative;
  border: 2px dashed var(--border-default);
  border-radius: var(--radius-xl);
  padding: var(--space-12) var(--space-8);
  cursor: pointer;
  overflow: hidden;
  transition: all var(--duration-normal) var(--ease-smooth);
  background: var(--bg-card);
  text-align: center;
}

.dropzone:hover {
  border-color: var(--brand-primary);
  background: var(--bg-card-hover);
  box-shadow: 0 0 0 4px var(--brand-primary-dim);
}

.dropzone--active {
  border-color: var(--brand-primary);
  border-style: solid;
  background: var(--bg-card-hover);
  box-shadow: 0 0 0 4px var(--brand-primary-dim), var(--shadow-brand);
  transform: scale(1.01);
}

.dropzone--reject {
  border-color: var(--color-error);
  background: rgba(239,68,68,0.05);
}

/* Animated background orbs */
.dropzone__orb {
  position: absolute;
  border-radius: 50%;
  opacity: 0;
  transition: opacity var(--duration-slow);
  pointer-events: none;
}
.dropzone:hover .dropzone__orb,
.dropzone--active .dropzone__orb { opacity: 1; }

.dropzone__orb--1 {
  width: 200px; height: 200px;
  background: radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%);
  top: -50px; right: -50px;
  animation: orbFloat 6s ease-in-out infinite;
}
.dropzone__orb--2 {
  width: 150px; height: 150px;
  background: radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%);
  bottom: -30px; left: -30px;
  animation: orbFloat 8s ease-in-out infinite reverse;
}

.dropzone__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
}

.dropzone__icon {
  color: var(--text-muted);
  transition: all var(--duration-normal) var(--ease-bounce);
  margin-bottom: var(--space-2);
}
.dropzone:hover .dropzone__icon { color: var(--brand-primary); transform: translateY(-4px) scale(1.1); }
.dropzone__icon--active { color: var(--brand-primary); animation: bounce 0.6s var(--ease-bounce); }
.dropzone__icon--reject { color: var(--color-error); }

.dropzone__primary {
  font-size: 15px;
  color: var(--text-secondary);
  font-weight: 500;
}
.dropzone__primary strong { color: var(--brand-primary); }

.dropzone__secondary {
  font-size: 13px;
  color: var(--text-muted);
  font-family: var(--font-mono);
  background: var(--bg-surface);
  padding: 4px 12px;
  border-radius: var(--radius-full);
  border: 1px solid var(--border-subtle);
}

.dropzone__hint { font-size: 12px; color: var(--text-muted); }

/* File list */
.file-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.file-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  transition: all var(--duration-fast) var(--ease-smooth);
}
.file-item:hover { background: var(--bg-card-hover); border-color: var(--border-default); }

.file-item__icon { font-size: 20px; flex-shrink: 0; }

.file-item__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.file-item__name {
  font-size: 13px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.file-item__size {
  font-size: 11px;
  color: var(--text-muted);
  font-family: var(--font-mono);
}

.file-item__remove {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: var(--radius-sm);
  color: var(--text-muted);
  transition: all var(--duration-fast);
  flex-shrink: 0;
}
.file-item__remove:hover { background: rgba(239,68,68,0.15); color: var(--color-error); }
```

---

## File: `src/components/config/QuestionConfig.jsx`

```jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './QuestionConfig.css';

const QUESTION_TYPES = [
  { key: 'mcqCount',  typeKey: 'MCQ', labelKey: 'config.mcq', colorVar: '--color-mcq', icon: '⊙' },
  { key: 'tfCount',   typeKey: 'TF',  labelKey: 'config.tf',  colorVar: '--color-tf',  icon: '◐' },
  { key: 'saCount',   typeKey: 'SA',  labelKey: 'config.sa',  colorVar: '--color-sa',  icon: '✎' },
  { key: 'fbCount',   typeKey: 'FB',  labelKey: 'config.fb',  colorVar: '--color-fb',  icon: '▭' },
];

const DIFFICULTIES = ['easy', 'medium', 'hard'];
const OUTPUT_LANGS = [
  { value: 'ar',   labelKey: 'config.outputAr' },
  { value: 'en',   labelKey: 'config.outputEn' },
  { value: 'both', labelKey: 'config.outputBoth' },
];

export function QuestionConfig({ config, onChange }) {
  const { t } = useTranslation();

  const setField = (key, value) => onChange({ ...config, [key]: value });

  const total = (config.mcqCount || 0) + (config.tfCount || 0)
              + (config.saCount || 0) + (config.fbCount || 0);

  return (
    <div className="q-config">

      {/* Section: Question Counts */}
      <div className="q-config__section">
        <h3 className="q-config__section-title">{t('config.title')}</h3>
        <p className="q-config__section-subtitle">{t('config.subtitle')}</p>

        <div className="q-type-grid">
          {QUESTION_TYPES.map(({ key, typeKey, labelKey, colorVar, icon }) => (
            <div
              key={key}
              className="q-type-card"
              style={{ '--type-color': `var(${colorVar})` }}
            >
              <div className="q-type-card__header">
                <span className="q-type-card__icon" aria-hidden="true">{icon}</span>
                <span className="q-type-card__label">{t(labelKey)}</span>
                <span className="q-type-card__badge">{typeKey}</span>
              </div>

              <div className="q-type-card__controls">
                <button
                  className="q-type-card__btn q-type-card__btn--dec"
                  onClick={() => setField(key, Math.max(0, (config[key] || 0) - 1))}
                  aria-label={`Decrease ${typeKey}`}
                >
                  −
                </button>
                <span className="q-type-card__count font-mono">
                  {String(config[key] || 0).padStart(2, '0')}
                </span>
                <button
                  className="q-type-card__btn q-type-card__btn--inc"
                  onClick={() => setField(key, Math.min(30, (config[key] || 0) + 1))}
                  aria-label={`Increase ${typeKey}`}
                >
                  +
                </button>
              </div>

              {/* Mini progress bar */}
              <div className="q-type-card__bar">
                <div
                  className="q-type-card__bar-fill"
                  style={{ width: `${((config[key] || 0) / 30) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Total badge */}
        <div className="q-config__total">
          <span className="q-config__total-label">{t('config.total')}</span>
          <span className="q-config__total-count font-mono">{total}</span>
        </div>
      </div>

      {/* Section: Difficulty */}
      <div className="q-config__section">
        <h3 className="q-config__section-title">{t('config.difficulty')}</h3>
        <div className="difficulty-row">
          {DIFFICULTIES.map((d) => (
            <button
              key={d}
              className={['difficulty-btn', `difficulty-btn--${d}`, config.difficulty === d ? 'difficulty-btn--active' : ''].filter(Boolean).join(' ')}
              onClick={() => setField('difficulty', d)}
            >
              <span className="difficulty-btn__dot" aria-hidden="true" />
              {t(`config.${d}`)}
            </button>
          ))}
        </div>
      </div>

      {/* Section: Output Language */}
      <div className="q-config__section">
        <h3 className="q-config__section-title">{t('config.language')}</h3>
        <div className="lang-row">
          {OUTPUT_LANGS.map(({ value, labelKey }) => (
            <button
              key={value}
              className={['lang-btn', config.outputLang === value ? 'lang-btn--active' : ''].filter(Boolean).join(' ')}
              onClick={() => setField('outputLang', value)}
            >
              {value === 'ar' ? '🇸🇦' : value === 'en' ? '🇺🇸' : '🌐'}
              {t(labelKey)}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
```

## File: `src/components/config/QuestionConfig.css`

```css
.q-config { display: flex; flex-direction: column; gap: var(--space-8); }

.q-config__section { display: flex; flex-direction: column; gap: var(--space-4); }

.q-config__section-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: var(--space-2);
}
.q-config__section-subtitle { font-size: 13px; color: var(--text-muted); margin-top: -8px; }

/* Question type grid — 2x2 */
.q-type-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
}

.q-type-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  transition: all var(--duration-normal) var(--ease-smooth);
  position: relative;
  overflow: hidden;
}
.q-type-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: var(--type-color, var(--brand-primary));
  opacity: 0;
  transition: opacity var(--duration-normal);
}
.q-type-card:hover { border-color: var(--border-default); background: var(--bg-card-hover); }
.q-type-card:hover::before { opacity: 1; }

.q-type-card__header {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.q-type-card__icon {
  font-size: 18px;
  color: var(--type-color, var(--brand-primary));
  width: 24px;
  text-align: center;
  font-style: normal;
}

.q-type-card__label {
  flex: 1;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
}

.q-type-card__badge {
  font-size: 10px;
  font-weight: 700;
  color: var(--type-color, var(--brand-primary));
  background: rgba(from var(--type-color, #3B82F6) r g b / 0.12);
  padding: 2px 6px;
  border-radius: var(--radius-full);
  letter-spacing: 0.05em;
}

.q-type-card__controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--bg-surface);
  border-radius: var(--radius-md);
  padding: var(--space-1);
}

.q-type-card__btn {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-sm);
  font-size: 18px;
  font-weight: 300;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--duration-fast);
  line-height: 1;
}
.q-type-card__btn--dec:hover { background: rgba(239,68,68,0.15); color: var(--color-error); }
.q-type-card__btn--inc:hover { background: var(--brand-primary-dim); color: var(--brand-primary); }

.q-type-card__count {
  font-size: 22px;
  font-weight: 700;
  color: var(--type-color, var(--brand-primary));
  min-width: 40px;
  text-align: center;
}

.q-type-card__bar {
  height: 3px;
  background: var(--bg-surface);
  border-radius: var(--radius-full);
  overflow: hidden;
}
.q-type-card__bar-fill {
  height: 100%;
  background: var(--type-color, var(--brand-primary));
  border-radius: var(--radius-full);
  transition: width var(--duration-normal) var(--ease-smooth);
}

/* Total */
.q-config__total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-5);
  background: var(--bg-surface);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-subtle);
}
.q-config__total-label { font-size: 14px; color: var(--text-secondary); font-weight: 500; }
.q-config__total-count {
  font-size: 28px;
  font-weight: 800;
  background: var(--grad-brand);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Difficulty */
.difficulty-row { display: flex; gap: var(--space-2); }
.difficulty-btn {
  flex: 1;
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-default);
  background: var(--bg-card);
  color: var(--text-secondary);
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  transition: all var(--duration-normal) var(--ease-smooth);
}
.difficulty-btn__dot {
  width: 8px; height: 8px;
  border-radius: 50%;
}
.difficulty-btn--easy .difficulty-btn__dot { background: var(--color-success); }
.difficulty-btn--medium .difficulty-btn__dot { background: var(--color-warning); }
.difficulty-btn--hard .difficulty-btn__dot { background: var(--color-error); }

.difficulty-btn--easy.difficulty-btn--active   { border-color: var(--color-success); background: rgba(16,185,129,0.12); color: var(--color-success); }
.difficulty-btn--medium.difficulty-btn--active { border-color: var(--color-warning); background: rgba(245,158,11,0.12); color: var(--color-warning); }
.difficulty-btn--hard.difficulty-btn--active   { border-color: var(--color-error);   background: rgba(239,68,68,0.12);  color: var(--color-error); }

/* Language */
.lang-row { display: flex; gap: var(--space-2); }
.lang-btn {
  flex: 1;
  padding: var(--space-3) var(--space-2);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-default);
  background: var(--bg-card);
  color: var(--text-secondary);
  font-size: 13px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  transition: all var(--duration-normal) var(--ease-smooth);
}
.lang-btn--active { border-color: var(--brand-primary); background: var(--brand-primary-dim); color: var(--brand-primary); font-weight: 700; }
.lang-btn:hover:not(.lang-btn--active) { background: var(--bg-card-hover); }
```

---

## File: `src/components/results/QuestionCard.jsx`

```jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Badge } from '../ui/Badge';
import './QuestionCard.css';

const TYPE_GRADIENTS = {
  MCQ: 'var(--grad-mcq)',
  TF:  'var(--grad-tf)',
  SA:  'var(--grad-sa)',
  FB:  'var(--grad-fb)',
};

export function QuestionCard({ question, index }) {
  const { t, i18n } = useTranslation();
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer]         = useState(false);
  const isRTL = i18n.language === 'ar';

  const handleOptionClick = (optionKey) => {
    if (showAnswer) return; // Don't change after reveal
    setSelectedOption(optionKey);
  };

  const getOptionClass = (optionKey) => {
    if (!showAnswer) {
      return selectedOption === optionKey ? 'q-option--selected' : '';
    }
    if (optionKey === question.correctAnswer) return 'q-option--correct';
    if (optionKey === selectedOption && optionKey !== question.correctAnswer) return 'q-option--wrong';
    return 'q-option--dimmed';
  };

  return (
    <article
      className="q-card animate-cardEntrance"
      style={{
        animationDelay: `${index * 60}ms`,
        '--card-gradient': TYPE_GRADIENTS[question.type] || 'var(--grad-mcq)',
      }}
    >
      {/* Top stripe */}
      <div className="q-card__stripe" aria-hidden="true" />

      {/* Header */}
      <header className="q-card__header">
        <div className="q-card__meta">
          <span className="q-card__number font-mono">
            {String(index + 1).padStart(2, '0')}
          </span>
          <Badge
            type={question.type}
            label={t(`types.${question.type}`)}
          />
        </div>
        {question.topic && (
          <span className="q-card__topic">
            <svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12">
              <path d="M2 6a6 6 0 1110.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0110.5 13h-5a.5.5 0 01-.46-.302l-.761-1.77a1.964 1.964 0 00-.453-.618A5.984 5.984 0 012 6zm3 8.5a.5.5 0 01.5-.5h5a.5.5 0 010 1l-.224.447a1 1 0 01-.894.553H6.618a1 1 0 01-.894-.553L5.5 15a.5.5 0 01-.5-.5z"/>
            </svg>
            {question.topic}
          </span>
        )}
      </header>

      {/* Question text */}
      <p className="q-card__question" dir={isRTL ? 'rtl' : 'ltr'}>
        {question.question}
      </p>

      {/* MCQ Options */}
      {question.type === 'MCQ' && question.options && (
        <div className="q-options" role="group" aria-label="Answer options">
          {Object.entries(question.options).map(([key, value]) => (
            <button
              key={key}
              className={['q-option', getOptionClass(key)].filter(Boolean).join(' ')}
              onClick={() => handleOptionClick(key)}
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              <span className="q-option__key">{key}</span>
              <span className="q-option__value">{value}</span>
              {showAnswer && key === question.correctAnswer && (
                <span className="q-option__check" aria-label="Correct">✓</span>
              )}
              {showAnswer && key === selectedOption && key !== question.correctAnswer && (
                <span className="q-option__x" aria-label="Incorrect">✕</span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* TF Display */}
      {question.type === 'TF' && (
        <div className="q-tf-row">
          <button
            className={['q-tf-btn', showAnswer && question.correctAnswer === true  ? 'q-tf-btn--correct' : '', showAnswer && question.correctAnswer !== true ? 'q-tf-btn--dimmed' : ''].filter(Boolean).join(' ')}
            onClick={() => setShowAnswer(true)}
          >
            <span>✓</span> {t('results.correct')}
          </button>
          <button
            className={['q-tf-btn', showAnswer && question.correctAnswer === false ? 'q-tf-btn--wrong' : '', showAnswer && question.correctAnswer !== false ? 'q-tf-btn--dimmed' : ''].filter(Boolean).join(' ')}
            onClick={() => setShowAnswer(true)}
          >
            <span>✕</span> {t('results.incorrect')}
          </button>
        </div>
      )}

      {/* Reveal button */}
      <button
        className="q-reveal-btn"
        onClick={() => setShowAnswer((v) => !v)}
      >
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
          {showAnswer ? (
            <path d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" strokeLinecap="round" strokeLinejoin="round"/>
          ) : (
            <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M12 15a3 3 0 100-6 3 3 0 000 6z" strokeLinecap="round" strokeLinejoin="round"/>
          )}
        </svg>
        {showAnswer ? t('results.hideAnswer') : t('results.showAnswer')}
      </button>

      {/* Answer panel */}
      {showAnswer && (
        <div className="q-answer animate-fadeInUp" dir={isRTL ? 'rtl' : 'ltr'}>
          {/* MCQ answer */}
          {question.type === 'MCQ' && (
            <div className="q-answer__row">
              <span className="q-answer__label">{t('results.answer')}</span>
              <span className="q-answer__value q-answer__value--correct">
                {question.correctAnswer}. {question.options?.[question.correctAnswer]}
              </span>
            </div>
          )}

          {/* TF answer */}
          {question.type === 'TF' && (
            <div className="q-answer__row">
              <span className="q-answer__label">{t('results.answer')}</span>
              <span className={`q-answer__value ${question.correctAnswer ? 'q-answer__value--correct' : 'q-answer__value--wrong'}`}>
                {question.correctAnswer ? t('results.correct') : t('results.incorrect')}
              </span>
            </div>
          )}

          {/* SA model answer */}
          {question.type === 'SA' && question.modelAnswer && (
            <div className="q-answer__row q-answer__row--block">
              <span className="q-answer__label">{t('results.modelAnswer')}</span>
              <p className="q-answer__text">{question.modelAnswer}</p>
            </div>
          )}

          {/* FB answer */}
          {question.type === 'FB' && question.answer && (
            <div className="q-answer__row">
              <span className="q-answer__label">{t('results.answer')}</span>
              <span className="q-answer__value q-answer__value--correct">{question.answer}</span>
            </div>
          )}

          {/* Explanation */}
          {question.explanation && (
            <div className="q-answer__row q-answer__row--block">
              <span className="q-answer__label">{t('results.explanation')}</span>
              <p className="q-answer__text">{question.explanation}</p>
            </div>
          )}
        </div>
      )}
    </article>
  );
}
```

## File: `src/components/results/QuestionCard.css`

```css
@keyframes cardEntrance {
  from { opacity: 0; transform: translateY(28px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

.q-card {
  position: relative;
  background: var(--card-gradient, var(--grad-card));
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  transition: border-color var(--duration-normal), box-shadow var(--duration-normal);
  overflow: hidden;
  animation: cardEntrance 0.5s var(--ease-bounce) both;
}
.q-card:hover {
  border-color: var(--border-default);
  box-shadow: var(--shadow-md);
}

/* Top color stripe */
.q-card__stripe {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: var(--grad-brand);
  opacity: 0.8;
}

/* Header */
.q-card__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
  flex-wrap: wrap;
}
.q-card__meta { display: flex; align-items: center; gap: var(--space-3); }

.q-card__number {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-muted);
  background: var(--bg-surface);
  padding: 3px 8px;
  border-radius: var(--radius-sm);
}

.q-card__topic {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: var(--text-muted);
  background: var(--bg-surface);
  padding: 4px 10px;
  border-radius: var(--radius-full);
  max-width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Question */
.q-card__question {
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  line-height: 1.7;
}

/* MCQ Options */
.q-options {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.q-option {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  background: var(--bg-surface);
  text-align: start;
  transition: all var(--duration-fast) var(--ease-smooth);
  cursor: pointer;
  position: relative;
}
.q-option:hover { border-color: var(--border-default); background: var(--bg-card-hover); }
.q-option--selected { border-color: var(--brand-primary); background: var(--brand-primary-dim); }
.q-option--correct  { border-color: var(--color-success); background: rgba(16,185,129,0.12); }
.q-option--wrong    { border-color: var(--color-error);   background: rgba(239,68,68,0.10); }
.q-option--dimmed   { opacity: 0.45; }

.q-option__key {
  width: 28px;
  height: 28px;
  border-radius: var(--radius-sm);
  background: var(--bg-elevated);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  font-family: var(--font-mono);
  flex-shrink: 0;
}
.q-option--correct .q-option__key  { background: var(--color-success); color: white; }
.q-option--wrong .q-option__key    { background: var(--color-error);   color: white; }
.q-option--selected .q-option__key { background: var(--brand-primary); color: white; }

.q-option__value { flex: 1; font-size: 14px; color: var(--text-primary); }

.q-option__check { margin-inline-start: auto; color: var(--color-success); font-size: 16px; font-weight: 700; }
.q-option__x     { margin-inline-start: auto; color: var(--color-error);   font-size: 16px; font-weight: 700; }

/* TF */
.q-tf-row { display: flex; gap: var(--space-3); }
.q-tf-btn {
  flex: 1;
  padding: var(--space-3);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-default);
  background: var(--bg-surface);
  font-size: 14px;
  font-weight: 600;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  transition: all var(--duration-fast);
}
.q-tf-btn--correct { border-color: var(--color-success); background: rgba(16,185,129,0.12); color: var(--color-success); }
.q-tf-btn--wrong   { border-color: var(--color-error);   background: rgba(239,68,68,0.10);  color: var(--color-error);   }
.q-tf-btn--dimmed  { opacity: 0.4; }
.q-tf-btn:hover:not(.q-tf-btn--correct):not(.q-tf-btn--wrong):not(.q-tf-btn--dimmed) {
  border-color: var(--brand-primary); background: var(--brand-primary-dim);
}

/* Reveal button */
.q-reveal-btn {
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: 13px;
  font-weight: 600;
  color: var(--brand-primary);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  border: 1px solid var(--brand-primary-dim);
  background: var(--brand-primary-dim);
  transition: all var(--duration-fast);
}
.q-reveal-btn:hover { background: rgba(59,130,246,0.25); border-color: var(--brand-primary); }

/* Answer panel */
.q-answer {
  border-radius: var(--radius-md);
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.q-answer__row {
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
  flex-wrap: wrap;
}
.q-answer__row--block { flex-direction: column; gap: var(--space-2); }

.q-answer__label {
  font-size: 11px;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  white-space: nowrap;
}

.q-answer__value {
  font-size: 14px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: var(--radius-sm);
}
.q-answer__value--correct { color: var(--color-success); background: rgba(16,185,129,0.12); }
.q-answer__value--wrong   { color: var(--color-error);   background: rgba(239,68,68,0.10); }

.q-answer__text {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
}
```

---

## File: `src/components/layout/ProcessingOverlay.jsx`

```jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { STAGES } from '../../hooks/useGenerator';
import './ProcessingOverlay.css';

const STAGE_ICONS = {
  extracting: '📄',
  analyzing:  '🔬',
  generating: '🧠',
  formatting: '✨',
  done:       '✅',
};

const STAGE_COLORS = {
  extracting: '#3B82F6',
  analyzing:  '#8B5CF6',
  generating: '#06B6D4',
  formatting: '#10B981',
  done:       '#10B981',
};

export function ProcessingOverlay({ stage, progress }) {
  const { t } = useTranslation();
  const icon  = STAGE_ICONS[stage.key]  || '⚙️';
  const color = STAGE_COLORS[stage.key] || '#3B82F6';

  return (
    <div className="proc-overlay" role="status" aria-live="polite">
      <div className="proc-overlay__card">

        {/* Animated rings */}
        <div className="proc-rings" aria-hidden="true">
          <div className="proc-ring proc-ring--1" style={{ borderColor: color }} />
          <div className="proc-ring proc-ring--2" style={{ borderColor: color }} />
          <div className="proc-icon">{icon}</div>
        </div>

        {/* Stage label */}
        <p className="proc-overlay__label" style={{ color }}>
          {stage.labelKey ? t(stage.labelKey) : ''}
        </p>

        {/* Progress bar */}
        <div className="proc-bar-track">
          <div
            className="proc-bar-fill"
            style={{ width: `${progress}%`, background: color }}
          />
        </div>

        {/* Progress percent */}
        <span className="proc-percent font-mono">{progress}%</span>

        {/* Dots animation */}
        <div className="proc-dots" aria-hidden="true">
          <span className="proc-dot" style={{ animationDelay: '0ms', background: color }} />
          <span className="proc-dot" style={{ animationDelay: '180ms', background: color }} />
          <span className="proc-dot" style={{ animationDelay: '360ms', background: color }} />
        </div>

      </div>
    </div>
  );
}
```

## File: `src/components/layout/ProcessingOverlay.css`

```css
.proc-overlay {
  position: fixed;
  inset: 0;
  background: var(--bg-overlay);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn var(--duration-normal) var(--ease-smooth);
}

.proc-overlay__card {
  background: var(--bg-card);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-2xl);
  padding: var(--space-12) var(--space-10);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
  min-width: 300px;
  box-shadow: var(--shadow-xl), var(--shadow-glow);
  animation: fadeInScale var(--duration-slow) var(--ease-bounce);
}

/* Animated rings */
.proc-rings {
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.proc-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid transparent;
  animation: spin linear infinite;
}
.proc-ring--1 {
  animation-duration: 1.2s;
  border-top-color: currentColor;
}
.proc-ring--2 {
  inset: 12px;
  animation-duration: 1.8s;
  animation-direction: reverse;
  border-top-color: currentColor;
  opacity: 0.5;
}

.proc-icon {
  font-size: 32px;
  animation: bounce 1.5s ease-in-out infinite;
}

.proc-overlay__label {
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  transition: color var(--duration-normal);
}

/* Progress bar */
.proc-bar-track {
  width: 240px;
  height: 6px;
  background: var(--bg-surface);
  border-radius: var(--radius-full);
  overflow: hidden;
}
.proc-bar-fill {
  height: 100%;
  border-radius: var(--radius-full);
  transition: width 0.6s var(--ease-smooth), background 0.4s;
  position: relative;
}
.proc-bar-fill::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
  animation: shimmer 1.5s infinite;
  background-size: 200% auto;
}

.proc-percent {
  font-size: 13px;
  color: var(--text-muted);
}

/* Dots */
.proc-dots { display: flex; gap: var(--space-2); }
.proc-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  animation: dotPulse 1.2s ease-in-out infinite;
}
```

---

# ══════════════════════════════════════
# PART 7 — MAIN APP FILES
# ══════════════════════════════════════

## File: `src/App.jsx`
## CREATE THIS FILE — COPY EXACTLY:

```jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Toaster, toast } from 'react-hot-toast';
import './i18n/index.js';
import './styles/global.css';

import { DropZone } from './components/upload/DropZone';
import { QuestionConfig } from './components/config/QuestionConfig';
import { QuestionCard } from './components/results/QuestionCard';
import { ProcessingOverlay } from './components/layout/ProcessingOverlay';
import { Button } from './components/ui/Button';
import { useGenerator, STAGES } from './hooks/useGenerator';

// Default config — what sliders start at
const DEFAULT_CONFIG = {
  mcqCount:   5,
  tfCount:    3,
  saCount:    2,
  fbCount:    2,
  difficulty: 'medium',
  outputLang: 'en',
};

// Filter tabs
const FILTER_TYPES = ['ALL', 'MCQ', 'TF', 'SA', 'FB'];

export default function App() {
  const { t, i18n }   = useTranslation();
  const [lang, setLang] = useState(i18n.language || 'en');
  const [files, setFiles] = useState([]);
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [filter, setFilter] = useState('ALL');
  const [view, setView] = useState('main'); // 'main' | 'results'

  const { stage, progress, results, error, generate, reset, isProcessing, isDone, isError } = useGenerator();

  // Apply RTL/LTR to document
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir             = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  // Show error toast
  useEffect(() => {
    if (isError && error) {
      toast.error(error, { duration: 5000 });
    }
  }, [isError, error]);

  // Go to results when done
  useEffect(() => {
    if (isDone && results) {
      setView('results');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isDone, results]);

  // Toggle language
  const toggleLang = () => {
    const next = lang === 'en' ? 'ar' : 'en';
    setLang(next);
    i18n.changeLanguage(next);
    localStorage.setItem('medq-lang', next);
  };

  // Validate and start generation
  const handleGenerate = () => {
    if (files.length === 0) {
      toast.error(t('errors.noFile'));
      return;
    }
    const total = config.mcqCount + config.tfCount + config.saCount + config.fbCount;
    if (total === 0) {
      toast.error(t('errors.noConfig'));
      return;
    }
    generate(files, config);
  };

  // Reset everything
  const handleStartOver = () => {
    reset();
    setFiles([]);
    setConfig(DEFAULT_CONFIG);
    setFilter('ALL');
    setView('main');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Download JSON
  const handleDownloadJSON = () => {
    if (!results) return;
    const blob = new Blob([JSON.stringify(results, null, 2)], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = `medq-questions-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Filter questions
  const filteredQuestions = results?.questions
    ? results.questions.filter((q) => filter === 'ALL' || q.type === filter)
    : [];

  return (
    <>
      {/* Toast notifications */}
      <Toaster
        position={lang === 'ar' ? 'top-left' : 'top-right'}
        toastOptions={{
          style: {
            background: 'var(--bg-card)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-md)',
            fontSize: '14px',
          },
          success: { iconTheme: { primary: 'var(--color-success)', secondary: 'white' } },
          error:   { iconTheme: { primary: 'var(--color-error)',   secondary: 'white' } },
        }}
      />

      {/* Processing overlay */}
      {isProcessing && <ProcessingOverlay stage={stage} progress={progress} />}

      {/* App shell */}
      <div className="app-shell">

        {/* ── HEADER ── */}
        <header className="app-header">
          <div className="app-header__inner">
            <div className="app-header__brand">
              <div className="app-header__logo" aria-hidden="true">
                <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                  <rect width="36" height="36" rx="10" fill="url(#logo-grad)"/>
                  <path d="M18 8v20M8 18h20" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="18" cy="18" r="4" fill="white" opacity="0.9"/>
                  <defs>
                    <linearGradient id="logo-grad" x1="0" y1="0" x2="36" y2="36">
                      <stop offset="0%" stopColor="#3B82F6"/>
                      <stop offset="100%" stopColor="#8B5CF6"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="app-header__name">{t('appName')}</span>
            </div>

            <nav className="app-header__nav" aria-label="Main navigation">
              {view === 'results' && (
                <button className="app-header__nav-btn" onClick={handleStartOver}>
                  ← {t('actions.startOver')}
                </button>
              )}
              <button
                className="app-header__lang-btn"
                onClick={toggleLang}
                aria-label="Switch language"
              >
                {lang === 'en' ? '🌐 العربية' : '🌐 English'}
              </button>
            </nav>
          </div>
        </header>

        {/* ── MAIN CONTENT ── */}
        <main className="app-main">

          {/* ─── VIEW: MAIN (Upload + Config) ─── */}
          {view === 'main' && (
            <div className="main-view animate-fadeIn">

              {/* Hero */}
              <section className="hero animate-fadeInUp">
                <div className="hero__badge">
                  <span className="hero__badge-dot" aria-hidden="true"/>
                  AI-Powered · Free · Bilingual
                </div>
                <h1 className="hero__title">
                  {lang === 'ar' ? (
                    <>مولّد أسئلة طبية<br/><span className="hero__title-accent">بالذكاء الاصطناعي</span></>
                  ) : (
                    <>Medical Question<br/><span className="hero__title-accent">Generator AI</span></>
                  )}
                </h1>
                <p className="hero__subtitle">{t('appTagline')}</p>
              </section>

              {/* Two-column layout */}
              <div className="content-grid">
                {/* Left: Upload */}
                <section className="content-card animate-fadeInUp delay-200">
                  <div className="content-card__header">
                    <div className="content-card__icon content-card__icon--blue">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
                        <path d="M4 16.5v1A2.5 2.5 0 006.5 20h11a2.5 2.5 0 002.5-2.5v-1M12 3v13M8 7l4-4 4 4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h2 className="content-card__title">{t('upload.title')}</h2>
                      <p className="content-card__subtitle">{t('upload.subtitle')}</p>
                    </div>
                  </div>
                  <DropZone files={files} onFilesChange={setFiles} />
                </section>

                {/* Right: Config */}
                <section className="content-card animate-fadeInUp delay-300">
                  <div className="content-card__header">
                    <div className="content-card__icon content-card__icon--purple">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
                        <path d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h2 className="content-card__title">{t('config.title')}</h2>
                      <p className="content-card__subtitle">{t('config.subtitle')}</p>
                    </div>
                  </div>
                  <QuestionConfig config={config} onChange={setConfig} />
                </section>
              </div>

              {/* Generate button */}
              <div className="generate-section animate-fadeInUp delay-400">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleGenerate}
                  loading={isProcessing}
                  disabled={files.length === 0}
                  icon={
                    <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                      <path d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z"/>
                    </svg>
                  }
                >
                  {isProcessing ? t('actions.generating') : t('actions.generate')}
                </Button>
              </div>

            </div>
          )}

          {/* ─── VIEW: RESULTS ─── */}
          {view === 'results' && results && (
            <div className="results-view animate-fadeIn">

              {/* Results header */}
              <div className="results-header animate-fadeInUp">
                <div>
                  <h2 className="results-header__title">{t('results.title')}</h2>
                  <p className="results-header__count">
                    {t('results.questionCount', { count: results.questions?.length || 0 })}
                  </p>
                  {results.summary && (
                    <p className="results-header__summary">{results.summary}</p>
                  )}
                </div>
                <div className="results-header__actions">
                  <Button variant="secondary" size="sm" onClick={handleDownloadJSON} icon="⬇">
                    {t('actions.downloadJSON')}
                  </Button>
                  <Button variant="ghost" size="sm" onClick={handleStartOver}>
                    {t('actions.startOver')}
                  </Button>
                </div>
              </div>

              {/* Filter tabs */}
              <div className="filter-tabs" role="tablist" aria-label="Filter questions by type">
                {FILTER_TYPES.map((type) => (
                  <button
                    key={type}
                    role="tab"
                    aria-selected={filter === type}
                    className={['filter-tab', filter === type ? 'filter-tab--active' : ''].filter(Boolean).join(' ')}
                    onClick={() => setFilter(type)}
                  >
                    {type === 'ALL' ? t('results.all') : t(`types.${type}`)}
                    <span className="filter-tab__count font-mono">
                      {type === 'ALL'
                        ? results.questions?.length || 0
                        : results.questions?.filter((q) => q.type === type).length || 0}
                    </span>
                  </button>
                ))}
              </div>

              {/* Question list */}
              <div className="q-list" role="list">
                {filteredQuestions.length > 0 ? (
                  filteredQuestions.map((question, i) => (
                    <QuestionCard key={question.id} question={question} index={i} />
                  ))
                ) : (
                  <div className="q-list__empty">
                    <span className="q-list__empty-icon" aria-hidden="true">🔍</span>
                    <p>{t('results.noResults')}</p>
                  </div>
                )}
              </div>

            </div>
          )}

        </main>

        {/* ── FOOTER ── */}
        <footer className="app-footer">
          <p>{t('footer.madeWith')} · {t('footer.poweredBy')}</p>
        </footer>

      </div>

      {/* Global layout styles */}
      <style>{`
        .app-shell {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: var(--bg-base);
        }

        /* HEADER */
        .app-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(5,10,20,0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-subtle);
        }
        .app-header__inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 14px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .app-header__brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .app-header__logo { flex-shrink: 0; }
        .app-header__name {
          font-size: 17px;
          font-weight: 800;
          background: var(--grad-brand);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.02em;
        }
        .app-header__nav { display: flex; align-items: center; gap: 8px; }
        .app-header__nav-btn {
          font-size: 13px;
          color: var(--text-secondary);
          padding: 7px 14px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
          transition: all var(--duration-fast);
        }
        .app-header__nav-btn:hover { border-color: var(--border-default); color: var(--text-primary); }
        .app-header__lang-btn {
          font-size: 13px;
          font-weight: 600;
          color: var(--brand-primary);
          background: var(--brand-primary-dim);
          padding: 7px 14px;
          border-radius: var(--radius-md);
          border: 1px solid rgba(59,130,246,0.25);
          transition: all var(--duration-fast);
        }
        .app-header__lang-btn:hover { background: rgba(59,130,246,0.25); }

        /* MAIN */
        .app-main {
          flex: 1;
          max-width: 1100px;
          margin: 0 auto;
          width: 100%;
          padding: 40px 24px 60px;
        }

        /* HERO */
        .hero {
          text-align: center;
          margin-bottom: 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          color: var(--brand-primary);
          background: var(--brand-primary-dim);
          border: 1px solid rgba(59,130,246,0.25);
          padding: 6px 16px;
          border-radius: var(--radius-full);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .hero__badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--brand-primary);
          animation: bounce 1.5s ease-in-out infinite;
        }
        .hero__title {
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: var(--text-primary);
        }
        .hero__title-accent {
          background: var(--grad-brand);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero__subtitle {
          font-size: 16px;
          color: var(--text-secondary);
          max-width: 480px;
        }

        /* CONTENT GRID */
        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 32px;
        }
        @media (max-width: 768px) { .content-grid { grid-template-columns: 1fr; } }

        /* CONTENT CARD */
        .content-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xl);
          padding: var(--space-6);
          display: flex;
          flex-direction: column;
          gap: var(--space-5);
          transition: border-color var(--duration-normal);
        }
        .content-card:hover { border-color: var(--border-default); }
        .content-card__header { display: flex; align-items: flex-start; gap: var(--space-4); }
        .content-card__icon {
          width: 40px; height: 40px; flex-shrink: 0;
          border-radius: var(--radius-md);
          display: flex; align-items: center; justify-content: center;
        }
        .content-card__icon--blue { background: var(--brand-primary-dim); color: var(--brand-primary); }
        .content-card__icon--purple { background: var(--brand-secondary-dim); color: var(--brand-secondary); }
        .content-card__title { font-size: 15px; font-weight: 700; color: var(--text-primary); }
        .content-card__subtitle { font-size: 13px; color: var(--text-muted); margin-top: 2px; }

        /* GENERATE SECTION */
        .generate-section {
          display: flex;
          justify-content: center;
          padding-top: 8px;
        }

        /* RESULTS */
        .results-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }
        .results-header__title { font-size: 24px; font-weight: 800; color: var(--text-primary); }
        .results-header__count { font-size: 14px; color: var(--text-muted); margin-top: 4px; }
        .results-header__summary { font-size: 14px; color: var(--text-secondary); margin-top: 8px; max-width: 600px; line-height: 1.6; }
        .results-header__actions { display: flex; gap: 8px; flex-wrap: wrap; }

        /* FILTER TABS */
        .filter-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .filter-tab {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-default);
          background: var(--bg-card);
          font-size: 13px;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all var(--duration-fast);
        }
        .filter-tab:hover { background: var(--bg-card-hover); border-color: var(--border-strong); }
        .filter-tab--active {
          border-color: var(--brand-primary);
          background: var(--brand-primary-dim);
          color: var(--brand-primary);
          font-weight: 700;
        }
        .filter-tab__count {
          font-size: 11px;
          background: var(--bg-surface);
          padding: 1px 6px;
          border-radius: var(--radius-full);
          color: var(--text-muted);
        }
        .filter-tab--active .filter-tab__count { background: rgba(59,130,246,0.2); color: var(--brand-primary); }

        /* QUESTION LIST */
        .q-list { display: flex; flex-direction: column; gap: 16px; }
        .q-list__empty {
          text-align: center;
          padding: 60px 20px;
          color: var(--text-muted);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .q-list__empty-icon { font-size: 40px; }

        /* FOOTER */
        .app-footer {
          border-top: 1px solid var(--border-subtle);
          padding: 20px 24px;
          text-align: center;
          font-size: 12px;
          color: var(--text-muted);
        }

        .font-mono { font-family: var(--font-mono) !important; }
      `}</style>
    </>
  );
}
```

---

## File: `src/main.jsx`
## CREATE THIS FILE — COPY EXACTLY:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## File: `.env`
## CREATE THIS FILE — COPY EXACTLY (fill in your key):

```
VITE_OPENROUTER_KEY=your_openrouter_api_key_here
```

## File: `index.html`
## REPLACE the existing content — COPY EXACTLY:

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#050A14" />
    <meta name="description" content="AI-Powered Medical Question Generator" />
    <title>MedQ AI — Medical Question Generator</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

# ══════════════════════════════════════
# PART 8 — BUILD & RUN CHECKLIST
# ══════════════════════════════════════

## The coding AI must do these steps IN ORDER:

```
Step 1: Run: npm create vite@latest medq-ai -- --template react
Step 2: Run: cd medq-ai
Step 3: Run: npm install (all packages listed in Part 0)
Step 4: Delete default files (listed in Part 0)
Step 5: Create all folders (listed in Part 0)
Step 6: Create src/styles/tokens.css     → copy from Part 1
Step 7: Create src/styles/global.css     → copy from Part 1
Step 8: Create src/i18n/en.js            → copy from Part 2
Step 9: Create src/i18n/ar.js            → copy from Part 2
Step 10: Create src/i18n/index.js         → copy from Part 2
Step 11: Create src/api/openrouter.js     → copy from Part 3
Step 12: Create src/utils/fileProcessor.js → copy from Part 4
Step 13: Create src/hooks/useGenerator.js  → copy from Part 5
Step 14: Create src/components/ui/Badge.jsx + Badge.css → copy from Part 6
Step 15: Create src/components/ui/Button.jsx + Button.css → copy from Part 6
Step 16: Create src/components/upload/DropZone.jsx + DropZone.css → copy from Part 6
Step 17: Create src/components/config/QuestionConfig.jsx + QuestionConfig.css → copy from Part 6
Step 18: Create src/components/results/QuestionCard.jsx + QuestionCard.css → copy from Part 6
Step 19: Create src/components/layout/ProcessingOverlay.jsx + ProcessingOverlay.css → copy from Part 6
Step 20: Create src/App.jsx              → copy from Part 7
Step 21: Create src/main.jsx             → copy from Part 7
Step 22: Edit .env file                  → add your OpenRouter key
Step 23: Edit index.html                 → copy from Part 7
Step 24: Run: npm run dev
Step 25: Open http://localhost:5173 in browser
```

## ✅ Final Verification Checklist

After running, verify:
- [ ] App loads without console errors
- [ ] Dark background (--bg-base: #050A14) visible
- [ ] Header shows "MedQ AI" with gradient text
- [ ] Language toggle button visible (🌐 العربية / 🌐 English)
- [ ] Clicking language toggle switches to Arabic RTL layout instantly
- [ ] DropZone visible with upload icon
- [ ] Question type cards show 4 cards (MCQ/TF/SA/FB) in 2x2 grid
- [ ] +/- buttons on each card change count
- [ ] Difficulty buttons (Easy/Medium/Hard) work
- [ ] Language buttons (Arabic/English/Both) work
- [ ] Uploading a file shows it in the file list
- [ ] Generate button activates when file uploaded
- [ ] Processing overlay appears during generation with animated rings
- [ ] Results appear as cards with animations
- [ ] Filter tabs filter questions by type
- [ ] Clicking "Show Answer" reveals answer with animation
- [ ] Download JSON button downloads a file

---

*MedQ AI v2.0 — Complete Zero-Gap Blueprint*
*Every file specified. Every line written. Assembly only.*
