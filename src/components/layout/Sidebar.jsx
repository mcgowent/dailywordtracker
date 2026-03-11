import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Dashboard" },
  { to: "/entries", label: "Entries" },
  { to: "/stats", label: "Stats" },
  { to: "/settings", label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.brand}>✍️ Writer Tracker</div>

      <nav style={styles.nav}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {}),
            })}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

const styles = {
  sidebar: {
    borderRight: "1px solid #374151",
    background: "#0b1220",
    padding: "1rem",
  },
  brand: {
    fontWeight: 700,
    fontSize: "1.1rem",
    marginBottom: "1.5rem",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  link: {
    textDecoration: "none",
    color: "#d1d5db",
    padding: "0.75rem 1rem",
    borderRadius: "0.5rem",
  },
  activeLink: {
    background: "#1f2937",
    color: "#fff",
  },
};
