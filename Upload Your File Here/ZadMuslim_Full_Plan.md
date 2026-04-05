# 🌙 زاد مسلم — Zad Muslim
## Complete Islamic Super-App Development Plan
### Full Design · APIs · Features · Phases · Code

---

> *"وَتَزَوَّدُوا فَإِنَّ خَيْرَ الزَّادِ التَّقْوَىٰ"*
> — سورة البقرة: ١٩٧

---

## 🎨 BRAND IDENTITY

### App Name
**زاد مسلم** — Zad Muslim
*"Your Daily Spiritual Provision"*

### Logo Concept
Crescent moon embracing an open Quran, with subtle geometric Islamic patterns (arabesque) radiating outward — clean, minimal, modern.

### Tagline
**"زادك في كل يوم"** | *"Your provision every day"*

---

## 🎨 DESIGN SYSTEM

### Color Palette — "Sacred Night" Theme

```css
:root {
  /* ===== PRIMARY PALETTE ===== */
  --zad-midnight:   #0B0F1A;   /* Deep midnight — main background */
  --zad-navy:       #111827;   /* Card backgrounds */
  --zad-surface:    #1A2332;   /* Surface / elevated cards */
  --zad-border:     #1E3A5F;   /* Subtle borders */

  /* ===== GOLD ACCENT (Islamic Gold) ===== */
  --zad-gold:       #D4A017;   /* Primary gold — titles, icons */
  --zad-gold-light: #F5C842;   /* Hover gold */
  --zad-gold-muted: rgba(212,160,23,0.15); /* Gold tint backgrounds */

  /* ===== GREEN (Islamic Green) ===== */
  --zad-green:      #1A9B5F;   /* Islamic green — success, CTAs */
  --zad-green-glow: rgba(26,155,95,0.25);

  /* ===== TEAL ACCENT ===== */
  --zad-teal:       #0EA5A0;   /* Secondary highlights */
  --zad-teal-glow:  rgba(14,165,160,0.2);

  /* ===== TEXT ===== */
  --text-primary:   #F7F3E9;   /* Warm white — readability */
  --text-secondary: #B8A98A;   /* Warm muted — subtext */
  --text-arabic:    #EFE6D0;   /* Special Arabic text color */
  --text-muted:     #5A6478;   /* Disabled/placeholder */

  /* ===== PRAYER TIME COLORS ===== */
  --fajr-color:     #1A237E;   /* Deep blue — dawn */
  --dhuhr-color:    #F59E0B;   /* Amber — midday */
  --asr-color:      #D97706;   /* Orange — afternoon */
  --maghrib-color:  #DC2626;   /* Red-orange — sunset */
  --isha-color:     #312E81;   /* Indigo — night */

  /* ===== GRADIENTS ===== */
  --grad-header:    linear-gradient(135deg, #0B0F1A 0%, #1A2B4A 50%, #0D1F35 100%);
  --grad-gold:      linear-gradient(135deg, #D4A017 0%, #F5C842 50%, #B8860B 100%);
  --grad-card:      linear-gradient(145deg, #111827 0%, #1A2332 100%);
  --grad-night:     linear-gradient(180deg, #090D18 0%, #0B1929 40%, #071320 100%);
  --grad-mosque:    linear-gradient(to top, #0B0F1A 0%, transparent 60%);
}
```

### Typography

| Role | Font | Weight | Notes |
|------|------|--------|-------|
| Arabic Quran Text | `Amiri Quran` | 400 | Beautiful Uthmani script |
| Arabic UI | `Noto Naskh Arabic` | 400/700 | UI labels & content |
| Arabic Display | `Scheherazade New` | 700 | Hero titles, Surah names |
| English UI | `Inter` | 300–700 | All English elements |
| English Display | `Cinzel` | 600 | English branding |
| Numbers/Times | `JetBrains Mono` | 400 | Countdown timers |

```html
<!-- Google Fonts Import -->
<link href="https://fonts.googleapis.com/css2?
  family=Amiri+Quran&
  family=Noto+Naskh+Arabic:wght@400;700&
  family=Scheherazade+New:wght@400;700&
  family=Inter:wght@300;400;500;600;700&
  family=Cinzel:wght@400;600&
  family=JetBrains+Mono:wght@400;500&
  display=swap" rel="stylesheet">
```

### Islamic Geometry & Motifs
- Arabesque SVG patterns as subtle card backgrounds (opacity 5–8%)
- 8-point star geometric dividers
- Calligraphic decorative elements for section headers
- Mosque silhouette SVG at bottom of hero sections
- Crescent moon phase indicator for Hijri calendar

---

## 🌟 FULL FEATURE LIST

### 📖 1. Holy Quran (المصحف الشريف)
- Full Quran text — Uthmani script (حفص عن عاصم)
- Word-by-word display with tajweed color coding
- Multiple translations (Arabic, English, French, Urdu, Turkish, Malay)
- Multiple tafsir (ابن كثير، السعدي، الجلالين)
- Audio recitation — 40+ reciters to choose from
- Verse-by-verse audio sync (word highlighted as recited)
- Page-by-page Mushaf view (scanned Madinah Mushaf images)
- Surah list + Juz navigator + Hizb navigator
- Verse bookmarking & custom collections
- Last read position auto-save
- Search across entire Quran
- Share verses as beautiful image cards
- Reading streak tracker
- Khatmah (completion) tracker

