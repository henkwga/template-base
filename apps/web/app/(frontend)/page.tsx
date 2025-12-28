// apps/web/app/(frontend)/page.tsx
import { headers } from "next/headers";
import { auth } from "@/lib/auth/server";

import { BackgroundDecor } from "@components/common/BackgroundDecor";
import { SiteFooter } from "@components/common/SiteFooter";
import { HomeHero } from "@components/common/home/HomeHero";
import { FeatureGrid } from "@components/common/home/FeatureGrid";
import { StackSection } from "@components/common/home/StackSection";

export default async function Home() {
  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <BackgroundDecor />



      <HomeHero />
      <FeatureGrid />
      <StackSection />
      <SiteFooter />
    </main>
  );
}
