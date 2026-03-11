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

export default function MonthlyChart({ data }) {
  return (
    <Card title="Monthly Totals">
      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid stroke="#374151" />
            <XAxis dataKey="month" stroke="#d1d5db" />
            <YAxis stroke="#d1d5db" />
            <Tooltip />
            <Bar dataKey="words" fill="#34d399" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
