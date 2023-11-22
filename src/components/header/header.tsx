import {
  Group,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  useMantineTheme,
  Title,
  Button,
} from "@mantine/core";

import { LuBuilding2 } from "react-icons/lu";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import classes from "./header.module.css";

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <Box pb={1}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Group c="blue">
            <LuBuilding2 size={30} />
            <Title order={3}>CIS</Title>
          </Group>

          <Group visibleFrom="sm">
            {/* <Button variant="default">Log in</Button>
            <Button>Sign up</Button> */}
            <Button variant="default" component={Link} href={"/"}>
              Home
            </Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Group justify="center" grow pb="xl" px="md">
            {/* <Button variant="default">Log in</Button>
            <Button>Sign up</Button> */}
            <Button variant="default" component={Link} href={"/"}>
              Home
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
