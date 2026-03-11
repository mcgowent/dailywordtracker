import Card from "../ui/Card";

export default function SummaryCards({ totalWords, averageWords, bestDay }) {
  return (
    <div style={styles.grid}>
      <Card title="Total Words">
        <p style={styles.value}>{totalWords}</p>
      </Card>

      <Card title="Average Per Entry">
        <p style={styles.value}>{averageWords}</p>
      </Card>

      <Card title="Best Day">
        <p style={styles.value}>{bestDay}</p>
      </Card>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1rem",
  },
  value: {
    margin: 0,
    fontSize: "1.75rem",
    fontWeight: 700,
  },
};
