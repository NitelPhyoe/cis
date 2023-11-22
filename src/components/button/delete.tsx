import { deleteProgram } from "@/actions/db";
import { ActionIcon, rem } from "@mantine/core";
import { LuTrash } from "react-icons/lu";

type Props = {
  id: number;
  action(id: number): void;
};

export const TableDeleteBtn = ({ id, action }: Props) => {
  const removeHandler = action.bind(null, id);
  return (
    <>
      <ActionIcon variant="subtle" color="red" onClick={() => removeHandler()}>
        <LuTrash style={{ width: rem(16), height: rem(16) }} />
      </ActionIcon>
    </>
  );
};
