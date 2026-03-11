// src/utils/exportEntries.js
import * as XLSX from "xlsx";

export function exportEntriesToExcel(entries) {
  const rows = [...entries]
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((entry) => ({
      Date: formatDateForExcel(entry.date),
      Words: entry.words ?? 0,
      Project: entry.project || "",
      Notes: entry.notes || "",
    }));

  const worksheet = XLSX.utils.json_to_sheet(rows);

  worksheet["!cols"] = [
    { wch: 12 }, // Date
    { wch: 12 }, // Words
    { wch: 28 }, // Project
    { wch: 40 }, // Notes
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Entries");

  XLSX.writeFile(workbook, "writer-tracker-entries.xlsx", {
    compression: true,
  });
}

function formatDateForExcel(dateString) {
  const [year, month, day] = dateString.split("-");
  return `${Number(month)}/${Number(day)}/${year}`;
}
