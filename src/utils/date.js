export function getTodayString() {
  return new Date().toISOString().slice(0, 10);
}

export function isDateInLastNDays(dateString, days) {
  const input = new Date(`${dateString}T00:00:00`);

  const now = new Date();
  const start = new Date();

  start.setDate(now.getDate() - (days - 1));
  start.setHours(0, 0, 0, 0);

  return input >= start && input <= now;
}

/*
CURRENT STREAK
Counts consecutive days with words > 0 ending today
*/

export function calculateCurrentStreak(entries) {
  const positiveDates = new Set(
    entries.filter((entry) => entry.words > 0).map((entry) => entry.date),
  );

  let streak = 0;

  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);

  while (true) {
    const dateStr = cursor.toISOString().slice(0, 10);

    if (positiveDates.has(dateStr)) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}

/*
LONGEST STREAK
Finds the longest run of consecutive writing days
*/

export function calculateLongestStreak(entries) {
  const writingDays = entries
    .filter((e) => e.words > 0)
    .map((e) => e.date)
    .sort();

  let longest = 0;
  let current = 0;
  let prevDate = null;

  for (const date of writingDays) {
    const currentDate = new Date(date);

    if (!prevDate) {
      current = 1;
    } else {
      const diff = (currentDate - prevDate) / (1000 * 60 * 60 * 24);

      if (diff === 1) {
        current += 1;
      } else {
        current = 1;
      }
    }

    if (current > longest) {
      longest = current;
    }

    prevDate = currentDate;
  }

  return longest;
}

/*
MONTHLY TOTALS
Used for charts
*/

export function getMonthlyTotals(entries) {
  const map = new Map();

  entries.forEach((entry) => {
    const month = entry.date.slice(0, 7);

    map.set(month, (map.get(month) || 0) + entry.words);
  });

  return [...map.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, words]) => ({ month, words }));
}

/*
WORDS BY WEEKDAY
Used for productivity charts
*/

export function getWeekdayTotals(entries) {
  const order = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const totals = {
    Sun: 0,
    Mon: 0,
    Tue: 0,
    Wed: 0,
    Thu: 0,
    Fri: 0,
    Sat: 0,
  };

  entries.forEach((entry) => {
    const date = new Date(`${entry.date}T00:00:00`);
    const day = order[date.getDay()];

    totals[day] += entry.words;
  });

  return order.map((day) => ({
    day,
    words: totals[day],
  }));
}
