import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { sampleEntries } from "../data/sampleEntries";
import { defaultGlobalGoals, defaultProjectGoals } from "../data/defaultGoals";

const WritingContext = createContext(null);

export function WritingProvider({ children }) {
  const [entries, setEntries] = useLocalStorage(
    "writer-tracker-entries",
    sampleEntries,
  );

  const [globalGoals, setGlobalGoals] = useLocalStorage(
    "writer-tracker-global-goals",
    defaultGlobalGoals,
  );

  const [projectGoals, setProjectGoals] = useLocalStorage(
    "writer-tracker-project-goals",
    defaultProjectGoals,
  );

  function addEntry(entry) {
    const newEntry = {
      id: crypto.randomUUID(),
      ...entry,
      words: Number(entry.words) || 0,
    };

    setEntries((prev) => [newEntry, ...prev]);
  }

  function updateEntry(updatedEntry) {
    setEntries((prev) =>
      prev.map((entry) =>
        entry.id === updatedEntry.id ? updatedEntry : entry,
      ),
    );
  }

  function deleteEntry(id) {
    setEntries((prev) => prev.filter((entry) => entry.id !== id));
  }

  function deleteEntries(ids) {
    setEntries((prev) => prev.filter((entry) => !ids.includes(entry.id)));
  }

  function importEntries(newEntries) {
    setEntries((prev) => [...newEntries, ...prev]);
  }

  function updateGlobalGoals(nextGoals) {
    setGlobalGoals((prev) => ({
      ...prev,
      ...nextGoals,
    }));
  }

  function saveProjectGoal(project, targetWords) {
    setProjectGoals((prev) => {
      const existing = prev.find((item) => item.project === project);

      if (existing) {
        return prev.map((item) =>
          item.project === project
            ? { ...item, targetWords: Number(targetWords) || 0 }
            : item,
        );
      }

      return [
        ...prev,
        {
          project,
          targetWords: Number(targetWords) || 0,
        },
      ];
    });
  }

  function deleteProjectGoal(project) {
    setProjectGoals((prev) => prev.filter((item) => item.project !== project));
  }

  return (
    <WritingContext.Provider
      value={{
        entries,
        addEntry,
        updateEntry,
        deleteEntry,
        deleteEntries,
        importEntries,

        globalGoals,
        updateGlobalGoals,

        projectGoals,
        saveProjectGoal,
        deleteProjectGoal,
      }}
    >
      {children}
    </WritingContext.Provider>
  );
}

export function useWriting() {
  const context = useContext(WritingContext);

  if (!context) {
    throw new Error("useWriting must be used inside WritingProvider");
  }

  return context;
}
