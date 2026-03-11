import { useEffect, useState } from "react";

export default function Header() {
  const today = new Date().toLocaleDateString();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      style={{
        ...styles.header,
        padding: isMobile ? "0.85rem 1rem" : "1rem 1.5rem",
      }}
    >
      <div>
        <h1
          style={{
            ...styles.title,
            fontSize: isMobile ? "1.2rem" : "1.5rem",
          }}
        >
          Writer Daily Tracker
        </h1>
        <p style={styles.subtitle}>{today}</p>
      </div>
    </header>
  );
}

const styles = {
  header: {
    borderBottom: "1px solid #374151",
    background: "#0f172a",
  },
  title: {
    margin: 0,
  },
  subtitle: {
    margin: "0.25rem 0 0",
    color: "#9ca3af",
    fontSize: "0.9rem",
  },
};
