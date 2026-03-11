import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AppShell({ children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        ...styles.app,
        gridTemplateColumns: isMobile ? "1fr" : "240px 1fr",
        gridTemplateRows: isMobile ? "auto 1fr" : "1fr",
      }}
    >
      <Sidebar isMobile={isMobile} />

      <div style={styles.mainArea}>
        <Header />
        <main
          style={{
            ...styles.main,
            padding: isMobile ? "1rem" : "1.5rem",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

const styles = {
  app: {
    display: "grid",
    minHeight: "100vh",
    background: "#111827",
    color: "#f9fafb",
  },
  mainArea: {
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
  },
  main: {
    minWidth: 0,
  },
};
