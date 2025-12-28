import Link from "next/link";
import { Container } from "../../base/Container";

export function HomeHero() {
  return (
    <section>
      <Container className="pb-10 pt-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="badge">
              <span className="badge-dot" />
              MongoDB online + Prisma + Next (monorepo)
            </div>

            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Um monorepo enxuto para criar sites completos, rápido.
            </h1>

            <p className="mt-4 text-pretty text-base leading-relaxed text-black/70">
              Padrão de layout, UI e estrutura para você reaproveitar em qualquer projeto.
              Banco online, scripts prontos e uma base limpa para evoluir com autenticação e dashboard.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link href="/register" className="btn btn-lg btn-primary">
                Criar conta
              </Link>

              <Link href="#features" className="btn btn-lg btn-outline">
                Ver recursos
              </Link>

              <div className="ml-1 flex items-center gap-2 text-xs text-black/50">
                <span className="chip">pnpm dev</span>
                <span className="chip">pnpm db:studio</span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 sm:max-w-md">
              {[
                { label: "Consistência", value: "UI" },
                { label: "Velocidade", value: "DX" },
                { label: "Escala", value: "Monorepo" },
              ].map((item) => (
                <div key={item.label} className="card card-pad">
                  <div className="text-xs text-black/50">{item.label}</div>
                  <div className="mt-1 text-sm font-semibold">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card card-pad">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold">Projeto exemplo</div>
                <div className="mt-1 text-xs text-black/50">Base pronta para evoluir</div>
              </div>
              <span className="chip">v0.1</span>
            </div>

            <div className="mt-6 grid gap-3">
              {[
                { title: "Home estilizada", desc: "Layout e tipografia consistentes para todo o template." },
                { title: "DB package", desc: "Prisma centralizado em packages/db (sem Docker)." },
                { title: "Health check", desc: "Rota para validar conexão e infra rapidamente." },
              ].map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-black/10 bg-white p-4 transition hover:bg-black/5"
                >
                  <div className="text-sm font-semibold">{f.title}</div>
                  <div className="mt-1 text-sm text-black/60">{f.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-[var(--primary)] p-4 text-white">
              <div className="text-sm font-semibold">Próximo passo</div>
              <div className="mt-1 text-sm text-white/80">
                Autenticação + área logada + componentes do UI kit.
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {["login", "register", "middleware", "dashboard"].map((t) => (
                  <span key={t} className="rounded-full bg-white/15 px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
