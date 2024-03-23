const Button = (props) => {
  const {
    children = "button",
    variant = "primaryBig",
    type = "button",
    onClick = () => {},
  } = props;

  const bigClassName = "text-xl px-7 py-5 ";
  const smallClassName = "text-base px-5 py-3";
  let className =
    "font-semibold text-white capitalize transition-all duration-100 ease-in-out rounded-xl focus:opacity-60 focus:outline outline-2 outline-color-primary outline-offset-2";

  switch (variant) {
    case "secondaryIconBig":
      className +=
        " bg-color-primary hover:bg-color-blue flex flex-row gap-3 items-center " +
        bigClassName;
      break;
    case "primaryBig":
      className += " bg-color-blue hover:bg-color-primary " + bigClassName;
      break;
    case "secondarySmall":
      className += " bg-color-primary hover:bg-color-blue " + smallClassName;
      break;
    default:
      break;
  }

  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
