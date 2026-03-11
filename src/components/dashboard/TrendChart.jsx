import Card from "../ui/Card";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function formatWeekLabel(value) {
  const date = new Date(`${value}T00:00:00`);

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export default function TrendChart({ data }) {
  return (
    <Card title="Weekly Average Writing Trend">
      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid stroke="#374151" />
            <XAxis
              dataKey="week"
              stroke="#d1d5db"
              tickFormatter={formatWeekLabel}
            />
            <YAxis stroke="#d1d5db" />
            <Tooltip
              formatter={(value) => [
                `${value.toLocaleString()} words`,
                "Average",
              ]}
              labelFormatter={(label) => `Week of ${formatWeekLabel(label)}`}
            />
            <Bar dataKey="averageWords" fill="#60a5fa" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
