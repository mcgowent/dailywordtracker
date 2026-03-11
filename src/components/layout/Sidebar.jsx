import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Dashboard" },
  { to: "/entries", label: "Entries" },
  { to: "/stats", label: "Stats" },
  { to: "/settings", label: "Settings" },
];

export default function Sidebar({ isMobile = false }) {
  return (
    <aside
      style={{
        ...styles.sidebar,
        ...(isMobile ? styles.sidebarMobile : {}),
      }}
    >
      <div style={styles.brand}>✍️ Writer Tracker</div>

      <nav
        style={{
          ...styles.nav,
          ...(isMobile ? styles.navMobile : {}),
        }}
      >
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {}),
              ...(isMobile ? styles.linkMobile : {}),
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
  sidebarMobile: {
    borderRight: "none",
    borderBottom: "1px solid #374151",
    padding: "0.75rem 1rem",
  },
  brand: {
    fontWeight: 700,
    fontSize: "1.1rem",
    marginBottom: "1rem",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  navMobile: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  link: {
    textDecoration: "none",
    color: "#d1d5db",
    padding: "0.75rem 1rem",
    borderRadius: "0.5rem",
  },
  linkMobile: {
    padding: "0.6rem 0.85rem",
    fontSize: "0.95rem",
  },
  activeLink: {
    background: "#1f2937",
    color: "#fff",
  },
};
