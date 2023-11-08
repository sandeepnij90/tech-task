import { TableData } from "@/utils/formatTableData";
import clsx from "clsx";

interface Props {
  data: TableData[];
}

export const Table = ({ data }: Props) => {
  return (
    <table className="border w-full">
      <thead>
        <tr>
          <th className="px-6 py-3">Metric</th>
          <th className="px-6 py-3">Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ metric, value }, key) => (
          <tr key={metric} className={clsx(key % 2 === 0 && "bg-gray-100")}>
            <td className="px-6 py-3">{metric}</td>
            <td className="px-6 py-3">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
