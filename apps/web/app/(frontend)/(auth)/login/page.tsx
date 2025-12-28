import { AuthLayout } from "@components/auth";
import { LoginForm } from "./_components/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout
      rightCta={{ href: "/register", label: "Criar conta" }}
    >
      <LoginForm />
    </AuthLayout>
  );
}
