"use client";

import { Badge, Table, Group, Text, ActionIcon, rem } from "@mantine/core";
import { Program } from "@prisma/client";
import { TableEditBtn } from "@/components/button/edit";
import { ProgramCreate } from "./drawer";
import { ProgramView } from "./modal";
import { TableDeleteBtn } from "@/components/button/delete";
import { deleteProgram } from "@/actions/db";

export const ProgramTable = ({ data }: { data: Array<Program> }) => {
  const rows = data.map((item) => (
    <Table.Tr key={item.id} c={"gray"}>
      <Table.Td>
        <Text fz="sm">{item.id}</Text>
      </Table.Td>
      <Table.Td>
        <Text fz="sm" fw={"bold"}>
          {item.programName}
        </Text>
      </Table.Td>

      <Table.Td>
        <Badge color="blue" variant="light">
          {item.permitRoles}
        </Badge>
      </Table.Td>

      <Table.Td>
        <Text fz="sm">{item.route}</Text>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">{item.params}</Text>
      </Table.Td>
      <Table.Td>
        <Group gap={0} justify="center">
          <ProgramView data={item} />
          <TableEditBtn href={`/program/${item.id}/edit`} />
          <TableDeleteBtn action={deleteProgram} id={item.id} />
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <ProgramCreate />
      <Table.ScrollContainer minWidth={800}>
        <Table verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>Name</Table.Th>
              <Table.Th>Role</Table.Th>
              <Table.Th>Route</Table.Th>
              <Table.Th>Params</Table.Th>
              <Table.Th />
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </>
  );
};
