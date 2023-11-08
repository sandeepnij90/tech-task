"use client";
import { useState } from "react";
import { Table } from "./Table";
import { LineChart } from "./Chart";

interface Props {
  tableData: { metric: string; value: number }[];
  graphData: { metric: string; color: string; values: number[] }[];
}

export const DisplayData = ({ tableData, graphData }: Props) => {
  const [view, setView] = useState<"table" | "graph">("table");

  const handleView = () => {
    if (view === "table") {
      return setView("graph");
    }
    setView("table");
  };

  return (
    <>
      <div className="max-w-[960px] p-4">
        <h1 className="mt-4 text-2xl text-center">Current predictions</h1>
        <div className="flex justify-center my-6">
          <button
            className="rounded-2xl px-4 py-2 text-white bg-blue-500 w-auto hover:bg-blue-700"
            onClick={handleView}
          >
            Switch to {view === "table" ? "graph" : "table"}
          </button>
        </div>
        <div className="w-full">
          {view === "table" ? (
            <Table data={tableData} />
          ) : (
            <LineChart data={graphData} />
          )}
        </div>
      </div>
    </>
  );
};
