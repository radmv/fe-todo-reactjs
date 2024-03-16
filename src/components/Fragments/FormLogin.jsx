import { Button, InputForm } from "../Elements";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="********"
        name="password"
      />
      <Button variant="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
