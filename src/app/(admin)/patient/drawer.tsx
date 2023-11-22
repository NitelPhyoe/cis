import { useDisclosure } from "@mantine/hooks";
import {
  Drawer,
  Button,
  Group,
  Title,
  TextInput,
  Stack,
  Space,
  NumberInput,
  Select,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { createPatient } from "@/actions/db";
import { BLOODTYPE, GENDER } from "@prisma/client";
import { bloodToTxt, nanoid } from "@/components/utils";
import { DatePickerInput } from "@mantine/dates";
import { useEffect } from "react";

export function PatientCreate() {
  const [opened, { open, close }] = useDisclosure(false);

  let form = useForm({
    initialValues: {
      patientNo: "",
      fullName: "",
      dob: new Date(),
      age: 0,
      sex: GENDER.MALE,
      bloodGroup: BLOODTYPE.O_positive,
      alergy: "",
      fatherName: "",
      spouseName: "",
      street: "",
      township: "",
      city: "",
      zipCode: "",
    },
  });

  function openHandler() {
    form.values.patientNo = nanoid();
    open();
  }

  async function handler(data: any) {
    await createPatient(data);

    form.reset();
    close();
  }

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Create Patient">
        <form onSubmit={form.onSubmit(handler)}>
          <Stack gap="md">
            <Group grow>
              <TextInput
                label="Name"
                placeholder="Patient Name"
                {...form.getInputProps("fullName")}
              />

              <TextInput
                disabled
                label="Patient No"
                placeholder="Patient No"
                {...form.getInputProps("patientNo")}
              />
            </Group>

            <DatePickerInput
              label="D.O.B"
              placeholder="Date of Birth"
              {...form.getInputProps("dob")}
            />
            <Group grow>
              <NumberInput
                label="Age"
                placeholder="Age"
                {...form.getInputProps("age")}
              />

              <Select
                label="Sex"
                placeholder="Sex"
                data={Object.values(GENDER)}
                {...form.getInputProps("sex")}
              />

              <Select
                label="Blood Group"
                placeholder="Blood Group"
                data={Object.values(BLOODTYPE).map((k) => ({
                  label: bloodToTxt(k),
                  value: k,
                }))}
                {...form.getInputProps("bloodGroup")}
              />
            </Group>

            <Textarea
              maxLength={400}
              maxRows={4}
              label="Alergy"
              placeholder="Alergy"
              {...form.getInputProps("alergy")}
            />

            <Group grow>
              <TextInput
                label="Father"
                placeholder="Father Name"
                {...form.getInputProps("fatherName")}
              />

              <TextInput
                label="Spouse"
                placeholder="Spouse Name"
                {...form.getInputProps("spouseName")}
              />
            </Group>

            <Group grow>
              <TextInput
                label="Street"
                placeholder="Street"
                {...form.getInputProps("street")}
              />
              <TextInput
                label="Township"
                placeholder="Township"
                {...form.getInputProps("township")}
              />
            </Group>

            <Group grow>
              <TextInput
                label="City"
                placeholder="City"
                {...form.getInputProps("city")}
              />

              <TextInput
                label="Zipcode"
                placeholder="Zipcode"
                {...form.getInputProps("zipCode")}
              />
            </Group>
            <Group justify="flex-end">
              <Button type="submit">Submit</Button>
            </Group>
          </Stack>
        </form>
      </Drawer>
      <Group justify="space-between">
        <Title order={3}> Patient List</Title>
        <Button onClick={openHandler}>Create</Button>
      </Group>
    </>
  );
}
