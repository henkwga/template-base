import { apiGet } from "../../lib/shared/api-client";

export default async function Page() {
  const health = await apiGet<{ ok: boolean; data?: any }>("/api/health");
  return <pre>{JSON.stringify(health, null, 2)}</pre>;
}