### 🕌 2. Prayer Times (مواقيت الصلاة)
- Auto GPS-based prayer times
- Manual city search
- All 5 prayers + Duha + Tahajjud time
- Next prayer countdown (live, animated)
- Adhan notification for each prayer (per-prayer toggle)
- Custom adhan sounds per prayer
- 15+ calculation methods (ISNA, MWL, Egyptian, Umm al-Qura, etc.)
- Madhab selection (Hanafi / Shafi'i for Asr)
- Monthly prayer timetable PDF export
- Qadha tracker (missed prayers log)
- Prayer completion checkmark (today's prayers)

### 🧭 3. Qibla Compass (القبلة)
- Animated compass with live device orientation
- Direction degrees + distance to Makkah
- Beautiful Ka'ba animation at center
- AR mode (camera overlay)
- Works offline with last known location

### 📅 4. Hijri Calendar (التقويم الهجري)
- Full Hijri calendar with Gregorian side-by-side
- All Islamic events marked:
  - رمضان, عيد الفطر, عيد الأضحى
  - المولد النبوي, ليلة القدر, يوم عاشوراء
  - يوم عرفة, أيام التشريق
- Event reminders (notification X days before)
- Ramadan special mode (Suhoor/Iftar countdown)
- Fasting day tracker (Mondays & Thursdays, Ayyam al-Bid)

### 📿 5. Adhkar & Tasbeeh (الأذكار والتسبيح)
- Morning Adhkar (أذكار الصباح) — full collection
- Evening Adhkar (أذكار المساء) — full collection
- After prayer Adhkar
- Sleep & wake-up Adhkar
- Travel, eating, sneezing, entering/leaving Adhkar
- Digital Tasbeeh counter (with vibration feedback)
- Custom Dhikr counter (set target, count, repeat)
- Subha animation (beautiful bead design)
- Daily Dhikr reminder notifications

### 📜 6. Hadith of the Day (حديث اليوم)
- Daily hadith with Arabic + translation
- Collections: Bukhari, Muslim, Abu Dawud, Tirmidhi, Nasai, Ibn Majah
- Hadith search
- Bookmark favorite hadiths
- Share as image cards
- Random hadith feature
- Hadith authenticity grading display

### 🤲 7. Dua Collections (الأدعية)
- Categorized duas:
  - من القرآن الكريم
  - من السنة النبوية
  - أدعية يوم الجمعة
  - دعاء ختم القرآن
  - أدعية المناسبات
- Audio for each dua (recited MP3)
- Favorites collection
- Daily dua notification

### ✨ 8. Names of Allah (أسماء الله الحسنى)
- All 99 names with:
  - Arabic calligraphy display
  - Meaning in Arabic & English
  - Linguistic root explanation
  - Quranic reference
- Beautiful card design per name
- Listen to recitation
- Daily name notification
- Data source: AlAdhan API

### 📻 9. Islamic Radio & Live (الراديو الإسلامي)
- Live Quran radio stations
- Makkah & Madinah live broadcast
- 20+ Islamic radio stations worldwide
- Background play
- Sleep timer
- Source: mp3quran.net API

### 🌙 10. Ramadan Mode (رمضان مبارك)
- Special Ramadan UI theme (purple/gold mode)
- Suhoor countdown timer
- Iftar countdown with animated plate
- Daily Ramadan dua
- Khatmah tracker for Ramadan
- Iftar/Suhoor time push notifications
- 30-day Ramadan Adhkar plan
- Laylat al-Qadr last 10 nights special feature

### 💬 11. Salawat Counter (الصلاة على النبي ﷺ)
- Dedicated Salawat section
- Animated counter with beautiful display
- "اللهم صلِّ على محمد" auto-remind notification
- Daily Salawat goal (e.g., 100/day)
- Weekly statistics chart
- Different Salawat forms

### 🎯 12. Daily Spiritual Goals (أهدافي اليومية)
- Set daily goals:
  - Pages of Quran
  - Adhkar rounds
  - Salawat count
  - Fasting (Yes/No)
  - Prayers completed
- Progress rings (Apple Watch style)
- Streak calendar (GitHub-style heatmap)
- Weekly report

### ⚙️ 13. Full Settings (الإعدادات)
- Language: Arabic / English / Français / Urdu
- App theme: Dark (Night) / Light (Day) / Auto
- Quran font size (slider)
- Translation language
- Preferred reciter
- Prayer calculation method
- Madhab selection
- Adhan sound per prayer
- Notification management (per feature)
- Location settings (GPS / Manual)
- Data sync (cloud backup)

### 🔔 14. Notifications System (الإشعارات)
- Prayer time alerts (5 min before + at time)
- Adhan sound notification
- Fajr special: gentle pre-Fajr wake-up alert
- Morning Adhkar reminder (after Fajr)
- Evening Adhkar reminder (after Asr)
- "صلِّ على النبي" reminder (every X hours)
- Daily Quran reading reminder
- Hadith of the day (morning)
- Ramadan: Suhoor alert, Iftar alert
- Islamic event reminders (7 days / 1 day / same day before)
- Jumu'ah reminder (Thursday night + Friday)
- Fasting reminder (Monday/Thursday)

---

## 🔌 APIs & LIBRARIES DIRECTORY

### Quran APIs
| API | URL | Use |
|-----|-----|-----|
| AlQuran.Cloud | `https://api.alquran.cloud/v1` | Text, translations, audio |
| Fawaz Quran API | `https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1` | 90+ languages, no rate limit |
| QuranAPI.pages.dev | `https://quranapi.pages.dev/api` | Verses, chapters, audio |
| Quran CDN Images | `https://www.mp3quran.net/api/quran_pages_svg` | Mushaf page images (SVG) |

### Audio APIs
| API | URL | Use |
|-----|-----|-----|
| MP3Quran.net | `https://www.mp3quran.net/api/v3` | 400+ reciters, radios |
| QuranicAudio | `https://quranicaudio.com/api` | High quality MP3 audio |
| AlQuran.Cloud Audio | `https://api.alquran.cloud/v1/surah/{n}/ar.alafasy` | Verse-level audio |

```javascript
// Audio URL patterns (MP3Quran)
// Per surah: https://server{N}.mp3quran.net/{reciter_folder}/{surahPadded}.mp3
// Example — Alafasy, Surah Al-Fatiha:
const audioUrl = `https://server8.mp3quran.net/afs/001.mp3`;

// AlQuran.Cloud — per ayah audio:
const ayahAudio = `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${verseNumber}.mp3`;
```

### Prayer Times API
```javascript
// AlAdhan API (FREE, no key needed)
const BASE = 'https://api.aladhan.com/v1';

// Get today's prayer times by coordinates
const prayerTimes = await fetch(
  `${BASE}/timings/${Date.now()/1000}?latitude=${lat}&longitude=${lng}&method=${method}`
);

// Methods:
// 1=MWL, 2=ISNA, 3=Egypt, 4=MakkahUmmQura, 5=Pakistan
// 8=Gulf, 12=UOIF(France), 13=Kuwait, 15=Egypt-new

// Response: { Fajr, Sunrise, Dhuhr, Asr, Sunset, Maghrib, Isha, Midnight }

// Monthly timetable
const monthly = await fetch(
  `${BASE}/calendar/${year}/${month}?latitude=${lat}&longitude=${lng}&method=4`
);

// Qibla direction
const qibla = await fetch(
  `${BASE}/qibla/${lat}/${lng}`
);
// Returns: { direction: 123.45 } (degrees from North)

// 99 Names of Allah
const names = await fetch(`${BASE}/asmaAlHusna`);

// Hijri date
const hijri = await fetch(`${BASE}/gToH/${day}-${month}-${year}`);
```

### Hadith APIs
```javascript
// Fawaz Hadith API (FREE, no key)
const BASE_HADITH = 'https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1';
const collections = ['bukhari','muslim','abudawud','tirmidhi','nasai','ibnmajah'];

// Get specific hadith
const hadith = await fetch(
  `${BASE_HADITH}/editions/ara-${collection}/${chapterNumber}/${hadithNumber}.json`
);

// HadithAPI.com (beautiful UI API)
const h = await fetch(
  `https://hadithapi.com/api/hadiths?apiKey=${key}&book=sahih-bukhari&chapter=${num}`
);

// Random hadith
const random = await fetch(`https://hadithapi.pages.dev/api/${collection}/hadiths/random`);
```

### Adhkar API
```javascript
// GitHub-based Azkar API (FREE)
const AZKAR_BASE = 'https://raw.githubusercontent.com/nawafalqari/azkar-api/main/azkar.json';
const azkar = await fetch(AZKAR_BASE);

// Categories: صباح، مساء، بعد الصلاة، النوم، الاستيقاظ، السفر، الطعام
```

### Geolocation
```javascript
// Browser Geolocation (no API key)
navigator.geolocation.getCurrentPosition(
  ({ coords }) => {
    const { latitude, longitude } = coords;
    // Use with AlAdhan for prayer times
  },
  (err) => { /* Fallback to manual city input */ }
);

// Reverse geocoding (city name from coords)
const geo = await fetch(
  `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
);
```

### Push Notifications
```javascript
// Web Push Notifications (PWA)
// Service Worker + Notification API

// Request permission
const permission = await Notification.requestPermission();

// Schedule prayer time notification
function schedulePrayerNotification(prayerName, prayerTime, adhanSound) {
  const [hours, minutes] = prayerTime.split(':');
  const now = new Date();
  const prayerDate = new Date();
  prayerDate.setHours(+hours, +minutes, 0, 0);

  const delay = prayerDate - now;
  if (delay > 0) {
    setTimeout(() => {
      const notif = new Notification(`🕌 حان وقت ${prayerName}`, {
        body: 'الله أكبر الله أكبر...',
        icon: '/icons/mosque-icon.png',
        badge: '/icons/badge.png',
        sound: adhanSound,
        tag: prayerName,
        renotify: true
      });
    }, delay);
  }
}
```

### React Libraries
```json
{
  "dependencies": {
    "react": "^18.3.0",
    "react-router-dom": "^6.26.0",
    "framer-motion": "^11.5.0",
    "zustand": "^4.5.5",
    "axios": "^1.7.7",
    "howler": "^2.2.4",
    "@use-gesture/react": "^10.3.1",
    "react-circular-progressbar": "^2.1.0",
    "react-calendar": "^5.0.0",
    "react-device-detect": "^2.2.3",
    "lottie-react": "^2.4.0",
    "tsparticles": "^3.5.0",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^5.3.0",
    "workbox-webpack-plugin": "^7.1.0",
    "idb": "^8.0.0",
    "date-fns": "^4.1.0",
    "moment-hijri": "^2.1.2",
    "canvas-confetti": "^1.9.3",
    "react-spring": "^9.7.4",
    "react-swipeable": "^7.0.1",
    "recharts": "^2.12.7"
  }
}
```

---

## 🗂️ PROJECT STRUCTURE

```
zad-muslim/
├── public/
│   ├── manifest.json           ← PWA manifest
│   ├── sw.js                   ← Service Worker
│   ├── icons/                  ← App icons (all sizes)
│   ├── audio/
│   │   ├── adhan-makkah.mp3
│   │   ├── adhan-madinah.mp3
│   │   ├── adhan-egypt.mp3
│   │   └── notification.mp3
│   └── fonts/
│       └── AmiriQuran.woff2
│
├── src/
│   ├── api/
│   │   ├── quran.js            ← AlQuran.Cloud API
│   │   ├── audio.js            ← MP3Quran API
│   │   ├── prayer.js           ← AlAdhan API
│   │   ├── hadith.js           ← Hadith API
│   │   ├── azkar.js            ← Azkar JSON
│   │   └── geo.js              ← Geolocation
│   │
│   ├── store/                  ← Zustand global state
│   │   ├── useQuranStore.js
│   │   ├── usePrayerStore.js
│   │   ├── useSettingsStore.js
│   │   ├── useGoalsStore.js
│   │   └── useAzkarStore.js
│   │
│   ├── components/
│   │   ├── Quran/
│   │   │   ├── SurahList.jsx
│   │   │   ├── QuranReader.jsx
│   │   │   ├── MushafahView.jsx
│   │   │   ├── AudioPlayer.jsx
│   │   │   ├── VerseCard.jsx
│   │   │   ├── TajweedText.jsx
│   │   │   └── BookmarkPanel.jsx
│   │   │
│   │   ├── Prayer/
│   │   │   ├── PrayerCard.jsx
│   │   │   ├── CountdownTimer.jsx
│   │   │   ├── PrayerList.jsx
│   │   │   └── MonthlyCalendar.jsx
│   │   │
│   │   ├── Qibla/
│   │   │   ├── Compass.jsx
│   │   │   └── KaabaAnimation.jsx
│   │   │
│   │   ├── Azkar/
│   │   │   ├── AzkarCard.jsx
│   │   │   ├── AzkarList.jsx
│   │   │   └── TasbeehCounter.jsx
│   │   │
│   │   ├── Calendar/
│   │   │   ├── HijriCalendar.jsx
│   │   │   └── EventBadge.jsx
│   │   │
│   │   ├── Hadith/
│   │   │   ├── HadithCard.jsx
│   │   │   └── HadithOfDay.jsx
│   │   │
│   │   ├── Salawat/
│   │   │   └── SalawatCounter.jsx
│   │   │
│   │   ├── Goals/
│   │   │   ├── GoalRings.jsx
│   │   │   ├── StreakCalendar.jsx
│   │   │   └── WeeklyChart.jsx
│   │   │
│   │   ├── Ramadan/
│   │   │   ├── RamadanBanner.jsx
│   │   │   ├── IftarCountdown.jsx
│   │   │   └── SuhoorAlert.jsx
│   │   │
│   │   ├── UI/
│   │   │   ├── IslamicPattern.jsx    ← SVG geometry backgrounds
│   │   │   ├── GoldDivider.jsx       ← Decorative dividers
│   │   │   ├── MoonPhase.jsx         ← Animated moon
│   │   │   ├── MosqueSilhouette.jsx  ← SVG mosque art
│   │   │   ├── StarField.jsx         ← Particle stars bg
│   │   │   ├── LoadingSpinner.jsx    ← Islamic-themed loader
│   │   │   ├── BottomNav.jsx         ← Mobile navigation
│   │   │   └── PageTransition.jsx
│   │   │
│   │   └── Settings/
│   │       ├── SettingsPanel.jsx
│   │       ├── NotificationSettings.jsx
│   │       └── ThemeToggle.jsx
│   │
│   ├── pages/
│   │   ├── Splash.jsx
│   │   ├── Home.jsx
│   │   ├── QuranPage.jsx
│   │   ├── PrayerPage.jsx
│   │   ├── QiblaPage.jsx
│   │   ├── AzkarPage.jsx
│   │   ├── HadithPage.jsx
│   │   ├── CalendarPage.jsx
│   │   ├── RadioPage.jsx
│   │   ├── GoalsPage.jsx
│   │   ├── RamadanPage.jsx
│   │   └── SettingsPage.jsx
│   │
│   ├── hooks/
│   │   ├── usePrayerTimes.js
│   │   ├── useQuranAudio.js
│   │   ├── useCompass.js
│   │   ├── useNotifications.js
│   │   ├── useGeolocation.js
│   │   └── useHijriDate.js
│   │
│   ├── utils/
│   │   ├── hijriConverter.js
│   │   ├── prayerCalculator.js
│   │   ├── notificationScheduler.js
│   │   ├── shareCard.js           ← Generate shareable images
│   │   └── storage.js             ← IndexedDB wrapper
│   │
│   ├── constants/
│   │   ├── surahs.js              ← 114 surahs metadata
│   │   ├── reciters.js            ← Available reciters list
│   │   ├── islamicEvents.js       ← All Islamic events + dates
│   │   └── prayers.js             ← Prayer names, icons, colors
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── variables.css          ← CSS custom properties
│   │   ├── arabic.css             ← Arabic text styles
│   │   ├── animations.css         ← Keyframe animations
│   │   └── islamic-patterns.css   ← Geometric patterns
│   │
│   ├── App.jsx
│   └── index.jsx
```

---

# 🚀 DEVELOPMENT PHASES

---

## PHASE 1 — Project Setup & Design Foundation
### ⏱ 4–5 Days

### 1.1 Initialize & Configure
```bash
npx create-react-app zad-muslim --template typescript
cd zad-muslim
npm install framer-motion zustand axios howler lottie-react
npm install react-router-dom react-hot-toast react-icons
npm install moment-hijri date-fns recharts
npm install workbox-webpack-plugin idb
npm install react-circular-progressbar canvas-confetti
npx tailwindcss init
```

### 1.2 Global CSS Variables Setup
```css
/* src/styles/globals.css */
@import url('https://fonts.googleapis.com/css2?family=Amiri+Quran&family=Noto+Naskh+Arabic:wght@400;700&family=Scheherazade+New:wght@700&family=Inter:wght@300;400;600;700&display=swap');

* { margin: 0; padding: 0; box-sizing: border-box; }

html {
  direction: rtl;
  font-family: 'Noto Naskh Arabic', 'Inter', sans-serif;
  background: var(--zad-midnight);
  color: var(--text-primary);
  overflow-x: hidden;
}

/* Quran text special styling */
.quran-text {
  font-family: 'Amiri Quran', serif;
  font-size: 1.6rem;
  line-height: 2.8rem;
  text-align: justify;
  color: var(--text-arabic);
  word-spacing: 4px;
}

/* Gold shimmer animation */
@keyframes goldShimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
.gold-text {
  background: var(--grad-gold);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: goldShimmer 3s linear infinite;
}

/* Star twinkling */
@keyframes twinkle {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.4); }
}

/* Moon pulse */
@keyframes moonGlow {
  0%, 100% { box-shadow: 0 0 15px rgba(212,160,23,0.3); }
  50% { box-shadow: 0 0 40px rgba(212,160,23,0.7), 0 0 60px rgba(212,160,23,0.3); }
}

/* Islamic pattern reveal */
@keyframes patternReveal {
  from { opacity: 0; transform: rotate(-5deg) scale(0.95); }
  to { opacity: 0.07; transform: rotate(0deg) scale(1); }
}
```

### 1.3 Splash Screen
```jsx
// pages/Splash.jsx
export default function Splash() {
  return (
    <motion.div className="splash-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated stars background */}
      <StarField count={80} />

      {/* Mosque silhouette at bottom */}
      <MosqueSilhouette />

      {/* Crescent moon — animated glow */}
      <motion.div className="crescent"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: "backOut" }}
      >
        🌙
      </motion.div>

      {/* App name reveal */}
      <motion.h1 className="app-name gold-text"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        زاد مسلم
      </motion.h1>

      <motion.p className="app-tagline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        زادك في كل يوم
      </motion.p>

      {/* Loading bar */}
      <motion.div className="loading-bar"
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
```

---

## PHASE 2 — Home Screen & Navigation
### ⏱ 4–5 Days

### 2.1 Home Dashboard Layout
```
┌─────────────────────────────────────────┐
│  🌙 السلام عليكم                    ⚙ │
│  الثلاثاء، 1 رمضان 1447             │
├─────────────────────────────────────────┤
│                                         │
│  ┌──────────────────────────────────┐   │
│  │  🕌 صلاة العصر                   │   │
│  │  يتبقى: 01:24:33                 │   │
│  │  ████████████░░░░  (gold bar)    │   │
│  └──────────────────────────────────┘   │
│                                         │
│  ⚡ أذكار المساء  ● آية اليوم          │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │ 📖 تابع القراءة                 │    │
│  │ سورة البقرة — الآية 142         │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ┌────────┐  ┌────────┐  ┌────────┐    │
│  │📿 أذكار│  │📻 راديو│  │🤲 دعاء │    │
│  └────────┘  └────────┘  └────────┘    │
│                                         │
│  💬 حديث اليوم...                       │
│                                         │
├─────────────────────────────────────────┤
│  🏠  📖  🕌  📅  ⚙  ← Bottom Nav      │
└─────────────────────────────────────────┘
```

### 2.2 Bottom Navigation
```jsx
const navItems = [
  { icon: '🏠', label: 'الرئيسية', path: '/' },
  { icon: '📖', label: 'القرآن',    path: '/quran' },
  { icon: '🕌', label: 'الصلاة',   path: '/prayer' },
  { icon: '📿', label: 'الأذكار',  path: '/azkar' },
  { icon: '☰',  label: 'المزيد',   path: '/more' },
];
```

### 2.3 Animated Prayer Countdown
```jsx
// components/Prayer/CountdownTimer.jsx
export function CountdownTimer({ nextPrayer, timeString }) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = nextPrayer - now;
      if (diff <= 0) {
        // Trigger adhan!
        playAdhan();
        return;
      }
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTimeLeft(`${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`);
    }, 1000);
    return () => clearInterval(interval);
  }, [nextPrayer]);

  return (
    <motion.div className="prayer-countdown-card"
      animate={{ boxShadow: ['0 0 20px rgba(212,160,23,0.2)', '0 0 40px rgba(212,160,23,0.5)', '0 0 20px rgba(212,160,23,0.2)'] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <div className="prayer-name gold-text">{nextPrayer.name}</div>
      <div className="countdown font-mono">{timeLeft}</div>
      <div className="progress-bar">
        <motion.div className="progress-fill" style={{ width: `${progressPercent}%` }} />
      </div>
    </motion.div>
  );
}
```

---

## PHASE 3 — Holy Quran Module
### ⏱ 7–8 Days

### 3.1 Quran API Integration
```javascript
// api/quran.js
const BASE = 'https://api.alquran.cloud/v1';
const CDN = 'https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions';

// Get all 114 surahs info
export const getSurahList = () =>
  fetch(`${BASE}/surah`).then(r => r.json());

// Get surah with translation + audio
export const getSurahFull = (surahNum, reciter = 'ar.alafasy') =>
  fetch(`${BASE}/surah/${surahNum}/editions/quran-uthmani,${reciter},en.asad`)
    .then(r => r.json());

// Get Mushaf page image (SVG)
export const getMushafPageUrl = (pageNum) =>
  `https://www.mp3quran.net/api/quran_pages_svg/${String(pageNum).padStart(3,'0')}.svg`;

// Get audio CDN URL (per ayah)
export const getAyahAudioUrl = (verseNumber, reciterId = 'ar.alafasy') =>
  `https://cdn.islamic.network/quran/audio/128/${reciterId}/${verseNumber}.mp3`;

// Search Quran
export const searchQuran = (query, language = 'ar') =>
  fetch(`${BASE}/search/${encodeURIComponent(query)}/${language}/quran-uthmani`)
    .then(r => r.json());
```

### 3.2 Quran Reader Component
```jsx
// components/Quran/QuranReader.jsx
export function QuranReader({ surahNumber }) {
  const [ayahs, setAyahs] = useState([]);
  const [currentAyah, setCurrentAyah] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { reciter, fontSize, showTranslation } = useSettingsStore();

  const audioRef = useRef(new Howl({ src: [''], html5: true }));

  const playAyah = (ayahNum) => {
    const audioUrl = getAyahAudioUrl(ayahNum, reciter);
    audioRef.current.unload();
    audioRef.current = new Howl({
      src: [audioUrl],
      html5: true,
      onend: () => {
        // Auto-advance to next ayah
        if (ayahNum < ayahs.length) playAyah(ayahNum + 1);
      }
    });
    audioRef.current.play();
    setCurrentAyah(ayahNum);
    setIsPlaying(true);
  };

  return (
    <div className="quran-reader" dir="rtl">
      {/* Surah Header */}
      <motion.div className="surah-header">
        <div className="bismillah gold-text">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</div>
        <div className="surah-name">{surah.name}</div>
      </motion.div>

      {/* Ayahs */}
      {ayahs.map((ayah, i) => (
        <motion.div
          key={ayah.number}
          className={`ayah-block ${currentAyah === ayah.numberInSurah ? 'active' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.02 }}
          onClick={() => playAyah(ayah.numberInSurah)}
        >
          <p className="quran-text" style={{ fontSize: `${fontSize}rem` }}>
            {ayah.text}
            <span className="ayah-number">﴿{ayah.numberInSurah}﴾</span>
          </p>
          {showTranslation && (
            <p className="translation">{ayah.translation}</p>
          )}
        </motion.div>
      ))}

      {/* Floating Audio Player */}
      {isPlaying && <FloatingAudioPlayer onStop={() => setIsPlaying(false)} />}
    </div>
  );
}
```

### 3.3 Reciters List (Major)
```javascript
const RECITERS = [
  { id: 'ar.alafasy',      name: 'مشاري العفاسي',      folder: 'afs' },
  { id: 'ar.minshawi',     name: 'محمد صديق المنشاوي', folder: 'minshawi' },
  { id: 'ar.husary',       name: 'محمود خليل الحصري',  folder: 'Husary' },
  { id: 'ar.abdulbasit',   name: 'عبد الباسط عبد الصمد',folder: 'Abdul_Basit' },
  { id: 'ar.mahermuaiqly', name: 'ماهر المعيقلي',      folder: 'maher' },
  { id: 'ar.sudais',       name: 'عبد الرحمن السديس',  folder: 'Sudais' },
  { id: 'ar.shuraym',      name: 'سعود الشريم',        folder: 'shuraym' },
  { id: 'ar.ghamdi',       name: 'سعد الغامدي',        folder: 'ghamdi' },
];
```

---

## PHASE 4 — Prayer Times Module
### ⏱ 5–6 Days

### 4.1 Prayer Times Hook
```javascript
// hooks/usePrayerTimes.js
import { useEffect, useState } from 'react';
import { useSettingsStore } from '../store/useSettingsStore';

export function usePrayerTimes() {
  const { location, prayerMethod, madhab } = useSettingsStore();
  const [timings, setTimings] = useState(null);
  const [nextPrayer, setNextPrayer] = useState(null);
  const [hijriDate, setHijriDate] = useState(null);

  useEffect(() => {
    async function fetchTimes() {
      const { lat, lng } = location;
      const ts = Math.floor(Date.now() / 1000);
      const url = `https://api.aladhan.com/v1/timings/${ts}?latitude=${lat}&longitude=${lng}&method=${prayerMethod}&school=${madhab}`;
      const res = await fetch(url);
      const data = await res.json();

      setTimings(data.data.timings);
      setHijriDate(data.data.date.hijri);
      calculateNextPrayer(data.data.timings);

      // Schedule notifications
      scheduleAllPrayerNotifications(data.data.timings);
    }
    fetchTimes();
  }, [location, prayerMethod, madhab]);

  return { timings, nextPrayer, hijriDate };
}
```

### 4.2 Prayer Cards Design
```jsx
const prayerCards = [
  { name: 'الفجر',    icon: '🌅', color: '#1A237E', gradient: 'linear-gradient(135deg, #0D1B3E, #1A237E)' },
  { name: 'الظهر',   icon: '☀️', color: '#F59E0B', gradient: 'linear-gradient(135deg, #78350F, #F59E0B)' },
  { name: 'العصر',   icon: '🌤️', color: '#D97706', gradient: 'linear-gradient(135deg, #92400E, #D97706)' },
  { name: 'المغرب',  icon: '🌆', color: '#DC2626', gradient: 'linear-gradient(135deg, #7F1D1D, #DC2626)' },
  { name: 'العشاء',  icon: '🌙', color: '#312E81', gradient: 'linear-gradient(135deg, #1E1B4B, #312E81)' },
];
```

### 4.3 Adhan Player
```javascript
// Adhan sound player using Howler.js
import { Howl } from 'howler';

const ADHAN_SOUNDS = {
  makkah:  '/audio/adhan-makkah.mp3',
  madinah: '/audio/adhan-madinah.mp3',
  egypt:   '/audio/adhan-egypt.mp3',
  minimal: '/audio/adhan-minimal.mp3',
};

export function playAdhan(type = 'makkah') {
  const sound = new Howl({
    src: [ADHAN_SOUNDS[type]],
    html5: true,
    volume: 0.9,
  });
  sound.play();
  return sound; // Return for stop control
}
```

---

## PHASE 5 — Qibla Compass Module
### ⏱ 3–4 Days

### 5.1 Animated Compass
```jsx
// components/Qibla/Compass.jsx
export function QiblaCompass({ qiblaDirection }) {
  const [deviceHeading, setDeviceHeading] = useState(0);
  const [permission, setPermission] = useState(false);

  useEffect(() => {
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', (e) => {
        setDeviceHeading(e.alpha || 0);
      });
    }
  }, []);

  // Needle rotation: qibla direction - device heading
  const needleRotation = qiblaDirection - deviceHeading;

  return (
    <div className="compass-wrapper">
      {/* Ka'ba glow at top when aligned */}
      {Math.abs(needleRotation % 360) < 5 && (
        <motion.div className="aligned-glow"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          🕋 أنت تواجه القبلة!
        </motion.div>
      )}

      {/* Compass circle */}
      <motion.div
        className="compass-dial"
        animate={{ rotate: -deviceHeading }}
        transition={{ type: 'spring', damping: 20 }}
      >
        {/* N S E W labels */}
        <span className="north">N</span>
        <span className="south">S</span>
        <span className="east">E</span>
        <span className="west">W</span>
      </motion.div>

      {/* Qibla needle */}
      <motion.div
        className="qibla-needle"
        animate={{ rotate: needleRotation }}
        transition={{ type: 'spring', damping: 30 }}
      >
        🕋
      </motion.div>

      {/* Degree display */}
      <div className="degree-display gold-text">
        {Math.round(qiblaDirection)}° من الشمال
      </div>
    </div>
  );
}
```

---

## PHASE 6 — Adhkar & Tasbeeh Module
### ⏱ 4–5 Days

### 6.1 Adhkar Data & API
```javascript
// api/azkar.js
const AZKAR_URL = 'https://raw.githubusercontent.com/nawafalqari/azkar-api/main/azkar.json';

export const categories = [
  { key: 'أذكار الصباح',       icon: '🌅', color: '#F59E0B' },
  { key: 'أذكار المساء',       icon: '🌙', color: '#312E81' },
  { key: 'أذكار بعد الصلاة',  icon: '🕌', color: '#1A9B5F' },
  { key: 'أذكار النوم',        icon: '😴', color: '#7C3AED' },
  { key: 'أذكار الاستيقاظ',   icon: '☀️', color: '#D97706' },
  { key: 'أذكار الأكل',        icon: '🍽️', color: '#059669' },
  { key: 'أذكار السفر',        icon: '✈️', color: '#0EA5E9' },
];
```

### 6.2 Tasbeeh (Digital Subha)
```jsx
// components/Azkar/TasbeehCounter.jsx
export function TasbeehCounter() {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(33);
  const [dhikr, setDhikr] = useState('سبحان الله');
  const [roundsCompleted, setRoundsCompleted] = useState(0);

  const tap = () => {
    if (count + 1 >= target) {
      setRoundsCompleted(r => r + 1);
      setCount(0);
      // Vibrate on completion
      navigator.vibrate?.(200);
      // Confetti celebration
      if (roundsCompleted + 1 === 3) confetti({ colors: ['#D4A017', '#1A9B5F'] });
    } else {
      setCount(c => c + 1);
      navigator.vibrate?.(30);
    }
  };

  const progress = (count / target) * 100;

  return (
    <div className="tasbeeh-container">
      {/* Circular progress */}
      <CircularProgressbar
        value={progress}
        text={String(count)}
        styles={buildStyles({
          pathColor: '#D4A017',
          textColor: '#F7F3E9',
          trailColor: '#1A2332',
        })}
      />

      {/* Dhikr text */}
      <motion.h2 className="dhikr-text gold-text"
        key={dhikr}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        {dhikr}
      </motion.h2>

      {/* Tap button — huge, beautiful */}
      <motion.button
        className="tasbeeh-btn"
        onClick={tap}
        whileTap={{ scale: 0.92 }}
        whileHover={{ boxShadow: '0 0 30px rgba(212,160,23,0.6)' }}
      >
        <span>اضغط للتسبيح</span>
        <span className="rounds">× {roundsCompleted} دورة</span>
      </motion.button>

      {/* Bead visualization */}
      <SubhaBeads count={count} target={target} />
    </div>
  );
}
```

---

## PHASE 7 — Notifications System
### ⏱ 4–5 Days

### 7.1 Service Worker Setup
```javascript
// public/sw.js
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('zad-muslim-v1').then(cache =>
      cache.addAll([
        '/', '/index.html', '/manifest.json',
        '/audio/adhan-makkah.mp3',
        '/audio/notification.mp3',
      ])
    )
  );
});

