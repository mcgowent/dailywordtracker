import Card from "../ui/Card";

function ProgressRow({ label, current, target, percent }) {
  return (
    <div style={styles.row}>
      <div style={styles.rowTop}>
        <span>{label}</span>
        <strong>
          {current.toLocaleString()} / {target.toLocaleString()}
        </strong>
      </div>

      <div style={styles.barBg}>
        <div style={{ ...styles.barFill, width: `${percent}%` }} />
      </div>

      <div style={styles.caption}>{percent.toFixed(0)}% complete</div>
    </div>
  );
}

export default function GoalProgressCards({ goals }) {
  return (
    <Card title="Overall Goals">
      <div style={styles.stack}>
        <ProgressRow label="Daily Goal" {...goals.daily} />
        <ProgressRow label="Weekly Goal" {...goals.weekly} />
        <ProgressRow label="Monthly Goal" {...goals.monthly} />
      </div>
    </Card>
  );
}

const styles = {
  stack: {
    display: "grid",
    gap: "1rem",
  },
  row: {
    display: "grid",
    gap: "0.5rem",
  },
  rowTop: {
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
    flexWrap: "wrap",
  },
  barBg: {
    height: "14px",
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
    fontSize: "0.9rem",
  },
};
