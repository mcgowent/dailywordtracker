export default function EmptyState({ message = "Nothing here yet." }) {
  return (
    <div style={styles.box}>
      <p style={{ margin: 0 }}>{message}</p>
    </div>
  );
}

const styles = {
  box: {
    padding: "1rem",
    border: "1px dashed #4b5563",
    borderRadius: "0.75rem",
    color: "#9ca3af",
    textAlign: "center",
  },
};
