import { Container } from "../../base/Container";

type Feature = {
  title: string;
  desc: string;
};

const FEATURES: Feature[] = [
  {
    title: "Padrão visual",
    desc: "Cards, botões e espaçamento consistentes.",
  },
  {
    title: "Scripts prontos",
    desc: "db:generate, db:push, db:studio via env do web.",
  },
  {
    title: "Monorepo organizado",
    desc: "db/config/ui separados para reaproveitar em novos projetos.",
  },
];

export function FeatureGrid() {
  return (
    <section id="features">
      <Container className="py-10">
        <h2 className="text-2xl font-semibold tracking-tight">
          Recursos essenciais
        </h2>

        <p className="mt-2 text-sm text-black/60">
          O mínimo para começar rápido — e crescer sem refatorar tudo.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="card card-pad">
              <div className="text-sm font-semibold">
                {feature.title}
              </div>

              <div className="mt-2 text-sm text-black/60">
                {feature.desc}
              </div>

              <div className="mt-4 h-1 w-10 rounded-full bg-black/10" />

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="chip">clean</span>
                <span className="chip">reutilizável</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
