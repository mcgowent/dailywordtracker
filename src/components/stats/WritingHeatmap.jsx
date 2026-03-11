import Card from "../ui/Card";

function getColor(words) {
  if (words === 0) return "#dde3eb";
  if (words < 1000) return "#9acfc0";
  if (words < 3500) return "#10b981";
  if (words < 5000) return "#09805e";
  return "rgb(3, 71, 44)";
}

export default function WritingHeatmap({ data }) {
  return (
    <Card title="Writing Heatmap">
      <div style={styles.wrapper}>
        <div style={styles.grid}>
          {data.map((day) => {
            const formattedDate = new Date(day.date).toLocaleDateString(
              "en-US",
              {
                month: "short",
                day: "numeric",
                year: "numeric",
              },
            );

            const words = day.words || 0;

            return (
              <div
                key={day.date}
                title={`${formattedDate} — ${words.toLocaleString()} words`}
                style={{
                  ...styles.cell,
                  backgroundColor: getColor(words),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
            );
          })}
        </div>
      </div>
      <div style={styles.legend}>
        <span>Less</span>

        <div style={{ ...styles.legendBox, background: "#dde3eb" }} />
        <div style={{ ...styles.legendBox, background: "#6ee7b7" }} />
        <div style={{ ...styles.legendBox, background: "#34d399" }} />
        <div style={{ ...styles.legendBox, background: "#10b981" }} />
        <div style={{ ...styles.legendBox, background: "rgb(3, 71, 44)" }} />

        <span>More</span>
      </div>
    </Card>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },

  grid: {
    display: "grid",

    /* 53 weeks */
    gridTemplateColumns: "repeat(53, minmax(8px, 1fr))",

    gap: "6px",

    width: "100%",
    maxWidth: "1400px", // allow much larger heatmap
  },

  cell: {
    width: "100%",
    aspectRatio: "1 / 1",
    borderRadius: "3px",
    transition: "transform 0.15s ease",
    cursor: "pointer",
  },
  legend: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "6px",
    marginTop: "10px",
    fontSize: "12px",
    color: "#9ca3af",
  },

  legendBox: {
    width: "14px",
    height: "14px",
    borderRadius: "2px",
  },
};
