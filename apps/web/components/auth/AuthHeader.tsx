import Link from "next/link";
import { Container } from "../base/Container";

export function AuthHeader(props: {
  rightCta?: { href: string; label: string };
}) {
  return (
    <header>
      <Container className="flex items-center justify-between py-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--primary)] text-white font-bold">
            T
          </span>
          <span className="text-sm font-semibold tracking-tight">
            Template
          </span>
        </Link>

        {props.rightCta ? (
          <Link href={props.rightCta.href} className="btn btn-md btn-outline">
            {props.rightCta.label}
          </Link>
        ) : null}
      </Container>
    </header>
  );
}
