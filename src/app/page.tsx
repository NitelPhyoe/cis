import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { prisma } from "@orm/client";

async function getUser() {
  "use server";
  return await prisma.user.findMany();
}

export default async function Home() {
  const data = await getUser();
  return (
    <main>
      {JSON.stringify(data)}
      <Button>Click me</Button>
      <Badge variant="outline">Badge</Badge>
    </main>
  );
}
