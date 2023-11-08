import { formatTableData } from "../formatTableData";
import { Data } from "../types";

describe("formatTableData", () => {
  const data: Data = {
    TK1_something: {
      values: [1, 2, 3],
      times: [0, 5, 15],
    },

    TK1_something2: {
      values: [3, 4, 5],
      times: [0, 5, 15],
    },

    SK1_something: {
      values: [1, 2, 3],
      times: [0, 5, 15],
    },
  };

  it("should filter the data according to the startsWith parameter", () => {
    const result = formatTableData(data, "TK1_");
    expect(result).toEqual([
      { metric: "TK1_something", value: 3 },
      { metric: "TK1_something2", value: 5 },
    ]);
  });
});
