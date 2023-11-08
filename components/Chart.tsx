import { Line } from "react-chartjs-2";

import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Legend,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Legend
);

interface Props {
  data: { metric: string; color: string; values: number[] }[];
}

export const LineChart = ({ data }: Props) => {
  const datasets = data.map(({ metric, color, values }) => ({
    label: metric,
    borderColor: color,
    data: values,
    borderWidth: 2,
    fill: false,
  }));

  const config = {
    labels: [0, 5, 15, 25, 35, 45, 55],
    datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Times",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Values",
        },
      },
    },
  };
  return <Line data={config} options={options} />;
};
