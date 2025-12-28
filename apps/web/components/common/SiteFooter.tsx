import { Container } from "../base/Container";

export function SiteFooter() {
  return (
    <footer>
      <Container className="pb-10 text-xs text-black/50">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-black/10 pt-6">
          <span>© {new Date().getFullYear()} Template monorepo</span>
          <span className="text-black/40">Tema clean azul + amarelo.</span>
        </div>
      </Container>
    </footer>
  );
}
