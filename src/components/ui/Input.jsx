export default function Input({ label, ...props }) {
  return (
    <label style={styles.wrapper}>
      {label ? <span style={styles.label}>{label}</span> : null}
      <input style={styles.input} {...props} />
    </label>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "0.35rem",
    width: "100%",
  },
  label: {
    fontSize: "0.9rem",
    color: "#d1d5db",
  },
  input: {
    background: "#111827",
    color: "#fff",
    border: "1px solid #4b5563",
    borderRadius: "0.65rem",
    padding: "0.75rem",
  },
};
