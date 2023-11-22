import { useDisclosure } from "@mantine/hooks";
import {
  Drawer,
  Button,
  Group,
  Title,
  TextInput,
  Stack,
  Space,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { createProgram } from "@/actions/db";

export function ProgramCreate() {
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      programName: "",
      permitRoles: "",
      route: "",
      params: "",
    },
  });

  async function handler(data: any) {
    await createProgram(data);
    form.reset();
    close();
  }

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Create Program">
        <form onSubmit={form.onSubmit(handler)}>
          <Stack gap="md">
            <TextInput
              label="Program Name"
              placeholder="Program Name"
              {...form.getInputProps("programName")}
            />

            <TextInput
              label="Permit Role"
              placeholder="Role"
              {...form.getInputProps("permitRoles")}
            />

            <TextInput
              label="Route"
              placeholder="Route"
              {...form.getInputProps("route")}
            />

            <TextInput
              label="Params"
              placeholder="Params"
              {...form.getInputProps("params")}
            />
            <Group justify="flex-end">
              <Button type="submit">Submit</Button>
            </Group>
          </Stack>
        </form>
      </Drawer>
      <Group justify="space-between">
        <Title order={3}> Program List</Title>
        <Button onClick={open}>Create</Button>
      </Group>
    </>
  );
}
