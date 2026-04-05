import {create} from 'zustand';
import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

export const useSettingsStore = create((set) => ({
  // Language & Theme
  language: 'ar',
  theme: 'dark',

  // Quran
  reciter: 'ar.alafasy',
  translation: 'en.asad',
  fontSize: 22,
  showTranslation: true,

  // Prayer
  prayerMethod: 4, // Umm al-Qura
  madhab: 0, // Shafi'i
  location: null,
  city: '',
  country: '',

  // Notifications
  notifications: {
    prayer: true,
    preAlert: true,
    morningAzkar: true,
    eveningAzkar: true,
    salawat: true,
    hadith: true,
    quranReminder: true,
  },

  // Actions
  setLanguage: (lang) => set({language: lang}),
  setTheme: (theme) => set({theme}),
  setReciter: (reciter) => set({reciter}),
  setFontSize: (fontSize) => set({fontSize}),
  setShowTranslation: (showTranslation) => set({showTranslation}),
  setPrayerMethod: (prayerMethod) => set({prayerMethod}),
  setMadhab: (madhab) => set({madhab}),
  setLocation: (location) => set({location}),
  setCity: (city) => set({city}),
  setCountry: (country) => set({country}),
  updateNotification: (key, value) =>
    set((state) => ({
      notifications: {...state.notifications, [key]: value},
    })),
}));
