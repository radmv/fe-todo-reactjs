const Button = (props) => {
  const {
    children = "button",
    variant = "primaryBig",
    type = "button",
    onClick = () => {},
  } = props;

  return (
    <button
      className={`text-white bg-blue-700 hover:opacity-80 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ${variant}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
