import { IconType } from "react-icons";
import {
  LuAccessibility,
  LuBarChartBig,
  LuNewspaper,
  LuUsers,
} from "react-icons/lu";
import { NavItem } from "./nav.item";

type ItemType = Array<{
  label: string;
  url: string;
  IC: IconType;
}>;

const items: ItemType = [
  // {
  //   label: "Dashboard",
  //   url: "/dashboard",
  //   IC: LuBarChartBig,
  // },
  {
    label: "Program",
    url: "/program",
    IC: LuNewspaper,
  },
  {
    label: "Patient",
    url: "/patient",
    IC: LuAccessibility,
  },
  // {
  //   label: "Staff",
  //   url: "/user",
  //   IC: LuUsers,
  // },
];

export const SideNav = () => {
  return (
    <div>
      {items.map((fields, i) => (
        <NavItem key={i} {...fields} />
      ))}
    </div>
  );
};
