import Card from "../ui/Card";

export default function StreakTracker({ current, longest }) {
  return (
    <Card title="Writing Streaks">
      <div style={styles.container}>
        <div style={styles.item}>
          <span style={styles.label}>Current</span>
          <strong style={styles.value}>{current} days</strong>
        </div>

        <div style={styles.item}>
          <span style={styles.label}>Longest</span>
          <strong style={styles.value}>{longest} days</strong>
        </div>
      </div>
    </Card>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
  },

  item: {
    display: "flex",
    flexDirection: "column",
  },

  label: {
    fontSize: "0.8rem",
    color: "#9ca3af",
  },

  value: {
    fontSize: "1.8rem",
  },
};
