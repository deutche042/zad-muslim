import {create} from 'zustand';

export const usePrayerStore = create((set, get) => ({
  // State
  prayerTimes: null,
  nextPrayer: null,
  nextPrayerTime: null,
  hijriDate: null,
  countdown: '',

  // Actions
  setPrayerTimes: (times) => set({prayerTimes: times}),
  setNextPrayer: (name, time) => set({nextPrayer: name, nextPrayerTime: time}),
  setHijriDate: (date) => set({hijriDate: date}),
  setCountdown: (countdown) => set({countdown}),
}));