// Handle push notifications
self.addEventListener('push', (e) => {
  const data = e.data.json();
  e.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/icons/icon-192.png',
      badge: '/icons/badge-72.png',
      tag: data.tag,
      requireInteraction: data.important || false,
      data: { url: data.url || '/' },
      actions: [
        { action: 'open', title: 'افتح التطبيق' },
        { action: 'dismiss', title: 'تجاهل' }
      ]
    })
  );
});
```

### 7.2 Notification Scheduler
```javascript
// utils/notificationScheduler.js
export class IslamicNotificationScheduler {

  static async requestPermission() {
    const result = await Notification.requestPermission();
    return result === 'granted';
  }

  static schedulePrayer(prayerName, prayerTime, settings) {
    const [h, m] = prayerTime.split(':').map(Number);
    const now = new Date();
    const target = new Date();
    target.setHours(h, m, 0, 0);

    // 10-minute pre-alert
    if (settings.preAlert) {
      const preTarget = new Date(target - 10 * 60 * 1000);
      const preDelay = preTarget - now;
      if (preDelay > 0) {
        setTimeout(() => {
          new Notification(`⏰ قريباً: ${prayerName}`, {
            body: `سيحين وقت ${prayerName} خلال 10 دقائق`,
            icon: '/icons/icon-192.png',
          });
        }, preDelay);
      }
    }

    // At prayer time — play Adhan
    const delay = target - now;
    if (delay > 0) {
      setTimeout(() => {
        new Notification(`🕌 حان وقت ${prayerName}`, {
          body: 'الله أكبر الله أكبر...',
          icon: '/icons/mosque-icon.png',
          silent: false,
        });
        if (settings.playAdhan) playAdhan(settings.adhanType);
      }, delay);
    }
  }

