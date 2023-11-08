import { render, screen } from "@testing-library/react";
import { Table } from "../Table";

describe("<Table />", () => {
  const data = [
    {
      metric: "metric 1",
      value: 1,
    },
    {
      metric: "metric 2",
      value: 500,
    },
  ];

  it("should render the table headings", () => {
    render(<Table data={data} />);

    expect(screen.getByText("Metric")).toBeInTheDocument();
    expect(screen.getByText("Value")).toBeInTheDocument();
  });

  it("Should render the correct values", () => {
    render(<Table data={data} />);

    expect(screen.getByText("metric 1")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();

    expect(screen.getByText("metric 2")).toBeInTheDocument();
    expect(screen.getByText("500")).toBeInTheDocument();
  });
});
