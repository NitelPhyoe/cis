import { getPatientById } from "@/actions/db";
import { PatientForm } from "./form";

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id);

  const patient = await getPatientById(id);

  return (
    <>
      <PatientForm data={patient} />
    </>
  );
}
