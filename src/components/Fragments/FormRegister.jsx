import { Button, InputForm } from "../Elements";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        placeholder="insert your name here..."
        name="fullname"
      />
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
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="********"
        name="confirmPassword"
      />
      <Button variant="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
