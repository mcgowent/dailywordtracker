import Card from "../ui/Card";

export default function TodayCard({ todayWords }) {
  return (
    <Card title="Today's Words">
      <p style={styles.value}>{todayWords}</p>
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
