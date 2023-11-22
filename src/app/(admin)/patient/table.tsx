"use client";

import { Badge, Table, Group, Text, ActionIcon, rem } from "@mantine/core";
import { Patient } from "@prisma/client";
import { TableEditBtn } from "@/components/button/edit";
import { TableDeleteBtn } from "@/components/button/delete";
import { bloodToTxt, sexToTxt } from "@/components/utils";
import { deletePatient } from "@/actions/db";
import { PatientCreate } from "./drawer";
import { PatientView } from "./modal";

export const PatientTable = ({ data }: { data: Array<Patient> }) => {
  const rows = data.map((item) => (
    <Table.Tr key={item.id} c={"gray"}>
      <Table.Td>
        <Text fz="sm">{item.id}</Text>
      </Table.Td>
      <Table.Td>
        <Text fz="sm" fw={"bold"}>
          {item.fullName}
        </Text>
      </Table.Td>

      <Table.Td>
        <Badge color="blue" variant="light">
          {item.patientNo}
        </Badge>
      </Table.Td>

      <Table.Td>
        <Text fz="sm">{item.age}</Text>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">{sexToTxt(item.sex)}</Text>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">{bloodToTxt(item.bloodGroup)}</Text>
      </Table.Td>

      <Table.Td>
        <Group gap={0} justify="center">
          <PatientView data={item} />
          <TableEditBtn href={`/patient/${item.id}/edit`} />
          <TableDeleteBtn action={deletePatient} id={item.id} />
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <PatientCreate />
      <Table.ScrollContainer minWidth={800}>
        <Table verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>Name</Table.Th>
              <Table.Th>No</Table.Th>
              <Table.Th>Age</Table.Th>
              <Table.Th>Sex</Table.Th>
              <Table.Th>Blood Group</Table.Th>
              <Table.Th />
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </>
  );
};
