import "./button.scss";

const Button = ({
  label,
  onClick,
  onRoute,
  white,
  type = "button",
  outline,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }

    if (onRoute) {
      return onRoute(label);
    }

    return null;
  };
  return (
    <button
      type={type}
      className={`button ${white ? "white" : ""} ${
        outline ? "button--outline" : ""
      }`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
