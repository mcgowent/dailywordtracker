import Card from "../ui/Card";

export default function ProjectGoalProgress({ data }) {
  return (
    <Card title="Project Goals">
      <div style={styles.list}>
        {data.map((item) => (
          <div key={item.project} style={styles.item}>
            <div style={styles.top}>
              <strong>{item.project}</strong>
              <span>
                {item.writtenWords.toLocaleString()} /{" "}
                {item.targetWords.toLocaleString()}
              </span>
            </div>

            <div style={styles.barBg}>
              <div
                style={{
                  ...styles.barFill,
                  width: `${item.percent}%`,
                }}
              />
            </div>

            <div style={styles.bottom}>
              <span>{item.percent.toFixed(0)}% complete</span>
              <span>{item.remainingWords.toLocaleString()} remaining</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

const styles = {
  list: {
    display: "grid",
    gap: "1rem",
  },
  item: {
    display: "grid",
    gap: "0.5rem",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
    flexWrap: "wrap",
  },
  barBg: {
    height: "16px",
    background: "#111827",
    borderRadius: "999px",
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    background: "#3b82f6",
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
    flexWrap: "wrap",
    color: "#9ca3af",
    fontSize: "0.9rem",
  },
};
