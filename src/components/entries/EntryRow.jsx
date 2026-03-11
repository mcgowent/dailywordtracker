import Button from "../ui/Button";

export default function EntryRow({
  entry,
  onEdit,
  onDelete,
  isSelected = false,
  onToggleSelect,
}) {
  return (
    <tr style={isSelected ? styles.selectedRow : undefined}>
      <td style={styles.cell}>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onToggleSelect(entry.id)}
        />
      </td>

      <td style={styles.cell}>{entry.date}</td>
      <td style={styles.cell}>{entry.project || "—"}</td>
      <td style={styles.cell}>{entry.words}</td>
      <td style={styles.cell}>{entry.notes || "—"}</td>

      <td style={styles.cell}>
        <div style={styles.actions}>
          <Button variant="secondary" onClick={() => onEdit(entry)}>
            Edit
          </Button>
          <Button
            onClick={() => onDelete(entry.id)}
            style={{ background: "#dc2626" }}
          >
            Delete
          </Button>
        </div>
      </td>
    </tr>
  );
}

const styles = {
  cell: {
    padding: "0.75rem",
    borderBottom: "1px solid #374151",
    verticalAlign: "top",
  },
  actions: {
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap",
  },
  selectedRow: {
    backgroundColor: "rgba(59, 130, 246, 0.12)",
  },
};
