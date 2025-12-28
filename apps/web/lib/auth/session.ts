import { auth } from "@/lib/auth";

export async function getSession() {
  try {
    const session = await auth.api.getSession();
    return session; // null se não estiver logado
  } catch {
    return null;
  }
}
