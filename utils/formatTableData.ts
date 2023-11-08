interface Data {
  data: {
    [key: string]: any;
  };
}

export interface TableData {
  metric: string;
  value: number;
}

export const formatTableData = (data: Data, startsWith: string) => {
  console.log(data);

  const filteredData = Object.entries(data).filter(([key]) =>
    key.startsWith(startsWith)
  );

  const formattedData = filteredData.map(([key, information]) => {
    const lastValue = information.values[information.values.length - 1];
    return {
      metric: key,
      value: lastValue,
    };
  });

  return formattedData;
};
