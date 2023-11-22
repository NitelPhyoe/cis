import { getPatients } from "@/actions/db";
import { PatientTable } from "./table";

export default async function PatientPage() {
  const patients = await getPatients();

  return (
    <main>
      <PatientTable data={patients} />
    </main>
  );
}
