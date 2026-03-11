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

export default function WeekdayChart({ data }) {
  return (
    <Card title="Words by Weekday">
      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid stroke="#374151" />
            <XAxis dataKey="day" stroke="#d1d5db" />
            <YAxis stroke="#d1d5db" />
            <Tooltip />
            <Bar dataKey="words" fill="#f59e0b" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
