import { ReactNode } from "react";
import { BackgroundDecor } from "../common/BackgroundDecor";

type AuthLayoutProps = {
  children: ReactNode;
  rightCta?: {
    href: string;
    label: string;
  };
};

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="min-h-screen auth-background">
      <BackgroundDecor />


      <section className="container flex min-h-[calc(100vh-96px)] items-center justify-center pb-16">
        <div className="w-full max-w-md">{children}</div>
      </section>
    </main>
  );
}
