import { useHistory } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const history = useHistory();
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__brand" onClick={() => history.push("/")}>
          Umbrelchain
        </div>
      </div>
    </header>
  );
};

export default Header;
