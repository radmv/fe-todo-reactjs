import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xs">
        <h1 className="mb-2 text-3xl font-bold text-white">{title}</h1>
        <p className="mb-8 font-medium text-color-text-input">
          Welcome, Please enter your details
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="mt-5 text-sm text-center text-color-text-input">
        Don{"'"}t have an account?{" "}
        <Link to="/register" className="font-bold text-white">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="mt-5 text-sm text-center text-color-text-input">
        Already have an account?{" "}
        <Link to="/" className="font-bold text-white">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
