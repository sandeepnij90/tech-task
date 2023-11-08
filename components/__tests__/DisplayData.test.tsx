import { render, screen } from "@testing-library/react";
import { DisplayData } from "../DisplayData";
import UserEvent from "@testing-library/user-event";

describe("<DisplayData />", () => {
  HTMLCanvasElement.prototype.getContext = jest.fn();

  const graphData = [
    {
      metric: "test",
      color: "#ffffff",
      values: [1, 2, 3, 4],
    },
    {
      metric: "test2",
      color: "#ffffff",
      values: [1, 2, 3, 4],
    },
  ];

  it("should be defaulted on table view", () => {
    render(<DisplayData tableData={[]} graphData={graphData} />);
    expect(screen.getByText("Switch to graph")).toBeInTheDocument();
  });

  it("should toggle between table and graph", async () => {
    const user = UserEvent.setup();
    render(<DisplayData tableData={[]} graphData={graphData} />);

    await user.click(screen.getByText("Switch to graph"));
    expect(screen.getByText("Switch to table")).toBeInTheDocument();
    await user.click(screen.getByText("Switch to table"));
    expect(screen.getByText("Switch to graph")).toBeInTheDocument();
  });
});
