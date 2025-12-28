import Link from "next/link";
import { Container } from "../../base/Container";

const STACK = ["Next", "Prisma", "MongoDB", "pnpm", "Turbo"];

export function StackSection() {
  return (
    <section id="stack">
      <Container className="pb-16">
        <div className="card card-pad">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-sm font-semibold">
                Stack do template
              </div>
              <div className="mt-1 text-sm text-black/60">
                Simples, moderna e pronta pra produção.
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              {STACK.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/login" className="btn btn-lg btn-outline">
              Ir para Login
            </Link>

            <Link href="/register" className="btn btn-lg btn-primary">
              Criar conta
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
