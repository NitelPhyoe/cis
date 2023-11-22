import {
  Box,
  Button,
  Center,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <Box maw={700} mx="auto" mt="lg">
        <Paper shadow="xs" p="lg">
          <Center>
            <Title order={1} c="blue">
              Clinic Information System
            </Title>
          </Center>
          <Center>
            <Stack pt={"lg"}>
              <Text size="xl">Welcome to CIS (EIU - WEB Final Project)</Text>
              <Group>
                <Text size="sm" c="dimmed">
                  Name:
                </Text>
                <Text fw="bold">Phyo Zin Khant</Text>
              </Group>
              <Group>
                <Text size="sm" c="dimmed">
                  Batch:
                </Text>
                <Text fw="bold">5th</Text>
              </Group>
            </Stack>
          </Center>
          <Center>
            <Button component={Link} href={"/program"}>
              Get Started
            </Button>
          </Center>
        </Paper>
      </Box>
    </main>
  );
}
