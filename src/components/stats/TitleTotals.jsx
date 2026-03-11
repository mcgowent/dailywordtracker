import Card from "../ui/Card";

export default function TitleTotals({ data }) {
  return (
    <Card title="Project Totals">
      <div style={styles.list}>
        {data
          .sort((a, b) => b.words - a.words)
          .map((item) => (
            <div key={item.project} style={styles.row}>
              <span>{item.project}</span>
              <strong>{item.words.toLocaleString()}</strong>
            </div>
          ))}
      </div>
    </Card>
  );
}

const styles = {
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #374151",
    paddingBottom: "0.4rem",
  },
};