  static scheduleDailySalawat(hours = [9, 12, 15, 18, 21]) {
    hours.forEach(h => {
      const target = new Date();
      target.setHours(h, 0, 0, 0);
      const delay = target - new Date();
      if (delay > 0) {
        setTimeout(() => {
          new Notification('💚 صلِّ على النبي ﷺ', {
            body: 'اللهم صلِّ وسلم وبارك على سيدنا محمد',
            icon: '/icons/icon-192.png',
            tag: 'salawat',
          });
        }, delay);
      }
    });
  }

  static scheduleAzkar() {
    const morning = new Date(); morning.setHours(6, 30, 0, 0);
    const evening = new Date(); evening.setHours(16, 0, 0, 0);

    const schedule = (target, title, body) => {
      const delay = target - new Date();
      if (delay > 0) {
        setTimeout(() => new Notification(title, { body, icon: '/icons/icon-192.png' }), delay);
      }
    };

    schedule(morning, '🌅 أذكار الصباح', 'لا تنس أذكار الصباح يا عبد الله');
    schedule(evening, '🌙 أذكار المساء', 'حافظ على أذكار المساء');
  }

  static scheduleRamadan(iftar, suhoor) {
    // Suhoor alert 30 min before
    const suhoorAlert = new Date(suhoor - 30 * 60 * 1000);
    const delay1 = suhoorAlert - new Date();
    if (delay1 > 0) {
      setTimeout(() => new Notification('🍽️ السحور', {
        body: 'تبقى 30 دقيقة على أذان الفجر — بادر بالسحور',
        icon: '/icons/moon.png',
      }), delay1);
    }

    // Iftar alert 5 min before
    const iftarAlert = new Date(iftar - 5 * 60 * 1000);
    const delay2 = iftarAlert - new Date();
    if (delay2 > 0) {
      setTimeout(() => new Notification('🌅 الإفطار اقترب', {
        body: 'يتبقى 5 دقائق على موعد الإفطار',
        icon: '/icons/iftar.png',
      }), delay2);
    }
  }
}
```

---

## PHASE 8 — Settings & Personalization
### ⏱ 3–4 Days

### 8.1 Settings Store (Zustand)
```javascript
// store/useSettingsStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useSettingsStore = create(
  persist((set) => ({
    // Language & Theme
    language: 'ar',
    theme: 'dark',
    rtl: true,

    // Quran
    reciter: 'ar.alafasy',
    translation: 'en.asad',
    tafsir: 'ar.ibn-kathir',
    fontSize: 1.6,
    showTranslation: true,
    showTafsir: false,
    mushafView: false,          // Page view vs list view

    // Prayer
    prayerMethod: 5,            // Egyptian General Authority
    madhab: 0,                  // 0=Shafi, 1=Hanafi
    location: { lat: null, lng: null, city: '' },

    // Notifications
    notifications: {
      prayer: true,
      preAlert: true,           // 10 min before prayer
      adhan: true,
      adhanType: 'makkah',
      morningAzkar: true,
      eveningAzkar: true,
      salawat: true,
      salawatHours: [9, 12, 15, 18, 21],
      hadith: true,
      hadithTime: '08:00',
      quranReminder: true,
      quranTime: '07:00',
    },

    // Actions
    setLanguage: (lang) => set({ language: lang }),
    setTheme: (theme) => set({ theme }),
    setReciter: (r) => set({ reciter: r }),
    setFontSize: (s) => set({ fontSize: s }),
    setLocation: (loc) => set({ location: loc }),
    updateNotification: (key, val) =>
      set(s => ({ notifications: { ...s.notifications, [key]: val } })),
  }),
  { name: 'zad-muslim-settings' }
));
```

### 8.2 Settings Page Sections
```
⚙ الإعدادات
│
├── 🎨 المظهر
│   ├── [●] الوضع الليلي / النهاري / تلقائي
│   └── لون الإضاءة: ذهبي / أخضر / فيروزي
│
├── 📖 إعدادات القرآن
│   ├── القارئ: [قائمة 40+ قارئ]
│   ├── الترجمة: [قائمة اللغات]
│   ├── التفسير: [ابن كثير / السعدي / الجلالين]
│   ├── حجم الخط: ───●──── [slider]
│   ├── [●] إظهار الترجمة
│   └── [●] إظهار التفسير
│
├── 🕌 إعدادات الصلاة
│   ├── طريقة الحساب: [15 طريقة]
│   ├── المذهب: حنفي / شافعي
│   └── الموقع: [GPS تلقائي / بحث يدوي]
│
├── 🔔 الإشعارات
│   ├── [●] إشعار الصلاة
│   ├── [●] تنبيه قبل 10 دقائق
│   ├── [●] أذان (مع الصوت)
│   ├── صوت الأذان: مكي / مدني / مصري / مخصص
│   ├── [●] أذكار الصباح (٦:٣٠ ص)
│   ├── [●] أذكار المساء (٤:٠٠ م)
│   ├── [●] الصلاة على النبي ﷺ
│   ├── [●] تذكير قراءة القرآن
│   └── [●] حديث اليوم
│
└── 🌐 اللغة
    └── العربية / English / Français / اردو
