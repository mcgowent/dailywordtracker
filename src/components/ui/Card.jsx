export default function Card({ title, children, style = {} }) {
  return (
    <section style={{ ...styles.card, ...style }}>
      {title ? <h3 style={styles.title}>{title}</h3> : null}
      {children}
    </section>
  );
}

const styles = {
  card: {
    background: "#1f2937",
    border: "1px solid #374151",
    borderRadius: "1rem",
    padding: "1rem",
    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
  },
  title: {
    marginTop: 0,
    marginBottom: "0.75rem",
    fontSize: "1rem",
  },
};
