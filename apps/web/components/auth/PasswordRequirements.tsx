export function PasswordRequirements() {
  const items = ["Mínimo de 8 caracteres", "Uma letra maiúscula", "Um número"];

  return (
    <div className="mt-4 rounded-2xl border border-black/10 bg-white p-4">
      <div className="text-sm font-semibold">Requisitos da senha</div>
      <ul className="mt-2 grid gap-1 text-sm text-black/60">
        {items.map((t) => (
          <li key={t} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