```

---

## PHASE 9 — Special Features
### ⏱ 5–6 Days

### 9.1 Salawat Counter Design
```jsx
// components/Salawat/SalawatCounter.jsx
export function SalawatCounter() {
  const [count, setCount] = useState(0);
  const [daily, setDaily] = useState(0);
  const target = 100;

  return (
    <motion.div className="salawat-container">
      {/* Beautiful Arabic calligraphy display */}
      <motion.div className="salawat-calligraphy gold-text"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ﷺ
      </motion.div>

      <h2 className="gold-text">اللهم صلِّ على محمد</h2>

      {/* Counter ring */}
      <CircularProgressbar
        value={(daily % target) / target * 100}
        text={String(daily)}
        styles={buildStyles({ pathColor: '#1A9B5F', textColor: '#F7F3E9' })}
      />

      <motion.button className="salawat-btn"
        onClick={() => {
          setCount(c => c + 1);
          setDaily(d => d + 1);
          navigator.vibrate?.(20);
        }}
        whileTap={{ scale: 0.9 }}
      >
        صلِّ على النبي
      </motion.button>

      <div className="stats-row">
        <div>اليوم: {daily}</div>
        <div>الإجمالي: {count.toLocaleString('ar-SA')}</div>
      </div>
    </motion.div>
  );
}
```

### 9.2 Daily Goals — Apple-style Rings
```jsx
// components/Goals/GoalRings.jsx
const goals = [
  { label: 'الصلوات', current: 3, target: 5, color: '#1A9B5F', icon: '🕌' },
  { label: 'القرآن (صفحات)', current: 2, target: 5, color: '#D4A017', icon: '📖' },
  { label: 'الأذكار', current: 1, target: 2, color: '#7C3AED', icon: '📿' },
  { label: 'الصلاة على النبي', current: 47, target: 100, color: '#0EA5A0', icon: '💚' },
];
```

### 9.3 Ramadan Mode
```jsx
// Automatic activation during Ramadan
function detectRamadan(hijriDate) {
  return hijriDate.month.number === 9;
}

