import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70">
          404
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight">
          Página não encontrada
        </h1>

        <p className="mt-3 text-sm text-black/60">
          O endereço pode estar errado ou a página foi movida.
        </p>

        <div className="mt-8 flex gap-3">
          <Link
            href="/"
            className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:bg-black/90"
          >
            Voltar para Home
          </Link>

          <Link
            href="/"
            className="rounded-xl border border-black/15 bg-white px-5 py-3 text-sm font-medium text-black hover:bg-black/5"
          >
            Ver template
          </Link>
        </div>
      </div>
    </main>
  );
}
