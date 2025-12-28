"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { loginAction } from "@/lib/auth/actions";

type State =
  | { ok: null }
  | { ok: true }
  | { ok: false; message: string };

export function LoginForm() {
  const router = useRouter();
  const [state, formAction] = useActionState<State, FormData>(loginAction, { ok: null });

  useEffect(() => {
    if (state.ok === true) {
      router.push("/");
      router.refresh();
    }
  }, [state.ok, router]);

  return (
    <div className="card card-pad">
      <div className="mb-6">
        <h1 className="text-xl font-semibold tracking-tight">Entrar</h1>
        <p className="mt-2 text-sm text-black/60">Acesse sua área.</p>
      </div>

      <form action={formAction} className="grid gap-4">
        <div className="grid gap-2">
          <label className="label">E-mail</label>
          <input className="input" name="email" type="email" required />
        </div>

        <div className="grid gap-2">
          <label className="label">Senha</label>
          <input className="input" name="password" type="password" required />
        </div>

        {state.ok === false && (
          <div className="rounded-xl border border-black/10 bg-white p-3 text-sm text-black/70">
            {state.message}
          </div>
        )}

        <button className="btn btn-lg btn-primary w-full">Entrar</button>
      </form>
    </div>
  );
}
