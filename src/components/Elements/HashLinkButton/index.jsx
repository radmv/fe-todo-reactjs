import { HashLink as Link } from "react-router-hash-link";

const HashLinkButton = (props) => {
  const { linkTo, children, isActive = false } = props;
  return (
    <Link
      smooth
      to={linkTo}
      className={`text-base hover:font-semibold ${
        isActive ? "font-bold scale-105" : "font-normal"
      }`}
    >
      {children}
    </Link>
  );
};

export default HashLinkButton;
