import {create} from 'zustand';

export const useQuranStore = create((set, get) => ({
  // State
  currentSurah: null,
  currentAyah: null,
  lastReadPosition: null,
  bookmarks: [],
  khatmahCount: 0,
  isPlaying: false,
  currentAudioUrl: null,

  // Actions
  setCurrentSurah: (surah) => set({currentSurah: surah}),
  setCurrentAyah: (ayah) => set({currentAyah: ayah}),
  setLastReadPosition: (position) => set({lastReadPosition: position}),
  addBookmark: (bookmark) =>
    set((state) => ({
      bookmarks: [...state.bookmarks, bookmark],
    })),
  removeBookmark: (index) =>
    set((state) => ({
      bookmarks: state.bookmarks.filter((_, i) => i !== index),
    })),
  incrementKhatmah: () =>
    set((state) => ({khatmahCount: state.khatmahCount + 1})),
  setIsPlaying: (isPlaying) => set({isPlaying}),
  setCurrentAudioUrl: (url) => set({currentAudioUrl: url}),
}));
