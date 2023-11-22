"use client";
import {
  ActionIcon,
  Button,
  Group,
  Modal,
  TextInput,
  rem,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { Program } from "@prisma/client";
import { LuEye } from "react-icons/lu";

type Props = {
  data: Program;
};

export function ProgramView({ data }: Props) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} title="Program Detail">
        <TextInput withAsterisk label="Name" value={data.programName} />
        <TextInput withAsterisk label="Roles" value={data.permitRoles} />
        <TextInput withAsterisk label="Route" value={data.route} />
        <TextInput withAsterisk label="Params" value={data.params} />
        <Group grow>
          <DatePickerInput disabled label="Created At" value={data.createdAt} />
          <DatePickerInput
            disabled
            label="Modified At"
            value={data.updatedAt}
          />
        </Group>
      </Modal>

      <ActionIcon variant="subtle" color="green" onClick={open}>
        <LuEye style={{ width: rem(16), height: rem(16) }} />
      </ActionIcon>
    </>
  );
}
