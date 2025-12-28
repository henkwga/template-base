"use server";

import { auth } from "@/lib/auth/server";
import { redirect } from "next/navigation";
import { headers } from "next/headers";


export type AuthActionState =
  | { ok: true }
  | { ok: false; message: string };

function messageFromUnknown(err: unknown) {
  if (typeof err === "string") return err;
  if (err instanceof Error) return err.message;
  try {
    return JSON.stringify(err);
  } catch {
    return "Erro inesperado";
  }
}

export async function registerAction(_: any, formData: FormData) {
  const name = String(formData.get("name") ?? "");
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  try {
    await auth.api.signUpEmail({
      body: { name, email, password },
      headers: await headers(),
    });

    // NÃO redirect aqui
    return { ok: true as const };
  } catch (err: any) {
    // ideal: mapear mensagens (email já existe, senha fraca, etc.)
    return {
      ok: false as const,
      message: "Não foi possível criar sua conta. Verifique os dados e tente novamente.",
    };
  }
}

export async function loginAction(_: any, formData: FormData) {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  try {
    await auth.api.signInEmail({
      body: { email, password },
      headers: await headers(),
    });

    // NÃO redirect aqui
    return { ok: true as const };
  } catch (err: any) {
    return {
      ok: false as const,
      message: "E-mail ou senha inválidos.",
    };
  }
}

export async function logoutAction(): Promise<void> {
  await auth.api.signOut();
  redirect("/");
}