// Special Ramadan UI: starry purple gradient header
// Features unlocked in Ramadan:
// - Suhoor/Iftar countdown
// - Laylat al-Qadr counter (last 10 nights)
// - Daily Ramadan schedule
// - Special Ramadan background animation
```

### 9.4 Verse Share Card Generator
```javascript
// utils/shareCard.js
export async function generateVerseCard(ayah, surahName, translation) {
  const canvas = document.createElement('canvas');
  canvas.width = 1080; canvas.height = 1080;
  const ctx = canvas.getContext('2d');

  // Background gradient
  const grad = ctx.createLinearGradient(0, 0, 1080, 1080);
  grad.addColorStop(0, '#0B0F1A');
  grad.addColorStop(0.5, '#1A2B4A');
  grad.addColorStop(1, '#0D1F35');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1080, 1080);

  // Islamic geometric border (SVG-drawn)
  drawIslamicBorder(ctx, 1080, 1080);

  // Verse text (Arabic, centered)
  ctx.font = '52px Amiri Quran';
  ctx.fillStyle = '#EFE6D0';
  ctx.textAlign = 'center';
  ctx.direction = 'rtl';
  wrapText(ctx, ayah, 540, 480, 900, 70);

  // Surah reference
  ctx.font = '36px Noto Naskh Arabic';
  ctx.fillStyle = '#D4A017';
  ctx.fillText(`— ${surahName} —`, 540, 700);

  // Translation
  ctx.font = '28px Inter';
  ctx.fillStyle = '#B8A98A';
  ctx.direction = 'ltr';
  wrapText(ctx, translation, 540, 800, 900, 38);

  // App watermark
  ctx.font = '24px Cinzel';
  ctx.fillStyle = 'rgba(212,160,23,0.6)';
  ctx.fillText('زاد مسلم | Zad Muslim', 540, 1020);

  return canvas.toDataURL('image/png');
}
```

---

## PHASE 10 — PWA & Performance
### ⏱ 3–4 Days

### 10.1 PWA Manifest
```json
{
  "name": "زاد مسلم — Zad Muslim",
  "short_name": "زاد مسلم",
  "description": "تطبيقك الإسلامي الشامل",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0B0F1A",
  "theme_color": "#D4A017",
  "orientation": "portrait",
  "lang": "ar",
  "dir": "rtl",
  "icons": [
    { "src": "/icons/icon-72.png",   "sizes": "72x72",   "type": "image/png" },
    { "src": "/icons/icon-96.png",   "sizes": "96x96",   "type": "image/png" },
    { "src": "/icons/icon-128.png",  "sizes": "128x128", "type": "image/png" },
    { "src": "/icons/icon-192.png",  "sizes": "192x192", "type": "image/png", "purpose": "maskable" },
    { "src": "/icons/icon-512.png",  "sizes": "512x512", "type": "image/png", "purpose": "any maskable" }
  ],
  "shortcuts": [
    { "name": "القرآن",    "url": "/quran",  "icons": [{ "src": "/icons/quran.png", "sizes": "96x96" }] },
    { "name": "مواقيت الصلاة", "url": "/prayer", "icons": [{ "src": "/icons/prayer.png", "sizes": "96x96" }] },
    { "name": "الأذكار",  "url": "/azkar",  "icons": [{ "src": "/icons/azkar.png", "sizes": "96x96" }] }
  ],
  "categories": ["lifestyle", "religion", "utilities"]
}
```

### 10.2 Performance Targets
| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Time to Interactive | < 3.0s |
| Lighthouse Score | > 95 |
| Offline Support | ✅ Full |
| Bundle Size | < 300KB (gzipped) |
| Quran Audio Cache | IndexedDB |

### 10.3 Offline Strategy
```javascript
// Cache strategies per resource type:
// - App shell (HTML/CSS/JS): Cache First
// - Quran text: Cache First (IndexedDB)
// - Prayer times: Network First, Cache fallback
// - Audio files: Cache on first play, serve from cache
// - Images: Stale While Revalidate
```

---

## PHASE 11 — Animations & Delight
### ⏱ 3–4 Days

### 11.1 Full Animations List

| Animation | Trigger | Library | Details |
|-----------|---------|---------|---------|
| Star field background | App load | Canvas | 100 twinkling stars |
| Moon glow pulse | Always | CSS | Smooth gold glow |
| Prayer card entrance | Scroll | Framer Motion | Stagger 0.1s per card |
| Compass needle | Device orientation | Framer Motion spring | Smooth rotation |
| Tasbeeh tap | Button press | CSS + vibration | Scale + ripple |
| Page transitions | Route change | Framer Motion | Slide + fade |
| Gold shimmer text | Always | CSS | Animated gradient |
| Confetti | Goal complete | canvas-confetti | Gold + green particles |
| Loading skeleton | API fetch | CSS | Shimmer placeholder |
| Surah list scroll | FlatList | Framer Motion | Fade in on viewport |
| Audio wave | Playing | CSS + JS | Animated bars |
| Mosque silhouette | Landing | SVG animation | Fade in from bottom |
| Ayah highlight | Playing audio | Framer Motion | Gold border pulse |
| Islamic pattern | Card bg | SVG | 5% opacity reveal |
| Calendar flip | Month change | Framer Motion | 3D card flip |
| Notification bell | Reminder | CSS | Shake animation |
| Ramadan banner | Ramadan mode | Lottie | Crescent + stars |

### 11.2 Loading States
```jsx
// Islamic-themed loading spinner
function IslamicLoader({ text = 'جاري التحميل...' }) {
  return (
    <div className="loader-container">
      <motion.div className="loader-ring"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        {/* 8-point Islamic star spinner */}
        ✦
      </motion.div>

      {[0, 1, 2].map(i => (
        <motion.div key={i} className="loader-dot"
          animate={{ y: [0, -10, 0] }}
          transition={{ delay: i * 0.2, repeat: Infinity, duration: 0.8 }}
        />
      ))}

      <p className="loader-text">{text}</p>
    </div>
  );
}
```

---

## PHASE 12 — QA, Testing & Launch
### ⏱ 4–5 Days

### 12.1 Test Checklist

| Feature | Test Case | Expected |
|---------|-----------|----------|
| Prayer Times | GPS location | Accurate ± 1 min |
| Prayer Times | Manual city input | Accurate times |
| Quran Audio | Play ayah | Audio loads & plays |
| Quran Reader | Scroll position | Saves last position |
| Compass | Device rotation | Smooth, accurate |
| Notifications | Prayer alert | Fires at correct time |
| Adhan | Sound plays | Clean audio, no lag |
| Offline | No internet | Cached content works |
| Arabic RTL | All pages | Correct RTL layout |
| Dark mode | Toggle | Instant, no flash |
| Tasbeeh | Tap 33 times | Vibrate + next round |
| Share card | Generate image | Beautiful card output |
| Ramadan mode | Hijri month = 9 | Auto-activates |

### 12.2 Deployment
```bash
# Build optimized production bundle
npm run build

