import { useWriting } from "../context/WritingContext";
import { useWritingStats } from "../hooks/useWritingStats";
import SummaryCards from "../components/stats/SummaryCards";
import MonthlyChart from "../components/stats/MonthlyChart";
import WeekdayChart from "../components/stats/WeekdayChart";
import TitleTotals from "../components/stats/TitleTotals";
import WritingHeatmap from "../components/stats/WritingHeatmap";

export default function StatsPage() {
  const { entries } = useWriting();
  const stats = useWritingStats(entries);

  return (
    <div style={styles.page}>
      <SummaryCards
        totalWords={stats.totalWords}
        averageWords={stats.averageWords}
        bestDay={stats.bestDay}
      />

      <TitleTotals data={stats.projectTotals} />
      <WritingHeatmap data={stats.heatmapData} />
      <MonthlyChart data={stats.monthlyData} />
      <WeekdayChart data={stats.weekdayData} />
    </div>
  );
}

const styles = {
  page: {
    display: "grid",
    gap: "1rem",
  },
};
