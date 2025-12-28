"use client";

import { useActionState } from "react";
import { registerAction } from "@/lib/auth-actions";
import { PasswordRequirements } from "./PasswordRequirements";
import Link from "next/link";

export function RegisterForm() {
  const [state, formAction] = useActionState(registerAction, { ok: true });

  return (
    <div className="card card-pad">
      <div className="mb-6">
        <h1 className="text-xl font-semibold tracking-tight">Criar conta</h1>
        <p className="mt-2 text-sm text-black/60">Crie sua conta para acessar.</p>
      </div>

      <form action={formAction} className="grid gap-4">
        <div className="grid gap-2">
          <label className="label">Nome</label>
          <input className="input" name="name" required />
        </div>

        <div className="grid gap-2">
          <label className="label">E-mail</label>
          <input className="input" name="email" type="email" required />
        </div>

        <div className="grid gap-2">
          <label className="label">Senha</label>
          <input className="input" name="password" type="password" required />
        </div>

        {!state.ok && (
          <div className="rounded-xl border border-black/10 bg-white p-3 text-sm text-black/70">
            {state.message}
          </div>
        )}

        <button className="btn btn-lg btn-primary w-full">Criar conta</button>
      </form>

      <PasswordRequirements />

      <div className="mt-6 text-center text-xs text-black/50">
        Já tem conta?{" "}
        <Link href="/login" className="underline hover:text-black">
          Entrar
        </Link>
      </div>
    </div>
  );
}
