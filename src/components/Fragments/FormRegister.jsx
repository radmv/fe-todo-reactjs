import { useState } from "react";
import { register } from "../../services/auth.service";
import { Button, InputForm } from "../Elements";

const FormRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
    };

    register(data, (status) => {
      if (status) {
        window.location.replace("/");
      } else {
        window.location.reload();
      }
    });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <InputForm
        label="Name"
        type="text"
        placeholder="insert your name here..."
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="********"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="********"
        name="confirmPassword"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="bg-white text-color-black w-full" type="submit">
        Register
      </Button>
    </form>
  );
};

export default FormRegister;
