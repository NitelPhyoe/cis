import { ActionIcon, rem } from "@mantine/core";
import { LuPencil } from "react-icons/lu";
import Link from "next/link";

type Props = {
  href: string;
};

export const TableEditBtn = ({ href }: Props) => {
  return (
    <>
      <ActionIcon component={Link} href={href} variant="subtle" color="blue">
        <LuPencil style={{ width: rem(16), height: rem(16) }} />
      </ActionIcon>
    </>
  );
};
