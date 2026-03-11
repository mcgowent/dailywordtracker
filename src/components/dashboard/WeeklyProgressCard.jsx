import Card from "../ui/Card";

export default function WeeklyProgressCard({ weeklyWords, weeklyGoal = 7000 }) {
  const percent = Math.min((weeklyWords / weeklyGoal) * 100, 100);

  return (
    <Card title="Weekly Progress">
      <p style={styles.value}>
        {weeklyWords} / {weeklyGoal}
      </p>
      <div style={styles.barBg}>
        <div style={{ ...styles.barFill, width: `${percent}%` }} />
      </div>
      <p style={styles.caption}>{percent.toFixed(0)}% of weekly goal</p>
    </Card>
  );
}

const styles = {
  value: {
    fontSize: "1.5rem",
    fontWeight: 700,
    margin: "0 0 0.75rem",
  },
  barBg: {
    height: "12px",
    background: "#111827",
    borderRadius: "999px",
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    background: "#22c55e",
  },
  caption: {
    color: "#9ca3af",
    marginTop: "0.75rem",
    marginBottom: 0,
  },
};
