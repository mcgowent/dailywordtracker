import { useState } from "react";
import { useWriting } from "../context/WritingContext";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function SettingsPage() {
  const {
    globalGoals,
    updateGlobalGoals,
    projectGoals,
    saveProjectGoal,
    deleteProjectGoal,
  } = useWriting();

  const [daily, setDaily] = useState(globalGoals.daily);
  const [weekly, setWeekly] = useState(globalGoals.weekly);
  const [monthly, setMonthly] = useState(globalGoals.monthly);

  const [projectName, setProjectName] = useState("");
  const [targetWords, setTargetWords] = useState("");

  function handleSaveGlobalGoals() {
    updateGlobalGoals({
      daily: Number(daily) || 0,
      weekly: Number(weekly) || 0,
      monthly: Number(monthly) || 0,
    });
  }

  function handleAddProjectGoal() {
    if (!projectName.trim()) return;

    saveProjectGoal(projectName.trim(), targetWords);
    setProjectName("");
    setTargetWords("");
  }

  return (
    <div style={styles.page}>
      <Card title="Overall Writing Goals">
        <div style={styles.form}>
          <Input
            label="Daily Goal"
            type="number"
            value={daily}
            onChange={(e) => setDaily(e.target.value)}
          />
          <Input
            label="Weekly Goal"
            type="number"
            value={weekly}
            onChange={(e) => setWeekly(e.target.value)}
          />
          <Input
            label="Monthly Goal"
            type="number"
            value={monthly}
            onChange={(e) => setMonthly(e.target.value)}
          />

          <Button onClick={handleSaveGlobalGoals}>Save Overall Goals</Button>
        </div>
      </Card>

      <Card title="Project Goals">
        <div style={styles.form}>
          <Input
            label="Project Name"
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="System Reset"
          />
          <Input
            label="Target Words"
            type="number"
            value={targetWords}
            onChange={(e) => setTargetWords(e.target.value)}
            placeholder="80000"
          />
          <Button onClick={handleAddProjectGoal}>
            Add / Update Project Goal
          </Button>
        </div>

        <div style={styles.goalList}>
          {projectGoals.map((goal) => (
            <div key={goal.project} style={styles.goalRow}>
              <span>
                {goal.project} — {goal.targetWords.toLocaleString()} words
              </span>
              <Button
                variant="secondary"
                onClick={() => deleteProjectGoal(goal.project)}
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

const styles = {
  page: {
    display: "grid",
    gap: "1rem",
  },
  form: {
    display: "grid",
    gap: "1rem",
  },
  goalList: {
    display: "grid",
    gap: "0.75rem",
    marginTop: "1rem",
  },
  goalRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
    flexWrap: "wrap",
    paddingTop: "0.75rem",
    borderTop: "1px solid #374151",
  },
};
