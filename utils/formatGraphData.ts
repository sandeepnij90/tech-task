import { generateRandomColor } from "./generateRandomColor";
import { Data } from "./types";

export const formatGraphData = (data: Data, startsWith: string) => {
  const filteredData = Object.entries(data).filter(([key]) =>
    key.startsWith(startsWith)
  );

  const colors: string[] = [];

  const formattedData = filteredData.map(([key, information]) => {
    let color = generateRandomColor();

    while (colors.includes(color)) {
      color = generateRandomColor();
    }
    colors.push(color);

    return {
      metric: key,
      color,
      values: information.values,
    };
  });

  return formattedData;
};
