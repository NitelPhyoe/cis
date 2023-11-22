import { getProgramById } from "@/actions/db";
import { ProgramForm } from "./form";

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id);

  const program = await getProgramById(id);

  return (
    <>
      <ProgramForm data={program} />
    </>
  );
}
