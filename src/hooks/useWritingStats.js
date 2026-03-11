import { useMemo } from "react";
import {
  getTodayString,
  isDateInLastNDays,
  calculateCurrentStreak,
  calculateLongestStreak,
  getMonthlyTotals,
  getWeekdayTotals,
} from "../utils/date";

import {
  getTotalWords,
  getAverageWords,
  getBestDay,
  getProjectTotals,
  generateHeatmapData,
  getWeeklyAverageData,
  getTodayWords,
  getThisWeekWords,
  getThisMonthWords,
  getProjectGoalProgress,
} from "../utils/stats";

export function useWritingStats(entries, globalGoals = {}, projectGoals = []) {
  return useMemo(() => {
    const today = getTodayString();

    const todayWords = entries
      .filter((entry) => entry.date === today)
      .reduce((sum, entry) => sum + entry.words, 0);

    const weeklyWords = entries
      .filter((entry) => isDateInLastNDays(entry.date, 7))
      .reduce((sum, entry) => sum + entry.words, 0);

    const todayTotal = getTodayWords(entries);
    const thisWeekTotal = getThisWeekWords(entries);
    const thisMonthTotal = getThisMonthWords(entries);

    return {
      todayWords,
      weeklyWords,

      currentStreak: calculateCurrentStreak(entries),
      longestStreak: calculateLongestStreak(entries),

      totalWords: getTotalWords(entries),
      averageWords: getAverageWords(entries),
      bestDay: getBestDay(entries),

      trendData: getWeeklyAverageData(entries),
      monthlyData: getMonthlyTotals(entries),
      weekdayData: getWeekdayTotals(entries),

      projectTotals: getProjectTotals(entries),
      heatmapData: generateHeatmapData(entries),

      goalProgress: {
        daily: {
          current: todayTotal,
          target: globalGoals.daily || 0,
          percent:
            globalGoals.daily > 0
              ? Math.min((todayTotal / globalGoals.daily) * 100, 100)
              : 0,
        },
        weekly: {
          current: thisWeekTotal,
          target: globalGoals.weekly || 0,
          percent:
            globalGoals.weekly > 0
              ? Math.min((thisWeekTotal / globalGoals.weekly) * 100, 100)
              : 0,
        },
        monthly: {
          current: thisMonthTotal,
          target: globalGoals.monthly || 0,
          percent:
            globalGoals.monthly > 0
              ? Math.min((thisMonthTotal / globalGoals.monthly) * 100, 100)
              : 0,
        },
      },

      projectGoalProgress: getProjectGoalProgress(entries, projectGoals),
    };
  }, [entries, globalGoals, projectGoals]);
}
