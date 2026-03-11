import { useEffect, useState } from "react";
import { useWriting } from "../context/WritingContext";
import TodayCard from "../components/dashboard/TodayCard";
import WeeklyProgressCard from "../components/dashboard/WeeklyProgressCard";
import TrendChart from "../components/dashboard/TrendChart";
import EntryForm from "../components/entries/EntryForm";
import EntryList from "../components/entries/EntryList";
import StreakTracker from "../components/dashboard/StreakTracker";
import GoalProgressCards from "../components/stats/GoalProgressCards";
import ProjectGoalProgress from "../components/stats/ProjectGoalProgress";
import { useWritingStats } from "../hooks/useWritingStats";

export default function DashboardPage() {
  const { entries, addEntry, deleteEntry, globalGoals, projectGoals } =
    useWriting();
  const stats = useWritingStats(entries, globalGoals, projectGoals);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const recentEntries = [...entries]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 5);

  return (
    <div style={styles.page}>
      <div
        style={{
          ...styles.topGrid,
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(auto-fit, minmax(220px, 1fr))",
        }}
      >
        <TodayCard todayWords={stats.todayWords} />
        <WeeklyProgressCard weeklyWords={stats.weeklyWords} />
        <StreakTracker
          current={stats.currentStreak}
          longest={stats.longestStreak}
        />
      </div>

      <GoalProgressCards goals={stats.goalProgress} />
      <ProjectGoalProgress data={stats.projectGoalProgress} />
      <TrendChart data={stats.trendData} />

      <div
        style={{
          ...styles.bottomGrid,
          gridTemplateColumns: isMobile ? "1fr" : "minmax(320px, 420px) 1fr",
        }}
      >
        <EntryForm onSubmit={addEntry} />
        <EntryList
          entries={recentEntries}
          onEdit={() => {}}
          onDelete={deleteEntry}
        />
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: "grid",
    gap: "1rem",
  },
  topGrid: {
    display: "grid",
    gap: "1rem",
  },
  bottomGrid: {
    display: "grid",
    gap: "1rem",
    alignItems: "start",
  },
};