# Deploy to Vercel (recommended)
vercel --prod

# OR Firebase Hosting
firebase deploy --only hosting

# OR Netlify
netlify deploy --prod --dir=build

# Configure custom domain
# Verify HTTPS for geolocation + notifications
# Submit to PWA directories
```

---

## 📊 COMPLETE TIMELINE

| Phase | Description | Duration |
|-------|-------------|----------|
| 1 | Setup & Design Foundation | 4–5 days |
| 2 | Home Screen & Navigation | 4–5 days |
| 3 | Quran Module | 7–8 days |
| 4 | Prayer Times Module | 5–6 days |
| 5 | Qibla Compass | 3–4 days |
| 6 | Adhkar & Tasbeeh | 4–5 days |
| 7 | Notifications System | 4–5 days |
| 8 | Settings & Personalization | 3–4 days |
| 9 | Special Features (Goals, Salawat, Ramadan, Share) | 5–6 days |
| 10 | PWA & Performance | 3–4 days |
| 11 | Animations & Delight | 3–4 days |
| 12 | QA, Testing & Launch | 4–5 days |
| **13** | **📱 APK Build & Android Distribution** | **5–7 days** |
| **TOTAL** | | **~54–68 days** |

---

---

## 📱 NEW REFERENCE APIs — Islamic-APIs Repository
### Source: https://github.com/alihmada/Islamic-APIs
> These are the **simplified, production-ready APIs** we'll use for the APK build.

| API | Base URL | Use | Auth |
|-----|----------|-----|------|
| Prayer Times | `api.aladhan.com/v1/timingsByCity` | Prayer times by city/country | Free |
| Prayer Times | `api.aladhan.com/v1/timings` | Prayer times by GPS coords | Free |
| Quran Text | `api.alquran.cloud/v1/surah/{n}` | 114 surahs, Arabic + translations | Free |
| Quran Audio | `api.quran.com/api/v4/chapter_recitations/{id}` | MP3 by chapter & reciter | Free |
| Tafsir | `quranenc.com/api/v1/translation/sura/{lang}/{n}` | Scholarly interpretations | Free |
| Hadith | `hadis-api-id.vercel.app/hadith/{collection}` | Bukhari, Muslim, etc. | Free |
| Azkar | `raw.githubusercontent.com/.../azkar.json` | All categorized azkar | Free |
| Quran Radio | `data-rosy.vercel.app/radio.json` | 18 live radio stations | Free |

**All APIs are FREE, no keys needed, direct GET requests returning JSON/MP3.**

---

## 🔌 COMPLETE APIS REFERENCE (Legacy)

| API | Base URL | Usage | Auth |
|-----|----------|-------|------|
| AlQuran Cloud | `api.alquran.cloud/v1` | Quran text + audio | Free |
| Fawaz Quran | `cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1` | 90+ translations | Free |
| MP3Quran | `mp3quran.net/api/v3` | 400+ reciters, radios | Free |
| Islamic CDN Audio | `cdn.islamic.network/quran/audio` | Per-ayah audio MP3 | Free |
| AlAdhan | `api.aladhan.com/v1` | Prayer times, Hijri, Qibla, 99 Names | Free |
| UmmahAPI | `ummahapi.com/api` | Qibla, prayer, Hijri | Free |
| Fawaz Hadith | `cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1` | 9 collections | Free |
| HadeethEnc | `hadeethenc.com/api/v1` | Explained hadiths | Free |
| Azkar API | `GitHub: nawafalqari/azkar-api` | All Azkar | Free |
| Nominatim | `nominatim.openstreetmap.org` | Reverse geocoding | Free |
| Quran Pages SVG | `mp3quran.net/api/quran_pages_svg` | Mushaf images | Free |

---

## 📦 PHASE 13 — APK Build & Android App Distribution
### ⏱ 5–7 Days
> **تحويل المشروع إلى تطبيق Android APK حقيقي يعمل بجميع المميزات**

---

### 13.0 Why APK Instead of PWA?
| PWA (Web) | APK (Native) |
|-----------|-------------|
| Requires browser | Standalone app icon on home screen |
| Limited background audio | Full background audio service |
| No GPS permission control | Full GPS + location services |
| Limited push notifications | Reliable Firebase/local notifications |
| No offline asset control | Full offline capability |
| Lower user trust | Professional app store presence |

---

### 13.1 Convert React Web App → Android APK

#### Step 1: Migrate to React Native (Recommended)
```bash
# Option A: Clean React Native project
npx react-native init ZadMuslim --template react-native-template-typescript
cd ZadMuslim

