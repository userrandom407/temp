import { Link } from "react-router-dom";
import "./linkTag.scss";

const LinkTag = ({ to = "/", label, externalLink, btn, outline }) => {
  return (
    <Link
      className={`linkTag ${btn && "btn"} 
        ${outline && "outline"}`}
      to={externalLink ? { pathname: externalLink } : to}
      target={externalLink ? "_blank" : "_self"}
    >
      {label}
    </Link>
  );
};

export default LinkTag;
