import * as XLSX from "xlsx";

export default function ExcelUpload({ onImport }) {
  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const data = await file.arrayBuffer();

    const workbook = XLSX.read(data, {
      type: "array",
      cellDates: true,
    });

    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const rows = XLSX.utils.sheet_to_json(worksheet, {
      raw: false,
      dateNF: "m/d/yyyy",
    });

    const parsedEntries = rows.map((row) => ({
      id: crypto.randomUUID(),
      date: formatExcelDate(row.Date),
      words: parseWordCount(row.Words),
      project: row.Project || "",
      notes: row.Notes || "",
    }));

    onImport(parsedEntries);
  };

  return (
    <div style={styles.container}>
      <label style={styles.label}>
        Upload Excel File
        <input
          type="file"
          accept=".xlsx,.xls"
          onChange={handleFile}
          style={styles.input}
        />
      </label>
    </div>
  );
}

function formatExcelDate(value) {
  if (!value) return "";

  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }

  if (typeof value === "number") {
    const parsed = XLSX.SSF.parse_date_code(value);
    if (parsed) {
      const year = parsed.y;
      const month = String(parsed.m).padStart(2, "0");
      const day = String(parsed.d).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }
  }

  if (typeof value === "string") {
    const parsed = new Date(value);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed.toISOString().slice(0, 10);
    }
  }

  return "";
}

function parseWordCount(value) {
  if (value === null || value === undefined || value === "") {
    return 0;
  }

  if (typeof value === "number") {
    return Number.isFinite(value) ? value : 0;
  }

  if (typeof value === "string") {
    const cleaned = value.replace(/,/g, "").trim();
    const parsed = Number(cleaned);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  return 0;
}

const styles = {
  container: {
    marginTop: "10px",
  },
  label: {
    cursor: "pointer",
    fontWeight: "500",
  },
  input: {
    display: "block",
    marginTop: "6px",
  },
};
