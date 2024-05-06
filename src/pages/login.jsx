import { useEffect } from "react";
import { AuthLayout, FormLogin } from "../components";

const LoginPage = () => {
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      window.location.replace("/dashboard");
    }
  }, []);

  return (
    <AuthLayout title="Login" type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
