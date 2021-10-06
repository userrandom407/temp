import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { Button } from "../../../../../../components";
import "./dropdown.scss";

const Dropdown = ({
  headerText,
  stateFunc,
  stateKey,
  state,
  formData,
  handleStateFunc,
  formSubmit,
}) => {
  const handleChange = (e) => {
    if (handleStateFunc) {
      handleStateFunc((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  return (
    <div className="dropdown">
      <div className="dropdown__container">
        <div className="dropdown__header" onClick={() => stateFunc(!state)}>
          <span className="dropdown__headerText">{headerText}</span>
          <span className="dropdown__headerIcon">
            {state ? <GoChevronUp /> : <GoChevronDown />}
          </span>
        </div>
        <div className={`dropdown__formContainer  ${state ? "active" : ""}`}>
          <form
            className={`dropdown__form ${
              stateKey === "keystore"
                ? "keystore"
                : stateKey === "mnemonic"
                ? "mnemonic"
                : "privateKey"
            }`}
            onSubmit={formSubmit}
          >
            {formData.map((data, index) => {
              if (data.type === "text" || data.type === "password") {
                return (
                  <div key={index} className="dropdown__formGroup">
                    {data.label && (
                      <label className="dropdown__formLabel">
                        {data.label}
                      </label>
                    )}
                    <input
                      type={data.type}
                      className="dropdown__formInput"
                      name={data.name}
                      placeholder={data.placeholder}
                      onChange={handleChange}
                    />
                    {data.message && (
                      <span className="dropdown__formMessage">
                        {data.message}
                      </span>
                    )}
                  </div>
                );
              }

              if (data.type === "submit") {
                return (
                  <div key={index} className="dropdown__formGroup">
                    <Button label={data.label} type={data.type} />
                  </div>
                );
              }

              return null;
            })}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
