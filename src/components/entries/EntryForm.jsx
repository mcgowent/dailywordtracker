import { useEffect, useState } from "react";
import Card from "../ui/Card";
import Input from "../ui/Input";
import Button from "../ui/Button";

const initialState = {
  date: new Date().toISOString().slice(0, 10),
  words: "",
  project: "",
  notes: "",
};

export default function EntryForm({ onSubmit, editingEntry, onCancelEdit }) {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (editingEntry) {
      setForm({
        date: editingEntry.date,
        words: editingEntry.words,
        project: editingEntry.project || "",
        notes: editingEntry.notes || "",
      });
    } else {
      setForm(initialState);
    }
  }, [editingEntry]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const payload = {
      ...form,
      words: Number(form.words),
    };

    onSubmit(payload);
    setForm(initialState);
  }

  return (
    <Card title={editingEntry ? "Edit Entry" : "Add Entry"}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <Input
          label="Date"
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        <Input
          label="Words"
          type="number"
          name="words"
          value={form.words}
          onChange={handleChange}
          required
          min="0"
        />

        <Input
          label="Project"
          type="text"
          name="project"
          value={form.project}
          onChange={handleChange}
          placeholder="System Reset"
        />

        <label style={styles.textareaWrap}>
          <span style={styles.label}>Notes</span>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows="4"
            style={styles.textarea}
            placeholder="How did the session go?"
          />
        </label>

        <div style={styles.actions}>
          <Button type="submit">
            {editingEntry ? "Update Entry" : "Save Entry"}
          </Button>

          {editingEntry ? (
            <Button type="button" variant="secondary" onClick={onCancelEdit}>
              Cancel
            </Button>
          ) : null}
        </div>
      </form>
    </Card>
  );
}

const styles = {
  form: {
    display: "grid",
    gap: "1rem",
  },
  textareaWrap: {
    display: "flex",
    flexDirection: "column",
    gap: "0.35rem",
  },
  label: {
    fontSize: "0.9rem",
    color: "#d1d5db",
  },
  textarea: {
    background: "#111827",
    color: "#fff",
    border: "1px solid #4b5563",
    borderRadius: "0.65rem",
    padding: "0.75rem",
    resize: "vertical",
  },
  actions: {
    display: "flex",
    gap: "0.75rem",
  },
};
