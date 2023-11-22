import { getPrograms } from "@/actions/db";
import { ProgramTable } from "./table";

export default async function ProgramPage() {
  const programs = await getPrograms();
  return (
    <main>
      <ProgramTable data={programs} />
    </main>
  );
}
