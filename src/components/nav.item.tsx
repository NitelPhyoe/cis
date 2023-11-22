import { NavLink } from "@mantine/core";
import Link from "next/link";
import { IconType } from "react-icons";
import { usePathname } from "next/navigation";

type Props = {
  url: string;
  IC: IconType;
  label: string;
};

export const NavItem = ({ url = "/", label, IC }: Props) => {
  const pathname = usePathname();
  return (
    <>
      <NavLink
        active={pathname.includes(url)}
        href={url}
        component={Link}
        label={label}
        leftSection={<IC size="1.5rem" />}
      />
    </>
  );
};
