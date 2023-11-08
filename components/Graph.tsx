import { Line } from "react-chartjs-2";

interface Props {
  data: { metric: string; color: string; values: number[] }[];
}

export const Graph = ({ data }: Props) => {
  const datasets = data.map(({ metric, color, values }) => ({
    label: metric,
    fill: false,
    lineTension: 0.5,
    borderColor: color,
    data: values,
    borderWidth: 2,
  }));

  const config = {
    // labels: [0, 5, 15, 25, 35, 45, 55],
    // datasets: datasets,
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "test",
        data: [12, 19, 3, 5, 2, 3],
      },
    ],
  };

  return (
    <div>
      <h1>here</h1>
      <Line
        data={config}
        options={{
          scales: {
            x: {
              type: "linear",
            },
            y: {
              type: "linear",
            },
          },
        }}
      />
    </div>
  );
};
