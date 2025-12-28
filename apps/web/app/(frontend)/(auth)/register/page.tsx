import { AuthLayout } from "@components/auth";
import { RegisterForm } from "./_components/RegisterForm";


export default function RegisterPage() {
  return (
    <AuthLayout
      rightCta={{ href: "/login", label: "Login" }}
    >
      <RegisterForm />
    </AuthLayout>
  );
}
