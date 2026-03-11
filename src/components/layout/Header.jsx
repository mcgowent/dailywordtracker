export default function Header() {
  const today = new Date().toLocaleDateString();

  return (
    <header style={styles.header}>
      <div>
        <h1 style={styles.title}>Writer Daily Tracker</h1>
        <p style={styles.subtitle}>{today}</p>
      </div>
    </header>
  );
}

const styles = {
  header: {
    padding: "1rem 1.5rem",
    borderBottom: "1px solid #374151",
    background: "#0f172a",
  },
  title: {
    margin: 0,
    fontSize: "1.5rem",
  },
  subtitle: {
    margin: "0.25rem 0 0",
    color: "#9ca3af",
  },
};
