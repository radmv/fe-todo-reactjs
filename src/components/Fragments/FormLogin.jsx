import { Button, InputForm } from "../Elements";

const FormLogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("login success");
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <Button variant="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
