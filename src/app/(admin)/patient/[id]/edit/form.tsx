"use client";

import { BLOODTYPE, GENDER, Patient } from "@prisma/client";
import { useForm } from "@mantine/form";
import {
  Button,
  Fieldset,
  Group,
  NumberInput,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import Link from "next/link";
import { updatePatientById } from "@/actions/db";
import { bloodToTxt } from "@/components/utils";

type Props = {
  data: Patient;
};

export function PatientForm({ data }: Props) {
  const form = useForm({ initialValues: data });

  const handler = updatePatientById.bind(null, data.id);

  return (
    <>
      <form onSubmit={form.onSubmit((values) => handler(values))}>
        <Fieldset legend="Patient Detail">
          <Group grow>
            <TextInput
              label="Name"
              placeholder="Patient Name"
              {...form.getInputProps("fullName")}
            />

            <TextInput
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

          <Group grow>
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
          </Group>

          <Group justify="flex-end" gap={5} mt="md">
            <Button component={Link} href="/patient" variant="default">
              Cancel
            </Button>
            <Button type="submit">Update</Button>
          </Group>
        </Fieldset>
      </form>
    </>
  );
}