# Install all required dependencies
npm install react-native-vector-icons
npm install react-native-track-player          # Background audio (Quran, Radio)
npm install react-native-geolocation-service  # GPS for prayer times & Qibla
npm install react-native-compass              # Device orientation
npm install react-native-sensors              # Compass + accelerometer
npm install react-native-push-notification    # Local notifications
npm install react-native-mmkv                 # Fast storage
npm install react-native-svg                  # Islamic patterns
npm install react-native-linear-gradient      # Gradient backgrounds
npm install react-native-lottie             # Lottie animations
npm install axios zustand                     # State management
npm install moment-hijri date-fns             # Date utilities
npm install react-native-reanimated           # Animations
npm install react-native-gesture-handler      # Touch handling
npm install react-native-background-timer     # Background tasks
npm install react-native-fs                   # File system access
npm install react-native-share                # Share verse cards
```

#### Step 2: Migrate Core Components
```
Web Component                     → Native Equivalent
────────────────────────────────────────────────────────────
<div> / <span>                   → <View> / <Text>
<img>                             → <Image>
<audio> / Howler.js              → react-native-track-player
navigator.geolocation             → react-native-geolocation-service
DeviceOrientation API            → react-native-sensors
localStorage / IndexedDB         → react-native-mmkv
CSS Animations                   → react-native-reanimated
Lottie (Web)                     → react-native-lottie
Service Worker (PWA)             → react-native-background-timer
Canvas (Share Cards)             → react-native-view-shot
Push Notifications               → react-native-push-notification
```

#### Step 3: APK-Specific Configurations

**Android Permissions** (`android/app/src/main/AndroidManifest.xml`):
```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
  <!-- Location for prayer times & Qibla -->
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />

  <!-- Background audio for Quran/radio -->
  <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
  <uses-permission android:name="android.permission.FOREGROUND_SERVICE_MEDIA_PLAYBACK" />

  <!-- Notifications -->
  <uses-permission android:name="android.permission.POST_NOTIFICATIONS" />
  <uses-permission android:name="android.permission.SCHEDULE_EXACT_ALARM" />
  <uses-permission android:name="android.permission.USE_EXACT_ALARM" />

  <!-- Vibration for tasbeeh -->
  <uses-permission android:name="android.permission.VIBRATE" />

  <!-- Internet -->
  <uses-permission android:name="android.permission.INTERNET" />
  <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

  <!-- Boot auto-start for notifications -->
  <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
</manifest>
```

**Background Audio Service** (`android/app/src/main/java/.../PlaybackService.java`):
```java
// For Quran playback when app is minimized
public class PlaybackService extends TrackPlayerService {
  @Override
  public void onCreate() {
    super.onCreate();
    // Setup media session for lock screen controls
  }
}
```

#### Step 4: Build Signed APK

```bash
# Generate keystore (one time only)
keytool -genkeypair -v -storetype PKCS12 -keystore zad-muslim-release-key.keystore \
  -alias zad-muslim-key -keyalg RSA -keysize 2048 -validity 10000

# Place keystore in android/app/

# Edit android/app/build.gradle
android {
  signingConfigs {
    release {
      storeFile file('zad-muslim-release-key.keystore')
      storePassword 'YOUR_PASSWORD'
      keyAlias 'zad-muslim-key'
      keyPassword 'YOUR_PASSWORD'
    }
  }
  buildTypes {
    release {
      signingConfig signingConfigs.release
      minifyEnabled true
      proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
    }
  }
}

# Build APK
cd android && ./gradlew assembleRelease

# Build App Bundle (for Play Store)
cd android && ./gradlew bundleRelease
```

#### Step 5: Test APK
```bash
# Install on connected device
adb install app/build/outputs/apk/release/app-release.apk

# Test all features:
# ✅ Quran reader + audio playback
# ✅ Prayer times (GPS + manual)
# ✅ Adhan notifications
# ✅ Qibla compass
# ✅ Azkar + tasbeeh counter
# ✅ Hadith of the day
# ✅ Hijri calendar
# ✅ Radio streaming
# ✅ Ramadan mode
# ✅ Salawat counter
# ✅ Daily goals
# ✅ Settings (language, theme)
# ✅ Offline mode
```

#### Step 6: Upload to GitHub
```bash
# Add APK to repo
mkdir -p releases
cp android/app/build/outputs/apk/release/app-release.apk releases/zad-muslim-v1.0.0.apk

# Commit & push
git add releases/
git commit -m "📱 Release: Zad Muslim v1.0.0 APK"
git push origin main

# Create GitHub Release
# → Go to https://github.com/deutche042/zad-muslim/releases/new
# → Tag: v1.0.0
# → Upload: app-release.apk
# → Title: "Zad Muslim — Initial Release"
# → Description: Full feature list
```

---

### 13.2 APK File Structure
```
releases/
├── zad-muslim-v1.0.0.apk          ← Release APK
├── app-release.aab                 ← App Bundle (Play Store)
├── zad-muslim-release-key.keystore ← Signing key (KEEP SAFE!)
└── changelog.md                    ← Version notes
```

### 13.3 APK Size Optimization
| Technique | Size Reduction |
|-----------|---------------|
| ProGuard / RTree | ~30% |
| Split APKs (per ABI) | ~40% |
| Compress assets | ~15% |
| Remove unused fonts | ~5% |
| **Target APK Size** | **< 25 MB** |

### 13.4 Distribution Options
| Platform | Method | Cost |
|----------|--------|------|
| GitHub Releases | Direct APK download | Free |
| Google Play Store | App Bundle (AAB) | $25 one-time |
| F-Droid | Open source catalog | Free |
| Direct (Website) | APK file hosting | Free |

---

## 💎 TECH STACK SUMMARY

| Category | Technology |
|----------|-----------|
| Framework | React 18 + TypeScript |
| Routing | React Router v6 |
| State | Zustand (with persist) |
| Styling | Tailwind CSS + Custom CSS |
| Animations | Framer Motion + Lottie |
| Audio | Howler.js |
| Storage | IndexedDB (idb) |
| Push Notifications | Web Push API + Service Worker |
| Offline | Workbox PWA |
| Charts | Recharts |
| Progress | react-circular-progressbar |
| Hijri Calendar | moment-hijri |
| Confetti | canvas-confetti |
| Compass | DeviceOrientation API |
| Deployment | Vercel / Firebase |

---

## 💎 APK TECH STACK (Native Android)

| Category | Technology |
|----------|-----------|
| Framework | React Native (CLI) |
| Audio | react-native-track-player (background) |
| GPS | react-native-geolocation-service |
| Compass | react-native-sensors |
| Notifications | react-native-push-notification |
| Storage | react-native-mmkv |
| Animations | react-native-reanimated |
| Lottie | react-native-lottie |
| Share Cards | react-native-view-shot |
| Islamic APIs | alihmada/Islamic-APIs |
| Build Tool | Gradle |
| Distribution | GitHub Releases + Play Store |

---

*زاد مسلم — تطبيقك الإسلامي الشامل*
*بإذن الله، لتكون عوناً لكل مسلم في حياته اليومية*

🤲 *اللهم تقبل واجعله في ميزان حسناتنا*
