import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AppShell({ children }) {
  return (
    <div style={styles.app}>
      <Sidebar />
      <div style={styles.mainArea}>
        <Header />
        <main style={styles.main}>{children}</main>
      </div>
    </div>
  );
}

const styles = {
  app: {
    display: "grid",
    gridTemplateColumns: "240px 1fr",
    minHeight: "100vh",
    background: "#111827",
    color: "#f9fafb",
  },
  mainArea: {
    display: "flex",
    flexDirection: "column",
  },
  main: {
    padding: "1.5rem",
  },
};
