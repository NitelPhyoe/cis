"use client";

import { Program } from "@prisma/client";
import { useForm } from "@mantine/form";
import { Button, Fieldset, Group, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import Link from "next/link";
import { updateProgramById } from "@/actions/db";

type Props = {
  data: Program;
};

export function ProgramForm({ data }: Props) {
  const form = useForm({ initialValues: data });

  const handler = updateProgramById.bind(null, data.id);

  return (
    <>
      <form onSubmit={form.onSubmit((values) => handler(values))}>
        <Fieldset legend="Program Detail">
          <TextInput
            withAsterisk
            label="Name"
            {...form.getInputProps("programName")}
          />
          <TextInput
            withAsterisk
            label="Roles"
            {...form.getInputProps("permitRoles")}
          />
          <TextInput
            withAsterisk
            label="Route"
            {...form.getInputProps("route")}
          />
          <TextInput
            withAsterisk
            label="Params"
            {...form.getInputProps("params")}
          />
          <DatePickerInput
            disabled
            label="Created At"
            {...form.getInputProps("createdAt")}
          />
          <DatePickerInput
            disabled
            label="Modified At"
            {...form.getInputProps("updatedAt")}
          />
          <Group justify="flex-end" gap={5} mt="md">
            <Button component={Link} href="/program" variant="default">
              Cancel
            </Button>
            <Button type="submit">Update</Button>
          </Group>
        </Fieldset>
      </form>
    </>
  );
}
