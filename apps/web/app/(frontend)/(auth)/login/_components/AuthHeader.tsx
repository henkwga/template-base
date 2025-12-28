import Link from "next/link";

export function AuthHeader(props: { rightCtaHref: string; rightCtaLabel: string }) {
  return (
    <header className="container flex items-center justify-between py-6">
      <Link href="/" className="flex items-center gap-2">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--primary)] text-white font-bold">
          T
        </span>
        <span className="text-sm font-semibold tracking-tight">Template</span>
      </Link>

      <Link href={props.rightCtaHref} className="btn btn-md btn-outline">
        {props.rightCtaLabel}
      </Link>
    </header>
  );
}
