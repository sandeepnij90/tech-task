import { formatGraphData } from "../formatGraphData";
import { Data } from "../formatTableData";

describe("formatGraphData", () => {
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

  it("should return an array of objects with the correct format", () => {
    const result = formatGraphData(data, "TK1_");
    const color1 = result[0].color;
    const color2 = result[1].color;

    expect(result).toEqual([
      {
        metric: "TK1_something",
        color: color1,
        values: [1, 2, 3],
      },
      {
        metric: "TK1_something2",
        color: color2,
        values: [3, 4, 5],
      },
    ]);
  });
});
