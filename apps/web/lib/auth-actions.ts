"use server";

import { auth } from "./auth";

export type AuthActionState =
  | { ok: true; next?: string; note?: string }
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

export async function loginAction(
  _prev: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) return { ok: false, message: "E-mail e senha são obrigatórios." };

  try {
    const res = await auth.api.signInEmail({ body: { email, password } });

    // ✅ critério real: se veio user, a auth ocorreu.
    // token pode ser null dependendo da configuração (ex: verificação).
    if (!res?.user?.id) {
      return { ok: false, message: "Não foi possível autenticar. Verifique as credenciais." };
    }

    // dica: você pode retornar next para o client redirecionar
    return { ok: true, next: "/app" };
  } catch (err) {
    console.error("[loginAction]", err);
    return { ok: false, message: messageFromUnknown(err) };
  }
}

export async function registerAction(
  _prev: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!name || !email || !password) return { ok: false, message: "Preencha todos os campos." };

  try {
    const res = await auth.api.signUpEmail({ body: { name, email, password } });

    // 🔎 Debug: isso aparece no terminal do Next
    console.log("[registerAction] result:", {
      userId: res?.user?.id,
      emailVerified: res?.user?.emailVerified,
      hasToken: Boolean(res?.token),
    });

    if (!res?.user?.id) {
      return { ok: false, message: "Cadastro não retornou usuário. Verifique configuração do auth/database." };
    }

    // ✅ auto-login: depende de config (autoSignIn e requireEmailVerification)
    // Se exigir verificação, pode não logar agora — mas o usuário deve existir no banco.
    if (res.token) {
      return { ok: true, next: "/app" };
    }

    // sem token -> normalmente verificação de email
    return { ok: true, next: "/login", note: "Conta criada. Verifique o e-mail se necessário." };
  } catch (err) {
    console.error("[registerAction]", err);
    return { ok: false, message: messageFromUnknown(err) };
  }
}

export async function logoutAction(): Promise<void> {
  await auth.api.signOut();
}
