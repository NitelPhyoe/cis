import { getUsers } from "@/actions/db";

export default async function DashboardPage() {
  const users = await getUsers();
  return <>this is dash{JSON.stringify(users)}</>;
}
