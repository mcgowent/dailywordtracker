import Card from "../ui/Card";

export default function StreakCard({ streak }) {
  return (
    <Card title="Current Streak">
      <p style={styles.value}>{streak} days</p>
    </Card>
  );
}

const styles = {
  value: {
    fontSize: "2rem",
    fontWeight: 700,
    margin: 0,
  },
};
