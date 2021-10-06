import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// import { FiChevronDown } from "react-icons/fi";
import "./navLinkTag.scss";

const NavLinkTag = ({ to, label, noArrow }) => {
  return (
    <NavLink className="navLinkTag" to={to ? to : "/"}>
      <span className="navLinkTag__label">{label}</span>
      {/* {!noArrow ? <FiChevronDown className="navLinkTag__arrow" /> : ""} */}
    </NavLink>
  );
};

NavLinkTag.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string,
};

export default NavLinkTag;
