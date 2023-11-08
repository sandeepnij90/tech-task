"use client";
import { useState } from "react";
import { Table } from "./Table";

interface Props {
  tableData: { metric: string; value: number }[];
}

export const DisplayData = ({ tableData }: Props) => {
  const [view, setView] = useState<"table" | "graph">("table");

  const handleView = () => {
    if (view === "table") {
      return setView("graph");
    }
    setView("table");
  };

  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="mt-4 text-2xl">Current predictions</h1>
        <button onClick={handleView}>
          Switch to {view === "table" ? "graph" : "table"}
        </button>
        {view === "table" ? <Table data={tableData} /> : <></>}
      </div>
    </>
  );
};
