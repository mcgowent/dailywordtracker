export function getTotalWords(entries) {
  return entries.reduce((sum, entry) => sum + entry.words, 0);
}

export function getAverageWords(entries) {
  if (!entries.length) return 0;
  return Math.round(getTotalWords(entries) / entries.length);
}

export function getBestDay(entries) {
  if (!entries.length) return 0;
  return Math.max(...entries.map((entry) => entry.words));
}

export function getTrendData(entries) {
  return [...entries]
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((entry) => ({
      date: entry.date.slice(5),
      words: entry.words,
    }));
}

export function getProjectTotals(entries) {
  const totals = {};

  entries.forEach((entry) => {
    const project = entry.project || "Unknown";

    if (!totals[project]) {
      totals[project] = 0;
    }

    totals[project] += entry.words;
  });

  return Object.entries(totals).map(([project, words]) => ({
    project,
    words,
  }));
}

export function getWeeklyAverageData(entries) {
  const buckets = new Map();

  entries.forEach((entry) => {
    const date = new Date(`${entry.date}T00:00:00`);
    const startOfWeek = new Date(date);

    const day = startOfWeek.getDay();
    startOfWeek.setDate(startOfWeek.getDate() - day);

    const weekKey = startOfWeek.toISOString().slice(0, 10);

    if (!buckets.has(weekKey)) {
      buckets.set(weekKey, {
        week: weekKey,
        totalWords: 0,
        entryCount: 0,
      });
    }

    const bucket = buckets.get(weekKey);
    bucket.totalWords += entry.words;
    bucket.entryCount += 1;
  });

  return [...buckets.values()]
    .sort((a, b) => a.week.localeCompare(b.week))
    .map((bucket) => ({
      week: bucket.week,
      averageWords: Math.round(bucket.totalWords / bucket.entryCount),
    }));
}

export function generateHeatmapData(entries) {
  const map = new Map();

  entries.forEach((entry) => {
    map.set(entry.date, entry.words);
  });

  const days = [];
  const today = new Date();

  for (let i = 364; i >= 0; i--) {
    const d = new Date();
    d.setDate(today.getDate() - i);

    const dateStr = d.toISOString().slice(0, 10);

    days.push({
      date: dateStr,
      words: map.get(dateStr) || 0,
    });
  }

  return days;
}

export function getTodayWords(entries) {
  const today = new Date().toISOString().slice(0, 10);

  return entries
    .filter((entry) => entry.date === today)
    .reduce((sum, entry) => sum + entry.words, 0);
}

export function getThisWeekWords(entries) {
  const now = new Date();
  const start = new Date(now);
  const day = start.getDay();

  start.setDate(start.getDate() - day);
  start.setHours(0, 0, 0, 0);

  return entries
    .filter((entry) => {
      const entryDate = new Date(`${entry.date}T00:00:00`);
      return entryDate >= start && entryDate <= now;
    })
    .reduce((sum, entry) => sum + entry.words, 0);
}

export function getThisMonthWords(entries) {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");

  return entries
    .filter((entry) => entry.date.startsWith(`${year}-${month}`))
    .reduce((sum, entry) => sum + entry.words, 0);
}

export function getProjectGoalProgress(entries, projectGoals) {
  return projectGoals.map((goal) => {
    const written = entries
      .filter((entry) => entry.project === goal.project)
      .reduce((sum, entry) => sum + entry.words, 0);

    const target = Number(goal.targetWords) || 0;
    const remaining = Math.max(target - written, 0);
    const percent = target > 0 ? Math.min((written / target) * 100, 100) : 0;

    return {
      project: goal.project,
      targetWords: target,
      writtenWords: written,
      remainingWords: remaining,
      percent,
    };
  });
}
