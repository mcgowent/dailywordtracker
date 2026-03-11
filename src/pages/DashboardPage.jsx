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

  const recentEntries = [...entries]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 5);

  return (
    <div style={styles.page}>
      <div style={styles.topGrid}>
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

      {/* <div style={styles.bottomGrid}>
        <EntryForm onSubmit={addEntry} />
      </div> */}
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
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1rem",
  },
  bottomGrid: {
    display: "grid",
    gridTemplateColumns: "minmax(320px, 420px) 1fr",
    gap: "1rem",
    alignItems: "start",
  },
};
