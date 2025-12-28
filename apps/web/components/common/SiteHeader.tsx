import Link from "next/link";
import { Container } from "../base/Container";

type NavItem = { href: string; label: string };

export function SiteHeader(props: {
  nav?: NavItem[];
  cta?: { href: string; label: string; variant?: "primary" | "outline" };
}) {
  const { nav = [], cta } = props;

  const ctaClass = `btn btn-md ${cta?.variant === "outline" ? "btn-outline" : "btn-primary"}`;

  return (
    <header>
      <Container className="flex items-center justify-between py-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--primary)] text-white font-bold">
            T
          </span>
          <span className="text-sm font-semibold tracking-tight">Template</span>
        </Link>

        <nav className="hidden items-center gap-2 sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              className="rounded-lg px-3 py-2 text-sm text-black/70 hover:bg-black/5 hover:text-black"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}

          {cta ? (
            <Link href={cta.href} className={ctaClass}>
              {cta.label}
            </Link>
          ) : null}
        </nav>

        {cta ? (
          <Link href={cta.href} className={`sm:hidden ${ctaClass}`}>
            {cta.label}
          </Link>
        ) : null}
      </Container>
    </header>
  );
}
