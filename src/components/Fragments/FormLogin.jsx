import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";
import { Button, InputForm } from "../Elements";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        const { name, email, avatar } = res.user;
        const token = res.token;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("avatar", avatar);
        localStorage.setItem("token", token);

        window.location.href = "/dashboard";
      } else {
        const error = res.response.data;
        setLoginFailed(error.message || error.error);
        // console.log(error);
      }
    });
  };

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
        ref={emailRef}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="********"
        name="password"
      />
      <Button variant="bg-white w-full text-color-black" type="submit">
        Login
      </Button>
      {loginFailed && (
        <p className="mt-1 text-xs text-center text-red-500">{loginFailed}</p>
      )}
    </form>
  );
};

export default FormLogin;
