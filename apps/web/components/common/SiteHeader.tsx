"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Container } from "../base/Container";
import { authClient } from "../../lib/auth/client";

type NavItem = { href: string; label: string };

type SessionShape =
  | null
  | {
      user?: {
        name?: string | null;
        email?: string | null;
      } | null;
    };

export function SiteHeader(props: {
  nav?: NavItem[];
  cta?: { href: string; label: string; variant?: "primary" | "outline" };
  initialSession?: SessionShape;
}) {
  const { nav = [], cta, initialSession = null } = props;
  const router = useRouter();

  const ctaClass = `btn btn-md ${
    cta?.variant === "outline" ? "btn-outline" : "btn-primary"
  }`;

  const { data: session, isPending } = authClient.useSession();

  // server -> client fallback (evita flicker)
  const s = (session ?? initialSession) as SessionShape;

  const isLogged = !!s?.user;
  const displayName = s?.user?.name ?? s?.user?.email ?? "usuário";

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

          {isLogged ? (
            <>
              <span className="px-3 py-2 text-sm text-black/70">
                Olá, <span className="font-medium text-black">{displayName}</span>!
              </span>

              <button
                className="btn btn-md btn-outline"
                onClick={async () => {
                  await authClient.signOut();
                  router.refresh();
                }}
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <Link
                className={`btn btn-md btn-outline ${isPending ? "opacity-60 pointer-events-none" : ""}`}
                href="/login"
              >
                Entrar
              </Link>

              {cta ? (
                <Link
                  href={cta.href}
                  className={`${ctaClass} ${isPending ? "opacity-60 pointer-events-none" : ""}`}
                >
                  {cta.label}
                </Link>
              ) : (
                <Link
                  href="/register"
                  className={`btn btn-md btn-primary ${isPending ? "opacity-60 pointer-events-none" : ""}`}
                >
                  Começar
                </Link>
              )}
            </>
          )}
        </nav>

        {/* Mobile */}
        <div className="sm:hidden">
          {isLogged ? (
            <button
              className="btn btn-md btn-outline"
              onClick={async () => {
                await authClient.signOut();
                router.refresh();
              }}
            >
              Sair
            </button>
          ) : cta ? (
            <Link
              href={cta.href}
              className={`${ctaClass} ${isPending ? "opacity-60 pointer-events-none" : ""}`}
            >
              {cta.label}
            </Link>
          ) : (
            <Link
              href="/login"
              className={`btn btn-md btn-primary ${isPending ? "opacity-60 pointer-events-none" : ""}`}
            >
              Entrar
            </Link>
          )}
        </div>
      </Container>
    </header>
  );
}
