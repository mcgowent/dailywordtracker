import { useMemo, useState } from "react";
import { useWriting } from "../context/WritingContext";
import EntryForm from "../components/entries/EntryForm";
import EntryList from "../components/entries/EntryList";
import ExcelUpload from "../components/entries/ExcelUpload";
import Button from "../components/ui/Button";

export default function EntriesPage() {
  const {
    entries,
    addEntry,
    updateEntry,
    deleteEntry,
    importEntries,
    deleteEntries,
  } = useWriting();

  const [editingEntry, setEditingEntry] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);

  function handleSubmit(formData) {
    if (editingEntry) {
      updateEntry({ ...editingEntry, ...formData });
      setEditingEntry(null);
    } else {
      addEntry(formData);
    }
  }

  function handleEdit(entry) {
    setEditingEntry(entry);
  }

  function handleCancelEdit() {
    setEditingEntry(null);
  }

  function handleToggleSelect(id) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  }

  function handleSelectAll() {
    if (selectedIds.length === entries.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(entries.map((entry) => entry.id));
    }
  }

  function handleDeleteSelected() {
    if (selectedIds.length === 0) return;

    const confirmed = window.confirm(
      `Delete ${selectedIds.length} selected entr${selectedIds.length === 1 ? "y" : "ies"}?`,
    );

    if (!confirmed) return;

    deleteEntries(selectedIds);
    setSelectedIds([]);
  }

  const allSelected = useMemo(() => {
    return entries.length > 0 && selectedIds.length === entries.length;
  }, [entries, selectedIds]);

  return (
    <div style={styles.page}>
      <EntryForm
        onSubmit={handleSubmit}
        editingEntry={editingEntry}
        onCancelEdit={handleCancelEdit}
      />

      <ExcelUpload onImport={importEntries} />

      <div style={styles.bulkActions}>
        <Button
          variant="secondary"
          onClick={handleSelectAll}
          disabled={entries.length === 0}
        >
          {allSelected ? "Deselect All" : "Select All"}
        </Button>

        <Button
          onClick={handleDeleteSelected}
          disabled={selectedIds.length === 0}
          style={{
            background: selectedIds.length === 0 ? "#6b7280" : "#dc2626",
          }}
        >
          Delete Selected ({selectedIds.length})
        </Button>
      </div>

      <EntryList
        entries={entries}
        onEdit={handleEdit}
        onDelete={deleteEntry}
        selectedIds={selectedIds}
        onToggleSelect={handleToggleSelect}
      />
    </div>
  );
}

const styles = {
  page: {
    display: "grid",
    gap: "1rem",
  },
  bulkActions: {
    display: "flex",
    gap: "0.75rem",
    alignItems: "center",
    flexWrap: "wrap",
  },
};
