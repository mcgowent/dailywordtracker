import Card from "../ui/Card";
import EmptyState from "../ui/EmptyState";
import EntryRow from "./EntryRow";

export default function EntryList({
  entries,
  onEdit,
  onDelete,
  selectedIds = [],
  onToggleSelect,
}) {
  return (
    <Card title="Entries">
      {entries.length === 0 ? (
        <EmptyState message="No entries yet. Add your first writing session." />
      ) : (
        <div style={styles.wrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.head}>Select</th>
                <th style={styles.head}>Date</th>
                <th style={styles.head}>Project</th>
                <th style={styles.head}>Words</th>
                <th style={styles.head}>Notes</th>
                <th style={styles.head}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <EntryRow
                  key={entry.id}
                  entry={entry}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  isSelected={selectedIds.includes(entry.id)}
                  onToggleSelect={onToggleSelect}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
}

const styles = {
  wrapper: {
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
  },
  table: {
    width: "100%",
    minWidth: "700px",
    borderCollapse: "collapse",
  },
  head: {
    textAlign: "left",
    padding: "0.75rem",
    borderBottom: "1px solid #4b5563",
    whiteSpace: "nowrap",
  },
};
