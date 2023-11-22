"use client";
import { bloodToTxt } from "@/components/utils";
import {
  ActionIcon,
  Button,
  Group,
  Modal,
  NumberInput,
  Select,
  TextInput,
  Textarea,
  rem,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { Patient, Program } from "@prisma/client";
import { LuEye } from "react-icons/lu";

type Props = {
  data: Patient;
};

export function PatientView({ data }: Props) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} title="Patient Detail">
        <Group grow>
          <TextInput withAsterisk label="Name" value={data.fullName} />
          <TextInput withAsterisk label="Patient No" value={data.patientNo} />
        </Group>
        <DatePickerInput disabled withAsterisk label="D.O.B" value={data.dob} />
        <Group grow>
          <NumberInput withAsterisk label="Age" value={data.age} />
          <TextInput withAsterisk label="Sex" value={data.sex} />
          <TextInput
            withAsterisk
            label="Blood Group"
            value={bloodToTxt(data.bloodGroup)}
          />
        </Group>
        <Textarea label="Alergy" value={data.alergy || "-"} />
        <Group grow>
          <TextInput label="Father" value={data.fatherName || "-"} />
          <TextInput label="Spouse" value={data.spouseName || "-"} />
        </Group>
        <Group grow>
          <TextInput withAsterisk label="Street" value={data.street} />
          <TextInput withAsterisk label="Township" value={data.township} />
        </Group>
        <Group grow>
          <TextInput withAsterisk label="City" value={data.city} />
          <TextInput withAsterisk label="Zipcode" value={data.zipCode} />
        </Group>
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
