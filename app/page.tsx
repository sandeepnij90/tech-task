import { DisplayData } from "@/components/DisplayData";
import { formatGraphData } from "@/utils/formatGraphData";
import { formatTableData } from "@/utils/formatTableData";

async function getData() {
  const res = await fetch(
    "https://reference.intellisense.io/thickenernn/v1/referencia"
  );
  const data = await res.json();
  return data.current.data;
}

export default async function Home() {
  const data = await getData();
  const tableData = formatTableData(data.TK1, "TK1_");
  const graphData = formatGraphData(data.TK1, "TK1_");

  return (
    <main className="">
      <DisplayData tableData={tableData} graphData={graphData} />
    </main>
  );
}
