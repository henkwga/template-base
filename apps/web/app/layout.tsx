import "./globals.css";
import { headers } from "next/headers";
import { auth } from "@/lib/auth/server"; // ajuste o import
import { SiteHeader } from "@components/common/SiteHeader";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <html lang="pt-BR">
      <body>
        <SiteHeader
          initialSession={session}
          nav={[
            { href: "/#features", label: "Recursos" },
            { href: "/#stack", label: "Stack" },
          ]}
          cta={{ href: "/register", label: "Começar", variant: "primary" }}
        />
        {children}
      </body>
    </html>
  );
}
