import {create} from 'zustand';

export const useGoalsStore = create((set) => ({
  // State
  dailyGoals: {
    prayers: {current: 0, target: 5},
    quranPages: {current: 0, target: 5},
    azkarRounds: {current: 0, target: 2},
    salawatCount: {current: 0, target: 100},
  },
  streakDays: 0,
  weeklyData: [],

  // Actions
  incrementGoal: (key) =>
    set((state) => ({
      dailyGoals: {
        ...state.dailyGoals,
        [key]: {
          ...state.dailyGoals[key],
          current: Math.min(
            state.dailyGoals[key].current + 1,
            state.dailyGoals[key].target,
          ),
        },
      },
    })),
  setGoalTarget: (key, target) =>
    set((state) => ({
      dailyGoals: {
        ...state.dailyGoals,
        [key]: {...state.dailyGoals[key], target},
      },
    })),
  resetDailyGoals: () =>
    set({
      dailyGoals: {
        prayers: {current: 0, target: 5},
        quranPages: {current: 0, target: 5},
        azkarRounds: {current: 0, target: 2},
        salawatCount: {current: 0, target: 100},
      },
    }),
  setStreakDays: (days) => set({streakDays: days}),
}));
