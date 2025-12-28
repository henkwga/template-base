import { BackgroundDecor } from "@components/common/BackgroundDecor";
import { SiteHeader } from "@components/common/SiteHeader";
import { SiteFooter } from "@components/common/SiteFooter";
import { HomeHero } from "@components/common/home/HomeHero";
import { FeatureGrid } from "@components/common/home/FeatureGrid";
import { StackSection } from "@components/common/home/StackSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <BackgroundDecor />

      <SiteHeader
        nav={[
          { href: "#features", label: "Recursos" },
          { href: "#stack", label: "Stack" },
          { href: "/login", label: "Login" },
        ]}
        cta={{ href: "/register", label: "Começar", variant: "primary" }}
      />

      <HomeHero />
      <FeatureGrid />
      <StackSection />
      <SiteFooter />
    </main>
  );
}
